package com.bjcxx.kkm.ui.custom;

import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.BitmapRegionDecoder;
import android.graphics.Canvas;
import android.graphics.Matrix;
import android.graphics.Rect;
import android.util.AttributeSet;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.GestureDetector;
import android.view.MotionEvent;
import android.view.View;
import android.view.WindowManager;
import android.widget.Scroller;

import java.io.IOException;
import java.io.InputStream;

import androidx.annotation.Nullable;

/**
 * @author: xuecq
 * @date: 19-10-25 16:27
 * @describe: ${des}
 */
public class BigView extends View implements GestureDetector.OnGestureListener, View.OnTouchListener {

    private Scroller mScroller;
    private Rect mRect;
    private BitmapFactory.Options mOptions;
    private GestureDetector mGresureDetector;
    private int mImageWight, mImageHeight;
    private BitmapRegionDecoder mDecoder;
    private int mViewWidth, mViewHeight;
    private float mScale;
    private Bitmap bitmap;
    private int width;
    private int height;
    private Context context;
    private Class<?> cls;
    private float maxX;
    private float minX;
    private float maxY;
    private float minY;

    public BigView(Context context) {
        this(context, null, 0);
    }

    public BigView(Context context, @Nullable AttributeSet attrs) {
        this(context, attrs, 0);
    }

    public BigView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        this.context = context;
        //指定区域
        mRect = new Rect();
        //需要复用
        mOptions = new BitmapFactory.Options();
        //手势识别类
        mGresureDetector = new GestureDetector(context, this);
        //设置onTouchListener
        setOnTouchListener(this);
        //滑动帮助
        mScroller = new Scroller(context);
        WindowManager wm = (WindowManager) context.getSystemService(Context.WINDOW_SERVICE);
        DisplayMetrics dm = new DisplayMetrics();
        wm.getDefaultDisplay().getMetrics(dm);
        width = dm.widthPixels;         // 屏幕宽度（像素）
        height = dm.heightPixels;
    }

    public void setRect(float minX, float maxX, float minY, float maxY){
        this.minX = minX;
        this.maxX = maxX;
        this.minY = minY;
        this.maxY = maxY;
    }

    /**
     * 由使用者输入一张图片
     *
     * @param is
     * @return
     */
    public void setImage(InputStream is,Class<?> cls) {
        this.cls = cls;
        //先读取原图片的信息  宽、高
        mOptions.inJustDecodeBounds = true;
        BitmapFactory.decodeStream(is, null, mOptions);
        mImageWight = mOptions.outWidth;
        mImageHeight = mOptions.outHeight;

        //开启复用
        mOptions.inMutable = true;
        //设置格式成RBG_565，因为565 存储像素点占用内存小，一个像素点只需要两个字节
        mOptions.inPreferredConfig = Bitmap.Config.RGB_565;

        mOptions.inJustDecodeBounds = false;

        //创建一个区域解码器
        try {
            mDecoder = BitmapRegionDecoder.newInstance(is, false);

        } catch (IOException e) {
            e.printStackTrace();
        }

        requestLayout();
    }

    /**
     * 在测量的时候把我们需要的内存区域获取到  存入到mRect中
     *
     * @param
     * @return
     */
    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
        //获取测量的view的大小
        mViewWidth = getMeasuredWidth();
        mViewHeight = getMeasuredHeight();
        //如果解码器拿不到，表示没有设置过要显示的图片
        if (null == mDecoder) {
            return;
        }
        //确定要加载的图片的区域
        mRect.left = 0;
        mRect.top = 0;
        mRect.right = mImageWight;
        //获取一个缩放比例
        mScale = mViewWidth / (float) mImageWight;

        //高度就根据缩放比进行获取
        mRect.bottom = (int) (mViewHeight / mScale);

    }

    /**
     * 画出内容
     *
     * @param
     * @return
     */
    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        //如果解码器拿不到，表示没有设置过要显示的图片
        if (null == mDecoder) {
            return;
        }
        //复用上一张bitmao
        mOptions.inBitmap = bitmap;

        //解码指定区域
        bitmap = mDecoder.decodeRegion(mRect, mOptions);
        //把得到的矩阵大小的内存进行缩放
        Matrix matrix = new Matrix();
        matrix.setScale(mScale, mScale);
        //画出来
        canvas.drawBitmap(bitmap, matrix, null);
    }


    /**
     * 手按下的回调
     *
     * @param e
     * @return
     */
    @Override
    public boolean onDown(MotionEvent e) {
        //如果移动还没有停止，强制停止
        if (!mScroller.isFinished()) {
            mScroller.forceFinished(true);
        }
        //继续接受后续事件
        return true;
    }

    /**
     * @param e1        手势按下去的事件   开始获取坐标
     * @param e2        当前手势事件   获取当前坐标
     * @param distanceX x方向移动的距离
     * @param distanceY y方向移动的距离
     * @return
     */
    @Override
    public boolean onScroll(MotionEvent e1, MotionEvent e2, float distanceX, float distanceY) {
        //上下移动的时候，需要改变显示的区域  改mRect
        mRect.offset(0, (int) distanceY);
        //处理移动时已经移到了两个顶端的问题
        if (mRect.bottom > mImageHeight) {
            mRect.bottom = mImageHeight;
            mRect.top = mImageHeight - (int) (mViewHeight / mScale);
        }
        if (mRect.top < 0) {
            mRect.top = 0;
            mRect.bottom = (int) (mViewHeight / mScale);
        }
        invalidate();

        return false;
    }

    /**
     * 处理惯性问题
     *
     * @param e1
     * @param e2
     * @param velocityX 每秒移动的x点
     * @param velocityY
     * @return
     */
    @Override
    public boolean onFling(MotionEvent e1, MotionEvent e2, float velocityX, float velocityY) {

        //做计算  -velocityY  正负号问题，相反的
        // ( 按下手指不拿开，屏幕跟着手势方向，若松开，方向则向相反方向滑动 ) 故 使用 负值才能正常使用
        mScroller.fling(0, mRect.top, 0, (int) -velocityY, 0, 0, 0,
                mImageHeight - (int) (mViewHeight / mScale));

        return false;
    }

    /**
     * 使用上一个接口的计算结果
     */
    @Override
    public void computeScroll() {
        if (mScroller.isFinished()) {
            return;
        }
        //true 表示当前滑动还没有结束
        if (mScroller.computeScrollOffset()) {
            mRect.top = mScroller.getCurrY();
            mRect.bottom = mRect.top + (int) (mViewHeight / mScale);
            invalidate();
        }
    }

    @Override
    public void onShowPress(MotionEvent e) {

    }

    @Override
    public boolean onSingleTapUp(MotionEvent e) {
        // 获取触摸点的坐标 x, y
        float x = e.getX();
        float y = e.getY();
        float perX = x/width;
        float perY = y/height;
        Log.i("xuecq0830", "dstX:" + x + "+++ dstY" + y);
        if ((maxX >= perX && perX >= minX)&&(maxY >= perY && perY >= minY)) {//头部
            Log.i("xuecq0830", "点击了头部");
            if(cls != null){
                Intent intent = new Intent(context,cls);
                context.startActivity(intent);
            }
            return true;
        }
        return false;
    }


    @Override
    public void onLongPress(MotionEvent e) {

    }

    @Override
    public boolean onTouch(View v, MotionEvent event) {
        //交给手势处理
        return mGresureDetector.onTouchEvent(event);
    }
}

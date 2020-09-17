package com.bjcxx.kkm.ui.custom;

import android.content.Context;
import android.content.res.TypedArray;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;


import com.bjcxx.kkm.R;
import com.bjcxx.kkm.ui.base.BaseActivity;

import butterknife.BindView;
import butterknife.ButterKnife;

public class TitleBarView extends RelativeLayout {

    public static final int TITLE_BAR_TYPE_COMMON = 0;

    public static final int TITLE_BAR_TYPE_RIGHT_TEXT = 1;

    public static final int TITLE_BAR_TYPE_RIGHT_IMAGE = 2;

    public static final int TITLE_BAR_TYPE_RIGHT_2_IMAGE = 3;

    @BindView(R.id.img_title_bar_back)
    ImageView imgBack;

    @BindView(R.id.img_title_del_back)
    ImageView delBack;

    @BindView(R.id.tv_title_bar_title)
    TextView tvTitle;

    @BindView(R.id.img_title_bar_right1)
    ImageView imgRight1;

    @BindView(R.id.tv_title_bar_right)
    TextView tvRight;

    @BindView(R.id.img_title_bar_right2)
    ImageView imgRight2;

    @BindView(R.id.view_line)
    View viewLine;

    @BindView(R.id.tv_title_bar_back)
    TextView tvTitleBarBack;

    private Context context;

    public TitleBarView(Context context) {
        this(context, null);
    }

    public TitleBarView(Context context, AttributeSet attrs) {
        super(context, attrs);

        this.context = context;

        LayoutInflater.from(context).inflate(R.layout.view_title_bar, this, true);

        ButterKnife.bind(this);

        setClickable(true);
        setBackground(getResources().getDrawable(R.color.color_ffffff));
        final TypedArray a = context.obtainStyledAttributes(attrs, R.styleable.TitleBarView);
        int type = a.getInt(R.styleable.TitleBarView_bar_type, TITLE_BAR_TYPE_COMMON);
        String title = a.getString(R.styleable.TitleBarView_bar_title);
        boolean haveBack = a.getBoolean(R.styleable.TitleBarView_bar_have_back, true);
        a.recycle();

        initView(type, title, haveBack);
    }

    public void initView(int barType, String title, boolean haveBack) {
        switch (barType) {
        /* 右边文字 */
        case TITLE_BAR_TYPE_RIGHT_TEXT:
            imgRight1.setVisibility(GONE);
            imgRight2.setVisibility(GONE);
            tvRight.setVisibility(VISIBLE);
            delBack.setVisibility(GONE);
            break;

        /* 右边一张图片 */
        case TITLE_BAR_TYPE_RIGHT_IMAGE:
            tvRight.setVisibility(GONE);
            imgRight1.setVisibility(GONE);
            imgRight2.setVisibility(VISIBLE);
            delBack.setVisibility(VISIBLE);
            break;

        /* 右边两张图片 */
        case TITLE_BAR_TYPE_RIGHT_2_IMAGE:
            tvRight.setVisibility(GONE);
            imgRight1.setVisibility(VISIBLE);
            delBack.setVisibility(GONE);
            imgRight2.setVisibility(VISIBLE);
            break;

        /* 普通标题 */
        case TITLE_BAR_TYPE_COMMON:
            imgRight1.setVisibility(GONE);
            imgRight2.setVisibility(GONE);
            tvRight.setVisibility(GONE);
            delBack.setVisibility(GONE);
        default:
            break;
        }
        tvTitle.setText(title);
        imgBack.setVisibility(haveBack ? VISIBLE : GONE);
        imgBack.setOnClickListener(backClickListener);
        delBack.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                if (context instanceof BaseActivity) {
                    BaseActivity activity = (BaseActivity) context;
                if(activity != null){
                    activity.finish();
                }}
            }
        });
        tvTitleBarBack.setVisibility(haveBack ? VISIBLE : GONE);
        tvTitleBarBack.setOnClickListener(backClickListener);

    }

    public ImageView getImgBack() {
        return imgBack;
    }

    public TextView getTvTitle() {
        return tvTitle;
    }

    public ImageView getImgRight1() {
        return imgRight1;
    }

    public ImageView getImgRight2() {
        return imgRight2;
    }

    public TextView getTvRight() {
        return tvRight;
    }

    public View getViewLine() {
        return viewLine;
    }

    /**
     * 设置title
     *
     * @param title
     */
    public void setTitle(String title) {
        tvTitle.setText(title);
    }

    public void haveBack(boolean haveBack) {
        if (haveBack) {
            imgBack.setVisibility(VISIBLE);
            tvTitleBarBack.setVisibility(VISIBLE);
        } else {
            imgBack.setVisibility(GONE);
            tvTitleBarBack.setVisibility(GONE);
        }
    }

    /**
     * 隐藏返回键
     */
    public void hideBackButton() {
        imgBack.setVisibility(View.GONE);
        tvTitleBarBack.setVisibility(GONE);
    }

    /**
     * 设置TitleBarView下面的线是否可见
     *
     * @param visible
     */
    public void setViewLineVisible(int visible) {
        viewLine.setVisibility(visible);
    }

    /**
     * 隐藏线
     */
    public void hideLine() {
        viewLine.setVisibility(View.GONE);
    }

    /**
     * 隐藏线
     */
    public void hideDel() {
        delBack.setVisibility(View.GONE);
    }

    private OnClickListener backClickListener = new OnClickListener() {
        @Override
        public void onClick(View v) {
            if (context instanceof BaseActivity) {
                BaseActivity activity = (BaseActivity) context;
                InputMethodManager inputMethodManager = (InputMethodManager) activity
                        .getSystemService(Context.INPUT_METHOD_SERVICE);
                if (inputMethodManager != null && activity.getCurrentFocus() != null) {
                    inputMethodManager.hideSoftInputFromWindow(
                            activity.getCurrentFocus().getWindowToken(),
                            InputMethodManager.HIDE_NOT_ALWAYS);
                }
                activity.finish();
            }
        }
    };

}
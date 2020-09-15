package com.bjcxx.kkm.ui.base;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.pm.ActivityInfo;
import android.os.Bundle;
import android.os.IBinder;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.EditText;
import android.widget.FrameLayout;
import android.widget.LinearLayout;


import com.bjcxx.kkm.R;
import com.bjcxx.kkm.ui.custom.TitleBarView;

import java.util.ArrayList;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;


public abstract class BaseActivity extends AppCompatActivity {

    private static boolean isCheckNotch;
    TitleBarView titleBarBase;
    FrameLayout flBaseContent;
    LinearLayout llParent;
//    private ImmersionBar mImmersionBar;
    private static ArrayList<Activity> mActivities;
    private static final int MIN_DELAY_TIME = 800; // 两次点击间隔不能少于1000ms
    private static long lastClickTime;

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
//        mImmersionBar = ImmersionBar.with(this);
//        mImmersionBar.statusBarDarkFont(false).init();
//        getWindow().getDecorView().setSystemUiVisibility(View
//                .SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);
        View rootView = LayoutInflater.from(this).inflate(R.layout.activity_base, null);
        titleBarBase = rootView.findViewById(R.id.titleBar_base);
        flBaseContent = rootView.findViewById(R.id.fl_base_content);
        llParent = rootView.findViewById(R.id.ll_parent);
        View contentView = LayoutInflater.from(this).inflate(getLayoutId(), flBaseContent, true);
        setContentView(rootView);
        Intent intent = getIntent();
        if (intent != null) handleIntent(intent);
        initTitle();
        initView(contentView, savedInstanceState);
        mActivities = new ArrayList<>();
        pushActivity(this);
    }

    @Override
    protected void onDestroy() {
        popActivity(this);
        super.onDestroy();
    }

    /**
     * 初始化标题栏
     */
    private void initTitle() {
        if (haveTitleBar()) {
            titleBarBase.initView(getTitleType(), getActivityTitle(), haveBackFromTitleBar());
        } else {
            titleBarBase.setVisibility(View.GONE);
        }
    }

    /**
     * layout资源id
     *
     * @return
     */
    public abstract int getLayoutId();

    /**
     * 处理传参
     *
     * @param intent
     */
    public abstract void handleIntent(Intent intent);

    /**
     * 初始化View
     *
     * @param view
     * @param bundle
     */
    public abstract void initView(View view, Bundle bundle);

    /**
     * 是否显示标题栏
     *
     * @return
     */
    protected boolean haveTitleBar() {
        return true;
    }

    /**
     * 标题栏是否有返回键
     *
     * @return
     */
    protected boolean haveBackFromTitleBar() {
        return true;
    }

    /**
     * 标题
     *
     * @return
     */
    protected String getActivityTitle() {
        return getString(R.string.app_name);
    }

    /**
     * 标题栏类型
     *
     * @return
     */
    protected int getTitleType() {
        return TitleBarView.TITLE_BAR_TYPE_COMMON;
    }

    /**
     * 返回TitleBarView
     *
     * @return
     */
    protected TitleBarView getTitleBarView() {
        return titleBarBase;
    }

    public FrameLayout getFlBaseContent() {
        return flBaseContent;
    }

    public LinearLayout getLlParent() {
        return llParent;
    }


    /**
     * 获取InputMethodManager，隐藏软键盘
     *
     * @param token
     */
    public void hideKeyboard(IBinder token) {
        if (token != null) {
            InputMethodManager im = (InputMethodManager) getSystemService(Context.INPUT_METHOD_SERVICE);
            im.hideSoftInputFromWindow(token, InputMethodManager.HIDE_NOT_ALWAYS);
        }
    }

    /**
     * 根据EditText所在坐标和用户点击的坐标相对比，来判断是否隐藏键盘，因为当用户点击EditText时则不能隐藏
     */
    private boolean isShouldHideKeyboard(View v, MotionEvent event) {
        if (v != null && (v instanceof EditText)) {
            int[] l = {0, 0};
            v.getLocationInWindow(l);
            int left = l[0],
                    top = l[1],
                    bottom = top + v.getHeight(),
                    right = left + v.getWidth();
            if (event.getX() > left && event.getX() < right
                    && event.getY() > top && event.getY() < bottom) {
                // 点击EditText的事件，忽略它。
                return false;
            } else {
                return true;
            }
        }
        // 如果焦点不是EditText则忽略，这个发生在视图刚绘制完，第一个焦点不在EditText上，和用户用轨迹球选择其他的焦点
        return false;
    }

    @Override
    protected void onPause() {
        super.onPause();
    }

    @Override
    public void finish() {
        super.finish();
    }

    public static boolean isFastClick() {
        boolean flag = true;
        long currentClickTime = System.currentTimeMillis();
        if ((currentClickTime - lastClickTime) >= MIN_DELAY_TIME) {
            flag = false;
        }
        lastClickTime = currentClickTime;
        return flag;
    }
    public static void pushActivity(Activity activity) {
        mActivities.add(activity);
    }

    public static void popActivity(Activity activity) {
        if (mActivities.contains(activity)) {
            activity.finish();
            mActivities.remove(activity);
        }
    }

    public static void popAllActivity() {
        try {
            for (Activity activity : mActivities) {
                if (activity != null) {
                    activity.finish();
                }
            }
            mActivities.clear();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }


}

package com.bjcxx.kkm.ui.utils;

import android.text.TextUtils;
import android.view.Gravity;
import android.widget.Toast;


import com.bjcxx.kkm.R;
import com.bjcxx.kkm.ui.base.BaseApplication;

import androidx.annotation.StringRes;

public class ToastUtil {

    private static CharSequence oldMsg = "";

    private static int oldStringId = 0;

    public static Toast toast;

    private static long oneTime = 0;

    private static long twoTime = 0;

    private static int toast_default_y = 0;

    public static void show(CharSequence msg, int duration) {
        if (TextUtils.isEmpty(msg)) {
            return;
        }
        if (toast_default_y == 0) {
            // com.android.internal.R.dimen.toast_y_offset
            toast_default_y = UIUtil.dip2px(24) + BaseApplication.getInstance().getResources()
                    .getDimensionPixelSize(R.dimen.tab_layout_height);
        }
        if (toast == null) {
            toast = Toast.makeText(BaseApplication.getInstance(), msg, duration);
            try {
                toast.show();
            } catch (Exception e) {

            }
            oneTime = System.currentTimeMillis();
        } else {
            toast.setGravity(Gravity.CENTER_HORIZONTAL | Gravity.BOTTOM, 0, toast_default_y);
            twoTime = System.currentTimeMillis();
            if (TextUtils.equals(msg, oldMsg)) {
                if (twoTime - oneTime > Toast.LENGTH_SHORT) {
                    try {
                        toast.show();
                    } catch (Exception e) {

                    }
                }
            } else {
                oldMsg = msg;
                toast.setText(msg);
                try {
                    toast.show();
                } catch (Exception e) {

                }
            }
        }
        oneTime = twoTime;
    }

    public static void showCenter(CharSequence msg, int duration) {
        if (TextUtils.isEmpty(msg)) {
            return;
        }
        if (toast == null) {
            toast = Toast.makeText(BaseApplication.getInstance(), msg, duration);
            toast.setGravity(Gravity.CENTER, 0, 0);
            try {
                toast.show();
            } catch (Exception e) {

            }
            oneTime = System.currentTimeMillis();
        } else {
            toast.setGravity(Gravity.CENTER, 0, 0);
            toast.setText(msg);
            twoTime = System.currentTimeMillis();
            if (TextUtils.equals(msg, oldMsg)) {
                if (twoTime - oneTime > Toast.LENGTH_SHORT) {
                    try {
                        toast.show();
                    } catch (Exception e) {

                    }
                }
            } else {
                oldMsg = msg;
                toast.setText(msg);
                try {
                    toast.show();
                } catch (Exception e) {

                }
            }
        }
        oneTime = twoTime;
    }

    public static void show(CharSequence msg) {
        show(msg, Toast.LENGTH_SHORT);
    }

    public static void showCenter(CharSequence msg) {
        showCenter(msg, Toast.LENGTH_SHORT);
    }

    public static void show(@StringRes int stringId) {
        show(BaseApplication.getInstance().getString(stringId), Toast.LENGTH_SHORT);
    }

    public static void showCenter(@StringRes int stringId) {
        showCenter(BaseApplication.getInstance().getString(stringId), Toast.LENGTH_SHORT);
    }

    public static void show(@StringRes int stringId, int duration) {
        show(BaseApplication.getInstance().getString(stringId), duration);
    }

    public static void showCenter(@StringRes int stringId, int duration) {
        showCenter(BaseApplication.getInstance().getString(stringId), duration);
    }

}

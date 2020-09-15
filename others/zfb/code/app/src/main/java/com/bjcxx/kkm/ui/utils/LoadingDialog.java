package com.bjcxx.kkm.ui.utils;


import android.app.Dialog;
import android.content.Context;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.bjcxx.kkm.R;


/**
 * @author: xuecq
 * @date: 19-11-29 10:33
 * @describe: ${des}
 */
public class LoadingDialog {

    /**
     * Create loading dialog dialog.
     *
     * @param context the context
     * @param msg the msg
     * @return the dialog
     */
    public static Dialog createLoadingDialog(Context context, String msg) {
        try {
            LayoutInflater inflater = LayoutInflater.from(context);
            View vvv = inflater.inflate(R.layout.diaglog_loading, null);// 得到加载view
            TextView tipTextView = (TextView) vvv.findViewById(R.id.tv_tip);// 提示文字
            tipTextView.setText(msg);// 设置加载信息

            Dialog loadingDialog = new Dialog(context, R.style.LoadingDialogStyle);// 创建自定义样式dialog
            loadingDialog.setCancelable(true); // 是否可以按“返回键”消失
            loadingDialog.setCanceledOnTouchOutside(false); // 点击加载框以外的区域
            LinearLayout layout = (LinearLayout) vvv.findViewById(R.id.dialog_loading_view);// 加载布局
            loadingDialog.setContentView(layout, new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT,
                    LinearLayout.LayoutParams.MATCH_PARENT));// 设置布局
            Window window = loadingDialog.getWindow();
            WindowManager.LayoutParams lp = window.getAttributes();
            lp.width = WindowManager.LayoutParams.MATCH_PARENT;
            lp.height = WindowManager.LayoutParams.WRAP_CONTENT;
            window.setGravity(Gravity.CENTER);
            window.setAttributes(lp);
            window.setWindowAnimations(R.style.PopWindowAnimStyle);
            return loadingDialog;
        } catch (Exception eee) {
            return null;
        }
    }

    /**
     * Create loading dialog dialog.
     *
     * @param context the context
     * @param msg the msg
     * @return the dialog
     */
    public static Dialog createLoadingDialog(Context context, String msg,CancelLoading cancelLoading) {
        try {
            LayoutInflater inflater = LayoutInflater.from(context);
            View vvv = inflater.inflate(R.layout.diaglog_loading, null);// 得到加载view
            TextView tipTextView = (TextView) vvv.findViewById(R.id.tv_tip);// 提示文字
            Button cancel = vvv.findViewById(R.id.btn_cancel);
            cancel.setVisibility(View.VISIBLE);
            cancel.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    cancelLoading.onCancelClickListener();
                }
            });
            tipTextView.setText(msg);// 设置加载信息

            Dialog loadingDialog = new Dialog(context, R.style.LoadingDialogStyle);// 创建自定义样式dialog
            loadingDialog.setCancelable(true); // 是否可以按“返回键”消失
            loadingDialog.setCanceledOnTouchOutside(false); // 点击加载框以外的区域
            LinearLayout layout = (LinearLayout) vvv.findViewById(R.id.dialog_loading_view);// 加载布局
            loadingDialog.setContentView(layout, new LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT,
                    LinearLayout.LayoutParams.MATCH_PARENT));// 设置布局
            Window window = loadingDialog.getWindow();
            WindowManager.LayoutParams lp = window.getAttributes();
            lp.width = WindowManager.LayoutParams.MATCH_PARENT;
            lp.height = WindowManager.LayoutParams.WRAP_CONTENT;
            window.setGravity(Gravity.CENTER);
            window.setAttributes(lp);
            window.setWindowAnimations(R.style.PopWindowAnimStyle);
            return loadingDialog;
        } catch (Exception eee) {
            return null;
        }
    }

    /**
     * Close dialog.
     *
     * @param mdialogUtils the m dialog utils
     */
    public static void closeDialog(Dialog mdialogUtils) {
        if (mdialogUtils != null && mdialogUtils.isShowing()) {
            mdialogUtils.dismiss();
        }
    }

    public interface CancelLoading{
        void onCancelClickListener();
    }
}

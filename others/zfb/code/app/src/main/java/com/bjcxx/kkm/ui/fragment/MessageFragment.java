package com.bjcxx.kkm.ui.fragment;

import android.annotation.SuppressLint;
import android.app.AlertDialog;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;

import com.bjcxx.kkm.R;
import com.bjcxx.kkm.ui.base.BaseFragment;
import com.bjcxx.kkm.ui.custom.BigView;

import java.io.IOException;
import java.io.InputStream;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.Unbinder;

/**
 * @author: xuecq
 * @date: 19-10-25 14:37
 * @describe: ${des}
 */
public class MessageFragment extends BaseFragment {


    @BindView(R.id.bigview)
    BigView bigview;
    Unbinder unbinder;
    @BindView(R.id.ll_layout)
    LinearLayout llLayout;
//    @BindView(R.id.rl_layout)
//    RelativeLayout rlLayout;

    private AlertDialog alterDialog;
    private float DownX, DownY, moveX, moveY;
    private long currentMS;

    @Override
    public int getLayoutId() {
        return R.layout.fragment_message;
    }

    @Override
    public void handleIntent(Bundle bundle) {

    }

    @SuppressLint("ClickableViewAccessibility")
    @Override
    public void initView(Bundle bundle) {
        InputStream is = null;
        try {
            //加载图片
            is = this.getResources().getAssets().open("tab_3.jpg");
            bigview.setImage(is,null);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (is != null) {
                try {
                    is.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        // TODO: inflate a fragment view
        View rootView = super.onCreateView(inflater, container, savedInstanceState);
        unbinder = ButterKnife.bind(this, rootView);
        return rootView;
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        unbinder.unbind();
    }

}

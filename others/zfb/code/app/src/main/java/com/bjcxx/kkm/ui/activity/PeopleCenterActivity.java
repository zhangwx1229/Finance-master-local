package com.bjcxx.kkm.ui.activity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.LinearLayout;

import com.bjcxx.kkm.R;
import com.bjcxx.kkm.ui.base.BaseActivity;
import com.bjcxx.kkm.ui.custom.BigView;
import com.gyf.immersionbar.ImmersionBar;
import com.jaeger.library.StatusBarUtil;

import java.io.IOException;
import java.io.InputStream;

import butterknife.BindView;
import butterknife.ButterKnife;

/**
 * @author: xuecq
 * @date: 20-8-28 18:49
 * @describe:
 */
public class PeopleCenterActivity extends BaseActivity {


    @BindView(R.id.bigview)
    BigView bigview;
    @BindView(R.id.ll_layout)
    LinearLayout llLayout;

    @Override
    public int getLayoutId() {
        return R.layout.activity_peoplecenter;
    }

    @Override
    public void handleIntent(Intent intent) {

    }

    @Override
    public void initView(View view, Bundle bundle) {

    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // TODO: add setContentView(...) invocation
        ButterKnife.bind(this);
//        getTitleBarView().setBackground(getResources().getDrawable(R.color.color_bd1d31));
//        StatusBarUtil.setColor(this,getResources().getColor(R.color.color_bd1d31));
//        getTitleBarView().setVisibility(View.GONE);
        getTitleBarView().setVisibility(View.GONE);
//        ImmersionBar.with(this).barEnable(false).statusBarColor(R.color.color_bd1d31).init();
        StatusBarUtil.setColor(this,getResources().getColor(R.color.color_bd1d31));
        InputStream is = null;
        try {
            //加载图片
            is = this.getResources().getAssets().open("people_center.jpg");
            bigview.setRect(0.58f,0.74f,0.19f,0.30f);
            bigview.setImage(is,GongjijinActivity.class);
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
}

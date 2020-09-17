package com.bjcxx.kkm.ui.activity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.bjcxx.kkm.R;
import com.bjcxx.kkm.ui.base.BaseActivity;
import com.bjcxx.kkm.ui.custom.TitleBarView;
import com.jaeger.library.StatusBarUtil;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

/**
 * @author: xuecq
 * @date: 20-8-28 18:49
 * @describe:
 */
public class ServerActivity extends BaseActivity {


    @BindView(R.id.btn_use)
    Button btnUse;

    @Override
    public int getLayoutId() {
        return R.layout.activity_server;
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
        StatusBarUtil.setColor(this,getResources().getColor(R.color.color_ffffff));
        getTitleBarView().initView(TitleBarView.TITLE_BAR_TYPE_RIGHT_IMAGE,"公积金服务",true);
        getTitleBarView().hideDel();
    }

    @OnClick(R.id.btn_use)
    public void onViewClicked() {
        Intent intent = new Intent(this, MoneyActivity.class);
        startActivity(intent);
    }
}

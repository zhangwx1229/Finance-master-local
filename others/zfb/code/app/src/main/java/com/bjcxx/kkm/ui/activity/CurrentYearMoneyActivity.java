package com.bjcxx.kkm.ui.activity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import com.bjcxx.kkm.R;
import com.bjcxx.kkm.ui.base.BaseActivity;
import com.bjcxx.kkm.ui.custom.TitleBarView;
import com.bjcxx.kkm.ui.entity.QueryMoneyEntity;
import com.bjcxx.kkm.ui.entity.ZfbData;
import com.google.gson.Gson;

import butterknife.BindView;
import butterknife.ButterKnife;

/**
 * @author: xuecq
 * @date: 20-8-28 18:49
 * @describe:
 */
public class CurrentYearMoneyActivity extends BaseActivity {


    @BindView(R.id.tv_data)
    TextView tvData;
    @BindView(R.id.tv_lastyear)
    TextView tvLastyear;
    @BindView(R.id.tv_currentyear)
    TextView tvCurrentyear;
    @BindView(R.id.tv_pull)
    TextView tvPull;
    @BindView(R.id.tv_lixi)
    TextView tvLixi;
    @BindView(R.id.tv_my)
    TextView tvMy;

    @Override
    public int getLayoutId() {
        return R.layout.activity_query_currentyear_money;
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
        getTitleBarView().initView(TitleBarView.TITLE_BAR_TYPE_RIGHT_IMAGE,"对账单查询",true);
        String str = getIntent().getStringExtra("bean");
        ZfbData.BillInfoBean entity = new Gson().fromJson(str, ZfbData.BillInfoBean.class);
        tvData.setText(entity.getDate());
        tvLastyear.setText(entity.getLastYearMoney());
        tvCurrentyear.setText(entity.getCurrentYear());
        tvPull.setText(entity.getTakeOutMoney());
        tvLixi.setText(entity.getInterest());
        tvMy.setText(entity.getTotal());
    }
}

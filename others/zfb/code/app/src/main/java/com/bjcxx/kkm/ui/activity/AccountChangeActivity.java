package com.bjcxx.kkm.ui.activity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;

import com.bjcxx.kkm.R;
import com.bjcxx.kkm.ui.base.BaseActivity;
import com.bjcxx.kkm.ui.custom.TitleBarView;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

public class AccountChangeActivity extends BaseActivity {
    @BindView(R.id.tv_company)
    TextView tvCompany;
    @BindView(R.id.tv_center)
    TextView tvCenter;

    @Override
    public int getLayoutId() {
        return R.layout.activity_account_change;
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
        getTitleBarView().initView(TitleBarView.TITLE_BAR_TYPE_RIGHT_IMAGE, "账户切换", true);

        String company = getIntent().getStringExtra("company");
        tvCompany.setText(company);
    }

    @OnClick({R.id.tv_company, R.id.tv_center})
    public void onViewClicked(View view) {
        switch (view.getId()) {
            case R.id.tv_company:
            case R.id.tv_center:
                Intent intent = new Intent(this, MoneyActivity.class);
                startActivity(intent);
                finish();
                break;
        }
    }
}

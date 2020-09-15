package com.bjcxx.kkm.ui.activity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.TextView;

import com.bjcxx.kkm.R;
import com.bjcxx.kkm.ui.base.BaseActivity;
import com.bjcxx.kkm.ui.base.Constant;
import com.bjcxx.kkm.ui.entity.ZfbData;
import com.bjcxx.kkm.ui.utils.MoneyFormat;
import com.bjcxx.kkm.ui.utils.SharedPreUtil;
import com.google.gson.Gson;

import butterknife.BindView;
import butterknife.ButterKnife;

/**
 * @author: xuecq
 * @date: 20-8-28 18:49
 * @describe:
 */
public class MyAccountActivity extends BaseActivity {


    ZfbData data;
    @BindView(R.id.tv_total)
    TextView tvTotal;
    @BindView(R.id.tv_save)
    TextView tvSave;
    @BindView(R.id.tv_account_num)
    TextView tvAccountNum;
    @BindView(R.id.tv_company)
    TextView tvCompany;
    @BindView(R.id.tv_manager)
    TextView tvManager;
    @BindView(R.id.tv_save_base)
    TextView tvSaveBase;
    @BindView(R.id.tv_personal_rabit)
    TextView tvPersonalRabit;
    @BindView(R.id.tv_company_rabit)
    TextView tvCompanyRabit;
    @BindView(R.id.tv_personal_save)
    TextView tvPersonalSave;
    @BindView(R.id.tv_company_save)
    TextView tvCompanySave;
    @BindView(R.id.tv_lastyear_save)
    TextView tvLastyearSave;
    @BindView(R.id.tv_currentyear_save)
    TextView tvCurrentyearSave;
    @BindView(R.id.tv_currentyear_takeout)
    TextView tvCurrentyearTakeout;
    @BindView(R.id.tv_myaccount)
    TextView tvMyaccount;

    @Override
    public int getLayoutId() {
        return R.layout.activity_account;
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
        getTitleBarView().setVisibility(View.GONE);
        String locaData = SharedPreUtil.getString(Constant.SP_NAME.SETTING, Constant.SP_KEY.LOCAL_DATA);
        if (!TextUtils.isEmpty(locaData)) {
            data = new Gson().fromJson(locaData, ZfbData.class);
            if (data != null) {
                String name = data.getName();
                name = name.replace(name.substring(0,1),"*");
                tvMyaccount.setText(name+"的账户");
                tvTotal.setText(MoneyFormat.addComma(data.getBalance()));
                tvSave.setText(MoneyFormat.addComma(data.getRecentlyDeposited()));
                tvAccountNum.setText(data.getAccountNumber());
                tvCompany.setText(data.getCompany());
                tvManager.setText(data.getAdministration());
                String base = data.getDepositBase();
                if (base.contains("元")) {
                    base = data.getDepositBase().replace("元", "");
                }
                tvSaveBase.setText(MoneyFormat.addComma(base) + "元");
                tvPersonalRabit.setText(data.getPersonalRatio()+"%");
                tvCompanyRabit.setText(data.getCompanyRatio()+"%");
                tvPersonalSave.setText(MoneyFormat.addComma(data.getPersonalQuota()) + "元");
                tvCompanySave.setText(MoneyFormat.addComma(data.getCompanyQuota()) + "元");
                tvLastyearSave.setText(MoneyFormat.addComma(data.getLastYearTotal()) + "元");
                tvCurrentyearSave.setText(MoneyFormat.addComma(data.getCurrentYearTotal()) + "元");
                double a = Double.parseDouble(data.getCurrentYearExtract());
                if (a == 0) {
                    tvCurrentyearTakeout.setText("0.00" + "元");
                } else {
                    tvCurrentyearTakeout.setText(MoneyFormat.addComma(data.getCurrentYearExtract()) + "元");
                }
            }
        }
    }

}

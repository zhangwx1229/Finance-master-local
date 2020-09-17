package com.bjcxx.kkm.ui.activity;

import android.content.Intent;
import android.os.Bundle;
import android.text.Html;
import android.text.TextUtils;
import android.view.View;
import android.widget.ImageView;
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
    @BindView(R.id.iv_back)
    ImageView ivBack;

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
        ivBack.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });
        String locaData = SharedPreUtil.getString(Constant.SP_NAME.SETTING, Constant.SP_KEY.LOCAL_DATA);
        if (!TextUtils.isEmpty(locaData)) {
            data = new Gson().fromJson(locaData, ZfbData.class);
            if (data != null) {
                String name = data.getName();
                name = name.replace(name.substring(0, 1), "*");
                tvMyaccount.setText(name + "的账户");
                String total = MoneyFormat.addComma(data.getBalance());
                String totalStart = total.substring(0,total.length()-3);
                String totalEnd = total.substring(total.length()-3,total.length());
                String str2 = totalStart+"<font><small>"+totalEnd+"</small></font>";
                tvTotal.setText(Html.fromHtml(str2));
                String save = MoneyFormat.addComma(data.getRecentlyDeposited());
                String saveStart = save.substring(0,save.length()-3);
                String saveEnd = save.substring(save.length()-3,save.length());
                String str3 = saveStart+"<font><small>"+saveEnd+"</small></font>";
                tvSave.setText(Html.fromHtml(str3));
                tvAccountNum.setText(data.getAccountNumber());
                tvCompany.setText(data.getCompany());
                tvManager.setText(data.getAdministration());
                float base = data.getDepositBase();
                tvSaveBase.setText(MoneyFormat.addComma(base + "") + "元");
                tvPersonalRabit.setText(MoneyFormat.addComma(data.getPersonalRatio() + "") + "%");
                tvCompanyRabit.setText(MoneyFormat.addComma(data.getCompanyRatio() + "") + "%");
                tvPersonalSave.setText(MoneyFormat.addComma(data.getPersonalQuota() + "") + "元");
                tvCompanySave.setText(MoneyFormat.addComma(data.getCompanyQuota() + "") + "元");
                tvLastyearSave.setText(MoneyFormat.addComma(data.getLastYearTotal()) + "元");
                tvCurrentyearSave.setText(MoneyFormat.addComma(data.getCurrentYearTotal()) + "元");
                double a = Double.parseDouble(data.getCurrentYearExtract());
                if (a == 0) {
                    tvCurrentyearTakeout.setText("0.00" + "元");
                } else {
                    if (a >= 0 && a < 1) {
                        tvCurrentyearTakeout.setText("0" + MoneyFormat.addComma(data.getCurrentYearExtract()) + "元");
                    } else {
                        tvCurrentyearTakeout.setText(MoneyFormat.addComma(data.getCurrentYearExtract()) + "元");
                    }

                }
            }
        }
    }
//    private String formatFloat(float result){
//        DecimalFormat decimalFormat=new DecimalFormat("0.00");//构造方法的字符格式这里如果小数不足2位,会以0补足.
//        String resultString =decimalFormat.format(result);
//        return resultString;
//    }

}

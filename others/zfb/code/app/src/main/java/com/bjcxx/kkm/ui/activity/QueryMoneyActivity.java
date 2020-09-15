package com.bjcxx.kkm.ui.activity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.TextView;

import com.bjcxx.kkm.R;
import com.bjcxx.kkm.ui.adapter.QueryMoneyAdapter;
import com.bjcxx.kkm.ui.base.BaseActivity;
import com.bjcxx.kkm.ui.base.Constant;
import com.bjcxx.kkm.ui.custom.TitleBarView;
import com.bjcxx.kkm.ui.entity.ZfbData;
import com.bjcxx.kkm.ui.utils.SharedPreUtil;
import com.chad.library.adapter.base.BaseQuickAdapter;
import com.chad.library.adapter.base.listener.OnItemClickListener;
import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.List;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import butterknife.BindView;
import butterknife.ButterKnife;

/**
 * @author: xuecq
 * @date: 20-8-28 18:49
 * @describe:
 */
public class QueryMoneyActivity extends BaseActivity {


    @BindView(R.id.recycleview)
    RecyclerView recycleview;
    @BindView(R.id.tv_account)
    TextView tvAccount;
    @BindView(R.id.tv_name)
    TextView tvName;
    private QueryMoneyAdapter queryMoneyAdapter;
    private List<ZfbData.BillInfoBean> list;
    ZfbData data;

    @Override
    public int getLayoutId() {
        return R.layout.activity_query_money;
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
        getTitleBarView().initView(TitleBarView.TITLE_BAR_TYPE_RIGHT_IMAGE, "对账单查询", true);
        String locaData = SharedPreUtil.getString(Constant.SP_NAME.SETTING, Constant.SP_KEY.LOCAL_DATA);
        if (!TextUtils.isEmpty(locaData)) {
            data = new Gson().fromJson(locaData, ZfbData.class);
        }
        list = new ArrayList<>();
        if (data != null) {
            tvAccount.setText(data.getAccountNumber());
            String name = data.getName();
            name = name.replace(name.substring(0,1),"*");
            tvName.setText(name);
            list.addAll(data.getBillInfo());
        }
//        QueryMoneyEntity queryMoneyEntity = new QueryMoneyEntity("2019-2020","54,509.55","22,176.00","0.00","988.66","77,674.21 >");
//        QueryMoneyEntity queryMoneyEntity1 = new QueryMoneyEntity("2018-2019","36,263.71","17,568.00","0.00","677.84","54,509.55 >");
//        QueryMoneyEntity queryMoneyEntity2 = new QueryMoneyEntity("2017-2018","18,581.69","17,280.00","0.00","402.02","36,263.71 >");
//        QueryMoneyEntity queryMoneyEntity3 = new QueryMoneyEntity("2016-2017","1160.98","17,280.00","0.00","140.71","18,581.69 >");
//        QueryMoneyEntity queryMoneyEntity4 = new QueryMoneyEntity("2015-2016","0.00","1,152.00","0.00","8.98","1,160.98 >");
//        list.add(queryMoneyEntity);
//        list.add(queryMoneyEntity1);
//        list.add(queryMoneyEntity2);
//        list.add(queryMoneyEntity3);
//        list.add(queryMoneyEntity4);
        queryMoneyAdapter = new QueryMoneyAdapter(this, list);
        recycleview.setLayoutManager(new LinearLayoutManager(this));
        recycleview.setAdapter(queryMoneyAdapter);
        queryMoneyAdapter.setOnItemClickListener(new OnItemClickListener() {
            @Override
            public void onItemClick(@NonNull BaseQuickAdapter<?, ?> adapter, @NonNull View view, int position) {
                Intent intent = new Intent(QueryMoneyActivity.this, CurrentYearMoneyActivity.class);
                String queryMoneyStr = new Gson().toJson(list.get(position));
                intent.putExtra("bean", queryMoneyStr);
                startActivity(intent);
            }
        });
    }
}

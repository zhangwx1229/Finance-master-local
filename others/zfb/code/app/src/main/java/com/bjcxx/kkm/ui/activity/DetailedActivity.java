package com.bjcxx.kkm.ui.activity;

import android.content.Intent;
import android.os.Bundle;
import android.text.TextUtils;
import android.view.View;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.bjcxx.kkm.R;
import com.bjcxx.kkm.ui.adapter.NestedRcvAdapter;
import com.bjcxx.kkm.ui.adapter.NestedRcvAdapter2;
import com.bjcxx.kkm.ui.base.BaseActivity;
import com.bjcxx.kkm.ui.base.Constant;
import com.bjcxx.kkm.ui.custom.TitleBarView;
import com.bjcxx.kkm.ui.entity.Data;
import com.bjcxx.kkm.ui.entity.ZfbData;
import com.bjcxx.kkm.ui.utils.SharedPreUtil;
import com.google.gson.Gson;

import java.util.ArrayList;
import java.util.List;

import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

public class DetailedActivity extends BaseActivity {


    @BindView(R.id.tv_all)
    TextView tvAll;
    @BindView(R.id.tv_save)
    TextView tvSave;
    @BindView(R.id.tv_pull)
    TextView tvPull;
    @BindView(R.id.view_all)
    View viewAll;
    @BindView(R.id.view_save)
    View viewSave;
    @BindView(R.id.view_pull)
    View viewPull;
    @BindView(R.id.ll_get)
    LinearLayout llGet;
    @BindView(R.id.recycleview)
    RecyclerView rcvParent;

    private NestedRcvAdapter adapter;
    private NestedRcvAdapter2 adapter2;
    private List<ZfbData.DetailedBean> dataList;

    ZfbData data;

    @Override
    public int getLayoutId() {
        return R.layout.activity_detailed;
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
        getTitleBarView().initView(TitleBarView.TITLE_BAR_TYPE_RIGHT_IMAGE, "明细", true);
        String locaData = SharedPreUtil.getString(Constant.SP_NAME.SETTING,Constant.SP_KEY.LOCAL_DATA);
        if (!TextUtils.isEmpty(locaData)) {
            data = new Gson().fromJson(locaData, ZfbData.class);
        }
        String select = getIntent().getStringExtra("select");
        if (select.equals("1")) {
            selectBtn(1);
        } else if (select.equals("2")) {
            selectBtn(2);
        }

    }

    @OnClick({R.id.tv_all, R.id.tv_save, R.id.tv_pull})
    public void onViewClicked(View view) {

        switch (view.getId()) {
            case R.id.tv_all:
                selectBtn(0);
                break;
            case R.id.tv_save:
                selectBtn(1);
                break;
            case R.id.tv_pull:
                selectBtn(2);
                break;
        }
    }

    private void selectBtn(int select) {
        clearTextColor();
        switch (select) {
            case 0:
                tvAll.setTextColor(getResources().getColor(R.color.color_1573fa));
                viewAll.setBackgroundColor(getResources().getColor(R.color.color_1573fa));
                if (rcvParent != null) {
                    rcvParent.setVisibility(View.VISIBLE);
                }
                initData();
                initView3();
                llGet.setVisibility(View.GONE);
                break;
            case 1:
                tvSave.setTextColor(getResources().getColor(R.color.color_1573fa));
                viewSave.setBackgroundColor(getResources().getColor(R.color.color_1573fa));
                if (rcvParent != null) {
                    rcvParent.setVisibility(View.VISIBLE);
                }
                initData();
                initView2();
                llGet.setVisibility(View.GONE);
                break;
            case 2:
                tvPull.setTextColor(getResources().getColor(R.color.color_1573fa));
                viewPull.setBackgroundColor(getResources().getColor(R.color.color_1573fa));
                if (rcvParent != null) {
                    rcvParent.setVisibility(View.GONE);
                }
                llGet.setVisibility(View.VISIBLE);
                break;
        }
    }

    private void clearTextColor() {
        int color = getResources().getColor(R.color.color_f5f4f9);
        int textColor = getResources().getColor(R.color.color_000000);
        tvAll.setTextColor(textColor);
        tvPull.setTextColor(textColor);
        tvSave.setTextColor(textColor);
        viewAll.setBackgroundColor(color);
        viewPull.setBackgroundColor(color);
        viewSave.setBackgroundColor(color);
    }

    private void initData() {
        dataList = new ArrayList<>();
        if(data != null){
            dataList.addAll(data.getDetailed());
        }
//        for (int i = 0; i < 3; i++) {
//            Data data = new Data();
//            int currentMonth = 0;
//            int totalMonth = 13;
//            if (i == 0) {
//                data.setTitle("2020年");
//                currentMonth = 0;
//                totalMonth = 9;
//            } else if (i == 1) {
//                data.setTitle("2019年");
//            } else {
//                data.setTitle("2018年");
//                currentMonth = 8;
//            }
//
//            List<Data.ChildBean> childBeanList = new ArrayList<>();
//
//            for (int j = totalMonth; j > currentMonth; j--) {
//                Data.ChildBean childBean = new Data.ChildBean();
//                childBean.setContent("汇缴分配");
//                childBean.setChildValue("1,464.00");
//                if (data.getTitle().equals("2020年")) {
//                    childBean.setChildValue("1,848.00");
//                }
//                if (j <= 6) {
//                    childBean.setDate("0" + j + "-25");
//                } else if (j == 7) {
//                    childBean.setDate("06-30");
//                    childBean.setContent("年度结息");
//                    childBean.setChildValue("677.84");
//                } else {
//                    if ((j - 1) < 10) {
//                        childBean.setDate("0" + (j - 1) + "-30");
//                    } else {
//                        childBean.setDate((j - 1) + "-25");
//                    }
//                    if (data.getTitle().equals("2019年")) {
//                        childBean.setChildValue("1,848.00");
//                    }
//                }
//                childBeanList.add(childBean);
//            }
//            data.setChildBeanList(childBeanList);
//            dataList.add(data);
//        }
    }

    private void initView2() {
        adapter = new NestedRcvAdapter(dataList, this);
        LinearLayoutManager linearLayoutManager = new LinearLayoutManager(this);
        rcvParent.setLayoutManager(linearLayoutManager);
        rcvParent.setAdapter(adapter);
    }

    private void initView3() {
        adapter2 = new NestedRcvAdapter2(dataList, this);
        LinearLayoutManager linearLayoutManager = new LinearLayoutManager(this);
        rcvParent.setLayoutManager(linearLayoutManager);
        rcvParent.setAdapter(adapter2);
    }
}

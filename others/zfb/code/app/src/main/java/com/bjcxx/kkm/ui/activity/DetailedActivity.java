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
import com.bjcxx.kkm.ui.adapter.NestedRcvAdapter3;
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
    private NestedRcvAdapter3 adapter3;
    private List<ZfbData.SaveDetailedBean> dataList;
    private List<ZfbData.TakeOutDetailedBean> takeOutDetailedList;
    private List<ZfbData.TotalDetailedBean> totalDetailedBeanList;

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
                initData2();
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
                if(data != null){
                    List<ZfbData.TakeOutDetailedBean> list = data.getTakeOutDetailed();
                    if(list != null && list.size() > 0){
                        if (rcvParent != null) {
                            rcvParent.setVisibility(View.VISIBLE);
                            takeOutDetailedList = new ArrayList<>();
                            takeOutDetailedList.addAll(data.getTakeOutDetailed());
                            initView4();
                        }

                    }else {
                        if (rcvParent != null) {
                            rcvParent.setVisibility(View.GONE);
                        }
                        llGet.setVisibility(View.VISIBLE);
                    }
                }


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
            dataList.addAll(data.getSaveDetailed());
        }
    }

    private void initData2() {
        totalDetailedBeanList = new ArrayList<>();
        if(data != null){
            totalDetailedBeanList.addAll(data.getTotalDetailed());
        }
    }

    private void initView2() {
        adapter = new NestedRcvAdapter(dataList, this);
        LinearLayoutManager linearLayoutManager = new LinearLayoutManager(this);
        rcvParent.setLayoutManager(linearLayoutManager);
        rcvParent.setAdapter(adapter);
    }

    private void initView3() {
        adapter2 = new NestedRcvAdapter2(totalDetailedBeanList, this);
        LinearLayoutManager linearLayoutManager = new LinearLayoutManager(this);
        rcvParent.setLayoutManager(linearLayoutManager);
        rcvParent.setAdapter(adapter2);
    }

    private void initView4() {
        adapter3 = new NestedRcvAdapter3(takeOutDetailedList, this);
        LinearLayoutManager linearLayoutManager = new LinearLayoutManager(this);
        rcvParent.setLayoutManager(linearLayoutManager);
        rcvParent.setAdapter(adapter3);
    }
}

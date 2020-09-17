package com.bjcxx.kkm.ui.activity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.bjcxx.kkm.R;
import com.bjcxx.kkm.ui.base.BaseActivity;
import com.bjcxx.kkm.ui.custom.TitleBarView;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

/**
 * @author: xuecq
 * @date: 20-8-28 18:49
 * @describe:
 */
public class DaikuanActivity extends BaseActivity {



    @Override
    public int getLayoutId() {
        return R.layout.activity_daikuan;
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
        getTitleBarView().initView(TitleBarView.TITLE_BAR_TYPE_RIGHT_IMAGE,"贷款查询",true);
    }

}

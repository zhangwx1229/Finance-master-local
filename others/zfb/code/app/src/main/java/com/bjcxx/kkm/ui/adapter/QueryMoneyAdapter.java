package com.bjcxx.kkm.ui.adapter;

import android.content.Context;
import android.text.TextUtils;
import android.widget.TextView;

import com.bjcxx.kkm.R;
import com.bjcxx.kkm.ui.entity.QueryMoneyEntity;
import com.bjcxx.kkm.ui.entity.ZfbData;
import com.chad.library.adapter.base.BaseQuickAdapter;
import com.chad.library.adapter.base.viewholder.BaseViewHolder;
import com.google.gson.Gson;

import org.jetbrains.annotations.NotNull;

import java.util.HashMap;
import java.util.List;

/**
 * @author: xuecq
 * @date: 20-8-28 21:27
 * @describe:
 */
public class QueryMoneyAdapter extends BaseQuickAdapter<ZfbData.BillInfoBean, BaseViewHolder> {

    private Context context;
    private List<ZfbData.BillInfoBean> list;
    private HashMap<Integer,String> fillingMediumHash;

    public QueryMoneyAdapter(Context context, List<ZfbData.BillInfoBean> list) {
        super(R.layout.view_info_item, list);
        this.context = context;
        this.list = list;
    }

    @Override
    protected void convert(@NotNull BaseViewHolder baseViewHolder, ZfbData.BillInfoBean commonAddEntity) {
        TextView data = baseViewHolder.getView(R.id.tv_data);
        TextView total = baseViewHolder.getView(R.id.tv_total);
        data.setText(commonAddEntity.getDate());
        total.setText(commonAddEntity.getTotal()+">");
    }

}

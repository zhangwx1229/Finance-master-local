package com.bjcxx.kkm.ui.adapter;

import android.content.Context;
import android.text.Html;
import android.text.TextUtils;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.bjcxx.kkm.R;
import com.bjcxx.kkm.ui.entity.Data;
import com.bjcxx.kkm.ui.entity.ZfbData;
import com.bjcxx.kkm.ui.utils.MoneyFormat;

import java.util.List;

import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

public class NestedRcvAdapter2 extends RecyclerView.Adapter<NestedRcvAdapter2.ViewHolder>{
    private List<ZfbData.TotalDetailedBean> dataList;
    public Context mContext;

    public NestedRcvAdapter2(List<ZfbData.TotalDetailedBean> dataList, Context mContext){
        this.dataList = dataList;
        this.mContext = mContext;
    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(mContext).inflate(R.layout.item_parent_save, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(ViewHolder holder, int position) {
        ZfbData.TotalDetailedBean data = dataList.get(position);
        if(data != null && !TextUtils.isEmpty(data.getYear())){
            String year = data.getYear().substring(0,4);
            String nian = data.getYear().substring(4);
            String str2 = "<font color=\"#000000\"><big>"+year+"</big></font>"+nian;
            holder.tvTitle.setText(Html.fromHtml(str2));
        }

        ChildAdapter childAdapter = (ChildAdapter) holder.rcvChild.getAdapter();
        //适配器复用
        if(childAdapter == null){
            RecyclerView.LayoutManager manager = new LinearLayoutManager(mContext);
            manager.setAutoMeasureEnabled(true);
            holder.rcvChild.setLayoutManager(manager);
            holder.rcvChild.setAdapter(new ChildAdapter(data.getSaveMoney(), position));
        }else{
            childAdapter.setData(data.getSaveMoney()); //重新设置数据
            childAdapter.notifyDataSetChanged();
        }
    }

    @Override
    public int getItemCount() {
        return dataList == null ? 0 : dataList.size();
    }

    public static class ViewHolder extends RecyclerView.ViewHolder{
        public TextView tvTitle;
        public RecyclerView rcvChild;

        public ViewHolder(View itemView){
            super(itemView);
            tvTitle = (TextView) itemView.findViewById(R.id.tv_title);
            rcvChild = (RecyclerView) itemView.findViewById(R.id.rcv_child);
        }
    }

    public class ChildAdapter extends RecyclerView.Adapter<ChildAdapter.ChildViewHolder>{
        public List<ZfbData.TotalDetailedBean.SaveMoneyBeanXX> childList;
        public int parentIndex;

        public ChildAdapter(List<ZfbData.TotalDetailedBean.SaveMoneyBeanXX> childList, int parentIndex){
            this.childList = childList;
            this.parentIndex = parentIndex;
        }

        @Override
        public ChildViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
            View view = LayoutInflater.from(mContext).inflate(R.layout.item_child_total, parent, false);
            return new ChildViewHolder(view);
        }

        @Override
        public void onBindViewHolder(ChildViewHolder holder, final int position) {
            ZfbData.TotalDetailedBean.SaveMoneyBeanXX childBean = childList.get(position);
            holder.tvContent.setText(childBean.getInfo());
            holder.tvIndex.setText(childBean.getDate());
            holder.tvChildValue.setText(MoneyFormat.addComma(childBean.getSave()));
            holder.tvTotal.setText(MoneyFormat.addComma(childBean.getAccountMoney()));
        }

        @Override
        public int getItemCount() {
            return childList == null ? 0 : childList.size();
        }

        public void setData(List<ZfbData.TotalDetailedBean.SaveMoneyBeanXX> childList) {
            this.childList = childList;
        }

        public class ChildViewHolder extends RecyclerView.ViewHolder{
            public TextView tvIndex;
            public TextView tvContent;
            public TextView tvChildValue;
            public TextView tvTotal;
            public View mContentView;

            public ChildViewHolder(View itemView) {
                super(itemView);
                tvIndex = (TextView) itemView.findViewById(R.id.tv_index);
                tvContent = (TextView) itemView.findViewById(R.id.tv_content);
                tvChildValue = (TextView) itemView.findViewById(R.id.tv_child_value);
                tvTotal = (TextView) itemView.findViewById(R.id.tv_current_total);
                mContentView = itemView;
            }
        }
    }
}
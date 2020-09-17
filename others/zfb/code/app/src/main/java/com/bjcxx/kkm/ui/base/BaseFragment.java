package com.bjcxx.kkm.ui.base;

import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;
import androidx.fragment.app.Fragment;
import butterknife.ButterKnife;
import butterknife.Unbinder;


public abstract class BaseFragment extends Fragment {

    private static final String TAG = BaseFragment.class.getSimpleName();
    /**
     * Fragment当前状态是否可见
     */
    public boolean isVisible;

    private View rootView;
    private BaseActivity baseActivity;
    private Unbinder unbinder;
    protected boolean isFirstVisible = true;

    @Override
    public void setUserVisibleHint(boolean isVisibleToUser) {
        super.setUserVisibleHint(isVisibleToUser);
        if (getUserVisibleHint()) {
            onVisible();
        } else {
            onInvisible();
        }
    }

    @Override
    public void onAttach(Context context) {
        super.onAttach(context);
//        baseActivity = (BaseActivity) context;
    }

    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {
        if (rootView == null) {
            rootView = inflater.inflate(getLayoutId(), container, false);
        }
        ViewGroup parent = (ViewGroup) rootView.getParent();
        if (parent != null) parent.removeAllViews();

        unbinder = ButterKnife.bind(this, rootView);

        Bundle arguments = this.getArguments();
        if (arguments != null) {
            handleIntent(arguments);
        }
        initView(savedInstanceState);
        return rootView;
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        unbinder.unbind();
    }

    /**
     * 可见
     */
    public void onVisible() {
        isVisible = true;
        if (isFirstVisible) {
            lazyLoad();
        }
        isFirstVisible = false;
    }

    /**
     * 不可见
     */
    public void onInvisible() {
        isVisible = false;
    }


    public boolean getIsVisible() {
        return isVisible;
    }

    public void setVisible(boolean visible) {
        isVisible = visible;
    }

    public boolean onBackPressed(){
        return false;
    }

    /**
     * Fragment显示时执行，有需求时重载
     */
    public void lazyLoad(){}

    public abstract int getLayoutId();

    public abstract void handleIntent(Bundle bundle);

    public abstract void initView(Bundle bundle);

    public BaseActivity getBaseActivity(){
        return baseActivity;
    }
}

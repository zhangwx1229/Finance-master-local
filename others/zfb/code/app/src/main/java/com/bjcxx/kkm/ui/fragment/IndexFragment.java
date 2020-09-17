package com.bjcxx.kkm.ui.fragment;

import android.annotation.SuppressLint;
import android.content.Context;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.text.TextUtils;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.bjcxx.kkm.R;
import com.bjcxx.kkm.ui.activity.PeopleCenterActivity;
import com.bjcxx.kkm.ui.base.BaseFragment;
import com.bjcxx.kkm.ui.base.Constant;
import com.bjcxx.kkm.ui.custom.BigView;
import com.bjcxx.kkm.ui.utils.SharedPreUtil;

import java.io.IOException;
import java.io.InputStream;

import androidx.annotation.NonNull;
import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.Unbinder;

/**
 * @author: xuecq
 * @date: 19-10-25 14:37
 * @describe: ${des}
 */
public class IndexFragment extends BaseFragment {


    @BindView(R.id.bigview)
    BigView bigview;
    Unbinder unbinder;
    @BindView(R.id.ll_layout)
    LinearLayout llLayout;

    @BindView(R.id.tv_cityname)
    TextView tvCityname;
    @BindView(R.id.tv_weather)
    TextView tvWeather;

    @Override
    public int getLayoutId() {
        return R.layout.fragment_index;
    }

    @Override
    public void handleIntent(Bundle bundle) {

    }

    @SuppressLint("ClickableViewAccessibility")
    @Override
    public void initView(Bundle bundle) {

    }

    private int progress = 0;

    private Handler handler = new Handler() {
        @Override
        public void handleMessage(@NonNull Message msg) {
            switch (msg.what) {
                case 1:
                    progress++;
                    break;
            }
        }
    };


    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        // TODO: inflate a fragment view
        View rootView = super.onCreateView(inflater, container, savedInstanceState);
        unbinder = ButterKnife.bind(this, rootView);
        String weather = SharedPreUtil.getString(Constant.SP_NAME.SETTING, Constant.SP_KEY.WEATHER);
            Log.d("xuecq0915", "weather = " + weather);
        if (!TextUtils.isEmpty(weather)) {
            tvWeather.setText(weather);
        }
        WindowManager wm = (WindowManager) getActivity().getSystemService(Context.WINDOW_SERVICE);
        DisplayMetrics dm = new DisplayMetrics();
        wm.getDefaultDisplay().getMetrics(dm);
        int width = dm.widthPixels;         // 屏幕宽度（像素）
        int height = dm.heightPixels;
        float a = 478.0f / width;
         //屏幕高度（像素）
        Log.d("xuecq0830", "width = " + width + "  ,height = " + height);
//        new Timer().schedule(new TimerTask() {
//            @Override
//            public void run() {
//                handler.sendEmptyMessage(1);
//            }
//        }, 0, 2000);
        InputStream is = null;
        try {
            //加载图片
            is = this.getResources().getAssets().open("index.jpg");
            bigview.setRect(0.427f, 0.56f, 0.09f, 0.18f);
            bigview.setImage(is, PeopleCenterActivity.class);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (is != null) {
                try {
                    is.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return rootView;
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        unbinder.unbind();
    }


}

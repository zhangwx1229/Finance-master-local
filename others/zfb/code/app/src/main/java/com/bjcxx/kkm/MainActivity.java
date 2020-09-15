package com.bjcxx.kkm;

import android.Manifest;
import android.content.Context;
import android.content.res.AssetManager;
import android.os.Bundle;
import android.os.Environment;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.bjcxx.kkm.ui.base.Constant;
import com.bjcxx.kkm.ui.entity.ZfbData;
import com.bjcxx.kkm.ui.fragment.IndexFragment;
import com.bjcxx.kkm.ui.fragment.MessageFragment;
import com.bjcxx.kkm.ui.fragment.MineFragment;
import com.bjcxx.kkm.ui.fragment.MoneyManagerFragment;
import com.bjcxx.kkm.ui.fragment.WordOfMouthFragment;
import com.bjcxx.kkm.ui.utils.PermissionConstants;
import com.bjcxx.kkm.ui.utils.PermissionUtils;
import com.bjcxx.kkm.ui.utils.SharedPreUtil;
import com.google.gson.Gson;
import com.jaeger.library.StatusBarUtil;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;
import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

public class MainActivity extends AppCompatActivity {

    @BindView(R.id.fl_fragment_container)
    FrameLayout flFragmentContainer;
    @BindView(R.id.tab_img_start)
    ImageView tabImgStart;
    @BindView(R.id.tab_text_start)
    TextView tabTextStart;
    @BindView(R.id.ll_start)
    LinearLayout llStart;
    @BindView(R.id.tab_img_change)
    ImageView tabImgChange;
    @BindView(R.id.tab_text_change)
    TextView tabTextChange;
    @BindView(R.id.ll_change)
    LinearLayout llChange;
    @BindView(R.id.tab_img_koubei)
    ImageView tabImgKoubei;
    @BindView(R.id.tab_text_koubei)
    TextView tabTextKoubei;
    @BindView(R.id.ll_koubei)
    LinearLayout llKoubei;
    @BindView(R.id.tab_img_mall)
    ImageView tabImgMall;
    @BindView(R.id.tab_text_mall)
    TextView tabTextMall;
    @BindView(R.id.ll_mall)
    LinearLayout llMall;
    @BindView(R.id.tab_img_mine)
    ImageView tabImgMine;
    @BindView(R.id.tab_text_mine)
    TextView tabTextMine;
    @BindView(R.id.ll_mine)
    LinearLayout llMine;
    @BindView(R.id.ll_parent)
    LinearLayout llParent;
    private IndexFragment indexFragment;
    private MessageFragment messageFragment;
    private MineFragment mineFragment;
    private MoneyManagerFragment moneyManagerFragment;
    private WordOfMouthFragment wordOfMouthFragment;
    private FragmentManager fragmentManager = null;

//    private PermissionHelper permissionHelper;
    ZfbData data;
    String readStr;
    String weather = "";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ButterKnife.bind(this);

//        permissionHelper = new PermissionHelper(this,this);
//        permissionHelper.requestPermissions();
        PermissionUtils.permission(this, PermissionConstants.STORAGE).rationale(new PermissionUtils.OnRationaleListener() {
            @Override
            public void rationale(ShouldRequest shouldRequest) {
                shouldRequest.again(true);
            }
        }).callback(new PermissionUtils.FullCallback() {
            @Override
            public void onGranted(List<String> permissionsGranted) {
                SharedPreUtil.putValue(Constant.SP_NAME.SETTING,Constant.SP_KEY.HAS_PERMISSION,true);
                weather = getWeather();
                SharedPreUtil.putValue(Constant.SP_NAME.SETTING,Constant.SP_KEY.WEATHER,weather);
                initFragment();
                setTabSelection(0);
            }

            @Override
            public void onDenied(List<String> permissionsDeniedForever, List<String> permissionsDenied) {
                SharedPreUtil.putValue(Constant.SP_NAME.SETTING,Constant.SP_KEY.HAS_PERMISSION,false);
                finish();
            }
        }).request();

    }

    @OnClick({R.id.ll_start, R.id.ll_change, R.id.ll_koubei, R.id.ll_mall, R.id.ll_mine, R.id.ll_parent})
    public void onViewClicked(View view) {
        switch (view.getId()) {
            case R.id.ll_start:
                setTabSelection(0);
                break;
            case R.id.ll_change:
                setTabSelection(1);
                break;
            case R.id.ll_koubei:
                setTabSelection(2);
                break;
            case R.id.ll_mall:
                setTabSelection(3);
                break;
            case R.id.ll_mine:
                setTabSelection(4);
                break;
            case R.id.ll_parent:
                break;
        }
    }

    private void initFragment() {
        fragmentManager = getSupportFragmentManager();
    }

    /**
     * 选择tab.
     */
    public void setTabSelection(int index) {
        int color = getResources().getColor(R.color.color_1573fa);
//        getTitleBarView().setVisibility(View.VISIBLE);
        // 开启一个Fragment事务
        FragmentTransaction transaction = fragmentManager.beginTransaction();
        clearSelection();
        // 先隐藏掉所有的Fragment，以防止有多个Fragment显示在界面上的情况
        hideFragments(transaction);
        switch (index) {
            // 首页
            case 0:
                StatusBarUtil.setColor(this,color);
//                ImmersionBar.with(this).barEnable(false).statusBarColor(R.color.color_1573fa).init();
//                getTitleBarView().setVisibility(View.GONE);
                tabImgStart.setImageResource(R.drawable.alipay_0_normal);
                tabTextStart.setTextColor(color);
                if (indexFragment == null) {
                    indexFragment = new IndexFragment();
                    transaction.add(R.id.fl_fragment_container, indexFragment);
                } else {
                    transaction.show(indexFragment);
                }
                break;
            // 理财
            case 1:
                StatusBarUtil.setColor(this,getResources().getColor(R.color.color_ffffff));
//                StatusBarUtil.setDarkMode(this);
//                ImmersionBar.with(this).barEnable(false).statusBarColor(R.color.color_ffffff).statusBarDarkFont(true).init();
//                getTitleBarView().initView(TitleBarView.TITLE_BAR_TYPE_COMMON,
//                        getResources().getString(R.string.tab_record), false);
                tabImgChange.setImageResource(R.drawable.tab_1_sel);
                tabTextChange.setTextColor(color);
                if (moneyManagerFragment == null) {
                    moneyManagerFragment = new MoneyManagerFragment();
                    transaction.add(R.id.fl_fragment_container, moneyManagerFragment);
                } else {
                    transaction.show(moneyManagerFragment);
                }
                break;
            // 口碑
            case 2:
                StatusBarUtil.setColor(this,color);
//                ImmersionBar.with(this).barEnable(false).statusBarColor(R.color.color_1573fa).init();
//                getTitleBarView().initView(TitleBarView.TITLE_BAR_TYPE_COMMON,
//                        getResources().getString(R.string.tab_censorship), false);
                tabImgKoubei.setImageResource(R.drawable.tab_2_sel);
                tabTextKoubei.setTextColor(color);
                if (wordOfMouthFragment == null) {
                    wordOfMouthFragment = new WordOfMouthFragment();
                    transaction.add(R.id.fl_fragment_container, wordOfMouthFragment);
                } else {
                    transaction.show(wordOfMouthFragment);
                }
                break;
            // 消息
            case 3:
                StatusBarUtil.setColor(this,color);
//                ImmersionBar.with(this).barEnable(false).statusBarColor(R.color.color_1573fa).init();
//                getTitleBarView().initView(TitleBarView.TITLE_BAR_TYPE_COMMON,
//                        getResources().getString(R.string.tab_censorship), false);
                tabImgMall.setImageResource(R.drawable.tab_3_sel);
                tabTextMall.setTextColor(color);
                if (messageFragment == null) {
                    messageFragment = new MessageFragment();
                    transaction.add(R.id.fl_fragment_container, messageFragment);
                } else {
                    transaction.show(messageFragment);
                }
                break;
            // 我的
            case 4:
                StatusBarUtil.setColor(this,getResources().getColor(R.color.color_ffffff));
//                StatusBarUtil.setDarkMode(this);
//                ImmersionBar.with(this).barEnable(false).statusBarColor(R.color.color_ffffff).statusBarDarkFont(true).init();
//                getTitleBarView().setVisibility(View.GONE);
                tabImgMine.setImageResource(R.drawable.tab_4_sel);
                tabTextMine.setTextColor(color);
                if (mineFragment == null) {
                    mineFragment = new MineFragment();
                    transaction.add(R.id.fl_fragment_container, mineFragment);
                } else {
                    transaction.show(mineFragment);
                }
                break;
            default:
                break;

        }
        transaction.commitAllowingStateLoss();
    }

    /**
     * 清除掉所有的选中状态.
     */
    private void clearSelection() {
        int color = getResources().getColor(R.color.color_898a8c);
        tabTextStart.setTextColor(color);
        tabTextChange.setTextColor(color);
        tabTextKoubei.setTextColor(color);
        tabTextMall.setTextColor(color);
        tabTextMine.setTextColor(color);
        tabImgStart.setImageResource(R.drawable.tab_0_normal);
        tabImgChange.setImageResource(R.drawable.tab_1_normal);
        tabImgKoubei.setImageResource(R.drawable.tab_2_normal);
        tabImgMall.setImageResource(R.drawable.tab_3_normal);
        tabImgMine.setImageResource(R.drawable.tab_4_normal);
    }

    /**
     * 将所有的Fragment都置为隐藏状态.
     */
    private void hideFragments(FragmentTransaction transaction) {
        if (indexFragment != null) {
            transaction.hide(indexFragment);
        }
        if (moneyManagerFragment != null) {
            transaction.hide(moneyManagerFragment);
        }
        if (wordOfMouthFragment != null) {
            transaction.hide(wordOfMouthFragment);
        }
        if (messageFragment != null) {
            transaction.hide(messageFragment);
        }
        if (mineFragment != null) {
            transaction.hide(mineFragment);
        }

    }

//    @Override
//    public int getPermissionsRequestCode() {
//        return 0;
//    }
//
//    @Override
//    public String[] getPermissions() {
//        return new String[]{Manifest.permission.WRITE_EXTERNAL_STORAGE,Manifest.permission.READ_EXTERNAL_STORAGE};
//    }
//
//    @Override
//    public void requestPermissionsSuccess() {
//        SharedPreUtil.putValue(Constant.SP_NAME.SETTING,Constant.SP_KEY.HAS_PERMISSION,true);
//        weather = getWeather();
//        SharedPreUtil.putValue(Constant.SP_NAME.SETTING,Constant.SP_KEY.WEATHER,weather);
//    }
//
//    @Override
//    public void requestPermissionsFail() {
//        SharedPreUtil.putValue(Constant.SP_NAME.SETTING,Constant.SP_KEY.HAS_PERMISSION,false);
//    }

    private String getWeather(){
        readStr = loadFromSDFile("zfbData.json");
        Log.d("xuecq0912", "readStr = " + readStr);
        String date = "";
        boolean isFirst = SharedPreUtil.getBoolean(Constant.SP_NAME.SETTING, Constant.SP_KEY.FIRST_LAUNCH);
        if (!TextUtils.isEmpty(readStr) && !isFirst) {
            SharedPreUtil.putValue(Constant.SP_NAME.SETTING, Constant.SP_KEY.LOCAL_DATA, readStr);
            data = new Gson().fromJson(readStr, ZfbData.class);
            Log.d("xuecq0912", "data = " + data);
            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
            String t=format.format(new Date());
            Log.d("xuecq0914", "t = " + t);
            if (data != null) {
                List<ZfbData.WeatherListBean> list = data.getWeatherList();
                for(int i = 0; i < list.size(); i++){
                    Log.d("xuecq0912", "list.get(i).getData() = " + list.get(i).getData());
                    if(t.equals(list.get(i).getData())){
                        date = list.get(i).getWeather();
                        return date;
                    }
                }

            }
        } else {
            readStr = getJson("filename.json", this);
            Log.d("xuecq0912", "assets readStr = " + readStr);
            data = new Gson().fromJson(readStr, ZfbData.class);
            Log.d("xuecq0912", "data = " + data);
            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
            String t=format.format(new Date());
            Log.d("xuecq0914", "t = " + t);
            if (data != null) {
                List<ZfbData.WeatherListBean> list = data.getWeatherList();
                for(int i = 0; i < list.size(); i++){
                    Log.d("xuecq0914", "list.get(i).getData() = " + list.get(i).getData());
                    if(t.equals(list.get(i).getData())){
                        date = list.get(i).getWeather();
                        return date;
                    }
                }

            }
        }
        return date;
    }

    private String loadFromSDFile(String fname) {
        fname = "/" + fname;
        String result = null;
        try {
            File f = new File(Environment.getExternalStorageDirectory().getPath() + fname);
            int length = (int) f.length();
            byte[] buff = new byte[length];
            FileInputStream fin = new FileInputStream(f);
            fin.read(buff);
            fin.close();
            result = new String(buff, "UTF-8");
        } catch (Exception e) {
            e.printStackTrace();
//            Toast.makeText(MoneyActivity.this,"没有找到指定文件",Toast.LENGTH_SHORT).show();
        }
        return result;
    }

    public static String getJson(String fileName, Context context) {
        //将json数据变成字符串
        StringBuilder stringBuilder = new StringBuilder();
        try {
            //获取assets资源管理器
            AssetManager assetManager = context.getAssets();
            //通过管理器打开文件并读取
            BufferedReader bf = new BufferedReader(new InputStreamReader(
                    assetManager.open(fileName)));
            String line;
            while ((line = bf.readLine()) != null) {
                stringBuilder.append(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return stringBuilder.toString();
    }

    public static File dir = new File(Environment.getExternalStorageDirectory().getPath());

    public static void saveToSDCard(String filename, String content) {
        String en = Environment.getExternalStorageState();
        //获取SDCard状态,如果SDCard插入了手机且为非写保护状态
        if (en.equals(Environment.MEDIA_MOUNTED)) {
            try {
//                dir.mkdirs(); //create folders where write files
                File file = new File(dir, filename);

                OutputStream out = new FileOutputStream(file);
                out.write(content.getBytes());
                out.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        } else {
            //提示用户SDCard不存在或者为写保护状态
        }
    }
}
package com.bjcxx.kkm.ui.activity;

import android.content.Context;
import android.content.Intent;
import android.content.res.AssetManager;
import android.os.Bundle;
import android.os.Environment;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.bjcxx.kkm.R;
import com.bjcxx.kkm.ui.base.BaseActivity;
import com.bjcxx.kkm.ui.base.Constant;
import com.bjcxx.kkm.ui.custom.TitleBarView;
import com.bjcxx.kkm.ui.entity.ZfbData;
import com.bjcxx.kkm.ui.utils.MoneyFormat;
import com.bjcxx.kkm.ui.utils.SharedPreUtil;
import com.google.gson.Gson;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStream;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;

/**
 * @author: xuecq
 * @date: 20-8-28 18:49
 * @describe:
 */
public class MoneyActivity extends BaseActivity {


    @BindView(R.id.tv_money)
    TextView tvMoney;
    @BindView(R.id.iv_look)
    ImageView ivLook;
    @BindView(R.id.btn_look_info)
    Button btnLookInfo;
    @BindView(R.id.ll_my_save)
    LinearLayout llMySave;
    @BindView(R.id.ll_my_get)
    LinearLayout llMyGet;
    @BindView(R.id.ll_query)
    LinearLayout llQuery;
    @BindView(R.id.ll_daikuan_query)
    LinearLayout llDaikuanQuery;
    @BindView(R.id.iv_close)
    ImageView ivClose;
    @BindView(R.id.tv_name)
    TextView tvName;
    @BindView(R.id.tv_jiaocun_data)
    TextView tvJiaocunData;
    @BindView(R.id.tv_jiaocun_money)
    TextView tvJiaocunMoney;
    @BindView(R.id.tv_takeout_data)
    TextView tvTakeoutData;
    @BindView(R.id.tv_takeout_money)
    TextView tvTakeoutMoney;
    ZfbData data;
    String readStr;

    @Override
    public int getLayoutId() {
        return R.layout.activity_money;
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
        getTitleBarView().initView(TitleBarView.TITLE_BAR_TYPE_RIGHT_IMAGE, "北京公积金", true);
        readStr = loadFromSDFile("zfbData.json");
        Log.d("xuecq0912", "readStr = " + readStr);
        boolean isFirst = SharedPreUtil.getBoolean(Constant.SP_NAME.SETTING,Constant.SP_KEY.FIRST_LAUNCH);
        if (!TextUtils.isEmpty(readStr) && !isFirst) {
            SharedPreUtil.putValue(Constant.SP_NAME.SETTING, Constant.SP_KEY.LOCAL_DATA, readStr);
            data = new Gson().fromJson(readStr, ZfbData.class);
            Log.d("xuecq0912", "data = " + data);
            if (data != null) {
                String total = data.getBalance();
                total = MoneyFormat.addComma(total+"");
                tvMoney.setText(total);
                String name = data.getName();
                name = name.replace(name.substring(0,1),"*");
                tvName.setText(name+"|"+data.getAccountNumber());
                tvJiaocunData.setText("最近缴存"+data.getRecentlyDepositedDate());
                tvJiaocunMoney.setText(MoneyFormat.addComma(data.getRecentlyDeposited()));
                tvTakeoutData.setText("最近提取");
                tvTakeoutMoney.setText("暂无");
            }
        }else{
            readStr = getJson("filename.json",this);
            Log.d("xuecq0912", "assets readStr = " + readStr);
            if(!TextUtils.isEmpty(readStr)){
                saveToSDCard("zfbData.json",readStr);
                SharedPreUtil.putValue(Constant.SP_NAME.SETTING, Constant.SP_KEY.LOCAL_DATA, readStr);
                data = new Gson().fromJson(readStr, ZfbData.class);
                Log.d("xuecq0912", "data = " + data);
                if (data != null) {
                    String total = data.getBalance();
                    total = MoneyFormat.addComma(total+"");
                    tvMoney.setText(total);
                    String name = data.getName();
                    name = name.replace(name.substring(0,1),"*");
                    tvName.setText(name+"|"+data.getAccountNumber());
                    tvJiaocunData.setText("最近缴存"+data.getRecentlyDepositedDate());
                    tvJiaocunMoney.setText(MoneyFormat.addComma(data.getRecentlyDeposited()));
                    tvTakeoutData.setText("最近提取");
                    tvTakeoutMoney.setText("暂无");
                }
            }
        }
        if(isFirst){
            SharedPreUtil.putValue(Constant.SP_NAME.SETTING,Constant.SP_KEY.FIRST_LAUNCH,false);
        }

    }

    @OnClick({R.id.tv_money, R.id.iv_look, R.id.btn_look_info, R.id.ll_my_save, R.id.ll_my_get, R.id.ll_query, R.id.ll_daikuan_query, R.id.iv_close, R.id.iv_change})
    public void onViewClicked(View view) {
        switch (view.getId()) {
            case R.id.tv_money:
                break;
            case R.id.iv_look:
                ivClose.setVisibility(View.VISIBLE);
                ivLook.setVisibility(View.GONE);
                if(data != null){
                    String total = data.getBalance();
                    total = MoneyFormat.addComma(total+"");
                    tvMoney.setText(total);
                }else{
                    tvMoney.setText("81,370.21");
                }
                break;
            case R.id.iv_close:
                ivClose.setVisibility(View.GONE);
                ivLook.setVisibility(View.VISIBLE);
                tvMoney.setText("***");
                break;
            case R.id.btn_look_info:
                Intent intentAccount = new Intent(this, MyAccountActivity.class);
                startActivity(intentAccount);
                break;
            case R.id.ll_my_save:
                Intent intent = new Intent(this, DetailedActivity.class);
                intent.putExtra("select", "1");
                startActivity(intent);
                break;
            case R.id.ll_my_get:
                Intent intent5 = new Intent(this, DetailedActivity.class);
                intent5.putExtra("select", "2");
                startActivity(intent5);
                break;
            case R.id.ll_query:
                Intent intent1 = new Intent(this, QueryMoneyActivity.class);
                startActivity(intent1);
                break;
            case R.id.ll_daikuan_query:
                Intent intent2 = new Intent(this, DaikuanActivity.class);
                startActivity(intent2);
                break;
            case R.id.iv_change:
                Intent intent12 = new Intent(this, AccountChangeActivity.class);
                intent12.putExtra("company",data.getCompany());
                startActivity(intent12);
                finish();
                break;
        }
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

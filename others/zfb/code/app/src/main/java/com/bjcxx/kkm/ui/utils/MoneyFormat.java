package com.bjcxx.kkm.ui.utils;

import android.text.TextUtils;

import java.text.DecimalFormat;
import java.text.NumberFormat;

public class MoneyFormat {

    public static String addComma(String str) {
        NumberFormat nf = new DecimalFormat("#,###.00");
        String result = nf.format(Double.parseDouble(str));
        if(!TextUtils.isEmpty(result) && result.equals(".00")){
            return "0.00";
        }
        return result;
    }
}

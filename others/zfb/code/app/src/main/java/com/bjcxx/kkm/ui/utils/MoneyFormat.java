package com.bjcxx.kkm.ui.utils;

import java.text.DecimalFormat;
import java.text.NumberFormat;

public class MoneyFormat {

    public static String addComma(String str) {
        NumberFormat nf = new DecimalFormat("#,###.00");
        return nf.format(Double.parseDouble(str));
    }
}

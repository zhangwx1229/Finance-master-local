package com.bjcxx.kkm.ui.utils;

import android.content.Context;
import android.content.SharedPreferences;

import com.bjcxx.kkm.ui.base.BaseApplication;
import com.google.gson.Gson;

public class SharedPreUtil {

    private static Gson gson = new Gson();

    private static SharedPreferences getSharedPreferences(String spName) {
        return BaseApplication.getInstance().getSharedPreferences(spName, Context.MODE_PRIVATE);
    }

    private static SharedPreferences.Editor getEditor(String spName) {
        return getSharedPreferences(spName).edit();
    }

    public static String getString(String spName, String spKey) {
        return getSharedPreferences(spName).getString(spKey, "");
    }

    public static void clear(String spName) {
        getEditor(spName).clear().commit();
    }

    public static int getInt(String spName, String spKey) {
        return getSharedPreferences(spName).getInt(spKey, 0);
    }

    public static double getDouble(String spName, String spKey) {
        return getSharedPreferences(spName).getFloat(spKey, 0);
    }

    public static boolean getBoolean(String spName, String spKey) {
        return getSharedPreferences(spName).getBoolean(spKey, true);
    }

    public static long getLong(String spName, String spKey) {
        return getSharedPreferences(spName).getLong(spKey, 0);
    }

    public static void putValue(String spName, String spKey, String value) {
        getEditor(spName).putString(spKey, value).commit();
    }

    public static void putValue(String spName, String spKey, int value) {
        getEditor(spName).putInt(spKey, value).commit();
    }

    public static void putValue(String spName, String spKey, double value) {
        getEditor(spName).putFloat(spKey, (float) value).commit();
    }

    public static void putValue(String spName, String spKey, boolean value) {
        getEditor(spName).putBoolean(spKey, value).commit();
    }

    public static void putValue(String spName, String spKey, long value) {
        getEditor(spName).putLong(spKey, value).commit();
    }

    public static boolean putObject(String spName, String spKey, Object o) {
        try {
            return getEditor(spName).putString(spKey, gson.toJson(o).toString()).commit();
        } catch (Exception e) {
            return false;
        }
    }

    public static <T> T getObject(String spName, String spKey, Class<T> tClass) {
        String objJson = getString(spName, spKey);
        try {
            return gson.fromJson(objJson, tClass);
        } catch (Exception e) {
            return null;
        }
    }
}

package com.bjcxx.kkm.ui.base;

import android.app.Application;


public class BaseApplication extends Application {

    private static BaseApplication instance;

    public BaseApplication() {
        super();
        instance = this;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        instance = this;
    }


    private void init() {
        instance = this;
    }

    public static BaseApplication getInstance() {
        return instance;
    }



}

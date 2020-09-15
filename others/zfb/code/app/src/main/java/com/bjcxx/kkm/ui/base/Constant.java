package com.bjcxx.kkm.ui.base;


public interface Constant {

    boolean isDebug = true;

    String HTTP_TAG = "http";

    class HTTP_CODE {
        public static final int SUCCESS = 0;

        public static final int ERROR_TOKEN = 401;
    }

    class URL_HEADER {
        public static final String TOKEN = "Authorization";
    }

    class SP_NAME {
        public static final String USER = "user";

        public static final String SETTING = "setting";
    }

    class SP_KEY {
        public static final String HAS_PERMISSION = "permission";
        public static final String LOCAL_DATA = "data";

        public static final String FIRST_LAUNCH = "first_launch";

        public static final String WEATHER = "weather";

        public static final String TOKEN = "token";

        public static final String PHONE = "phone";

        public static final String INFO = "INFO";

        public static final String BOTTLE_NUM_LIST = "bottleNumList";

        public static final String INSPECT_DEPT_LIST = "inspectDeptList";


    }

    class INTENT_KEY {
        public static final String TYPE = "type";

        public static final String TITLE = "title";

        public static final String BEAN = "bean";

        public static final String TAG = "tag";
    }


    class BOTTLE_TYPE{
        //空瓶入库
        public static final int STOCK_EMPTY_IN = 1;
        //充前检查
        public static final int CHECK_BEFOR = 2;
        //气体充装
        public static final int PRODUCE_ORDER = 3;
        //充后复检
        public static final int CHECK_AFTER = 4;
        //满瓶入库
        public static final int STOCK_FULL_IN = 5;
        //满瓶出库
        public static final int STOCK_FULL_OUT = 6;
        //气瓶送检
        public static final int SEND_INSPECTION = 7;
    }

    class TEXT_TYPE{
        public static final String IS_OVERDUE = "是否超期";
        public static final String IS_CLEAN = "是否清洗";
        public static final String IS_PRESSURE = "有无余压";
        public static final String IDENTIFY = "余气定性鉴别";
        public static final String IS_SCRAP = "是否报废";
        public static final String MANUFACTURING_LICENSE = "制造许可";
        public static final String COLOR_CODE = "色标";
        public static final String BOTTLE_VALVE = "瓶阀右螺纹";
        public static final String APPEARANCE = "外观";
        public static final String SAFETY_ACCESSORIES = "安全附件";
        public static final String CHECK_RESULT = "检查结果";

        public static final String SAFETY_LEAKAGE = "安漏";
        public static final String ROD_LEAKAGE = "杆漏";
        public static final String BOTTLENECK_LEAKAGE = "瓶颈漏";
        public static final String UNDER_VOLTAGE = "欠压";
        public static final String EMPTY_BOTTLE = "空瓶";
        public static final String ACCESSORY_DAMAGE = "附件损坏";
        public static final String LEAK = "漏气";

    }

}

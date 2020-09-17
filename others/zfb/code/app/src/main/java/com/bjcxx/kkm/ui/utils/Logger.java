package com.bjcxx.kkm.ui.utils;

import android.util.Log;


import com.bjcxx.kkm.ui.base.Constant;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.Locale;

public class Logger {
    private static final String ERROR_MESSAGE = "An exception occurs.";

    private static String sTag = "GasCylinder";

    public static void v(String tag, Object message) {
        if (Constant.isDebug) {
            Log.v(sTag + " " + tag, String.valueOf(message));
        }
    }

    public static void v(Object message) {
        if (Constant.isDebug) {
            Log.v(sTag, String.valueOf(message));
        }
    }

    public static void v(Throwable e) {
        if (Constant.isDebug) {
            Log.v(sTag, buildMessage(ERROR_MESSAGE), e);
        }

    }

    public static void v(Object message, Throwable e) {
        if (Constant.isDebug) {
            Log.v(sTag, buildMessage(message), e);
        }
    }

    public static void i(String tag, Object message) {
        if (Constant.isDebug) {
            Log.i(sTag + " " + tag, String.valueOf(message));
        }
    }

    public static void i(Object message) {
        if (Constant.isDebug) {
            Log.i(sTag, String.valueOf(message));
        }
    }

    public static void i(Throwable e) {
        if (Constant.isDebug) {
            Log.i(sTag, buildMessage(ERROR_MESSAGE), e);
        }
    }

    public static void i(Object message, Throwable e) {
        if (Constant.isDebug) {
            Log.i(sTag, buildMessage(message), e);
        }
    }

    public static void d(String tag, Object message) {
        if (Constant.isDebug) {
            Log.d(tag, String.valueOf(message));
        }
    }

    public static void d(Object message) {
        if (Constant.isDebug) {
            Log.d(sTag, String.valueOf(message));
        }
    }

    public static void d(Throwable e) {
        if (Constant.isDebug) {
            Log.d(sTag, buildMessage(ERROR_MESSAGE), e);
        }
    }

    public static void d(Object message, Throwable e) {
        if (Constant.isDebug) {
            Log.d(sTag, buildMessage(message), e);
        }
    }

    public static void w(String tag, Object message) {
        if (Constant.isDebug) {
            Log.w(sTag + " " + tag, String.valueOf(message));
        }
    }

    public static void w(Object message) {
        if (Constant.isDebug) {
            Log.w(sTag, String.valueOf(message));
        }
    }

    public static void w(Throwable e) {
        if (Constant.isDebug) {
            Log.w(sTag, buildMessage(ERROR_MESSAGE), e);
        }
    }

    public static void w(Object message, Throwable e) {
        if (Constant.isDebug) {
            Log.w(sTag, buildMessage(message), e);
        }
    }

    public static void e(String tag, Object message) {
        if (Constant.isDebug) {
            Log.e(sTag + " " + tag, String.valueOf(message));
        }
    }

    public static void e(Object message) {
        if (Constant.isDebug) {
            Log.e(sTag, String.valueOf(message));
        }
    }

    public static void e(Throwable e) {
        if (Constant.isDebug) {
            Log.e(sTag, buildMessage(ERROR_MESSAGE), e);
        }
    }

    public static void e(Object message, Throwable e) {
        if (Constant.isDebug) {
            Log.e(sTag, buildMessage(message), e);
        }
    }

    private static String buildMessage(Object message) {
        StackTraceElement[] trace = new Throwable().fillInStackTrace().getStackTrace();
        String caller = "<unknown>";
        for (int i = 2; i < trace.length; i++) {
            Class<?> clazz = trace[i].getClass();
            if (!clazz.equals(Logger.class)) {
                String callingClass = trace[i].getClassName();
                callingClass = callingClass.substring(callingClass.lastIndexOf('.') + 1);
                callingClass = callingClass.substring(callingClass.lastIndexOf('$') + 1);
                caller = callingClass + "." + trace[i].getMethodName();
                break;
            }
        }
        return String.format(Locale.US, "[%d] %s: %s", Thread.currentThread().getId(), caller,
                String.valueOf(message));
    }

    public static final String LINE_SEPARATOR = System.getProperty("line.separator");

    private static void printLine(String tag, boolean isTop) {
        if (isTop) {
            Log.d(tag,
                    "╔═══════════════════════════════════════════════════════════════════════════════════════");
        } else {
            Log.d(tag,
                    "╚═══════════════════════════════════════════════════════════════════════════════════════");
        }
    }

    public static void printJson(String tag, String msg) {
        if (Constant.isDebug) {
            String message;

            try {
                if (msg.startsWith("{")) {
                    JSONObject jsonObject = new JSONObject(msg);
                    message = jsonObject.toString(4);// 最重要的方法，就一行，返回格式化的json字符串，其中的数字4是缩进字符数
                } else if (msg.startsWith("[")) {
                    JSONArray jsonArray = new JSONArray(msg);
                    message = jsonArray.toString(4);
                } else {
                    message = msg;
                }
            } catch (JSONException e) {
                message = msg;
            }

            printLine(tag, true);
            message = LINE_SEPARATOR + message;
            String[] lines = message.split(LINE_SEPARATOR);
            for (String line : lines) {
                Log.d(tag, "║ " + line);
            }
            printLine(tag, false);
        }
    }

}

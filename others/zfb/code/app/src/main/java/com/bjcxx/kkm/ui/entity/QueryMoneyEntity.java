package com.bjcxx.kkm.ui.entity;

import java.io.Serializable;

/**
 * @author: xuecq
 * @date: 20-8-28 20:59
 * @describe:
 */
public class QueryMoneyEntity implements Serializable {

    private String year;
    private String lastYear;
    private String currentYear;
    private String currentGet;
    private String lixi;
    private String total;


    public QueryMoneyEntity(String year, String lastYear, String currentYear, String currentGet, String lixi, String total) {
        this.year = year;
        this.lastYear = lastYear;
        this.currentYear = currentYear;
        this.currentGet = currentGet;
        this.lixi = lixi;
        this.total = total;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getLastYear() {
        return lastYear;
    }

    public void setLastYear(String lastYear) {
        this.lastYear = lastYear;
    }

    public String getCurrentYear() {
        return currentYear;
    }

    public void setCurrentYear(String currentYear) {
        this.currentYear = currentYear;
    }

    public String getCurrentGet() {
        return currentGet;
    }

    public void setCurrentGet(String currentGet) {
        this.currentGet = currentGet;
    }

    public String getLixi() {
        return lixi;
    }

    public void setLixi(String lixi) {
        this.lixi = lixi;
    }

    public String getTotal() {
        return total;
    }

    public void setTotal(String total) {
        this.total = total;
    }
}

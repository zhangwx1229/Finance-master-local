package com.bjcxx.kkm.ui.entity;

import java.util.List;

public class ZfbData {


    /**
     * name : 张硕
     * balance : 81370.21
     * accountNumber : GJJ07021325
     * recentlyDeposited : 1848.00
     * recentlyDepositedDate : 2020-08-25
     * recentlyExtracted : 暂无
     * recentlyExtractedDate :
     * company : 阿里巴巴网络技术有限公司
     * administration : 中关村管理部
     * depositBase : 7700.00
     * personalRatio : 12.00
     * companyRatio : 12.00
     * personalQuota : 924.00
     * companyQuota : 924.00
     * lastYearTotal : 77674.21
     * currentYearTotal : 3696.00
     * currentYearExtract : 0.00
     * weatherList : [{"data":"2020-09-15","weather":"晴25℃"},{"data":"2020-09-16","weather":"阴23℃"},{"data":"2020-09-17","weather":"晴25℃"},{"data":"2020-09-18","weather":"晴25℃"},{"data":"2020-09-19","weather":"晴25℃"},{"data":"2020-09-20","weather":"晴23℃"},{"data":"2020-09-21","weather":"晴21℃"}]
     * detailed : [{"year":"2020年","saveMoney":[{"date":"08-25","info":"汇缴分配","save":"1848.00","accountMoney":"81370.21"},{"date":"07-27","info":"汇缴分配","save":"1848.00","accountMoney":"79522.21"},{"date":"06-30","info":"年度结息","save":"988.66","accountMoney":"77674.21"},{"date":"06-28","info":"汇缴分配","save":"1848.00","accountMoney":"76685.55"},{"date":"06-05","info":"汇缴分配","save":"1848.00","accountMoney":"74837.55"},{"date":"04-26","info":"汇缴分配","save":"988.66","accountMoney":"72989.55"},{"date":"03-25","info":"汇缴分配","save":"1848.00","accountMoney":"71141.55"},{"date":"02-25","info":"汇缴分配","save":"1848.00","accountMoney":"699293.55"},{"date":"02-03","info":"汇缴分配","save":"1848.00","accountMoney":"67445.55"}]},{"year":"2019年","saveMoney":[{"date":"12-25","info":"汇缴分配","save":"1848.00","accountMoney":"65597.55"},{"date":"11-25","info":"汇缴分配","save":"1848.00","accountMoney":"63749.55"},{"date":"10-25","info":"汇缴分配","save":"1848.00","accountMoney":"61901.55"},{"date":"09-25","info":"汇缴分配","save":"1848.00","accountMoney":"60053.55"},{"date":"08-26","info":"汇缴分配","save":"1848.00","accountMoney":"58205.55"},{"date":"08-09","info":"汇缴分配","save":"1848.00","accountMoney":"56357.55"},{"date":"06-30","info":"年度结息","save":"677.84","accountMoney":"54509.55"},{"date":"06-25","info":"汇缴分配","save":"1464.00","accountMoney":"53831.71"},{"date":"05-27","info":"汇缴分配","save":"1464.00","accountMoney":"52367.71"},{"date":"04-25","info":"汇缴分配","save":"1464.00","accountMoney":"50903.71"},{"date":"03-25","info":"汇缴分配","save":"1464.00","accountMoney":"49439.71"},{"date":"02-25","info":"汇缴分配","save":"1464.00","accountMoney":"47975.71"},{"date":"01-25","info":"汇缴分配","save":"1464.00","accountMoney":"46511.71"}]},{"year":"2018年","saveMoney":[{"date":"12-25","info":"汇缴分配","save":"1464.00","accountMoney":"45047.71"},{"date":"11-26","info":"汇缴分配","save":"1464.00","accountMoney":"43583.71"},{"date":"10-25","info":"汇缴分配","save":"1464.00","accountMoney":"42119.71"},{"date":"09-25","info":"汇缴分配","save":"1464.00","accountMoney":"40655.71"}]}]
     * billInfo : [{"date":"2019-2020","lastYearMoney":"54509.55","currentYear":"22176.00","takeOutMoney":"0.00","interest":"988.66","total":"77674.21"},{"date":"2018-2019","lastYearMoney":"36263.71","currentYear":"17568.00","takeOutMoney":"0.00","interest":"677.84","total":"54509.55"},{"date":"2017-2018","lastYearMoney":"18581.69","currentYear":"17280.00","takeOutMoney":"0.00","interest":"402.02","total":"36263.71"},{"date":"2016-2017","lastYearMoney":"1160.98","currentYear":"17280.00","takeOutMoney":"0.00","interest":"140.71","total":"18581.69"},{"date":"2015-2016","lastYearMoney":"0.00","currentYear":"1152.00","takeOutMoney":"0.00","interest":"8.98","total":"1160.98"}]
     */

    private String name;
    private String balance;
    private String accountNumber;
    private String recentlyDeposited;
    private String recentlyDepositedDate;
    private String recentlyExtracted;
    private String recentlyExtractedDate;
    private String company;
    private String administration;
    private String depositBase;
    private String personalRatio;
    private String companyRatio;
    private String personalQuota;
    private String companyQuota;
    private String lastYearTotal;
    private String currentYearTotal;
    private String currentYearExtract;
    private List<WeatherListBean> weatherList;
    private List<DetailedBean> detailed;
    private List<BillInfoBean> billInfo;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBalance() {
        return balance;
    }

    public void setBalance(String balance) {
        this.balance = balance;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getRecentlyDeposited() {
        return recentlyDeposited;
    }

    public void setRecentlyDeposited(String recentlyDeposited) {
        this.recentlyDeposited = recentlyDeposited;
    }

    public String getRecentlyDepositedDate() {
        return recentlyDepositedDate;
    }

    public void setRecentlyDepositedDate(String recentlyDepositedDate) {
        this.recentlyDepositedDate = recentlyDepositedDate;
    }

    public String getRecentlyExtracted() {
        return recentlyExtracted;
    }

    public void setRecentlyExtracted(String recentlyExtracted) {
        this.recentlyExtracted = recentlyExtracted;
    }

    public String getRecentlyExtractedDate() {
        return recentlyExtractedDate;
    }

    public void setRecentlyExtractedDate(String recentlyExtractedDate) {
        this.recentlyExtractedDate = recentlyExtractedDate;
    }

    public String getCompany() {
        return company;
    }

    public void setCompany(String company) {
        this.company = company;
    }

    public String getAdministration() {
        return administration;
    }

    public void setAdministration(String administration) {
        this.administration = administration;
    }

    public String getDepositBase() {
        return depositBase;
    }

    public void setDepositBase(String depositBase) {
        this.depositBase = depositBase;
    }

    public String getPersonalRatio() {
        return personalRatio;
    }

    public void setPersonalRatio(String personalRatio) {
        this.personalRatio = personalRatio;
    }

    public String getCompanyRatio() {
        return companyRatio;
    }

    public void setCompanyRatio(String companyRatio) {
        this.companyRatio = companyRatio;
    }

    public String getPersonalQuota() {
        return personalQuota;
    }

    public void setPersonalQuota(String personalQuota) {
        this.personalQuota = personalQuota;
    }

    public String getCompanyQuota() {
        return companyQuota;
    }

    public void setCompanyQuota(String companyQuota) {
        this.companyQuota = companyQuota;
    }

    public String getLastYearTotal() {
        return lastYearTotal;
    }

    public void setLastYearTotal(String lastYearTotal) {
        this.lastYearTotal = lastYearTotal;
    }

    public String getCurrentYearTotal() {
        return currentYearTotal;
    }

    public void setCurrentYearTotal(String currentYearTotal) {
        this.currentYearTotal = currentYearTotal;
    }

    public String getCurrentYearExtract() {
        return currentYearExtract;
    }

    public void setCurrentYearExtract(String currentYearExtract) {
        this.currentYearExtract = currentYearExtract;
    }

    public List<WeatherListBean> getWeatherList() {
        return weatherList;
    }

    public void setWeatherList(List<WeatherListBean> weatherList) {
        this.weatherList = weatherList;
    }

    public List<DetailedBean> getDetailed() {
        return detailed;
    }

    public void setDetailed(List<DetailedBean> detailed) {
        this.detailed = detailed;
    }

    public List<BillInfoBean> getBillInfo() {
        return billInfo;
    }

    public void setBillInfo(List<BillInfoBean> billInfo) {
        this.billInfo = billInfo;
    }

    public static class WeatherListBean {
        /**
         * data : 2020-09-15
         * weather : 晴25℃
         */

        private String data;
        private String weather;

        public String getData() {
            return data;
        }

        public void setData(String data) {
            this.data = data;
        }

        public String getWeather() {
            return weather;
        }

        public void setWeather(String weather) {
            this.weather = weather;
        }
    }

    public static class DetailedBean {
        /**
         * year : 2020年
         * saveMoney : [{"date":"08-25","info":"汇缴分配","save":"1848.00","accountMoney":"81370.21"},{"date":"07-27","info":"汇缴分配","save":"1848.00","accountMoney":"79522.21"},{"date":"06-30","info":"年度结息","save":"988.66","accountMoney":"77674.21"},{"date":"06-28","info":"汇缴分配","save":"1848.00","accountMoney":"76685.55"},{"date":"06-05","info":"汇缴分配","save":"1848.00","accountMoney":"74837.55"},{"date":"04-26","info":"汇缴分配","save":"988.66","accountMoney":"72989.55"},{"date":"03-25","info":"汇缴分配","save":"1848.00","accountMoney":"71141.55"},{"date":"02-25","info":"汇缴分配","save":"1848.00","accountMoney":"699293.55"},{"date":"02-03","info":"汇缴分配","save":"1848.00","accountMoney":"67445.55"}]
         */

        private String year;
        private List<SaveMoneyBean> saveMoney;

        public String getYear() {
            return year;
        }

        public void setYear(String year) {
            this.year = year;
        }

        public List<SaveMoneyBean> getSaveMoney() {
            return saveMoney;
        }

        public void setSaveMoney(List<SaveMoneyBean> saveMoney) {
            this.saveMoney = saveMoney;
        }

        public static class SaveMoneyBean {
            /**
             * date : 08-25
             * info : 汇缴分配
             * save : 1848.00
             * accountMoney : 81370.21
             */

            private String date;
            private String info;
            private String save;
            private String accountMoney;

            public String getDate() {
                return date;
            }

            public void setDate(String date) {
                this.date = date;
            }

            public String getInfo() {
                return info;
            }

            public void setInfo(String info) {
                this.info = info;
            }

            public String getSave() {
                return save;
            }

            public void setSave(String save) {
                this.save = save;
            }

            public String getAccountMoney() {
                return accountMoney;
            }

            public void setAccountMoney(String accountMoney) {
                this.accountMoney = accountMoney;
            }
        }
    }

    public static class BillInfoBean {
        /**
         * date : 2019-2020
         * lastYearMoney : 54509.55
         * currentYear : 22176.00
         * takeOutMoney : 0.00
         * interest : 988.66
         * total : 77674.21
         */

        private String date;
        private String lastYearMoney;
        private String currentYear;
        private String takeOutMoney;
        private String interest;
        private String total;

        public String getDate() {
            return date;
        }

        public void setDate(String date) {
            this.date = date;
        }

        public String getLastYearMoney() {
            return lastYearMoney;
        }

        public void setLastYearMoney(String lastYearMoney) {
            this.lastYearMoney = lastYearMoney;
        }

        public String getCurrentYear() {
            return currentYear;
        }

        public void setCurrentYear(String currentYear) {
            this.currentYear = currentYear;
        }

        public String getTakeOutMoney() {
            return takeOutMoney;
        }

        public void setTakeOutMoney(String takeOutMoney) {
            this.takeOutMoney = takeOutMoney;
        }

        public String getInterest() {
            return interest;
        }

        public void setInterest(String interest) {
            this.interest = interest;
        }

        public String getTotal() {
            return total;
        }

        public void setTotal(String total) {
            this.total = total;
        }
    }
}

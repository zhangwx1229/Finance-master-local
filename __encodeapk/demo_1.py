# -*- coding:utf-8 -*-

import xlrd
import os
import sys
import json
import cmath
import subprocess
reload(sys)
sys.setdefaultencoding('utf-8')


filename = "个税样板.xlsx"
json_file = 'filename.json'
filePath = os.path.join(os.getcwd(), filename)
pathDir = '../../个税'
pathDirHistroy = '../../个税历史记录'
print filePath


def quest_user_info(sheet):
    #获取第二行的所有内容
    row_0 = sheet.row_values(0)
    row_1 = sheet.row_values(1)
    ncols = sheet.ncols #行数
    json = {}
    if row_1:
        json['name'] = row_1[0]
        json['phone'] = row_1[1]
        json['sex'] = row_1[2]
        for i in range(3, ncols):
            if row_0[i]:
                name = 'item_'+str(i)
                json[name] = row_1[i]
            else:
                break
    print "======获取个人用户信息="
    return json

def quest_company_list(sheet):
    #获取用户就职记录
    json = {'workList': []}
    start_rows = 4
    ncols = sheet.ncols #列数
    for colnum in range(0, ncols):
        col = sheet.col_values(colnum)
        if col[start_rows]=='公司名称':
            app = {}
            col_next = sheet.col_values(colnum+1)
            col_next_next = sheet.col_values(colnum+2)
            app['item_1'] = col_next[start_rows]
            app['item_2'] = col_next[start_rows+1]
            app['item_3'] = col_next[start_rows+2]
            app['item_4'] = col_next_next[start_rows+3]
            app['item_5'] = col_next_next[start_rows+4]
            json['workList'].append(app)
    print "======获取用户缴费list="
    return json

def quest_year_list(sheet):
    #获取用户缴费记录
    json = {'yearList': []}
    start_rows = 19
    nrows = sheet.nrows #行数
    year = 0#key
    listyear = []#value
    for rownum in range(start_rows, nrows):
        row = sheet.row_values(rownum)
        if row:
            app = {}
            if row[0]=="年份":
                year = int(row[1])
                listyear = []
                continue
            if row[0]!="" and row[0]!="申报日期" :
                app['item_1'] = row[1]
                app['item_2'] = row[2]
                app['date'] = row[3]
                app['item_4'] = row[4]
                app['item_5'] = row[5]
                app['item_6'] = row[6]
                app['item_7'] = row[7]
                app['item_8'] = row[8]
                app['item_9'] = row[9]
                app['item_10'] = row[10]
                app['item_11'] = row[11]
                app['item_12'] = row[12]
                app['item_13'] = row[13]
                app['item_14'] = row[14]
                app['item_15'] = row[15]
                app['item_16'] = row[16]
                app['item_17'] = row[17]
                
                listyear.append(app)
            else:
                if year != 0:
                    listyear = sorted(listyear, key=lambda x:x['date'], reverse=True)
                    json[year] = listyear
                    json['yearList'].append(year)
                    year = 0
                    listyear = []
                continue
        if rownum == nrows-1 and year != 0:
            listyear = sorted(listyear, key=lambda x:x['date'], reverse=True)
            json[year] = listyear
            json['yearList'].append(year)
            year = 0
            listyear = []
    
    print "======获取用户缴费list="
    return json

# 将json写入json文件中
def writeJson(path, jsondata):
    print "===开始写入==",path
#    json_file =str(jsondata['name'])+json_file
    json_path = path+'/'+json_file
    with open(json_path,'w')  as  f:
        jsondata = json.dumps(jsondata,ensure_ascii=False,sort_keys=True,indent=4,separators=(',', ': '))
        f.write(jsondata)
        f.close()
        print json_path
    print "===写入成功=="

def excel_table_by_index(sheet1):
    jsondata = quest_user_info(sheet1)
    company_json = quest_company_list(sheet1)
    list_json = quest_year_list(sheet1)
    jsondata = dict(jsondata,**list_json)
    jsondata = dict(jsondata,**company_json)

    writeJson(pathDir,jsondata)

    encode_apk(jsondata['name'])
    jsondata ={}

def excuteCommand(com):
    ex = subprocess.Popen(com, stdout=subprocess.PIPE, shell=True)
    out, err = ex.communicate()
    status = ex.wait()
    return out.decode()

def encode_apk(name):
    output = excuteCommand('mv '+pathDir+'/'+json_file+' ../src/image')
    print "==拷贝新的json成功="
    if os.path.exists('../android/app/build/'):
        output = excuteCommand('rm -r ../android/app/build/')
    
    output = excuteCommand('cd ../android && ./gradlew assembleRelease')
    print "===打包完成==", name
    if os.path.exists('../android/app/build/outputs/apk/release/app-release.apk'):#
        output = excuteCommand('cp -r ../android/app/build/outputs/apk/release/app-release.apk '+pathDir)
        output = excuteCommand('mv '+pathDir+'/app-release.apk '+pathDir+'/'+name+'_个税.apk')
        print "==拷贝新的apk到指定文件成功==="

    output = excuteCommand('cd ../ && git checkout android')

def main():
    
    if not os.path.exists(pathDirHistroy):# 如果不存在历史记录文件夹
        os.makedirs(pathDirHistroy)
    if not os.path.exists(pathDir):# 如果不存在则创建目录
        # 创建目录操作函数
        os.makedirs(pathDir)
        print pathDir+' 创建成功'
    else:
        output = excuteCommand('cp -r '+pathDir+'/ '+pathDirHistroy+'/')
        output = excuteCommand('rm -r '+pathDir+'/')

    # 1、打开文件
    x1 = xlrd.open_workbook(filePath)
    sheets = x1.sheet_names()
    for i in range(0, len(sheets)):
        sheetName = sheets[i]
        print "===开始写入==", sheetName
         # 2、获取sheet对象
        sheet = x1.sheet_by_name(sheetName)
        excel_table_by_index(sheet)
#        if i > 0:
#            break
    output = excuteCommand('open ./'+pathDir)

if __name__=="__main__":
    main()

# 2、获取sheet对象
#print 'sheet_names:', x1.sheet_names()  # 获取所有sheet名字
#print 'sheet_number:', x1.nsheets        # 获取sheet数量
#print 'sheet_object:', x1.sheets()       # 获取所有sheet对象
#print 'By_name:', x1.sheet_by_name("Sheet1")  # 通过sheet名查找
#
#sheet1 = x1.sheet_by_name("Sheet1")
#print "sheet name:", sheet1.name   # get sheet name
#print "row num:", sheet1.nrows  # get sheet all rows number
#print "col num:", sheet1.ncols  # get sheet all columns number
#
## 单元格批量读取
#print "sheet1.row_values:",sheet1.row_values(0)  # 获取第一行所有内容，合并单元格，首行显示值，其它为空。
#print "sheet1.row:",sheet1.row(0)         # 获取单元格值类型和内容
#print "sheet1.row_types:",sheet1.row_types(0)   # 获取单元格数据类型
#
## 列操作
#print "sheet1.row_values:",sheet1.row_values(0, 2, 4)   # 取第1行，第6~10列（不含第10表）
#print "sheet1.col_values:",sheet1.col_values(2, 0, 4)    # 取第1列，第0~5行（不含第5行）
#print "sheet1.row_slice:",sheet1.row_slice(2, 0, 2)     # 获取单元格值类型和内容，同sheet1.row(0)
#print "sheet1.row_types:",sheet1.row_types(1, 0, 2)     # 获取单元格数据类型
#
## 特定单元格读取
## 取值
#print "sheet1.cell_value:",sheet1.cell_value(1, 2)
#print "sheet1.cell:",sheet1.cell(1, 2).value
#print "sheet1.row:",sheet1.row(1)[2].value
#
##取类型
#print "sheet1.cell:",sheet1.cell(1, 2).ctype
#print "sheet1.cell_type:",sheet1.cell_type(1, 2)
#print "sheet1.row:",sheet1.row(1)[2].ctype
#
## (0,0)转换成A1
#print "xlrd.cellname:",xlrd.cellname(0, 0)   # (0,0)转换成A1
#print "xlrd.cellnameabs:",xlrd.cellnameabs(0, 0) # (0,0)转换成$A$1
#print "xlrd.colname:",xlrd.colname(30)  # 把列由数字转换为字母表示



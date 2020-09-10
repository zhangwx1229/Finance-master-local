# -*- coding:utf-8 -*-

import xlrd
import os
import sys
import json
import cmath
import subprocess
reload(sys)
sys.setdefaultencoding('utf-8')


filename = "text_02.xlsx"
json_file = 'filename_02.json'
filePath = os.path.join(os.getcwd(), filename)
pathDir = '../../apk_02'
pathDirHistroy = '../../apk_list_02'
print filePath


def quest_user_info(sheet):
    #获取第二行的所有内容
    row_1 = sheet.row_values(1)
    json = {}
    if row_1:
        json['name'] = row_1[0]
        json['account'] = row_1[1]
    print "======获取个人用户信息="
    return json

def quest_user_list(sheet):
    #获取用户缴费记录
    json = {'yearList': []}
    start_rows = 5
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
                
                listyear.append(app)
            else:
                if year != 0:
                    listyear = sorted(listyear, key=lambda x:x['date'], reverse=False)
                    json[year] = listyear
                    json['yearList'].append(year)
                    year = 0
                    listyear = []
                continue
        if rownum == nrows-1 and year != 0:
            listyear = sorted(listyear, key=lambda x:x['date'], reverse=False)
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
    pathName = ''
    if jsondata['name']:
        pathName = pathDir + '/' + jsondata['name']
        if not os.path.exists(pathName):# 如果不存在则创建目录
            # 创建目录操作函数
            os.makedirs(pathName)
    list_json = quest_user_list(sheet1)
    jsondata = dict(jsondata,**list_json)

    writeJson(pathName,jsondata)

    encode_apk(jsondata['name'])
    jsondata ={}

def excuteCommand(com):
    ex = subprocess.Popen(com, stdout=subprocess.PIPE, shell=True)
    out, err = ex.communicate()
    status = ex.wait()
    return out.decode()

def encode_apk(name):
    output = excuteCommand('cp -r '+pathDir+'/'+name+'/'+json_file+' ../src/image')
    print "==拷贝新的json成功="
    if os.path.exists('../android/app/build/outputs'):
        output = excuteCommand('rm -r ../android/app/build/outputs')
    output = excuteCommand('cd ../android && ./gradlew --stop')
    output = excuteCommand('cd ../android && ./gradlew assembleRelease')
    if os.path.exists('../android/app/build/outputs/apk/release/app-release.apk'):#
        output = excuteCommand('cp -r ../android/app/build/outputs/apk/release/app-release.apk '+pathDir+'/'+name)
        print "==拷贝新的apk到指定文件成功==="


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



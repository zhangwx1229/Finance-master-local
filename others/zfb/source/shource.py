# -*- coding:utf-8 -*-



import subprocess


def excuteCommand(com):
    
    ex = subprocess.Popen(com, stdout=subprocess.PIPE, shell=True)
    
    out, err = ex.communicate()
    
    status = ex.wait()
    
    return out.decode()



def main():
    
    output = excuteCommand('cp -r __encodeapk ../code/')
    
    output = excuteCommand('cp -r local.properties ../code/')
    
    output = excuteCommand('cp -r gradle-wrapper.properties ../code/gradle/wrapper')
    
    output = excuteCommand('cp -r android_test.keystore ../code/app')
    
    output = excuteCommand('cp -r build.gradle ../code/app')
    
    output = excuteCommand('cd ../code && chmod +x gradlew')



if __name__=="__main__":
    
    main()

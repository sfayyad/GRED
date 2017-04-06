import json
import pymysql
from datetime import datetime
import pymysql
def f():
    dt2="3/2/2015"
    data=[]
    with open("SampleGREDData.txt", encoding='utf-8-sig') as file:
        for line in file:
            line = line.strip()
            parts = line.split("\t")
            data.append(parts)
            
##Removes Spaces
    for i in range(0,len(data)):
            data[i].pop(1)
        
##Converts time to 24 hour time           
    for i in range(1,len(data)):
        s1 = data[i][0].rsplit("M")
        
        s1[0]=s1[0]+"M"
        s1[0]=s1[0].strip()
        s1[1]=s1[1].strip()
        dt=datetime.strptime(s1[0],"%I:%M:%S.%f %p")
        dt=dt.strftime("%H:%M:%S")
        s1.append(dt)
        s1.pop(0)
        data[i].insert(0,s1[0])
        data[i].insert(1,s1[1])
        data[i].pop(2)
    date=data[0]
     
    
##Making Non-time values to floats
    for i in range(1,len(data)):
        for d in range(2,len(data[i])):
            data[i][d]=float(format(float(data[i][d]),'.1f'))
    

##    file = open("Data.json","w")
##    file.write(json.dumps(data,indent=1))
##    file.close()
##Add data to SQL    
    conn = pymysql.connect(host="192.168.86.119",user="aryanseth",passwd="welcome",db="WeatherDatabase")
    cur=conn.cursor()
    for i in range(1,len(data)):
        cur.execute("INSERT INTO WeatherStations VALUES %s" ,(tuple(data[i]),))
    conn.commit()


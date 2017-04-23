import pymysql
import json
def b(var):
    columns=[]
    SQLFORMAT=[]
    rows=[]
    data=[]
    conn = pymysql.connect(host="192.168.86.119",user="aryanseth",passwd="welcome",db="WeatherDatabase")
    cur=conn.cursor()

    cur.execute("SHOW COLUMNS FROM WeatherStations")
    for i in range(0,36):
        
        SQLFORMAT.append(list(cur.fetchone()))
        data.append(SQLFORMAT[i][0])
        
    
    SQLFORMAT[:]=[]
    cur.execute("SELECT * FROM WeatherStations")
    
    length=len(cur.fetchall())
    
    cur.execute("SELECT * FROM WeatherStations")
    for i in range(0,length):
        SQLFORMAT.append(list(cur.fetchone()))
        if(SQLFORMAT[i][0]==var):
            for d in range(1,len(SQLFORMAT[i])):
                data.append(SQLFORMAT[i][d])
        
    SQLFORMAT[:]=[]
##Adding header for time in json format    
    Time={"label":"Time","type":"string"}
    columns.append(Time)
    
##Adding additional headers in json format for weather station     
    for i in range(1,len(data[0:36])):
           Dict={"label":data[i],"type":"number"}
           
           columns.append(Dict)
    columns.pop(1)
    

    
##Creating Rows
    
    for i in range(len(data[0:36]),len(data)):
        if(type(data[i]) is str):
            rows.append(data[i:i+35])
    
    for i in range(0,len(rows)):
        Dict={"v":rows[i][0]}
        
        for d in range(1,len(rows[i])):
            Dict2={"v":rows[i][d]}
            rows[i].pop(d)
            rows[i].insert(d,Dict2)
        rows[i].pop(0)
        rows[i].insert(0,Dict)
    for i in range(0,len(rows)):
        Dict={"c":rows[i]}
        rows.pop(i)
        rows.insert(i,Dict)
    Dict = {"cols":columns,"rows":rows}
    file = open("Data.json",'w')
    file.write(json.dumps(Dict,indent=1))
    file.close()
        
    

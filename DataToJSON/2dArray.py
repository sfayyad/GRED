import json
from datetime import datetime
def f():
    data=[]
    columns=[]
    rows=[]
    with open("SampleGREDData.txt", encoding='utf-8-sig') as file:
        for line in file:
            line = line.strip()
            parts = line.split("\t")
            data.append(parts)
##            print(data)
####Removes '' from data            
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

    
    columns.append(data[0])
    
    for i in range(0,len(columns[0])):
        Dict={"label":columns[0][i],"type":"number"}
        columns[0].pop(i)
        columns[0].insert(i,Dict)

    
    for i in range(1,len(data)):
           Dict={"label":data[i][0],"type":"string"}
           data[i].pop(0)
           columns[0].insert(i-1,Dict)
            
    for i in range(1,len(data)):
        rows.append(data[i])
    
    for i in range(0,len(rows)):
        for d in range(0,len(rows[i])):
            if(":" not in rows[i][d]):
                rows[i][d]=float(rows[i][d])
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

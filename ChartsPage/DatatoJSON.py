import json
from datetime import datetime
from flask import request
from flask import Flask,redirect,render_template,make_response,request
app = Flask(__name__,template_folder="TT")




@app.route("/ChartsPage",methods=["POST"])

def f():
    dt2=request.form["Date"]
    print(dt2)
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
    headers=data[0]
    
    
    DataDay=[]

    StartDay=dt2.strip()
    if(StartDay==""):
        StartDay="3/1/2015"
    
    for i in range(0,len(data)):

        ss1=str(data[i][0])+"A"
        ss2=str(StartDay)+"A"
##        print(ss1,"-",ss2)
        if(ss1 == ss2):
            DataDay.append(data[i])
            
           #DataDay[i].remove(StartDay)
##        print(DataDay)

    for i in range(0,len(DataDay)):
        DataDay[i].pop(0)
            
##Inserting Headers            
    DataDay.insert(0,headers)   
##Adding header for time in json format    
    Time={"label":"Time","type":"string"}
    columns.append(Time)
##Adding additional headers in json format for weather station     
    for i in range(1,len(DataDay)):
           Dict={"label":DataDay[0][i],"type":"number"}
           
           columns.append(Dict)       


##Creating Rows
    
    for i in range(1,len(DataDay)):
        rows.append(DataDay[i])
##Convert Non-time values to floats
      
    for i in range(0,len(rows)):
        for d in range(1,len(rows[i])):
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
    return "ASD"
@app.route("/GetData")
def PrintData():
    data=[]
    with open("Data.json", encoding='utf-8-sig') as file:
        for line in file:
            data.append(line)   
    return ''.join(data)

@app.route('/ch' ,methods=["POST"])
def cha():
    headers = {'Content-Type': 'text/html'}
    return make_response(render_template('ChartsPage.html'),200,headers)
@app.route('/GRED.css')
def chi():
    headers = {'Content-Type': 'text/css'}
    return make_response(render_template('GRED.css'),200,headers)
@app.route('/GREDscriptV2.js')
def chi2():
    headers = {'Content-Type': 'text/js'}
    return make_response(render_template('GREDscriptV2.js'),200,headers)
    
if __name__ == "__main__":
    app.run()
   

export class Myclass {
    response = [];
    data = [];
    screenLoader: boolean;
    plotlyData;
    chartType: string;

    operatorList=[{
        key:'-- > --',value:'greaterthan'
    },
    {
        key:'-- < --',value:'lessthan'
    }
]
    
}
export const _alertType = ["SMS", "EMAIL", "PUSH NOTIFICATION"];

export class classSensor{
    sensorID="";
    operator="";
    value="";
    name="";
    phoneNO:""
}
export interface interfaceSensor{
    sensorID;
    operator;
    value;
    name;
    phoneNO;
}
export interface InterfacePlotlyPattern1{
data:[],layout:JSON;
}

export class ClassPlotlyPattern1{
    data= [
        {
            x: [1, 2, 3], y: [2, 6, 3], type: ''
                , mode: 'lines+points', marker: { color: 'red' }
        },
        // { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ];
    layout= { width: 320, height: 240, title: 'A Fancy Plot' }
}
export interface sensorId {
    "sensorid": "",
    "lat": '',
    "lng": '',
    "zone": "FHS",
    "type": "",
    "unit": "",
    "value": "",
    "date": "",
    "status": '',
    "history": any[]
}

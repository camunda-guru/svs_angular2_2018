class Vehicle {
    private regnNo: string;
    private model: string;
    private engineNo: string;
    private mfgDate: object;
    private onRoadCost: number;
    private owner: string;

    constructor(pregNo: string, pmodel: string, pengineNo: string,
                pmfgDate: object, pcost: number) {
        this.regnNo = pregNo;
        this.model = pmodel;
        this.engineNo = pengineNo;
        this.mfgDate = pmfgDate;
        this.onRoadCost = pcost;
    }

    get Owner(): string {
        return this.owner;
    }

    set Owner(value: string)
    {
        this.owner=value;
    }

    get RegnNo():string
    {
        return this.regnNo;
    }



    get Model():string
    {
        return this.model;
    }


    get EngineNo():string
    {
        return this.engineNo;
    }

    get MFGDate():object
    {
        return this.mfgDate;
    }

}
//tsc --target ES2016 oopsdemo.ts
var vehicleObj:Vehicle=new Vehicle("TN-21-AF-09897",
    "Nissan","ADF2794542",
    new Date('2016-06-27'),1300000);
vehicleObj.Owner="Charan";

console.log(vehicleObj.RegnNo,'-',vehicleObj.Model,
    '-',vehicleObj.EngineNo,'-',vehicleObj.MFGDate,'-',vehicleObj.Owner);
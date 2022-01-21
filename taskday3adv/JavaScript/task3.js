function Vehicle(speed,color) 
{   var accel=0;
Object.defineProperties(this,{"speed": {value : speed||0, writable:false,configurable:false}
                           ,     "color" : {value:color||0, writable:false, configurable:false}
                            , "TurnRight" : {value: function() {} ,writable:false,configurable: false }
                            ,"TurnLeft" : {value :function() {} ,writable:false,configurable: false } 
                            ,"Star" : {value :function() {} ,writable:false,configurable: false } 
                            ,"Stop" : {value :function() {} ,writable:false,configurable: false } 
                            ,"GoBackward" : {value :function(speed,accel) {} ,writable:false,configurable: false }
                            ,"GoForward" : {value :function(speed,accel) {} ,writable:false,configurable: false }})  

}


function Bicycle (speed,color) {


    Vehicle.bind(this,speed,color)();
    Object.defineProperties(this,{"RingBell": { value: function() {},writable:false , configurable:false}
     })
}


Bicycle.prototype=Object.create(Vehicle.prototype)

Bicycle.prototype.constructor=Bicycle 



function MotorVehicle(speed,color,SizeOfEng,licencePlate) {

Vehicle.bind(this,speed,color)();

Object.defineProperties(this,{
    "SizeOfEng" : {value:SizeOfEng||0, writable:false, configurable:false}
 ,"licencePlate" : {value:licencePlate||0, writable:false, configurable:false}
 ,"GetSizeOfEng" : {value :function() {} ,writable:false,configurable: false } 
 ,"GetLicensePlate" : {value :function() {} ,writable:false,configurable: false }


})
MotorVehicle.prototype=Object.create(Vehicle.prototype)

MotorVehicle.prototype.constructor=MotorVehicle 



}


function Car(speed,color,SizeOfEng,licencePlate,numOfDoors,numWheels,Weight) {

    MotorVehicle.bind(this,speed,color,SizeOfEng,licencePlate)();
    
    Object.defineProperties(this,{
        "numOfDoors" : {value:numOfDoors||0, writable:false, configurable:false}
     ,"numWheels" : {value:numWheels||0, writable:false, configurable:false}
     ,"Weight" : {value :Weight  ,writable:false,configurable: false } 
     ,"SwitchAtAirCon" : {value :function() {} ,writable:false,configurable: false }
    
     ,"GetNumOfDoor" : {value :function() {} ,writable:false,configurable: false }

    })
    Car.prototype=Object.create(MotorVehicle.prototype)
    
    Car.prototype.constructor=Car 
    
    
    
    }




function DumpTruck(speed,color,SizeOfEng,licencePlate,loadCap,numWheels,wight) {

    MotorVehicle.bind(this,speed,color,SizeOfEng,licencePlate)();
    
    Object.defineProperties(this,{
        "loadCap" : {value:loadCap||0, writable:false, configurable:false}
     ,"numWheels" : {value:numWheels||0, writable:false, configurable:false}
     ,"wight" : {value :wight  ,writable:false,configurable: false } 
     ,"LowerLoad" : {value :function() {} ,writable:false,configurable: false }
    
     ,"RaiseLoad" : {value :function() {} ,writable:false,configurable: false }

    })
    DumpTruck.prototype=Object.create(Car.prototype)
    
    DumpTruck.prototype.constructor=DumpTruck 
    
    
    
    }
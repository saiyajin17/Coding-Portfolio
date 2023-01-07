/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */

var ParkingSystem = function(big, medium, small) {
    this.bigSlot=big;
    this.mediumSlot=medium;
    this.smallSlot=small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
   if(carType==1) {
       if(this.bigSlot>0){
           this.bigSlot--;
           return true;
       }
   }else if(carType==2){
       if(this.mediumSlot>0){
           this.mediumSlot--;
           return true;
       }
   }else{
       if(this.smallSlot>0){
           this.smallSlot--;
           return true;
       }
   }
   return false;
};

/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
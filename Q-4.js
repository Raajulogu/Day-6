// Write a class to calculate the uber price.
class uber{
    constructor(name,km){
        this.KM=km;
    }
    price(){
        // 5 Rupees per Kilometer
        return this.KM*5;
    }
}
var Kilometers=new uber("Rajesh",35);
console.log(Kilometers.price());

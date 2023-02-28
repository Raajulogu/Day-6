class circle{
    constructor(radius,colour){
        this.radius=radius;
        this.colour=colour;
    }
    getArea(){
        return (Math.PI*(Math.pow(this.radius,2)))
    }
    getCircumferences(){
        return ((2*Math.PI)*this.radius)
    }
}
var c1=new circle(5,"red")
console.log(c1.getArea());
console.log(c1.getCircumferences())
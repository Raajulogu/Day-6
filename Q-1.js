class Movie{
    constructor(title,studio,rating,arr){
        if (rating==""){
            this.title = title;
            this.studio =studio;
            this.rating = "PG";
        }
        else{
            this.title = title;
            this.studio =studio;
            this.rating = rating;
        }
    }
    getPG(){
        if(this.rating=="PG"){
            arr.push(this.title);
            return arr;
        }
    }
}
var arr=[]
var M1=new Movie("Casino Royale","Eon Productions","",arr);
console.log(M1.getPG());
var M2=new Movie("Casino Royale","Eon Productions","PG.13",arr);
console.log(M2.getPG());
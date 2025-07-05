class Person {

    constructor(xname, birth_date){
        this.name = xname;
        this.height =  150;
        this.birth_date = birth_date;
        this.age = ((new Date()) - (new Date(this.birth_date))) / (1000 * 3600 * 24* 365);
    }

    move()
    {
        console.log(`this is move function of ${this.name}`);
    }

}   

let n = new Person("nattapol","2000/07/31 10:00:53");
console.log(n.name);
console.log(n.height);
console.log(n.age);

n.move();
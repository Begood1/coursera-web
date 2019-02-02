function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Max", "Buddy");
max.bark();
function Cat(name){
this.name = name;
}
Cat.prototype.sleping = function(){
  console.log(this.name +" is sleeping 8 hour")
}
var cat = new Cat("Cat");
cat.sleping();
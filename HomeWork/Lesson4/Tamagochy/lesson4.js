function Tamagotchi(name, country){
  this.name = name;
  this.country = country;
  this.health = 50;
  this.energy = 50;
  this.happiness = 50;
  this.sleeppiness = 20;
  this.ration = {
    food: 25,
    water: 25
  }
}

var firstToy = new Tamagotchi("Yoshi", "Japan");

console.log("May first Tamagotchi's name is ",firstToy.name,"\nIt's from ",firstToy.country);
console.log("It need food on ",firstToy.ration.food," \%\nHelp its");

Tamagotchi.prototype.eat = function(){
  this.ration.food += 5;
  if (this.ration.food<50) {
    if (this.energy<100) this.energy += 10;
    if (this.health<100) this.health += 5;
    if (this.happiness<100) this.happiness += 10;
  }
  else {
    this.ration.food = 50;
    this.energy -= 5;
    this.health -= 10;
    this.happiness -= 10;
  }
};

Tamagotchi.prototype.drink = function(){
  this.ration.water += 10;
  if (this.ration.water<50) {
    if (this.energy<100) this.energy += 5;
    if (this.health<100) this.health += 10;
    if (this.happiness<100) this.happiness += 10;
  }
  else {
    this.ration.water = 50;
    this.energy -= 5;
    this.health -= 5;
    this.happiness -= 5;
  }
};

Tamagotchi.prototype.sleep = function(){
  this.sleeppiness -= 20;
  if (this.sleeppiness>0) {
    if (this.energy<100) this.energy += 10;
    if (this.health<100) this.health += 5;
    if (this.happiness<100) this.happiness += 10;
  }
  else {
    this.sleeppiness = 0;
    this.health -= 10;
  }
};

Tamagotchi.prototype.wash = function(){
  if (this.health<100) this.health += 10;
  if (this.energy>0) this.energy -= 5;
  if (this.happiness<100) this.happiness += 10;
  if (this.sleeppiness<100) this.sleeppiness +=10;
};

Tamagotchi.prototype.walk = function(){
  if ((this.health>50)&&(this.health<100)) this.health += 10;
  else {
    this.health -= 10;
  }
  if ((this.energy>50)&&(this.energy<100)) this.health += 10;
  else {
    this.energy -= 10;
  }
  if ((this.happiness>50)&&(this.happiness<100)) this.happiness += 10;
  else {
    this.happiness -= 10;
  }
  if (this.ration.food>0) this.ration.food -= 5;
  if (this.ration.water>0) this.ration.water -= 5;
};

Tamagotchi.prototype.study = function(){
  if (this.energy>0) this.energy -= 10;
  if (this.sleeppiness<100) this.sleeppiness +=10;
  if (this.ration.food>0) this.ration.food -= 5;
  if (this.ration.water>0) this.ration.water -= 5;
};

Tamagotchi.prototype.control = function(str){
  var indicatorAvg = (this.health + this.energy + this.happiness + this.ration.food + this.ration.water)/4;
  var indicator = indicatorAvg - this.sleeppiness;
  if (indicator>0) alert (str+" control:\nYours "+this.name+" is living!");
  else alert (str+" control:\nYours "+this.name+" flew away to another world");
};

// Control just after birth
firstToy.control("First");

// Life cycle
firstToy.sleep();
firstToy.wash();
firstToy.eat();
firstToy.drink();
firstToy.study();
firstToy.walk();
firstToy.wash();
firstToy.eat();
firstToy.drink();

// Duty Control
firstToy.control("Current");

//OverLoad
for (var i = 0; i < 10; i ++){
  firstToy.study();
}

// End Control
firstToy.control("Finish");

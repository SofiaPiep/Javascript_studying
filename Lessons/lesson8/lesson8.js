"use strict";


/*Homework 8_Fall_2024
Материал к прочтению:
https://frontend-stuff.com/blog/object-oriented-programming/
https://learn.javascript.ru/prototype-inheritance
https://learn.javascript.ru/class

https://www.w3schools.com/js/js_object_prototypes.asp
https://www.w3schools.com/js/js_class_intro.asp

Файлы для работы:
 Код:
https://replit.com/@NalyaShakirova/proto
https://replit.com/@NalyaShakirova/OOPlesson8
код желательно скачать себе в vs code, могу удалить позднее
   
 Схема классов -   https://miro.com/app/board/uXjVPMGiB5w=/?share_link_id=650429851012


Задания на закрепление (можно и нужно обсуждать в группе):
Создайте еще пару классов наследников, чтобы в итоге дойти 
до тигра Проши( исправьте мой код там, где необходимо). 
Выведите все данные Проши и покажите его способности с помощью методов. */

class Animal {
        constructor (name, eyes) {
                this.name = name;
                this.eyes = eyes;
        }
        getName() {
                return (`The name of the animal is ${this.name}.`);

        }
        eyesColor(){
                return (`The animal has ${this.eyes} eyes.`)
        }
        canEat() {
                console.log("This animal can eat!")
        }

}

let animal1 = new Animal("cat", "black")
console.log(animal1, animal1.getName(), animal1.eyesColor())

class Fish extends Animal {
        constructor (name, eyes, scales, fins, gills) {
        super(name, eyes);
        this.scales = scales;
        this.fins = fins;
        this.gills = gills;
}
swim() {
        return (`The ${this.name} can swim!`)
}
layEggs() {
        return (`The ${this.name} lays eggs.`)
}
breatheWithGills() {
        return (`The ${this.name} breathes through its gills.`)
}
canEat() {
        return (`The ${this.name} can eat!`)
}}

let fish1 = new Fish("goldfish", "black", "golden scales", "small fins", "gills");
console.log(fish1, fish1.getName(), fish1.eyesColor(), fish1.swim(), fish1.layEggs(), fish1.breatheWithGills());
console.log(fish1.canEat());

class Mammal extends Animal {
        constructor(name, eyes,fur, limbs, lungs) {
                super(name, eyes);
                this.fur =fur;
                this.limbs;
                this.lungs;
        }
        eatFood() {
                return console.log(`The ${this.name} eats food!`)
        }
        reproduce() {
                return console.log (`The ${this.name} reproduces by giving birth to young ones.`);
        }
        youngOnesEatMilk() {
                return console.log(`The young ones of ${this.name} eats milk.`);
        }
        breatheWithLungs() {
                return console.log(`The ${this.name} breathes with its lungs.`);
        }

        walkOnFourLimbs() {
                return console.log(`The ${this.name} walks on four limbs.`);
        }
}

let mammal1 = new Mammal("wolf", "gray", "thick fur", 4, "lungs");
console.log(mammal1);
mammal1.getName(),
mammal1.eyesColor(),
mammal1.eatFood(),
mammal1.reproduce(),
mammal1.youngOnesEatMilk(),
mammal1.breatheWithLungs(),
mammal1.walkOnFourLimbs();

class Predators extends Mammal {
        constructor(name, eyes, fur, limbs, lungs, claws, fangs) {
                super(name, eyes, fur, limbs, lungs);
                this.claws = claws;
                this.fangs = fangs;
        }
        eatMeat() {
                return console.log(`The ${this.name} eats meat!!!`)
        }
};

let predator1 = new Predators("tiger", "yellow", "striped fur", 4, "lungs", "sharp claws", "long fangs");
console.log(predator1);
predator1.eatMeat();

class Herbivore extends Animal {
        constructor(name, eyes, fur, limbs, lungs, hooves) {
                super(name, eyes, fur, limbs, lungs);
                this.hooves =hooves;
        }
        eatGrass() {
                return console.log(`The ${this.name} eats grass!`)
        }
};

let herbivore1 = new Herbivore ("deer", "brown", "brown", 4, "lungs", 4)

console.log(herbivore1);
herbivore1.eatGrass();
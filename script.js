var DogBreeds;
(function (DogBreeds) {
    DogBreeds["POMO"] = "POMO_DOG";
    DogBreeds["MIKI"] = "MIKI_DOG";
    DogBreeds["CHIPPI"] = "CHIPPI_DOG";
})(DogBreeds || (DogBreeds = {}));
var CatBreeds;
(function (CatBreeds) {
    CatBreeds["PERSIAN"] = "PERSIAN_CAT";
    CatBreeds["BENGAL"] = "BENGAL_CAT";
    CatBreeds["MAINECOON"] = "MAINECOON_CAT";
})(CatBreeds || (CatBreeds = {}));
var PetFamilies;
(function (PetFamilies) {
    PetFamilies["CAT"] = "CAT";
    PetFamilies["DOG"] = "DOG";
})(PetFamilies || (PetFamilies = {}));
var DogColors;
(function (DogColors) {
    DogColors["MILKWHITE"] = "MILKWHITE";
    DogColors["SHINYBLACK"] = "SHINYBLACK";
    DogColors["BLACKSPOTTED"] = "BLACKSPOTTED";
})(DogColors || (DogColors = {}));
var CatColors;
(function (CatColors) {
    CatColors["BLACK"] = "BLACK";
    CatColors["WHITE"] = "WHITE";
    CatColors["GOLDEN"] = "GOLDEN";
})(CatColors || (CatColors = {}));
var Dog = /** @class */ (function () {
    function Dog(breed, age, color) {
        this.breed = breed;
        this.age = age;
        this.color = color;
    }
    Dog.prototype.getBreed = function () {
        return this.breed;
    };
    Dog.prototype.getAge = function () {
        return this.age;
    };
    Dog.prototype.getColor = function () {
        return this.color;
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat(breed, age, color) {
        this.breed = breed;
        this.age = age;
        this.color = color;
    }
    Cat.prototype.getBreed = function () {
        return this.breed;
    };
    Cat.prototype.getAge = function () {
        return this.age;
    };
    Cat.prototype.getColor = function () {
        return this.color;
    };
    return Cat;
}());
var PetShop = /** @class */ (function () {
    function PetShop(pets) {
        this.petList = [];
        for (var i = 0; i < pets.length; i++) {
            this.petList.push(pets[i]);
        }
    }
    PetShop.prototype.retrieveAvailablePets = function () {
        var countObj = {};
        for (var i = 0; i < this.petList.length; i++) {
            var breed = this.petList[i].getBreed() + '';
            var age = parseInt(this.petList[i].getAge());
            var color = this.petList[i].getColor() + '';
            if (countObj.hasOwnProperty(breed)) {
                countObj[breed].stock++;
            }
            else {
                countObj[breed] = {};
                countObj[breed].age = age;
                countObj[breed].color = color;
                countObj[breed].stock = 1;
            }
        }
        console.log(countObj);
    };
    PetShop.prototype.getTotalDogAndCatCount = function () {
        var dogCount = 0;
        var catCount = 0;
        for (var i = 0; i < this.petList.length; i++) {
            if (this.petList[i] instanceof Dog)
                dogCount++;
            else
                catCount++;
        }
        console.log("Dog Count: " + dogCount + ", Cat Count: " + catCount);
    };
    return PetShop;
}());
//CREATING PET objects dog1 and cat1
var dog1 = new Dog(DogBreeds.CHIPPI, 1, DogColors.MILKWHITE);
var cat1 = new Cat(CatBreeds.BENGAL, 2, CatColors.BLACK);
//creating a PET SHOP WITH VARIOUS DOGS AND CATS
var petshop = new PetShop([dog1, cat1, dog1, cat1, dog1, dog1]);
//LISTING OUT ALL THE DIFFERENT PETS AVAILABLE IN PETSHOP WITH ALL THEIR CHARACTERISTICS
petshop.retrieveAvailablePets();
//GET TOTAL COUNT OF DOGS AND CATS IN THE SHOP
petshop.getTotalDogAndCatCount(); //retrieve how many dogs are available;

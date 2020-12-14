enum DogBreeds {
    POMO = 'POMO_DOG',
    MIKI = 'MIKI_DOG',
    CHIPPI = 'CHIPPI_DOG'
}
enum CatBreeds{
    PERSIAN = 'PERSIAN_CAT',
    BENGAL = 'BENGAL_CAT',
    MAINECOON = 'MAINECOON_CAT'
}
enum PetFamilies{
    CAT = 'CAT',
    DOG = 'DOG'
}
enum DogColors{
    MILKWHITE= 'MILKWHITE',
    SHINYBLACK = 'SHINYBLACK',
    BLACKSPOTTED = 'BLACKSPOTTED'
}
enum CatColors{
    BLACK = 'BLACK',
    WHITE = 'WHITE',
    GOLDEN = 'GOLDEN'
}

type DogBreedType = DogBreeds.CHIPPI | DogBreeds.MIKI | DogBreeds.POMO | 'UNKNOWN';
type CatBreedType = CatBreeds.PERSIAN | CatBreeds.BENGAL | CatBreeds.MAINECOON | 'UNKNOWN';

// type FamilyType = PetFamilies.CAT | PetFamilies.DOG | PetFamilies.PARROT;
interface Pet{
    breed: DogBreedType | CatBreedType;
    age: Number;
    color: DogColors | CatColors; 

    getBreed();
    getAge();
    getColor();
}
class Dog implements Pet{
    breed:DogBreedType; 
    age:Number;
    color:DogColors;

    constructor(breed: DogBreedType, age:Number, color: DogColors){
        this.breed = breed;
        this.age = age;
        this.color = color;
    }
    public getBreed(): DogBreedType{
        return this.breed;
    }
    public getAge(): Number{
        return this.age;
    }
    public getColor(): DogColors{
        return this.color;
    }
}
class Cat implements Pet{
    breed:CatBreedType; 
    age:Number;
    color:CatColors;

    constructor(breed: CatBreedType, age:Number, color: CatColors){
        this.breed = breed;
        this.age = age;
        this.color = color;
    }
    public getBreed(): CatBreedType{
        return this.breed;
    }
    public getAge(): Number{
        return this.age;
    }
    public getColor(): CatColors{
        return this.color;
    }
}
class PetShop{
    petList: Array<Pet> = [];
    constructor(pets:Array<Pet>){
        for(let i=0;i<pets.length;i++)
        {
            this.petList.push(pets[i]);
        }
    }
    retrieveAvailablePets():void{
        let countObj = {};
        for(let i=0; i<this.petList.length; i++)
        {
            let breed = this.petList[i].getBreed()+'';
            let age = parseInt(this.petList[i].getAge());
            let color = this.petList[i].getColor()+'';
            if(countObj.hasOwnProperty(breed))
            {
                countObj[breed].stock++;
            }
            else{
                countObj[breed] = {};
                countObj[breed].age = age;
                countObj[breed].color = color;
                countObj[breed].stock = 1
            }
        }
        console.log(countObj);
    }

    getTotalDogAndCatCount():void
    {
        let dogCount = 0;
        let catCount=0;
        for(let i=0; i<this.petList.length; i++)
        {
            if(this.petList[i] instanceof Dog)
            dogCount++;
            else catCount++;
        }
        console.log(`Dog Count: ${dogCount}, Cat Count: ${catCount}`);
    }
}
//CREATING PET objects dog1 and cat1
let dog1 = new Dog(DogBreeds.CHIPPI,1,DogColors.MILKWHITE);
let cat1 = new Cat(CatBreeds.BENGAL, 2, CatColors.BLACK);

//creating a PET SHOP WITH VARIOUS DOGS AND CATS
let petshop = new PetShop([dog1,cat1,dog1,cat1,dog1,dog1]);

//LISTING OUT ALL THE DIFFERENT PETS AVAILABLE IN PETSHOP WITH ALL THEIR CHARACTERISTICS
petshop.retrieveAvailablePets();

//GET TOTAL COUNT OF DOGS AND CATS IN THE SHOP
petshop.getTotalDogAndCatCount(); //retrieve how many dogs are available;
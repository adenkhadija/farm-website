let hamburger = document.getElementById('hamburger'); 
let cancel = document.getElementById('cancel');
// let nav = document.querySelector('.header-nav'); // selecting class
let headerNav = document.getElementsByClassName('header-nav')[0]; // Array 



hamburger.addEventListener('click', () => {
    // adding a class 
    headerNav.classList.replace("header-nav", 'visableHeader'); 
    // cancel 
    hamburger.classList.add('close'); // adding class 
    cancel.classList.remove('close'); 
})

cancel.addEventListener('click', () =>{
    headerNav.classList.replace('visableHeader','header-nav'); 
    hamburger.classList.remove('close'); 
    cancel.classList.add('close'); 
})

class Animal{
    constructor(name,species,weightKg,icon){
        name = name; 
        species = species; 
        weightKg = weightKg; 
        icon = icon
        isfeed = false; 
        lastfeed = null; 
        treatmentStatus = null; 
        treatmentNote = ""; 
        lastVacinated = "01-01-2025"; 
        breedStatus = "none"; 
        isAlive = true; 
    }
    feed(isfeed){
        isfeed = true;  
        lastfeed = new Date().toLocaleDateString();  // creates a date object
    }
    vacinate(){
        lastVacinated = new Date().toLocaleDateString(); 
    }
    treat (){
        treatmentStatus = 'treated';  
    }
    euthanise(){
        isAlive = false; 
        treatmentStatus = "euthanise"; 
    }
    breed() {
        breedStatus = 'bred'; 
    }
    flagTreatment(note){
        treatmentStatus = "Flagged"
        treatmentNote = note; 
    }
     get weightCat(){
        if (this.weightKg < 10){
            return 'small'
        }

        if (this.weightKg < 100){
            return 'medium'
        }
        return 'large'
    
    }
    get feedAmount(){

        let rates = { small: 0.2, medium: 2, large: 5}
        return rates[this.weightCat] // rates['small'] rates['medium'], or rates[large]
    }

}

class Sheep extends Animal{
    constructor(name, species, weightKg, icon) {
        super(name, species, weightKg, icon)
    }
    
}

const bessie = new Sheep('bessie', 'mammal', 50, icon)
class Goat extends Animal{
    constructor(name, species, weightKg, icon) {
    super(name, species, weightKg, icon)
    }

}

class Chicken extends Animal{
    constructor(name, species, weightKg, icon) {
    super(name, species, weightKg, icon)
    }

}
class Pig extends Animal{
    constructor(name, species, weightKg, icon) {
    super(name, species, weightKg, icon)
    }

}

class Horse extends Animal{
    constructor(name, species, weightKg, icon) {
    super(name, species, weightKg, icon)
    }

}






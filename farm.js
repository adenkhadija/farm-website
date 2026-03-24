let home = document.getElementById('home');
let container = document.getElementById('dash-container'); 


let showDash = (role) => {
    home.classList.add('hidden'); 


    container.classList.remove('hidden'); 
    let boards = document.querySelectorAll('.dashboard'); 
    boards.forEach(d => d.classList.add('hidden'))
    
    let dashBoard = document.getElementById(`dash-${role}`)
    dashBoard.classList.remove('hidden'); 
   



}

let goHome = () =>{
    home.classList.remove('hidden'); 
    container.classList.add('hidden') // Not displayed

}



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
        //trigger the activity log
        log(`${this.name} was last fed at ${this.lastfeed}`)
    }
    vacinate(){
        lastVacinated = new Date().toLocaleDateString(); 
        log(`${this.name} was vacinated at ${this.lastVacinated}`)
    }
    treat (){
        treatmentStatus = 'treated';  
        log(`${this.name} was treated`)
    }
    euthanise(){
        isAlive = false; 
        treatmentStatus = "euthanise"; 
        log(`${this.name} was euthanise`)
    }
    breed() {
        breedStatus = 'bred'; 
        log(`${this.name} was breed`)
    }
    flagTreatment(note){
        treatmentStatus = "Flagged"
        treatmentNote = note; 
        log(`${this.name} was flagged for treatment ${this.note}`)
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
        log(`${this.name} feed ${rate} `)
        return rates[this.weightCat] // rates['small'] rates['medium'], or rates[large]
       
    }

}


class Sheep extends Animal{
    constructor(name) {
        super(name, 'sheep', 70, '🐑' )

        expectedWoolYield = 4; 
        collectedWool = null; 
        isWalkable = true; 
        lastWalked = null; 

    }
    shear(s){
        this.collectedWool = s; 
        if (this.collectedWool < expectedWoolYield){
            log(`LOW YIELD ⚠️ ${this.name} wool ${s} `)
        }
    }
    walk(){
        let walkedDate = new Date().toLocaleTimeString()
        this.lastWalked = walkedDate; 
        log(`${this.name} walked 🚶🏻`)
    }

}

class Goat extends Animal{
    constructor(name) {
    super(name, species, weightKg, icon)

    }



}

class Chicken extends Animal{
    constructor(name, species, weightKg, icon) {
    super(name, species, weightKg, icon)
    eggYieldPerDay = 1
    collectedEggs = null; 
    isWalkable = false; 

    }
    collectedEggs(count){
        this.collectedEggs = count; 
        if (count < eggYieldPerDay){
            log(`LOW YIELD ⚠️ collected ${count} eggs`)
        }
        log(`${this.name} yield ${count} eggs `)
        
    }
 

}
class Pig extends Animal{
    constructor(name) {
    super(name, species, weightKg, icon)


    }

}

class Horse extends Animal{
    constructor(name) {
    super(name, species, weightKg, icon)
    
    iswalkable = false; 

    }

}
class Cow extends Animal{
    
    constructor(name) {
    super(name, 'cow', 600, 'icon')

    //special properties of cow 
    ExpectedYield = 25
    collectedMilk = null //how many liters
    isWalkable = false 


    }
    // methods 
    collectMilk(l){ 
        this.collectedMilk = l
        log(`collected ${l} from ${this.name}`)

        if(l < this.ExpectedYield){

            log(`⚠️ low yield,${this.name} yield ${l}`)
        }
        else{
            log()
        }
    }

}

// activity log 
let activityLog = []

let log = (msg) =>{
    let currentDate = new Date.toLocaleTimeString()
    activityLog.unshift(`${currentDate} ${msg}`)

}








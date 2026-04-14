let home = document.getElementById('home');
let container = document.getElementById('dash-container'); 


// let nav = document.querySelector('.header-nav'); // selecting class
let headerNav = document.getElementsByClassName('header-nav')[0]; // Array 

let showDash = (role) => {
    home.classList.add('hidden'); 


    container.classList.remove('hidden'); 
    let boards = document.querySelectorAll('.dashboard'); 
    boards.forEach(d => d.classList.add('hidden'))
    
    let dashBoard = document.getElementById(`dash-${role}`)
    dashBoard.classList.remove('hidden'); 

    renderDash(role)



}

let goHome = () =>{
    home.classList.remove('hidden'); 
    container.classList.add('hidden') // Not displayed

}

// let buttons = document.querySelectorAll('.tabs-btn'); 
// // console.log(buttons); 
let switchTabs = (prefix, tabId) => {
    

    let dash = document.querySelector('.dashboard:not(.hidden)') //div with dashboard but no hidden class name -- active 
    
    let tabPanes = dash.querySelectorAll('.tab-pane') //nodelist
    tabPanes.forEach(current => current.classList.remove('active')) // absense of {} --> implicit return


    let Tab = document.getElementById(prefix + '-' + tabId); 
    Tab.classList.add('active'); 
}






let hamburger = document.getElementById('hamburger'); 
let cancel = document.getElementById('cancel');


hamburger.addEventListener('click', () => {
    // adding a class 
    headerNav.classList.replace("header-nav", 'visableHeader'); 
    // cancel 
    hamburger.classList.add('close'); // adding class 
    cancel.classList.remove('close'); 
})
// i'm here
cancel.addEventListener('click', () =>{
    headerNav.classList.replace('visableHeader','header-nav'); 
    hamburger.classList.remove('close'); 
    cancel.classList.add('close'); 
})

class Animal{
    constructor(name,species,weightKg,icon){
        this.name = name; 
        this.species = species; 
        this.weightKg = weightKg; 
        this.icon = icon
        this.isfeed = false; 
        this.lastfeed = null; 
        this.treatmentStatus = "Healthy"; 
        this.treatmentNote = ""; 
        this.lastVacinated = new Date(2025,0,1).toLocaleDateString(); //"2025-01-01" 
        this.breedStatus = "none"; 
        this.isAlive = true; 
    }
    feed(isfeed){
        this.isfeed = true;  
        this.lastfeed = new Date().toLocaleDateString();  // creates a date object
        //trigger the activity log
        log(`${this.name} was last fed at ${this.lastfeed}`)
    }
    vacinate(){
        this.lastVacinated = new Date().toLocaleDateString(); 
        log(`${this.name} was vacinated at ${this.lastVacinated}`)
    }
    treat (){
        this.treatmentStatus = 'treated';  
        log(`${this.name} was treated`)
    }
    euthanise(){
        this.isAlive = false; 
        this.treatmentStatus = "euthanise"; 
        log(`${this.name} was euthanise`)
    }
    breed() {
        this.breedStatus = 'bred'; 
        log(`${this.name} was breed`)
    }
    flagTreatment(note){
        this.treatmentStatus = "Flagged"
        this.treatmentNote = note; 
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
        return rates[this.weightCat] // rates['small'] rates['medium'], or rates[large]
       
    }

}


class Sheep extends Animal{
    constructor(name) {
        super(name, 'sheep', 70, '🐑' )

        this.expectedWoolYield = 4; 
        this.collectedWool = null; 
        this.isWalkable = true; 
        this.lastWalked = null; 

    }
    shear(s){
        this.collectedWool = s; 
        if (this.collectedWool < this.expectedWoolYield){
            log(`LOW YIELD ⚠️ ${this.name} wool ${s} `)
        }
        
    }
    walk(){
        let walkedDate = new Date().toLocaleTimeString()
        this.lastWalked = walkedDate; 
        log(`${this.name} walked 🚶🏻`)
    }
    // getter method -- return string wool (kg)
    get yieldProduct(){
        return 'wool (kg)'

    }
    //expected wool yield
    get expectedYield(){
        return this.expectedWoolYield
    }
    get collectedYield(){
        return this.collectedWool
    }

    setCollectedYield(shearAmt){
        this.shear(shearAmt)

    }



}

class Goat extends Animal{
    constructor(name) {
    super(name, 'goat', 63, '🐐')

    }
    ExpectedYield = 10;
    collectedMilk = null;
    isWalkable = true; 
    lastWalked = null; 

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

     walk(){
        this.lastWalked = new Date().toLocaleTimeString(); 
        log(`${this.name} walked `)
    }

    get yieldProduct(){
        return 'milk (l)'
    }
    get expectedYield (){
        return this.ExpectedYield

    } 
    get collectedYield() {
        return this.collectedMilk
    }

    setCollectedYield(amt){
        this.collectMilk(amt)
    }

}

class Chicken extends Animal{
    constructor(name, species, weightKg, icon) {
    super(name, 'chicken', 13, "🐥")
    
    this.eggYieldPerDay = 1
    this.collectedEggs = null; 
    this.isWalkable = false; 

    }
    collectEggs(count){
        this.collectedEggs = count; 
        if (count < this.eggYieldPerDay){
            log(`LOW YIELD ⚠️ collected ${count} eggs`)
        }
        log(`${this.name} yield ${count} eggs `)
        
    }
    get yieldProduct(){
        return 'eggs'
    }
    get expectedYield (){
        return this.eggYieldPerDay

    } 
    get collectedYield() {
        return this.collectedEggs
    }

    setCollectedYield(amt){
        this.collectEggs(amt)
    }

 

}
class Pig extends Animal{
    constructor(name) {
    super(name, "Pigs", 120, '🐷' )

    }
    //outside the constructor - no this but inside constructor -- you need it 
    isWalkable = false; 


}

class Horse extends Animal{
    constructor(name) {
    super(name, "Horse", 500,"🐎" )
    
    this.iswalkable = true; 
    this.lastWalked = null; 

    }
    // methods 
    walk(){
        this.lastWalked = new Date().toLocaleTimeString(); 
        log(`${this.name} walked `)
    }


}
class Cow extends Animal{
    
    constructor(name) {
    super(name, 'cow', 600, '🐄')

    //special properties of cow 
    this.ExpectedYield = 25
    this.collectedMilk = null //how many liters
    this.isWalkable = false 


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
    get yieldProduct(){
        return 'milk (l)'
    }
    get expectedYield(){
        return this.ExpectedYield
    }
    get collectedYield() {
        return this.collectedMilk; 
    }
    setCollectedYield(amt){
        this.collectMilk(amt)
    }



}

// activity log 
let activityLog = []

let log = (msg) =>{
    let currentDate = new Date().toLocaleTimeString()
    activityLog.unshift(`${currentDate} ${msg}`)

}

// ======== Farm data ============
let animals = [
        new Cow('betsy'), new Cow('daisy'), new Cow('shelby'),    
        new Sheep('Juno'), new Sheep('Shawn'), 
        new Chicken('Coco'), new Chicken('Gigi'), new Chicken('June'),
        new Horse('Phoenix'), new Horse('Jasper'), 
        new Pig('Ace'), new Pig('Leo'),
        new Goat('Levi'), new  Goat('Duke')
    ]
// ===== navigations =========


// ====== Rander table ==========

let renderDash = (role) => {
    if (role === 'general-worker' ){
        renderGeneralWorker() // render the table for general worker -- innerHTML 
    }
    if (role === 'livestock-worker' ){
        renderLivestockWorker()
    }
    if(role === 'vet'){
        renderVet()
    }
    if(role === 'Admin'){
        renderAdmin()

    }

}
//function badge 

 let AliveAnimals = animals.filter((currentAnimal) => {
        return currentAnimal.isAlive 
    }) 

let renderGeneralWorker = () => {
    let tbody = document.querySelector('#gw-feed-table tbody'); 
    tbody.innerHTML = ''; 


    AliveAnimals.forEach(y => {
        
        let tr = document.createElement('tr')
        tr.innerHTML = `
            <td>${y.name} ${y.icon} </td> 
            <td>${y.species}</td> 
            <td>${y.weightKg} ${y.weightCat} </td>  
            <td>${y.feedAmount}</td>  
            <td>${y.isfeed ? badge('fed', 'green') : badge('hungry', 'red')} </td>  
            <td>${y.isfeed ? badge('fed', 'green') : `<button onclick="Dofeed('${y.name}')">feed</button>`}</td> `
           tbody.appendChild(tr)

    })

    // tbdoy for second table --> homework : yield 
    let yieldTbody = document.querySelector('#gw-yield tbody')
    yieldTbody.innerHTML = ''; // make sure it doesn't duplicate the table

    let productAnimal = AliveAnimals.filter(curr => hasYield(curr))
    
        
    //console.log(productAnimal)
    

    productAnimal.forEach(animal => {
        let row = document.createElement('tr') 
        let collected = animal.collectedYield !== null ? animal.collectedYield : "--"

        let done = animal.collectedYield !== null //starts null 
        row.innerHTML = `
        <td>${animal.icon} ${animal.name}</td>
        <td> ${animal.species}</td>
        <td>${animal.yieldProduct} </td>
        <td> ${animal.expectedYield}</td> 
        <td> ${collected} </td> 
        <td> ${done ? badge('Reported', 'green') : `<input type="number" id="yield-${animal.name}" placeholder=0> <button onclick="report('${animal.name}')">Report</button>`} </td>
        `
        yieldTbody.appendChild(row)


    })
}

/// ==== livestock worker 

let renderLivestockWorker = () => {
    const walkTable = document.querySelector('#lw-walk-table tbody'); 
    walkTable.innerHTML = ''; 


    let walkAnimals = AliveAnimals.filter(walk => walk.isWalkable)
    

    walkAnimals.forEach(animal => {
        let row = document.createElement('tr')

        let walked = animal.lastWalked !== null ? animal.lastWalked : "--"  //
        let done = animal.lastWalked !== null //starts of as false 


        row.innerHTML = `
        <td> ${animal.name} ${animal.icon}</td> 
        <td> ${animal.species}</td> 
        <td> ${walked}</td> 
        <td> ${done ? badge('walked', 'green') : `<button onclick ="walkfunc('${animal.name}')">walk</button>`  }

        
        `
        walkTable.appendChild(row)



    })

    let healthBadge = (status) =>{
    if (status === 'Healthy') {
        return badge('Healthy', 'green')
    }
    if (status === 'Flagged') {
        return badge('Flagged', 'red')
    }
    if (status === 'Euthanise'){
        return badge('Euthanise', 'gray')
    }
  

}



     const treatmentTable = document.querySelector('#lw-treat-table tbody'); 
     treatmentTable.innerHTML = ''; 

     AliveAnimals.forEach(animal =>{
        let flagged = animal.treatmentStatus === 'Flagged' || animal.treatmentStatus === 'treated'; //false
      
        let row = document.createElement('tr')
        let treat = animal.treatmentStatus !== null; 
        

        row.innerHTML = `
        <td> ${animal.name} ${animal.icon}</td>
        <td> ${animal.species}</td> 
        <td> ${healthBadge(animal.treatmentStatus)} </td> 
        <td> ${animal.treatmentNote || '--'} </td> 
        <td> ${!flagged ? `<input type="text" id="note-${animal.name}" placeholder="issue"></input>
        <button onclick="flagged('${animal.name}')" >Flag treatment</button>` : '<em>Flagged</em>' } </td> 
      
        `
        treatmentTable.appendChild(row)

        //treatmentStatus -- 3 options : treat, euthanise, flagged 
     })


     // "bessie"

     let bredTable = document.querySelector('#lw-breed-table tbody')
     bredTable.innerHTML = ''; 
     AliveAnimals.forEach(animal => {
        bredTable.innerHTML += `
            <tr>
                <td> ${animal.name} ${animal.icon}</td>  
                <td> ${animal.species}</td>
                <td> ${badge(animal.breedStatus === 'bred' ? "Bred" : "none", animal.breedStatus === 'bred' ? 'green' : "gray" )}</td>
                <td> ${animal.breedStatus !== "bred" ? `<button onclick="breed('${animal.name}')"> Record breeding </button>` : "<em>Bred</em>"}</td>
            </tr>
        `
     })



} // end
let breed = (name) =>{
    let currA = animals.find(animal => animal.name === name)
    currA.breed(name)
    renderLivestockWorker()
}
let flagged = (name) =>{
    let currA = animals.find(animal => animal.name === name)
    let note =  document.getElementById(`note-${name}`).value
    currA.flagTreatment(note)
    renderLivestockWorker()

}

let walkfunc = (name) =>{
    // update the last walked column to correct date 
    const Single = animals.find(x => x.name === name) // animal object
    // console.log("Single", Single)
    Single.walk()
    renderLivestockWorker()

}



let hasYield = (animal) =>{
    // boolean
    //if (animal.yieldProduct) return true
     return animal.yieldProduct ? true : false 

}


let badge = (text, color) =>{
    return `<span class='badge badge-${color}'>${text}</span> ` 
}

let Dofeed = (y) =>{
    const a = animals.find(x => x.name === y)
    a.feed(); 
    renderGeneralWorker(); 

}

let report = (name) =>{
    const AA = animals.find(a => a.name === name ) //animal object
    

    let value = parseFloat(document.getElementById(`yield-${name}`).value); //
    if (isNaN(value) || value <= 0 ) return alert('Enter a number')
   
    AA.setCollectedYield(value)
    renderGeneralWorker(); 

}

let renderVet = () => {
    let Qtable = document.querySelector('#vet-queue-table tbody'); 
    Qtable.innerHTML = ''; 
    
    //false

    // only animals with Treatment Status flagged 

    flaggedAnimals = AliveAnimals.filter(animal => ['Flagged', 'treated', 'euthanise'].includes(animal.treatmentStatus))

    flaggedAnimals.forEach(animal => {
        
        Qtable.innerHTML += `
        <tr>
            <td> ${animal.name} ${animal.icon}</td>
            <td> ${animal.species}</td>
            <td> ${animal.treatmentNote? animal.treatmentNote : "no issues"}</td>
            <td> ${animal.treatmentStatus}</td>
            <td> ${animal.treatmentStatus === 'Flagged'?  `<button onclick="treated('${animal.name}')"> Mark Treated</button> <button onclick="euthanise('${animal.name}')">Euthanise</button>`
            : '<em>resolved</em>' } 
            </td>

        </tr>  `

    })
  

    let vaxTable = document.querySelector('#vet-vax-table tbody')
    vaxTable.innerHTML = ''; 

    AliveAnimals.forEach(animal => {
        let lastDate = new Date(animal.lastVacinated)
        let dueDate = new Date(lastDate)  
        dueDate.setMonth(dueDate.getMonth() + 6)
       
        
        let overdue = dueDate < new Date() 
       
        let due =  dueDate.toLocaleDateString()
        
        vaxTable.innerHTML += `
        <tr>
            <td> ${animal.name}</td>
            <td> ${animal.species}</td>
            <td> ${animal.lastVacinated}</td>
            <td> ${overdue? badge(due + ' OVERDUE','red') : badge(due, 'green') }</td>
            <td> <button onclick="vaccinate('${animal.name}')">Vaccinate</button></td>

        </tr>
        `

    })



}

let treated = (name) => {
    const AA = animals.find(a => a.name === name ) //animal object
    AA.treat()
    renderVet()
}

let euthanise = (name) =>{

    
    let verification = confirm(`confirm euthanasia for ${name}`) // true or false 
    if (verification) {
        const AA = animals.find(a => a.name === name ) //animal object
        AA.euthanise()
        renderVet()
    }


}
let vaccinate = (name) =>{
    const AA = animals.find(a => a.name === name ) //animal object
    AA.vacinate()
    renderVet()
}

let renderAdmin = () => {
    console.log("admin")
    

    let aliveCount = AliveAnimals.length; 
    let fedCount = AliveAnimals.filter(animal => animal.isfeed).length;
    let sickCount = AliveAnimals.filter(animal => animal.treatmentStatus === 'Flagged').length;
    let yieldCount = AliveAnimals.filter(animal => hasYield(animal)).length;
    let dead = AliveAnimals.filter(animal => !animal.isAlive).length; 


    let AdminStats = document.querySelector('#admin-stats')
    AdminStats.innerHTML = `
    <div
        <div>${aliveCount}</div>  
        <div>alive animals</div> 
    </div>
    
    <div>
        <div>${fedCount}</div>
        <div>Fed today</div>
    </div>
         

     <div>
        <div>${sickCount}</div>
        <div>Awaiting Treatment</div>
    </div>
    

     <div>

        <div>${yieldCount}</div>
        <div>Yield Report</div>
    
    </div>

     <div>
        <div>${dead}</div>
        <div>Euthanised</div>
    
    </div>
    
    `
    

    
}





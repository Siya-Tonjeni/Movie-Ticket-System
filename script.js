
let users = [];
let savedUsers = [];


function saveUsers(){
    for (let u in users) {
        savedUsers[u] = JSON.stringify(users[u])
    }

    localStorage.setItem('savedUsers', savedUsers);    
}

function loadUsers(){
    let a = localStorage.getItem('savedUsers');  

    
    for (let x = 0; x < a.length + 1; x++ ){
    
    let b = a.substring(0, a.indexOf('}') + 1);

    a = a.replace(b, '');
    a = a.replace(',' , '');

    b = JSON.parse(b);
    users.push(b);
    }   
}


function init(){
users = [];  
}

function loginInit(){
loadUsers();
}

function ticketsInit(){


let movie1 = document.getElementsByClassName();
console.log(movie1);


}

function createAccount(){

    
    let fN = document.getElementById('create-firstName').value;
    let uN = document.getElementById('create-Username').value;
    let pS = document.getElementById('create-Password').value;
    let psConfirm = document.getElementById('create-Confirm').value
    let DoB = document.getElementById('DOB').value;
    
    
    
    
    if (fN != '' && uN != '' && pS != '' && psConfirm != '' && DoB != '' ){
        if (pS === psConfirm){
            
            let deltaAge = Date.now() - new Date(DoB).getTime();
            let ageDate = new Date(deltaAge);
            let actualAge = Math.abs(ageDate.getUTCFullYear() - 1970);

            

           let u = new userObject(fN, uN, pS, actualAge);
           users.push(u);

           saveUsers();
           location.href = 'sign-in.html';
        } 
        else
        {
            alert('Passwords do not match!');
            return;
        }
    }
    else
    {
        alert('Please fill in all required fields!');
        return
    }

}


function login(){


    let username = document.getElementById('sign-Username').value;
    let password = document.getElementById('sign-Password').value;

    for (let user in users){
        if (users[user].username == username && users[user].password == password){
            location.href = 'tickets.html';
        }
        else{
            console.log('there is no username or password');
            return
        }
    }

}


class userObject {
    
    #name;
    #username;
    #password;
    #age;
    #tickets;
    
    constructor(name, username, password, age){
        this.#name = name;
        this.#username = username;
        this.#password = password;
        this.#age = age;
        
        this.#tickets = [];
        
        this.toJSON = function(){
            return {name: this.#name,
                    username: this.#username,
                    password: this.#password,
                    age: this.#age
            }
        }
    }

    get getUserName() {
        return this.#username;
    }
    
    get getPassword(){
        return this.#password;
    }
    
    addTicket(ticket) {
        this.#tickets.push(ticket);
    }
    
    showTicket(name) {
        for (let t in this.#tickets) {
           if (this.#tickets[t].getEvent.getName == name) {
            console.log(this.#tickets[t].getEvent);
           }     
        } 
    }

    listTickets() {
        for (let t in this.#tickets) {
            console.log(this.#tickets[t].getEvent);
        }
    }

}


class ticketObject {
    
    #event;
    #time;
    #type;
    
    constructor(event, time, type){
        this.#event = event;
        this.#time = time;
        this.#type = type;
        this.toJSON = function(){
            return { event : this.#event,
                     time : this.#time,
                     type : this.#type

            }
    
    }
    }
    
    get getEvent() {
        return this.#event;
    }
    

    
}

class eventObject {
        name;
        type;
        price;
        time;
        rating
    
    
    constructor(name, type, price, time, rating){
        this.name = name;
        this.type = type;
        this.price = price;
        this.time = time;
        this.rating = rating;
    
    }   
    
}






// event database;

const hit_man = new eventObject('Hit Man', 'Action', 'R120', '15:00 - 18:00', 'PG');
const life_of_the_party = new eventObject('Life Of The Party', 'Comedy', 'R75', '18:00 - 22:00' , '13');
const legally_blond = new eventObject('Legally Blonde', 'Comedy', 'R0', '12:00 - 15:00', '13');
const like_crazy = new eventObject('Like Crazy', 'Romance', 'R150', '15:00 - 18:00', '18');
const spirited = new eventObject('Spirited', 'Comedy', 'R120', '15:00 - 18:00', 'PG');
const kung_fu_panda_4 = new eventObject('Kung Fu Panda 4', 'Animation', 'R120', '9:00 - 12:00', 'PG');
const luck = new eventObject('Luck', 'animation', 'R0', '09:00-12:00', 'PG');
const without_remorse = new eventObject('Without Remorse', 'Action', 'R120', '18:00 - 22:00', '16');
const the_idea_of_you = new eventObject('The Idea Of You', 'Romance', 'R120', '18:00 - 22:00', '18');
const inside_out = new eventObject('Inside Out', 'animation', 'R0', '15:00-18:00', 'PG');





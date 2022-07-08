
const feeding = document.querySelector(".hunger")
const sleep = document.querySelector(".sleep")
const boredom = document.querySelector(".bore")
const age = document.querySelector(".age")
const name = document.querySelector(".pet-name")
const divImg = document.querySelector(".img")
const p = document.createElement("p")
const div = document.createElement("div")
div.setAttribute("class","pet-name")
p.setAttribute("class","petName")
divImg.appendChild(div)
div.appendChild(p)
alert("Welcome to tamagotchi world")
alert("Rule 1: Hunger, Sleepiness, Boredom decrease. When it goes 0, game is over")
alert("Rule 2: You have to survive untill age hits 20")
alert("Rule 3: If you click Feeding, Play With Pet, Light On/Off button, increase count")
alert("press Start button, when you rea")

class game {
    constructor(age=0,hunger=10,sleep=10,bored=10) {
        this.age = age
        this.petName = ""
        this.hunger = hunger
        this.sleep = sleep
        this.bored = bored
    }
    start() {
        this.petName = prompt("choose your pet name")
        start.remove()
        const sleepBtn = setInterval(() => {
            this.sleep--
            sleep.innerHTML = this.sleep;
            this.message()
            if (this.sleep <= 0) {
                clearInterval(sleepBtn)
            }else if (document.body.className === "night") {
                clearInterval(sleepBtn)
            }
        },12000)

        const playBtn = setInterval(() => {
            this.bored--
            boredom.innerHTML = this.bored;
            this.message()
            if (this.bored <= 0) {
                clearInterval(playBtn)
            }else if (document.body.className === "night") {
                clearInterval(playBtn)
            }
        },10000)

        const eatBtn = setInterval(() => {
            this.hunger--
            feeding.innerHTML = this.hunger;
            this.message()
            if (this.hunger <= 0) {
                clearInterval(eatBtn)
            }
        },8000)

        aged(this.age)
        
    }
    feed() {
        this.hunger += 1
        feeding.innerHTML = this.hunger
    }

    bore() {
        this.bored += 1
        boredom.innerText = this.bored
    }

    light() {
        document.body.classList.toggle("night")
        if (document.body.className === "night") {
            const sleepInterval = setInterval(() => {
                this.sleep++
                sleep.innerHTML = this.sleep
                if(document.body.className === "") {
                    clearInterval(sleepInterval)
                }
            },3000)
        }
    }

    message() {
        if(this.hunger <=5) {
            p.innerHTML = `${this.petName} is hungry! Feed him`
        }else if (this.sleep <= 5) {
            p.innerHTML = `${this.petName} is tired! light off`
        }else if (this.bored <= 5) {
            p.innerHTML = `${this.petName} is bored! play with ${this.petName}`
        }else {
            p.innerHTML = `${this.petName} is happy!`
        }
    }

    endGame() {
        if(this.hunger <= 0 || this.sleep <= 0 || this.bored <= 0) alert(`${this.petName} die`)
        if (this.age === 20) alert(`${this.petName} max age! You win`)
    }
    
}    

const me = new game()

me.endGame()
feeding.innerHTML = me.hunger
boredom.innerHTML = me.bored
sleep.innerHTML = me.sleep
age.innerHTML = me.age



function setTime (divEl,spanEl) {
    const timer = setInterval(() => {
        spanEl += 1
        divEl.innerHTML = spanEl
        if(spanEl <= 0) {
            clearInterval(timer)
        }
    },1000)
}

function aged(str) {
    age.innerHTML = str
    setInterval(()=> {
        str++
        age.innerHTML = str
    },10000)
}

const feeder = document.querySelector(".feeding")
feeder.addEventListener("click",e => {
    e.preventDefault();
    me.feed()
})

const start = document.querySelector(".start")
start.addEventListener("click",e => {
    e.preventDefault()
    me.start()
})

const play = document.querySelector(".play")
play.addEventListener("click",e => {
    e.preventDefault()
    me.bore()
})

const light = document.querySelector(".light")
light.addEventListener("click",e => {
    e.preventDefault()
    me.light()
})

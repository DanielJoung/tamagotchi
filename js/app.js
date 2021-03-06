
const btns = document.querySelector(".btns")
const feeding = document.querySelector(".hunger")
const sleep = document.querySelector(".sleep")
const boredom = document.querySelector(".bore")
const age = document.querySelector(".age")
const name = document.querySelector(".pet-name")
const divImg = document.querySelector(".img")
const p = document.createElement("p")
const div = document.createElement("div")
const picDiv = document.createElement("div")
const img = document.createElement("img")
picDiv.setAttribute("class","pet")
img.setAttribute("class","pet-grow")
div.setAttribute("class","pet-name")
p.setAttribute("class","petName")
picDiv.appendChild(div)
div.appendChild(p)
picDiv.appendChild(img)
document.body.appendChild(picDiv)


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
        p.innerHTML = `${this.petName} is happy!`
        img.src = "https://t1.daumcdn.net/cfile/tistory/23304148589F325A0B"
        img.width = 200
        img.left = 50

        const sleepBtn = setInterval(() => {
            this.sleep--
            sleep.innerHTML = this.sleep;
            this.message()
            this.endGame()
            if (this.sleep <= 0) {
                clearInterval(sleepBtn)
            }
        },5000)
        

        const playBtn = setInterval(() => {
            this.bored--
            boredom.innerHTML = this.bored;
            this.message()
            this.endGame()
            if (this.bored <= 0) {
                clearInterval(playBtn)
            }
        },5000)

        const eatBtn = setInterval(() => {
            this.hunger--
            feeding.innerHTML = this.hunger;
            this.message()
            this.endGame()
            if (this.hunger <= 0) {
                clearInterval(eatBtn)
            }
        },4000)

        this.aged()
        
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
            feeder.remove()
            play.remove()
            btns.appendChild(sleeping)
        }else if (document.body.className === "") {
            btns.appendChild(feeder)
            btns.appendChild(play)
            sleeping.remove()
        }
    }


    sleeped() {
        this.sleep++
        sleep.innerHTML = this.sleep
    }

    aged() {
        age.innerHTML = this.age
        const ageInterval = setInterval(()=> {
            this.age++
            age.innerHTML = this.age

            if(this.age >= 20) {
                clearInterval(ageInterval)
            }
            if (this.age <= 6) {
                img.src = "https://t1.daumcdn.net/cfile/tistory/23304148589F325A0B"
                img.width = 200
            }else if (this.age <= 13) {
                img.src = "https://t1.daumcdn.net/cfile/tistory/99693E415FA93FD733"
                img.width = 200
            }else if (this.age <20) {
                img.src = "https://blog.kakaocdn.net/dn/wyEMX/btqX312cOlT/okLiICNmlOTeTvjt2hGN3k/img.jpg"
                img.width = 300
            }
            this.winGame()
        },8000)
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
        if(this.hunger <= 0 || this.sleep <= 0 || this.bored <= 0) {        
            alert(`${this.petName} die`)
            window.location.reload()
        }
    }

    winGame() {
        if(this.age === 20) {
            alert(`${this.petName} is 20years old! You win!`)
            window.location.reload()
        }
    }
    
}    

const me = new game()
feeding.innerHTML = me.hunger
boredom.innerHTML = me.bored
sleep.innerHTML = me.sleep
age.innerHTML = me.age

const feeder = document.querySelector(".feeding")
feeder.addEventListener("click",e => {
    e.preventDefault();
    me.feed()
    feeder.classList.add("green")
    setTimeout(() => {feeder.classList.remove("green")},800)
})

const start = document.querySelector(".start")
start.addEventListener("click",e => {
    e.preventDefault()
    me.start()
    start.classList.toggle("green")
})

const play = document.querySelector(".play")
play.addEventListener("click",e => {
    e.preventDefault()
    me.bore()
    play.classList.add("green")
    setTimeout(() => {play.classList.remove("green")},800)
})

const light = document.querySelector(".light")
light.addEventListener("click",e => {
    e.preventDefault()
    me.light()
    light.classList.add("green")
    setTimeout(() => {light.classList.remove("green")},800)
})

const sleeping = document.querySelector(".sleeped")
sleeping.addEventListener("click", e => {
    e.preventDefault();
    me.sleeped()
    sleeping.classList.add("green")
    setTimeout(() => {sleeping.classList.remove("green")},800)
})
sleeping.remove()
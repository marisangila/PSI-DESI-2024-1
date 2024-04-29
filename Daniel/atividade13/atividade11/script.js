let health = 5
let healthCharacter = document.querySelector("#healthCharacter")
healthCharacter.innerHTML = `Health: ${health}`

function damageOrHealph(damageOrHealth){
    lastHealth = health
    health = damageOrHealth ? health += 1 : health -= 1  
    healthCharacter.innerHTML = `Health: ${health}`

    if(health == 1){
        if(lastHealth == 2){
            alert("The next attack will to kill Sonic!!")
        }else{
            alert("Sonic Revive!!")
        }
        
    }else if(health == 0 && lastHealth > 0){
        alert("Sonic Die!!")
    }
}



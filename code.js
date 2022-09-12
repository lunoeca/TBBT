function aleatory(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}
function choice(who){
    let result = ''
    if(who ==1){
    result = 'ROCK'
    } else if(who ==2){
    result = 'PAPER'
    } else if(who ==3){
    result ='SCISSORS'
    } else if(who ==4){
    result ='LIZZARD'
    } else if(who ==5){
    result ='SPOCK'
    } else{
    result ='BAZINGA!'
    }
    return result
}
function fight(pc, player){
    if(pc==player){
        result ='TIE'
    } else if((player == 1 && pc == 3)||(player == 1 && pc == 4)||(player == 2 && pc == 1)||(player == 2 && pc == 5)||(player == 3 && pc == 2)||(player == 3 && pc == 4)||(player == 4 && pc == 2)||(player == 4 && pc == 5)||(player == 5 && pc == 3)||(player == 5 && pc == 1))
    {
        result ='YOU WIN'
        wins++
    } else { 
        result ='YOU LOSS'
        losses++
    }
    alert(result)
}
let player = 0
//Define the min and max (limits for the random selection)
let min = 1
let max = 5
let pc = 0
let wins = 0
let losses = 0

while(wins<3 && losses<3) {
    pc = aleatory(1,5)
    player = prompt('Choose: 1 = ROCK, 2 = PAPER, 3 = SCISSORS, 4 = LIZZARD, 5 = SPOCK')

    alert('PC choose '+ choice(pc))
    alert('You choose '+ choice(player))


    fight(pc, player)
    

}
alert('You win '+ wins +' times. You lose '+ losses + ' times.')       

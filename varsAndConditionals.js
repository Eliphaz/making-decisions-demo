/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Eowyn and
    Witch King of Angmar.
*/ 

let eowynAttack = 50;
let witchKingAttack = 5;

if(eowynAttack > witchKingAttack){
    console.log("Eowyn has a superior attack")
} else if(witchKingAttack === eowynAttack){
    console.log("They have a equal attack")
} else{
    console.log("Witch King has a superior attack")
};

let eowynHealth = 100;
let eowynDefense = 0;

if (eowynHealth + eowynDefense >= witchKingAttack){
    console.log("Eowyn lives")
    eowynHealth = eowynHealth + eowynDefense - witchKingAttack
    console.log(`Eowyns health is now: ${eowynHealth}`)
} else{
    console.log("Eowyn dies")
};

let coinLandsHeads = false;

if (coinLandsHeads){
    console.log("the coin landed on heads")
}else{
    console.log("the coin landed on tails")
}

// for(let i = 0; i < 5; i++) {
//     if(eowynHealth > 0) {
//         eowynHealth = eowynHealth - witchKingAttack;
//         console.log(`Eowyn has ${eowynHealth} health left.`);
//     } else {
//         console.log(`Eowyn dead.`);
//     };
// };

while(eowynHealth > 0){
    eowynHealth -= (witchKingAttack - eowynDefense)
    console.log(`Eowyn has ${eowynHealth} health left.`);
}
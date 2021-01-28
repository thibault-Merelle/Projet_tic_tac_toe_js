
let push1 = document.querySelector("#carre1");
let push2 = document.querySelector("#carre2");
let push3 = document.querySelector("#carre3");
let push4 = document.querySelector("#carre4");
let push5 = document.querySelector("#carre5");
let push6 = document.querySelector("#carre6");
let push7 = document.querySelector("#carre7");
let push8 = document.querySelector("#carre8");
let push9 = document.querySelector("#carre9");
let bascule = true;

let gameFinish = false

let tableau = [[0, 0, 0], 
               [0, 0, 0], 
               [0, 0, 0]]

function check(){
    let check1 = triage_horizontale();
    let check2 = triage_transversale();
    let check3 = triage_verticale();
    if (check1 === true){
        return true;
    }
    if (check2 === true){
        return true;
    }
    if (check3 === true){
        return true;
    }
    else {
        return false;
    }
}

function triage_horizontale(){

    for (let i = 0; i < tableau.length; i++){
        let equality = 0;
        for (let j = 0; j < tableau[i].length; j++){
            for(let k = j + 1; k < tableau[i].length; k++){
                if (tableau[i][j] == tableau[i][k]){
                    equality++;
                }
                if (equality == 2){
                    return true;
                }
            }
        }
    
    }
    return false;
}
function triage_transversale(){
    if ((tableau[0][0] == tableau[1][1]) && (tableau[1][1] == tableau[2][2])){
        return true;
    }
    else if ((tableau[0][2] == tableau[1][1]) && (tableau[1][1] == tab[2][0])){
        return true;
    }
    else {
        return false;
    }
}
function triage_verticale(){
    
    let count = 0;
    while(count < 3){
        let equality = 0;
        let i = 0;
        while(i < 3){
            let j = i + 1;
            while(j < 3){
                if tableau[i][count] == tableau[j][count]{
                    equality++;
                }
                if(equality == 2){
                    return true;
                }
                j++;
            }
            i++;
        }
        count++;
    }
    return false;
}


push1.addEventListener("click", function() {
    gameFinish = check();
    if (gameFinish === false){
        if (bascule == true){
            push1.innerHTML = '<i class="fas fa-times"></i>';
            tableau[0][0] = 1;
        }
        else{
            push1.innerHTML = '<i class="far fa-circle"></i>';
            tableau[0][0] = 2;
        }
        bascule = !bascule
    }
    else {
        break;
    }
})

push2.addEventListener("click", function () {
  if (bascule == true) {
    push2.innerHTML = '<i class="fas fa-times"></i>';
      tableau[0][1] = 1;
  } else {
    push2.innerHTML = '<i class="far fa-circle"></i>';
     tableau[0][1] = 2;
  }
  bascule = !bascule;
})
push3.addEventListener("click", function () {
  if (bascule == true) {
    push3.innerHTML = '<i class="fas fa-times"></i>';
     tableau[0][2] = 1;
  } else {
    push3.innerHTML = '<i class="far fa-circle"></i>';
    tableau[0][2] = 2;
  }
  bascule = !bascule;
})
push4.addEventListener("click", function () {
  if (bascule == true) {
    push4.innerHTML = '<i class="fas fa-times"></i>';
   tableau[1][0] = 1;
  } else {
    push4.innerHTML = '<i class="far fa-circle"></i>';
    tableau[1][0] = 2;
  }
  bascule = !bascule;
})
push5.addEventListener("click", function () {
  if (bascule == true) {
    push5.innerHTML = '<i class="fas fa-times"></i>';
    tableau[1][1] = 1;
  } else {
    push5.innerHTML = '<i class="far fa-circle"></i>';
    tableau[1][1] = 2;
  }
  bascule = !bascule;
})
push6.addEventListener("click", function () {
  if (bascule == true) {
    push6.innerHTML = '<i class="fas fa-times"></i>';
    tableau[1][2] = 1;
  } else {
    push6.innerHTML = '<i class="far fa-circle"></i>';
    tableau[1][2] = 2;
  }
  bascule = !bascule;
})
push7.addEventListener("click", function () {
  if (bascule == true) {
    push7.innerHTML = '<i class="fas fa-times"></i>';
    tableau[2][0] = 1;
  } else {
    push7.innerHTML = '<i class="far fa-circle"></i>';
    tableau[2][0] = 2;
  }
  bascule = !bascule;
})
push8.addEventListener("click", function() {
    if (bascule == true){
        push8.innerHTML = '<i class="fas fa-times"></i>';
        tableau[2][1] = 1;
    }
    else{
        push8.innerHTML = '<i class="far fa-circle"></i>';
        tableau[2][1] = 2;
    }
    bascule = !bascule
})
push9.addEventListener("click", function () {
  if (bascule == true) {
    push9.innerHTML = '<i class="fas fa-times"></i>';
    tableau[2][2] = 1;
  } else {
    push9.innerHTML = '<i class="far fa-circle"></i>';
    tableau[2][2] = 2;
  }
  bascule = !bascule;
})

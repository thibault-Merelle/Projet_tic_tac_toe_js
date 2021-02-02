let list_carre = document.querySelectorAll(".carre");
let two_players = document.querySelector("#users");
let reset_game_btn = document.getElementById("#reset");
let player_desktop = document.querySelector("#desktop ");


let player = ["", ""];
let bascule = true;
let list_copy = [];
let list_index_out = [];
let desktop_play = false;

two_players.addEventListener("click", function(){
  player[0] = "O";
  player[1] = "X";
  console.log("play_1 :" + player[0], "play_2 :" + player[1]);
  game_users();
})


player_desktop.addEventListener("click", function () {
    desktop_play = true;
    console.log("mohamed");
    player[0] = "O";
    player[1] = "X";
    recup_copy_list();
    game_desk();
    console.log("we")
  }
);

function recup_copy_list(){                     /* fonction qui copie la liste de grille pour en faire une list d'index */
    for (let i = 0; i < list_carre.length; i++){
        list_copy.push(i);
    }
}

function recup_index_vide(list_copy){                     /* fonction qui mélange la liste d'index vide et qui retourne un index */
    list_copy.sort(function () {
        return Math.random() - 0.5
    });
    return list_copy;
}

function recup(n){
    console.log(list_carre[n].innerText);                               /* fonction qui recuperer la valeur de la case */
    return list_carre[n].innerText;

}
function reset(){                               /* fonction qui remet la grille à zero */
    for (let i = 0; i < list_carre.length; i++){
        list_carre[i].innerText = "";
    }
    recup_copy_list();
}
function reset_game(){                             /* fonction qui remet tous le jeux à zero */
    reset();
    player[0] = '';
    player[1] = '';
    console.log("play_1 :" + player[0], "play_2 :" + player[1]);
}
function case_vide(){                           /* fonction qui vérifie si il reste une case vide */
    for (let i = 0; i < list_carre.length; i++){
        if (list_carre[i].innerText == ""){
            return true;
        }
    }
    return false;
}
function print_play(i, player){
    list_carre[i].innerText = player;
    bascule = !bascule;
    result = win();
    console.log(result);
    if (win()){
      reset_game();
    }
}
if (reset_game_btn){                      /* bouton pour recommencer */
    reset_game_btn.addEventListener("click", reset())
}

function game_users(){                                                          /* le cas ou on a 2 joueurs */
        for (let i = 0; i < list_carre.length; i++){
            list_carre[i].addEventListener("click", function(){
                if ((player[0] != "") && (player[1] != "")){
                    result = win()
                    if (!win()){
                        if ((bascule) && (this.innerText == "")){
                            print_play(i, player[0]);
                          
                        }
                        else if ((!bascule) && (this.innerText == "")) {
                            print_play(i, player[1]);
                            
                        } 
                        else if ((this.innerText != "")){
                          if (!case_vide()){
                                reset();
                            }
                        else {
                                alert("Veuillez choisir une autre CASE !");
                            }
                        }
                        }
                    else if (win()){
                          reset_game();
                    }
                }
                else {
                    alert("Veuillez sélectionner la CROIX ou le CERCLE !");
                }
            })
        }
}

function game_desk(){                         /* le cas ou on joue contre l'ordi */
      for (let i = 0; i < list_carre.length; i++) {
        list_carre[i].addEventListener("click", function () {
          if (player[0] != "" && player[1] != "" && player[1] != player[0]) {
            result = win();
            if (result == false) {
              if (list_carre[i].innerText == ""){
                  list_carre[i].innerText = player[0];
                  list_copy.splice(list_copy.indexOf(i), 1);
                  console.log("user");
                  console.log(list_copy);                  
                  result = win();
                  if (result == true) {
                    reset_game();
                  }
                  
                  else if (list_copy.length > 0) {
                     let list_copy_2 = recup_index_vide(list_copy);
                     console.log("avant");
                     console.log(list_copy);
                     console.log(list_copy_2);
                    
                    j = list_copy_2[0];
                    list_carre[j].innerText = player[1];
                    list_copy_2.splice(0, 1);
                    console.log("apres");
                    console.log(list_copy);
                    console.log(list_copy_2);
                    result = win();
                    if (result == true) {
                      reset_game();
                    }
                  }
              } 
              else {
                if (list_carre[i].innerText != "" && case_vide() == true) {
                  alert("Veuillez choisir une autre CASE !");
                } 
                else if (list_carre[i].innerText != "" && case_vide() == false) {
                  reset();
                }
              }
            } 
            else {
              setTimeout(function () {
                reset_game();
              }, 5);
            }
          } else {
            alert("Veuillez sélectionner la CROIX ou le CERCLE !");
          }
        });
      }

}

function win(){                                        /* fonction qui teste si on a une combinaison gagnante */
    for (let i of player){
        if ((recup(0) == i) && (recup(1) == i) && (recup(2) == i)){
            alert("le Joueur jouant avec " + i + " a gagné")
            return true;
        }
        else if ((recup(3) == i) && (recup(4) == i) && (recup(5) == i)) {
          alert("le Joueur jouant avec " + i + " a gagné");
          return true;
        }
        else if ((recup(6) == i) && (recup(7) == i) && (recup(8) == i)) {
          alert("le Joueur jouant avec " + i + " a gagné");
          return true;
        }
        else if ((recup(0) == i) && (recup(3) == i) && (recup(6) == i)) {
          alert("le Joueur jouant avec " + i + " a gagné");
          return true;
        }
        else if ((recup(1) == i) && (recup(4) == i) && (recup(7) == i)) {
          alert("le Joueur jouant avec " + i + " a gagné");
          return true;
        }
        else if ((recup(2) == i) && (recup(5) == i) && (recup(8) == i)) {
          alert("le Joueur jouant avec " + i + " a gagné");
          return true;
        }
        else if ((recup(0) == i) && (recup(4) == i) && (recup(8) == i)) {
          alert("le Joueur jouant avec " + i + " a gagné");
          return true;
        }
        else if ((recup(2) == i) && (recup(4) == i) && (recup(6) == i)) {
          alert("le Joueur jouant avec " + i + " a gagné");
          return true;
        }
    }
return false;
}
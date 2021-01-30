let list_carre = document.querySelectorAll(".carre");
let circle_btn_1 = document.querySelector("#circle_1");
let cross_btn_1 = document.querySelector("#cross_1");
let circle_btn_2 = document.querySelector("#circle_2");
let cross_btn_2 = document.querySelector("#cross_2");
let reset_game_btn = document.getElementById("#reset");
let player_desktop = document.querySelector("#desktop ");
let div_option = document.querySelector("#divOption");
let circle_btn_3 = document.querySelector("#circle_3");
let cross_btn_3 = document.querySelector("#cross_3");

let player = ["", ""];
let bascule = true;
let list_copy = [];
let list_index_out = [];
let desktop_play = false;
let desk_have_play = false;

circle_btn_1.addEventListener("click", function(){
    player[0] = "O";
})
cross_btn_1.addEventListener("click", function () {
  player[0] = "X";
})
circle_btn_2.addEventListener("click", function () {
  player[1] = "O";
})
cross_btn_2.addEventListener("click", function () {
  player[1] = "X";
})


player_desktop.addEventListener("click", function () {
    let btn_option_1 = document.createElement("button");
    btn_option_1.setAttribute("class", "btn");
    btn_option_1.setAttribute("id", "cross_3");
    btn_option_1.innerText = "Cross";
    let btn_option_2 = document.createElement("button");
    btn_option_2.setAttribute("class", "btn");
    btn_option_2.setAttribute("id", "circle_3");
    btn_option_2.innerText = "Circle";

    div_option.appendChild(btn_option_1);
    div_option.appendChild(btn_option_2);
    desktop_play = true;
    console.log("mohamed");
  },
  { once: true }
);
if (circle_btn_3){                                     /* bouton cercle pour le user contre l'ordi */
    circle_btn_3.addEventListener("click", function(){
        if ((player[0] == "") && (player[1] == "")) {
        player[1] = "O";
        player[0] = "X";
        console.log(player2);
        } 
        else {
        alert("Les options sont déjà définit !");
        }
    });
}
if (cross_btn_3){                                       /* bouton cross pour le user contre l'ordi */
    cross_btn_3.addEventListener("click", function(){
            player[1] = "X";
            player[0] = "O";
            console.log(player[0], player[1]);
    });
}

function recup_copy_list(){                     /* fonction qui copie la liste de grille pour en faire une list d'index */
    for (let i = 0; list_carre.length; i++){
        list_copy.push(i);
    }
}

function recup_index_vide(){                     /* fonction qui mélange la liste d'index vide et qui retourne un index */
    list_copy.sort(function () {
        return Math.random() - 0.5;
    });
    return list_copy[0];
}

function recup(n){                               /* fonction qui recuperer la valeur de la case */
    return list_carre[n].innerText;
}
function reset(){                               /* fonction qui remet la grille à zero */
    for (let i = 0; i < list_carre.length; i++){
        list_carre[i].innerText = "";
    }
}
function reset_game(){                             /* fonction qui remet tous le jeux à zero */
    for (let i = 0; i < list_carre.length; i++) {
      list_carre[i].innerText = "";
    }
    player[0] = "";
    player[1] = "";
}
function case_vide(){                           /* fonction qui vérifie si il reste une case vide */
    for (let i = 0; i < list_carre.length; i++){
        if (list_carre[i].innerText == ""){
            return true;
        }
    }
    return false;
}
if (reset_game_btn){                      /* bouton pour recommencer */
    reset_game_btn.addEventListener("click", reset())
}

function game(){
    if (desktop_play == true){                                        /*le cas ou on joue contre l'ordi*/
        if(desk_have_play == false){                                  /* le tour de l'ordi de jouer */
            i = recup_index_vide();
            if (player[0] != "" && player[1] != "" && player[1] != player[0]) {
              result = win();
              if (result == false) {
                    if (list_carre[i].innerText == "") {
                    list_carre[i].innerText = player[0];
                    list_index_out.push(list_copy.splice(i, 1));
                    bascule = !bascule;
                    desk_have_play = !desk_have_play;
                    result = win();
                    if (result == true) {
                        reset_game();
                    }
                    } 
                    else {
                    if ((list_carre[i].innerText != "") && (case_vide() == true)) {
                        alert("Veuillez choisir une autre CASE !");
                    } 
                    else if ((list_carre[i].innerText != "") && (case_vide() == false)) {
                        reset();
                    }
                    }
              } 
              else {
                reset_game();
              }
            } else {
              alert("Veuillez sélectionner la CROIX ou le CERCLE !");
            }
        }
        else if (desk_have_play == true){                              /* le tout du users de jouer */
            for (let i = 0; i < list_carre.length; i++) {
              list_carre[i].addEventListener("click", function () {
                if (player[0] != "" && player[1] != "" && player[1] != player[0]) {
                  result = win();
                  if (result == false) {
                        if (list_carre[i].innerText == "") {
                        list_carre[i].innerText = player[1];
                        list_index_out.push(list_copy.splice(i, 1));
                        bascule = !bascule;
                        desk_have_play = !desk_have_play;
                        result = win();
                        if (result == true) {
                            reset_game();
                        }
                        } 
                        else {
                        if ((list_carre[i].innerText != "") && (case_vide() == true)) {
                            alert("Veuillez choisir une autre CASE !");
                        } else if ((list_carre[i].innerText != "") && (case_vide() == false)) {
                            reset();
                        }
                        }
                  } 
                  else {
                    reset_game();
                  }
                } else {
                  alert("Veuillez sélectionner la CROIX ou le CERCLE !");
                }
              });
            }
        }

    }
    else {                                                            /* le cas ou on a 2 joueurs */
        for (let i = 0; i < list_carre.length; i++){
            list_carre[i].addEventListener("click", function(){
                if ((player[0] != "") && (player[1] != "") && (player[1] != player[0])){
                    result = win()
                    if ((result == false)){
                        if ((bascule) && (list_carre[i].innerText == "")){
                            list_carre[i].innerText = player[0];
                            list_index_out.push(list_copy.splice(i, 1));
                            bascule = !bascule;
                            result = win();
                            if (result == true){
                                reset_game();
                            }
                        }
                        else if ((!bascule) && (list_carre[i].innerText == "")) {
                            list_carre[i].innerText = player[1];
                            list_index_out.push(list_copy.splice(i, 1));
                            bascule = !bascule;
                            result = win();
                            if (result == true) {
                                reset_game();
                            }
                        } 
                        else {
                            if ((list_carre[i].innerText != "") && (case_vide() == true)){
                                alert("Veuillez choisir une autre CASE !");
                            }
                            else if ((list_carre[i].innerText != "") && (case_vide() == false)){
                                reset();
                            }
                        }
                    }
                    else {
                        reset_game();
                    }
                }
                else {
                    alert("Veuillez sélectionner la CROIX ou le CERCLE !");
                }
            })
        }
    }
}
function win(){                                        /* fonction qui teste si on a une combinaison gagnante */
    for (let i of player){
        if (recup(0) == i && recup(1) == i && recup(2) == i){
            alert("le Joueur jouant avec" + i + "a gagné")
            return true;
        }
        else if (recup(3) == i && recup(4) == i && recup(5) == i) {
          alert("le Joueur jouant avec" + i + "a gagné");
          return true;
        }
        else if (recup(6) == i && recup(7) == i && recup(8) == i) {
          alert("le Joueur jouant avec" + i + "a gagné");
          return true;
        }
        else if (recup(0) == i && recup(3) == i && recup(6) == i) {
          alert("le Joueur jouant avec" + i + "a gagné");
          return true;
        }
        else if (recup(1) == i && recup(4) == i && recup(7) == i) {
          alert("le Joueur jouant avec" + i + "a gagné");
          return true;
        }
        else if (recup(2) == i && recup(5) == i && recup(8) == i) {
          alert("le Joueur jouant avec" + i + "a gagné");
          return true;
        }
        else if (recup(0) == i && recup(4) == i && recup(8) == i) {
          alert("le Joueur jouant avec" + i + "a gagné");
          return true;
        }
        else if (recup(2) == i && recup(4) == i && recup(6) == i) {
          alert("le Joueur jouant avec" + i + "a gagné");
          return true;
        }
        
    }
return false;
}
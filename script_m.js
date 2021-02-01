//Selectionner tout les carre pour faire une liste

let X = '<i class="fas fa-times"></i>'
let O = '<i class="far fa-circle"></i>'
let cell = (n) => carre_list[n].querySelector('span').innerText; //recupere text

let carre_list = document.querySelectorAll('.carre'); //selectorAll renvoie liste
player_one = false; //permet de differencier player_one et player_two. L'un reste faux, l'autre est vrai
stop_play = false;
//console.log('return list of all carre element', carre_list);



for( let item of carre_list) {
    /* cette for loop permet de parcourir une liste */
    item.addEventListener("click", (e) => {
    let user_click = item.querySelector('span');
    /* permet de cibler un carre specfique où cliquera l'user */
 
    if (!player_one){
        user_click.innerText = 'X' /*<i class="fas fa-times"></i> (a ajouter) */;
        player_one = true;
        /* !player_one = player_two --> c'est pour ça que la condition change*/
        /* on renvoie un X  */
    }
    else if (player_one){
        user_click.innerText = "O" 
        player_one = false/*'<i class="far fa-circle"></i>'*/
        
    };
        /* on ré affirme condition = false pour avoir une alternance O / X */
        
        setTimeout(function() {
            win();
        },10)

    });

};


document.querySelector("#reset").addEventListener("click", function() {
    reset();
    });
    
function reset(){
    node = document.querySelectorAll(".carre")
    for (let item in node){
        if (node[item].hasChildNodes){
            node[item].lastChild.innerText = '';
        }
    }
}

/*appelle l'index de la liste des carre, 
selectionne n pour basculer de "X" à "O", 
inner text pour renvoyer la valeur*/

function win() {
    let players = ["X", "O"]

    players.forEach((e) => {

        if (cell(0) == e && cell(1) == e && cell(2) == e){
            alert(e + " You're the winner ! :) ");
            reset();
        };

        if (cell(3) == e && cell(4)  == e && cell(5) == e){
            alert(e + " You're the winner ! :) ");
            reset();
            
        };

        if (cell(6) == e && cell(7)  == e && cell(8) == e){
            alert(e + " You're the winner ! :) ");
            reset();
        };

        if (cell(0) == e && cell(3)  == e && cell(6) == e){
            alert(e + " You're the winner ! :) ");
            reset();
        };

        if (cell(1) == e && cell(4)  == e && cell(7) == e){
            alert(e + " You're the winner ! :) ");
            reset();
        };

        if (cell(2) == e && cell(5)  == e && cell(8) == e){
            alert(e + " You're the winner ! :) ");
            reset();
        };
        if (cell(0) == e && cell(4)== e && cell(8) == e){
            alert(e + " You're the winner ! :) ");
            reset();
        }
        if (cell(2) == e && cell(4)== e && cell(6) == e){
            alert(e + " You're the winner ! :) ");
            reset();
        }
        // else{
        // for (let i = 0 ; cell[i] == e; i++){
        //     alert('eguality');
        //     reset();
        //     }
        // }
        
    });
};




/*

Etape 1 : selectionner les carre pour en faire une liste
Etape 2: mettre une dition pour differencier joueur 1 et jour 2
Etape 3: click event, variable avec un if statement pour que la croix ou le rond d'affiche
Etape 4: changer la condition de joueur pour avoir une alternance "O" et "X"
Etape 5: Appeler l'index de la liste des carre pour voir si ce qu'il revoie est un X ou un O
Etape 6: avoir une vaiable  = ["X", "O"] pour voir leurs comportement
Etape 7: faire un forEach de la variable et faire des if statements pour voir si chaque ligne et colonne possede le meme element.
Etape 8: si c'est le cas, fin du jeu, le joeur à gagner

*/



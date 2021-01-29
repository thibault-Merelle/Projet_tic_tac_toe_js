
/*let push = document.querySelector(".carre");


push.addEventListener("click", function() {
    let newL = document.createElement("div");
    newL.innerHTML = '<i class="fas fa-times"></i>';
    push.appendChild(newL);
})*/


// Ajout Marwa

//Selectionner tout les carre pour faire une liste

let carre_list = document.querySelectorAll('.carre'); //selectorAll renvoie liste
player_one = false; //permet de differencier player_one et player_two. L'un reste faux, l'autre est vrai
console.log('return list of all carre element', carre_list);


for( let item of carre_list) {
    /* cette for loop permet de parcourir une liste */
    item.addEventListener("click", (e) => {
    let user_click = item.querySelector('span');
    /* permet de cibler un carre specfique où cliquera l'user */
    if(!player_one){
        user_click.innerText = 'X' /*<i class="fas fa-times"></i> (a ajouter) */;
        player_one = true;
        /* !player_one = player_two --> c'est pour ça que la condition change*/
        /* on renvoie un X  */
    }
    else {
        user_click.innerText = "O" 
        player_one = false/*'<i class="far fa-circle"></i>'*/
    };
    /* on ré affirme condtion = false pour avoir une alternance O*/
})};


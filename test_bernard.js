if (desktop_play == true) {
  /*le cas ou on joue contre l'ordi*/
  if (desk_have_play == false) {
    /* le tour de l'ordi de jouer */
    i = recup_index_vide(recup_copy_list());
    console.log(i);
    if (player[0] != "" && player[1] != "" && player[1] != player[0]) {
      result = win();
      if (result == false) {
        if (list_carre[i].innerText == "") {
          list_carre[i].innerText = player[0];
          list_index_out.push(list_copy.splice(0, 1));
          desk_have_play = !desk_have_play;
          result = win();
          if (result == true) {
            reset_game();
          }
        } else {
          if (list_carre[i].innerText != "" && case_vide() == true) {
            alert("Veuillez choisir une autre CASE !");
          } else if (list_carre[i].innerText != "" && case_vide() == false) {
            reset();
          }
        }
      } else {
        reset_game();
      }
    } else {
      alert("Veuillez sélectionner la CROIX ou le CERCLE !");
    }
  } else if (desk_have_play == true) {
    /* le tout du users de jouer */
    for (let i = 0; i < list_carre.length; i++) {
      list_carre[i].addEventListener("click", function () {
        if (player[0] != "" && player[1] != "" && player[1] != player[0]) {
          result = win();
          if (result == false) {
            if (list_carre[i].innerText == "") {
              list_carre[i].innerText = player[1];
              for (element of list_copy) {
                if (element == i) {
                  list_index_out.push(
                    list_copy.splice(list_copy.indexOf(element), 1)
                  );
                }
              }
              desk_have_play = !desk_have_play;
              result = win();
              if (result == true) {
                reset_game();
              }
            } else {
              if (list_carre[i].innerText != "" && case_vide() == true) {
                alert("Veuillez choisir une autre CASE !");
              } else if (
                list_carre[i].innerText != "" &&
                case_vide() == false
              ) {
                reset();
              }
            }
          } else {
            reset_game();
          }
        } else {
          alert("Veuillez sélectionner la CROIX ou le CERCLE !");
        }
      });
    }
  }
}

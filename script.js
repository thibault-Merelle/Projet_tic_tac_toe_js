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
let horizontale_haut = [0, 0, 0];
let horizontale_bas = [0, 0, 0];
let horizontale_center = [0, 0, 0];
let verticale_right = [0, 0, 0];
let verticale_left = [0, 0, 0];
let verticale_center = [0, 0, 0];
let transversale_right = [0, 0, 0];
let transversale_left = [0, 0, 0];

<<<<<<< HEAD
<<<<<<< HEAD


push1.addEventListener("click", function() {
    if (bascule == true){
        push1.innerHTML = '<i class="fas fa-times"></i>';
        horizontale_haut[1] = 1;
        verticale_left[1] = 1;
        transversale_left[1] = 1;
    }
    else{
        push1.innerHTML = '<i class="far fa-circle"></i>';
         horizontale_haut[1] = 2;
         verticale_left[1] = 2;
         transversale_left[1] = 2;
    }
    bascule = !bascule
})

=======
<<<<<<< HEAD
=======
>>>>>>> test
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
let horizontale_haut = [0, 0, 0];
let horizontale_bas = [0, 0, 0];
let horizontale_center = [0, 0, 0];
let verticale_right = [0, 0, 0];
let verticale_left = [0, 0, 0];
let verticale_center = [0, 0, 0];
let transversale_right = [0, 0, 0];
let transversale_left = [0, 0, 0];



push1.addEventListener("click", function() {
    if (bascule == true){
        push1.innerHTML = '<i class="fas fa-times"></i>';
        horizontale_haut[1] = 1;
        verticale_left[1] = 1;
        transversale_left[1] = 1;
    }
    else{
        push1.innerHTML = '<i class="far fa-circle"></i>';
         horizontale_haut[1] = 2;
         verticale_left[1] = 2;
         transversale_left[1] = 2;
    }
    bascule = !bascule
})

>>>>>>> ecc8572a6d3933c028808049941d680b710aa12e
push2.addEventListener("click", function () {
  if (bascule == true) {
    push2.innerHTML = '<i class="fas fa-times"></i>';
      horizontale_haut[2] = 1;
      verticale_center[1] = 1;
  } else {
    push2.innerHTML = '<i class="far fa-circle"></i>';
     horizontale_haut[2] = 2;
     verticale_center[1] = 2;
  }
  bascule = !bascule;
})
push3.addEventListener("click", function () {
  if (bascule == true) {
    push3.innerHTML = '<i class="fas fa-times"></i>';
     horizontale_haut[3] = 1;
     verticale_right[1] = 1;
     transversale_right[1] = 1;
  } else {
    push3.innerHTML = '<i class="far fa-circle"></i>';
     horizontale_haut[3] = 2;
     verticale_right[1] = 2;
     transversale_right[1] = 2;
  }
  bascule = !bascule;
})
push4.addEventListener("click", function () {
  if (bascule == true) {
    push4.innerHTML = '<i class="fas fa-times"></i>';
     horizontale_center[1] = 1;
     verticale_left[2] = 1;
  } else {
    push4.innerHTML = '<i class="far fa-circle"></i>';
    horizontale_center[1] = 2;
    verticale_left[2] = 2;
  }
  bascule = !bascule;
})
push5.addEventListener("click", function () {
  if (bascule == true) {
    push5.innerHTML = '<i class="fas fa-times"></i>';
    horizontale_center[2] = 1;
    verticale_center[2] = 1;
    transversale_right[2] = 1;
    transversale_left[2] = 1;
  } else {
    push5.innerHTML = '<i class="far fa-circle"></i>';
    horizontale_center[2] = 2;
    verticale_center[2] = 2;
    transversale_right[2] = 2;
    transversale_left[2] = 2;
  }
  bascule = !bascule;
})
push6.addEventListener("click", function () {
  if (bascule == true) {
    push6.innerHTML = '<i class="fas fa-times"></i>';
    horizontale_center[3] = 1;
    verticale_right[2] = 1;
  } else {
    push6.innerHTML = '<i class="far fa-circle"></i>';
    horizontale_center[3] = 2;
    verticale_right[2] = 2;
  }
  bascule = !bascule;
})
push7.addEventListener("click", function () {
  if (bascule == true) {
    push7.innerHTML = '<i class="fas fa-times"></i>';
    horizontale_bas[1] = 1;
    verticale_left[3] = 1;
    transversale_right[3] = 1;
  } else {
    push7.innerHTML = '<i class="far fa-circle"></i>';
    horizontale_bas[1] = 2;
    verticale_left[3] = 2;
    transversale_right[3] = 2;
  }
  bascule = !bascule;
})
push8.addEventListener("click", function() {
    if (bascule == true){
        push8.innerHTML = '<i class="fas fa-times"></i>';
        horizontale_bas[2] = 1;
        verticale_center[3] = 1;
    }
    else{
        push8.innerHTML = '<i class="far fa-circle"></i>';
        horizontale_bas[2] = 2;
        verticale_center[3] = 2;
    }
    bascule = !bascule
})
push9.addEventListener("click", function () {
  if (bascule == true) {
    push9.innerHTML = '<i class="fas fa-times"></i>';
    horizontale_bas[3] = 1;
    verticale_right[3] = 1;
    transversale_left[3] = 1;
  } else {
    push9.innerHTML = '<i class="far fa-circle"></i>';
    horizontale_bas[3] = 2;
    verticale_right[3] = 2;
    transversale_left[3] = 2;
  }
  bascule = !bascule;
<<<<<<< HEAD
})
=======
<<<<<<< HEAD
})
=======
})
>>>>>>> ajout script js
>>>>>>> ecc8572a6d3933c028808049941d680b710aa12e


let push = document.querySelector(".carre");


push.addEventListener("click", function() {
    let newL = document.createElement("div");
    newL.innerHTML = '<i class="fas fa-times"></i>';
    push.appendChild(newL);
})



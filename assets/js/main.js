  
var new_ = document.querySelector('.new_') 
var password = document.querySelector('.password')
var acount = document.querySelector('.acount')
var new_acount = document.querySelector('.new_acount')



password.addEventListener('click',function(){
    new_acount.classList.toggle('defult')
    acount.classList.toggle('defult')
})

new_.addEventListener('click',function(){
  acount.classList.toggle('defult')
  new_acount.classList.toggle('defult')
})

/*popup */

var main_masque = document.querySelector('.main_masque') 
var edit = document.querySelector('.edit') 
var popup_edit = document.querySelector('.popup_edit') 

edit.addEventListener('click',function(){
  popup_edit.classList.toggle('defult')
  main_masque.classList.toggle('defult')
})


var delete_ = document.querySelector('.delete') 
var popup_delete = document.querySelector('.popup_delete') 

delete_.addEventListener('click',function(){
  popup_delete.classList.toggle('defult')
  main_masque.classList.toggle('defult')
})


var desactived = document.querySelector('.desactived') 
var popup_desactived = document.querySelector('.popup_desactived') 

desactived.addEventListener('click',function(){
  popup_desactived.classList.toggle('defult')
  main_masque.classList.toggle('defult')
})


var reactved = document.querySelector('.reactved') 
var popup_reactived = document.querySelector('.popup_reactived') 

reactved.addEventListener('click',function(){
  popup_reactived.classList.toggle('defult')
  main_masque.classList.toggle('defult')
})

var acces = document.querySelector('.acces') 
var popup_oct_adm = document.querySelector('.popup_oct_adm') 

acces.addEventListener('click',function(){
  popup_oct_adm.classList.toggle('defult')
  main_masque.classList.toggle('defult')
})


var no_access = document.querySelector('.no_access') 
var popup_rtr_adm = document.querySelector('.popup_rtr_adm') 

no_access.addEventListener('click',function(){
  popup_rtr_adm.classList.toggle('defult')
  main_masque.classList.toggle('defult')
})
/*sup button */

var sup_button = document.querySelector('#sup_button') 

function del(){
  window.confirm('Voulez-vous supprimer cette personne!')
}


/*desactived */
function desactive(){
  popup_edit.classList.add('defult')
  popup_delete.classList.add('defult')
  popup_desactived.classList.add('defult')
  popup_reactived.classList.add('defult')
  popup_oct_adm.classList.add('defult')
  popup_rtr_adm.classList.add('defult')
  main_masque.classList.toggle('defult')
}
 











// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");


function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");  test.classList.toggle("none");
  
}

list.forEach((item) => item.addEventListener("click", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");   
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};



/*
let test = document.querySelectorAll(".icon");
let ajout = document.querySelectorAll(".ajout");

ajout.addEventListener("click", function(){
    window.alert('bravo')
    ajout.a
});
*/
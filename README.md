# Morpion_jQuery
Création du jeu du morpion à l'aide de jQuery.

J'ai en premier permis d'afficher les charactères 'X' et 'O' de manière alternative en créant une variable booléenne, et associant chaque charactère à une des deux valeurs via une condition:

`sign = true;
...
if (sign === true){
  $(this).html('<p>X</p>');  -->cela positionnera le charactère
  sign = false;               -->cela changera la valeur du booléen, alors on passe au tour du joueur suivant
}
else if (sign === false){
  $(this).html('<p>O</p>');
  sign = true;
}`

Puis j'ai créer un bouton permettant de nettoyer la grille de tous charactères:

`$('.square').html('');  --> ceci réinitialisera la grille
sign = true;            --> et ça, le booléen, pour rester clair, chaque partie commencera par la pose d'un 'X'`

J'ai par la suite empêché d'afficher un autre charactère à la place d'un autre, en ajoutant une classe aux éléments possédants déjà un charactère et en utilisant une autre pour les éléments vide; il suffit ensuite de permettre ou non selon la classe de l'élément pointé de positionner un charactère avec une condition:

`if ($(this).hasClass('empty')){
  if (sign === true){
    $(this).html('<p>X</p>').toggleClass('empty full');  -->cela changera la classe 'empty' en 'full' et empêchera un nouveau positionnement
    sign = false;               
  }
  else if (sign === false){
    $(this).html('<p>O</p>').toggleClass('empty full');
    sign = true;
  }
}`

Il faut en revanche réinitialiser les classes lorsqu'on réinitialise la grille:

`$('.square').html('').addClass('empty').removeClass('full');  --> On ne peut pas utiliser toggleClass pour le coup car cela rempalcera la classe 'empty' par 'full' s'il reste des éléments lors de la réinitialisation et cela rendrait impossible de jouer certaine case vide.  
sign = true;`

Voici le code javascript en entier:

`var sign = true;


$(document).ready(function(){
  $('.square').click(function(){
    if ($(this).hasClass('empty')) {
      if (sign === true) {
        $(this).html('<p>X</p>').toggleClass('empty full');
        sign = false;
      }
      else if (sign === false) {
        $(this).html('<p>O</p>').toggleClass('empty full');
        sign = true;
      }
    }

  });

  $('.clear').click(function(){
    $('.square').html('').addClass('empty').removeClass('full');
    sign = true;
  });
});`

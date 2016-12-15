// Définit si la partie est en cours ou non:
var partie = true;


// Définit si c'est au tour du joueur X ou joueur O:
var sign = true;


// Définit le contenu des éléments individuellement:
var a = '', b = '', c = '', d = '', e = '', f = '', g = '', h = '', i = '';


// Définit le nombre de victoires, défaites, matchs nuls:
var vicX = 0, vicO = 0, defX = 0, defO = 0, nul = 0;


// on regarde s'il n'y a pas de gagnant à chaque click:
var check = function(){
  if (a !== '' && a == b && a == c || d !== '' && d == e && d == f || g !== '' && g == h && g == i || a !== '' && a == d && a == g || b !== '' && b == e && b == h || c !== '' && c == f && c == i || a !== '' && a == e && a == i || c !== '' && c == e && c == g) {
    partie = false; // arrête la partie s'il y a une victoire
    alert('Victoire');
    // on incrémente les victoires et le défaites selon le joueur qui gagne:
    if (a === 'rouge' && a == b && a == c || d === 'rouge' && d == e && d == f || g === 'rouge' && g == h && g == i || a === 'rouge' && a == d && a == g || b === 'rouge' && b == e && b == h || c === 'rouge' && c == f && c == i || a === 'rouge' && a == e && a == i || c === 'rouge' && c == e && c == g) {
      vicX++;
      defO++;
    }
    else {
      vicO++;
      defX++;
    }
    // On affiche le nombre de victoires et de défaites par joueurs:
    $('.zero').html('Victoire X: '+vicX+' | Défaite X:  '+defX+'<br><br>Victoire O: '+vicO+' | Défaite O:  '+defO);
  }
};


// On change la variable attribuée à une case:
var cross = function(cas){
  eval(cas +"= 'rouge'");
};

var circle = function(cas){
  eval(cas +"= 'bleu'");
};


$(document).ready(function(){
  $('.square').click(function(){

    // Si la partie est en cours:
    if (partie) {
      // on récupère l'id de la case cliquée:
      var id = $(this).attr('id');

      // Si la case à pour classe 'empty' alors...
      if ($(this).hasClass('empty')) {
        // Si la variable sign = true alors...
        if (sign === true) {
          // on peut introduire 'X' dans la case...
          cross(id); // et lui attribuer la valeur rouge (couleur du premier joueur)
          $(this).html('<p>X</p>').toggleClass('empty full'); // En plus d'ajouter 'X' on change de classe pour éviter que le joueur puisse cliquer de nouveau sur une case déjà marquée
          sign = false; // on passe sign en false pour qu'au prochain tour on affiche 'O' plutôt que 'X'
          check(); // On regarde s'il y a un gagnant
        }
        else if (sign === false) {
          circle(id);// là on attribue la couleur bleu (joueur 2)
          $(this).html('<p>O</p>').toggleClass('empty full');
          sign = true;
          check();
        }

      }

    }
  });

  $('.clear').click(function(){
    // On vide les cases de leur contenu:
    $('.square').html('').addClass('empty').removeClass('full');
    // On réinitialise les variables:
    partie = true;
    sign = true;
    a = ''; b = ''; c = ''; d = ''; e = ''; f = ''; g = ''; h = ''; i = '';
  });
});

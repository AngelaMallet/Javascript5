submit.addEventListener("click", function(){
  var firstNumber = document.getElementById('firstNumber').value; // je demande de rentrer un premier chiffre
  var secondNumber = document.getElementById('secondNumber').value; // idem pour le second chiffre
  var result = parseInt(firstNumber) * secondNumber; // le var résultat est égal à var firstnumber * var secondnumber
  if (isNaN(firstNumber) || isNaN(secondNumber))// si le premier ou le second chiffre n'est pas reconnu
   //comme une bonne valeur isNaN alors l'alerte sera ...ligne d'en dessous
  {
    alert("Vous n'avez pas entré des chiffres");
  }
    else {
      alert("Le résultat est : " + result); //sinon, la boîte de dialogue donnera le résultat
    }
  }
)

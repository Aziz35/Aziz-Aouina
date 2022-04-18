let etudiant = [];
let btnValider;

function afficherTableau() {
  let tbody = document.querySelector("tbody");
  let newHTML = "";
  for (let i = 0; i < etudiant.length; i++) {
    newHTML += "<tr>";
    newHTML +=   "<th scope='row'>" + etudiant[i].nom + " " + etudiant[i].prenom + "</th>";
    newHTML += "<td>" + etudiant[i].email + "</td>";
    newHTML += "<td>" +
      (parseInt(etudiant[i].note1) +
        parseInt(etudiant[i].note2) +
        parseInt(etudiant[i].note3)) /
        3 + "</td>";

        newHTML += "<td>" + "<button type ='button' style='border: none' onClick='voirdetails("+i+")'><img src='icon.png' width='25'/></button>" + "</td>";
        newHTML += "<td>" + "<button type ='button' style='border: none' onClick='supression("+i+")'><img src='icon1.png' width='25'/></button>" + "</td>";
        newHTML += "</tr>";
    
  }
  tbody.innerHTML = newHTML;
}

function ajouterEtudiant() {
  //Collecter les données du formulaire
  const nomVal = document.getElementById("nom").value;
  const prenomVal = document.getElementById("prenom").value;
  const emailVal = document.getElementById("email").value;
  const classeVal = document.getElementById("classe").value;
  const note1Val = document.getElementById("note1").value;
  const note2Val = document.getElementById("note2").value;
  const note3Val = document.getElementById("note3").value;

  //Créer un nouvel objet Livre
  const newEtudiant = new Etudiant(
    nomVal,
    prenomVal,
    emailVal,
    classeVal,
    note1Val,
    note2Val,
    note3Val
  );

  
  etudiant.push(newEtudiant);
  console.table(etudiant);

  
  afficherTableau();
}





function init() {
  etudiant = [];
  btnValider = document.getElementById("btnValider");
  btnValider.addEventListener("click", ajouterEtudiant);
}

function main() {
  //console.log("Hi");
  init();
  afficherTableau();
}

  


window.addEventListener("load", main); 

function voirdetails(i) {
  alert(
    "Classe = " +
      etudiant[i].classe +
      "  Note 1 = " +
      etudiant[i].note1 +
      "  Note 2 = " +
      etudiant[i].note2 +
      "  Note 3 = " +
      etudiant[i].note3
  );
}
function supprimer(i) {
  document.getElementById("tab").deleteRow(i + 1);
}

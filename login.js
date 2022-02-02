//crée des variable a prtir du DOM
const login = document.querySelector(".login");
const mail = login.querySelector(".mail");
const pass = login.querySelector(".pass");
const resultat = document.querySelector(".resultat");
const notif = login.querySelector(".notif");
// On ecoute les evenment et on crée une fonction
login.addEventListener("submit", function (event) {
  event.preventDefault();

  let value1 = mail.value;
  let value2 = pass.value;

  if (value1 == "123@hotmail.com" && value2 == "1234") {
    login.classList.add("hiden");
    resultat.classList.remove("hiden");
  } else {
    notif.classList.remove("hiden");
  }
});

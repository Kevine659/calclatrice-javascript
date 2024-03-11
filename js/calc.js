// encapsulation
const buttonList = document.querySelectorAll(".calc_button");
const field = document.querySelector("#name");
const submitButton = document.querySelector("#btn_submit");
const resultField = document.querySelector("#result");
const timeZone = document.querySelector("#time_zone");

resultField.value = ""; // Réinitialiser la valeur du champ de résultat
field.value = ""; // Reinitialiser la valeur du champ de saisie

// fonctions
const addToText = (digit) => {
  field.value += digit;
};

const textToExpression = (text = "") => {
  // cos --> Math.cos
  // sin --> Math.sin
  //   let result = expression
  //     .replace(/cos/gi, "MAth.cos")
  //     .replace(/sin/gi, "Math.sin")
  //     .replace(/tan/gi, "Math.tan")
  //     .replace(/sqrt/gi, "Math.sqrt");

  //   return result;
  // };

  // ou encore
  let result = text.replace(
    /\b(cos|sin|tan|sqrt|log)\b/gi,
    (match) => `Math.${match}`
  );

  return result;
};

const showResult = () => {
  const expression = textToExpression(field.value);
  const result = eval(expression);

  if (isNaN(result)) {
    resultField.value = "Erreur";
  } else if (!isFinite(result)) {
    if (result < 0) {
      resultField.value = "-infinie";
    } else {
      resultField.value = "+infinie";
    }
  } else {
    resultField.value = ` ${result}`;
  }
};

// on ajoute l'evenement sur chaque element de notre nodelist. donc sur chaque elements
buttonList.forEach((element) => {
  element.addEventListener("click", () => {
    addToText(element.innerHTML);
  });
});

// afficher le resultat lors du click sur le bouton valider
submitButton.addEventListener("click", showResult);

// Le setTimeout permet d'exécuter une action après un certain nombre de temps
setTimeout(() => {
  // console.log("Me voilà !");
}, 5000);

// Le setInterval permet d'exécuter une ou plusieurs instructions de manière répétée en commençant après l'intervalle de temps, puis à chaque intervalle de temps.
setInterval(() => {
  // console.log("Je me dois sous peine de sanction disciplaines grâve, et ceci pour le meilleur du monde possible de ne plus porter atteinte à mon propre devenir (je bêtise)");
  timeZone.innerHTML = new Date().toLocaleTimeString();
}, 1000);

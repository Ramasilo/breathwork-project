function take() {
  let name = prompt("what is your name?");
  let email = prompt("what is your email adresse");
  let age = prompt("How old are you?");
  if (age >= 18) {
    alert(
      "Welcome to breathwork, " +
        name +
        "! Be on the lookout for the email and see you soon."
    );
  } else {
    alert(
      "Hello " +
        name +
        "! You do qualify for joint guardian membership, get an older to join with you."
    );
  }
}

let courseButton = document.querySelector(".course-button");
courseButton.addEventListener("click", take);

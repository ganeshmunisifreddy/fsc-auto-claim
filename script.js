console.log("script injected...");

function claimQuestions() {
  var buttons = document.getElementsByTagName("button");

  for (btn of buttons) {
    if (btn.value === "claim") {
      //btn.click();
      console.log("Claiming question...");
    }
  }
}

setInterval(() => {
  //claimQuestions();
  //console.log("called");
}, 2000);

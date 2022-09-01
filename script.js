console.log("script injected...");

var isClicked = false;

var claimInterval = setInterval(() => {
  claimQuestions();
  console.log("called claim interval");
}, 2000);

// function clearFunc() {
//   var buttons = document.getElementsByTagName("button");

//   for (btn of buttons) {
//     if (btn.value === "release") {
//       if (claimInterval) {
//         clearInterval(claimInterval);
//       }
//     }
//   }
// }

function claimQuestions() {
  //clearFunc();
  var buttons = document.getElementsByTagName("button");

  for (btn of buttons) {
    if (btn.value === "claim") {
      if (!isClicked) {
        btn.click();
        isClicked = true;
        console.log("Claiming question...");
      }
    }
  }
}
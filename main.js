function processNumber() {
  const num = parseFloat(document.getElementById("numberInput").value);
  let countUpText = "";
  let countDownText = "";
  //counting up
  let i = 0;
  while (i <= num) {
    countUpText += `<p> ${i} <p/>`;
    i++;
  }

  //counting down
  let j = num;
  do {
    countDownText += `<p> ${j} <p/>`;
    j--;
  } while (j >= 0);

  //Printing to the user
  document.getElementById("countUp").innerHTML = countUpText;
  document.getElementById("countDown").innerHTML = countDownText;
}

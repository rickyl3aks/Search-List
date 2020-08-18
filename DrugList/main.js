const text = document.getElementById("text");
text.addEventListener("keyup", () => {
  //variable
  const filter = text.value.toUpperCase();
  const div = document.getElementById("container");
  const drugs = div.getElementsByTagName("h1");
  const description = div.getElementsByTagName("p");

  Array.from(drugs).forEach((e) => {
    textContent = e.innerText.toUpperCase();
    siblins = e.nextElementSibling;
    if (textContent.indexOf(filter) != -1) {
      e.style.display = "";
      siblins.style.display = "";
    } else {
      e.style.display = "none";
      siblins.style.display = "none";
    }
  });
});

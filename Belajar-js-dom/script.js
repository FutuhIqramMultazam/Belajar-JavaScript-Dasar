// creat

const p3 = document.querySelector(".p3");

function ubahWarnaP3() {
  p3.style.backgroundColor = "green";
}

const p2 = document.querySelector(".p2");

function ubahWarnaP2() {
  p2.style.backgroundColor = "green";
}

p2.onclick = ubahWarnaP2;
p3.onclick = ubahWarnaP3;

const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const teksLiBaru = document.createTextNode("item baru");

  liBaru.appendChild(teksLiBaru);
  ul.appendChild(liBaru);
});

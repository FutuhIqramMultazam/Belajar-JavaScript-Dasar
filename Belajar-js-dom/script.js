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

// mulai
// ambil element yang mau di event
const p4 = document.querySelector("section#b p");

p4.addEventListener("click", function () {
  // panggil element
  const ul = document.querySelector("section#b ul");

  // buat elemen yang anda panggil
  const liBaru = document.createElement("li");

  // isi elemen dengan creatTextNode
  const teksLi = document.createTextNode("item baru");

  // lalu appendChild
  liBaru.appendChild(teksLi);
  ul.appendChild(liBaru);

  // selesai
});

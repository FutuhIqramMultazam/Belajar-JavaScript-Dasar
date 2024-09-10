// setiap yang di komentar adalah materi yang di bahas

// %%% DOM tree, cabang seperti pohon %%%

/* Node itu = bisa tag bisa element, poko nya yang kotak aja dalam tree , kita milih dari satu node itu namanya adalah node list.
 HTMLcollection= hanya element , mereka strukturnya sama kaya objek array*/

// =========================================

// %%% DOM selection %%%

document.getElemenById();
document.getElementsByTagName();
document.getElementsByClassName();
document.querySelector();
document.querySelectorAll();

// ### studi kasus nya ###

const kotak = document.getElementById("judul");
kotak.style.color = "green";

// =========================================

// %%% DOM manipulasi element %%%

// kotak = element
kotak.innerHTML = "fadilahfatwa"; // untuk merubah isi dari element tersebut, contoh h1 di isi "hello world", ketika di manipulasi innerHTML = "fadilah fatwa", maka berubah jadi fadilah fatwa
kotak.style.color = "green"; // ini untuk merubah warna teks
kotak.setAttribute("class", "kepala");
kotak.getAttribute("id"); // output: judul
kotak.setAttribute("id", "judol"); //output:  id="judol"
kotak.removeAttribute("id"); // output: id == null
kotak.classList.add("kaki"); // untuk menambah nilai di atribut class
kotak.classList.remove("kaki");
kotak.classList.toggle("judul"); // output: ngecek isi class, ada ga class yang bernama judul?, kalo ga ada di isi, kalo ada di hapus.

kotak.classList.item("2"); // jadi hakekat nya atribut itu adalah sebuah array kalo di dalam JavaSript, jadi kalo kita menuliskan '.item(1)', jadi artinya dia mencetak nama class yang index ke 2 , contoh: class="head d-block judul", jadi dia bakal bawa nilai class yang ke 3 yaitu judul, karena semua index memulai angkanya dari 0, head:0 d-block:1 judul:2

kotak.classList.contains("anum"); // fungsi ini dia menanyakan, contoh: ada ga class yang namanya anum di variable kotak?, kalo ada true kalo engga false. jadi beda ya sama togler

kotak.classList.replace(""); // fungsi ini jadi mengganti class yang ada, contoh kita memiliki class yang isi nya dua nilai (judul dan anum), nilai ke satu di ubah menjadi nilai ke 2, jadi hasil nya sekarang jadi hanya 'anum';

//==========================================

// %%% DOM manipulasi node %%%

document.createElement();
document.createTextNode();
Element.appendChild(element);
element.insertBefore(teksBaru, sebelumApa); // parameter ke satu untuk nilai baru nya, dan yang ke dua mau sebelum element apa di tambahkan nya?
parentNode.removeChild();
parentNode.replaceChild(param1, param2); // dia menerima 2 parameter, param ke 1 akan me replace apa?

// ### studi kasus ke 1 ###

// bikin elemen
const p = document.createElement("p");

// bikin isinya
const isiP = document.createTextNode("hai");

// simpen isinya ke tag
p.appendChild(isiP);

// simpen di mana?
const sa = document.getElementById("a");

// masukin ke tempat yang dituju
sa.appendChild(p);

// manipulasi
p.style.color = "green";

// ### studi kasus ke 2 ###

// bikin elemen
const form = document.createElement("form");
const input = document.createElement("input");
const button = document.createElement("button");

// bikin isinya
const textbtn = document.createTextNode("kirim");

// simpen isinya ke tag
button.appendChild(textbtn);

// simpen di mana?
const s = document.getElementById("a");

// masukin ke tempat yang di mau
form.appendChild(input);
form.appendChild(button);
s.appendChild(form);

// manipulasi
form.setAttribute("action", "materi-dom.js");
input.setAttribute("placeholder", "isi nama anda");
//==========================================

// %%% DOM event %%%

element.addEventListener("click", function () {
  // panggil element
  // buat elemen yang anda panggil
  // isi elemen dengan creatTextNode
  // lalu appendChild
  // selesai
});

// ### Studi kasus ke 1 ###
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

// ### Studi kasus ke 2 buatan sendiri ###
// pilih element nya
p4.addEventListener("click", function () {
  // jika mau menggunakan promp
  let input = prompt("masukan nama");
  let inputA = prompt("masukan teks untuk link");
  let inputLink = prompt("masukan link");
  // bikin element
  const a = document.createElement("a");
  const liBaru = document.createElement("li");
  //  bikin isinya
  const teksLiBaru = document.createTextNode(input);
  const teksa = document.createTextNode(inputA);
  // masukan kedua variable di atas ke dalam element parentnya yaitu UL
  liBaru.appendChild(teksLiBaru);
  a.appendChild(teksa);
  // ini element parentnya
  const ul = document.querySelector("section#b ul");
  ul.appendChild(liBaru);
  ul.appendChild(a);
  // manipulasi
  a.setAttribute("href", "inputLink");
  a.setAttribute("target", "_blank");
});

// ### Studi kasus ke 3 ###

judul.addEventListener("mouseenter", function () {
  judul.style.backgroundColor = "green";
});

judul.addEventListener("mouseleave", function () {
  judul.style.backgroundColor = " #333";
});

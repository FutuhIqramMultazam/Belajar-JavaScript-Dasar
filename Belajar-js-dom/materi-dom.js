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
kotak.innerHTML = "fadilahfatwa";
kotak.style.color = "green";
kotak.setAttribute("class", "kepala");
kotak.getAttribute("id"); // output: judul
kotak.setAttribute("id", "judol"); //output:  id="judol"
kotak.removeAttribute("id"); // output: id == null
kotak.classList.add("kaki");
kotak.classList.remove("kaki");
kotak.classList.toggle("judul"); // output: ngecek isi class, ada ga class yang bernama judul?, kalo ga ada di isi, kalo ada di hapus.

kotak.classList.item("2"); // jadi hakekat nya atribut itu adalah sebuah array kalo di dalam JavaSript, jadi kalo kita menuliskan '.item(1)', jadi artinya dia mencetak nama class yang index ke 2 , contoh: class="head d-block judul", jadi dia bakal bawa nilai class yang ke 3 yaitu judul, karena semua index memulai angkanya dari 0, head:0 d-block:1 judul:2

kotak.classList.contains("anum"); // fungsi ini dia menanyakan, contoh: ada ga class yang namanya anum di variable kotak?, kalo ada true kalo engga false. jadi beda ya sama togler

kotak.classList.replace(""); // fungsi ini jadi mengganti class yang ada, contoh kita memiliki class yang isi nya dua nilai (judul dan anum), nilai ke satu di ubah menjadi nilai ke 2, jadi hasil nya sekarang jadi hanya 'anum';

//==========================================

// %%% DOM manipulasi node %%%

document.createElement();
document.createTextNode();
document.insertBefore();

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

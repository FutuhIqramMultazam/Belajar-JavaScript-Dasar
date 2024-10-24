// object literal #########################################################################
// PROBLEM: tidak efektif untuk object yang sama
/* let nama = {
  nama: "Futuh",
  energi: 10,
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Hallo ${this.nama} selamat makan, energi kamu sekarang adalah ${this.energi}`);
  },
}; */

// Fungsi deklarasi #########################################################################
// versi biasa
/* const mahasiswaMethod = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Hallo ${this.nama} selamat makan, energi kamu sekarang adalah ${this.energi}`);
  },

  main: function (jam) {
    this.energi -= jam;
    console.log(`Hallo ${this.nama} selamat bermain, energi kamu sekarang adalah ${this.energi}`);
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Hallo ${this.nama} selamat tidur, energi kamu sekarang adalah ${this.energi}`);
  },
};

function mahasiswa(nama, energi) {
  let mahasiswa = Object.create(mahasiswaMethod);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
} */

// versi prototype @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

/* function mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}

mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  console.log(`Hallo ${this.nama} selamat makan, energi kamu sekarang adalah ${this.energi}`);
};
mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  console.log(`Hallo ${this.nama} selamat makan, energi kamu sekarang adalah ${this.energi}`);
};
mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  console.log(`Hallo ${this.nama} selamat tidur, energi kamu sekarang adalah ${this.energi}`);
};

let icam = new mahasiswa("Futuh Iqram Multazam", 10);
let fadilah = new mahasiswa("Fadilah Fatwa", 5); */

// versi class @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
/* class mahasiswa {
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }
  makan = function (porsi) {
    this.energi += porsi;
    console.log(`Hallo ${this.nama} selamat makan, energi kamu sekarang adalah ${this.energi}`);
  };
  main = function (jam) {
    this.energi -= jam;
    console.log(`Hallo ${this.nama} selamat makan, energi kamu sekarang adalah ${this.energi}`);
  };
  tidur = function (jam) {
    this.energi += jam * 2;
    console.log(`Hallo ${this.nama} selamat tidur, energi kamu sekarang adalah ${this.energi}`);
  };
}

let icam = new mahasiswa("Futuh Iqram Multazam", 10);
let fadilah = new mahasiswa("Fadilah Fatwa", 5);
 */

// konstraktur fungsi #########################################################################
/* function mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Hallo ${this.nama} selamat makan, energi kamu sekarang adalah ${this.energi}`);
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`Hallo ${this.nama} selamat bermain, energi kamu sekarang adalah ${this.energi}`);
  };
}
let icam = new mahasiswa("Futuh Iqram Multazam", 10); */

// create content #########################################################################
/* function a() {
  var nama = "Futuh Iqram Multazam";
  console.log(nama);
}

function b() {
  console.log(nama);
}

console.log(nama);
var nama = "fadilah";
a();
b("denu");
console.log(nama); */

// Pembahasan closure #########################################################################

// contoh satu
/* function init() {
  // let nama = "Futuh Iqram Multazam";
  return function (nama) {
    console.log(nama);
  };
}

let tampilNama = init();
tampilNama("Futuh"); */

// contoh dua
/* function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Hallo ${nama}, selamat ${waktu}`);
  };
}

let selamatSiang = ucapkanSalam("Pagi");
selamatSiang("Icam"); */

// Pembahasan arrow function #########################################################################
// contoh-contoh arrow function

/* let tampilNama = (nama = "manusia") => {
  return `Hallo ${nama}`;
}; */

/* let tampilNama = (nama) => {
  // sebenernya ini kalo hanya satu param itu ga usah pake kurung buka kurung tutup
  return `Hallo ${nama}`;
}; */

/* let tampilNama = (nama, waktu) => {
  // nah kalo dua param harus pake kurung
  return `Hallo ${nama}, Selamat ${waktu}`;
};
 */

// let tampilNama = (nama) => `Hallo ${nama}`;

// let tampilHello = () => `Hello world`;

// let mahasiswa = ["icam", "fadilah", "syafa"];
/* let jumlahHuruf = mahasiswa.map(function (nama) {
  return { nama: nama, jmlhuruf: nama.length };
}); */
// let jumlahHuruf = mahasiswa.map((nama) => nama.length);
/* let jumlahHuruf = mahasiswa.map((nama) => ({ nama, jmlhuruf: nama.length }));

console.table(jumlahHuruf);
 */

// pembahasan tentang this pada arrow function #########################################################################
let box = document.querySelector(".box");
box.addEventListener("click", function () {
  let size = "size";
  let caption = "caption";

  if (this.classList.contains(size)) {
    [size, caption] = [caption, size];
  }

  this.classList.toggle(size);

  setTimeout(() => {
    this.classList.toggle(caption);
  }, 600);
});

// Pembahasan tentang Higer Order Fucntion #########################################################################

// contoh-contoh:
/* function repeatApp(x, action) {
  for (let i = 1; i <= x; i++) {
    action(i);
  }
}
repeatApp(3, alert); */

// const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// latihan 3 function

/* const names = Array.from(document.querySelectorAll("ul li"));
const icam = names.filter((name) => name.textContent.includes("icam")).map((item) => item.dataset.alamat);
console.log(icam);
 */

// pembahasan tntang templet literal #########################################################################
/* console.log(`icam
fadilah
fatwa`); */

/* let nama = "icam";
let usia = 20;
console.log(`Hallo ${nama} apakah anda berusia ${usia} ?`); */

/* let a = 15;
let b = 5;
console.log(`variable a di kali 2 hasil nya = ${a * 2}
dan variable b di kali 6 hasil nya = ${b * 6}`); */

/* let r = `<div class="div"><h2>
</h2>
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul></div>`;

console.log(r); */

// Pemnbahasan descturcturing asigmnet #########################################################################
/* const ruy = ["icam", "fadilah", "sese"];
const [a, b, c] = ruy;

console.log(a);
console.log(b);
console.log(c); */

// contoh saya hanya ingin hallo dan futuh, caranya kaya gini
/* const ruy = ["hallo", "nama", "saya", "Futuh"];
const [a, , , d] = ruy;
 */

// swap items
/* let a = 1;
let b = 2;
console.log(a);
console.log(b);
[a, b] = [20, 12];
console.log(a);
console.log(b); */

// Pembahasan tentang for in #########################################################################

/* let nama = "futuh";

for (const n of nama) {
  console.log(n);
} */

// Pembahasan tentang spreed operator #########################################################################

/* const nama = "futuh";
const huruf = [...nama];
console.log(huruf); */

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((n) => (n === " " ? `<span>&nbsp;</span>` : `<span>${n}</span>`)).join("");
nama.innerHTML = huruf;

// rest parameter #########################################################################
/* function myFunc(...myParam) {
  return myParam;
}

console.log(myFunc(1, 2, 3, 4, 5, 6)); */

/* function myFunc(...myParam) {
  //  let total = 0;
  // for (const m of myParam) {
  //   total += m;
  // }
  // return total;
  return myParam.reduce((a, b) => a + b);
}

console.log(myFunc(1, 2, 3, 4, 5, 6)); */

/* let a = "icam";
typeof a === "number" ? console.log("iya bener") : console.log("salah"); */

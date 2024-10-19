// object literal
/* let nama = {
  nama: "Futuh",
  energi: 10,
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Hallo ${this.nama} selamat makan, energi kamu sekarang adalah ${this.energi}`);
  },
}; */

// Fungsi deklarasi
/* function mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  mahasiswa.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Hallo ${this.nama} selamat makan, energi kamu sekarang adalah ${this.energi}`);
  };

  mahasiswa.main = function (jam) {
    this.energi -= jam;
    console.log(`Hallo ${this.nama} selamat bermain, energi kamu sekarang adalah ${this.energi}`);
  };

  return mahasiswa;
}

let icam = mahasiswa("Futuh Iqram Multazam", 10);
let fadilah = mahasiswa("Fadilah Fatwa", 5); */

// konstraktur fungsi
function mahasiswa(nama, energi) {
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
let icam = new mahasiswa("Futuh Iqram Multazam", 10);

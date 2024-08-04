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

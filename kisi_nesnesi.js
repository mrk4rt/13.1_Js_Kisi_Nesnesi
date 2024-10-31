//! person nesnesini tanımlama
const person = {
  name: "Muhammet",
  age: 28,
  isStudent: false,
  hobbies: ["kitap okumak", "yemek yapmak", "futbol oynamak"],
  selmaVer: function () {
    console.log("Merhaba, benim adım " + this.name);
  },
};

//! Bilgileri konsola yazdırma
console.log(person.name);
console.log(person.age);
console.log(person.hobbies[1]);

//! selamVer metodunu çağırma
person.selmaVer();

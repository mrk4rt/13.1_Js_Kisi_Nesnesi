
# Proje: Kişi Nesnesi

Bu projede, JavaScript'te bir `person` nesnesi oluşturarak object literal kullanımı pratiği yapıyoruz. Oluşturulan `person` nesnesi, kişisel bilgileri ve bir selamlaşma fonksiyonunu içeriyor. 

## Özellikler

1. **name** (string): Kişinin adı.
2. **age** (number): Kişinin yaşı.
3. **isStudent** (boolean): Kişinin öğrenci olup olmadığını belirtir.
4. **hobbies** (array): Kişinin hobilerini listeleyen bir dizi. En az 3 hobi içermelidir.
5. **greet** (function): Kişinin kendini tanıttığı bir fonksiyon. Çıktısı, "Merhaba, benim adım [isim]" şeklindedir.

## Amaç

- `person` nesnesi içinde kişisel bilgileri ve hobileri tanımlayarak nesne literal yapısını kullanmak.
- `greet` fonksiyonunu kullanarak nesne içinde metot oluşturmayı öğrenmek.
- `name`, `age` ve `hobbies` dizisindeki ikinci hobiye erişerek nesne içindeki verilere ulaşmak.
- 
## Açıklama

Bu örnekte `person` nesnesi tanımlandı. `greet` metodu, `this` anahtar kelimesiyle `person` nesnesi içindeki `name` anahtarına erişiyor. `console.log` ile nesnenin `name`, `age` ve `hobbies` içindeki ikinci hobisi ekrana yazdırılıyor.

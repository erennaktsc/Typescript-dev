## Soru1
mergeArrays adında generic bir fonksiyon yazdım. Bu fonksiyon iki farklı tipte diziyi alıp tek bir dizi halinde birleştiriyor. Dönen tip (T | U)[] şeklindedir.

## Soru2
Car ve Truck adında iki sınıf tanımlandı. useVehicle fonksiyonu içinde in operatörü kullanılarak hangi sınıfın çağrıldığını belirleyen type guard eklendi. Eğer Truck ise loadCargo() metodu da çalışıyor.

## Soru3
Logger sınıfı içinde private logHistory tanımladım. Dışarıdan doğrudan erişim engelleniyor, sadece getHistory() metodu üzerinden log geçmişine ulaşılabiliyor.

## Soru4
getProperty fonksiyonu generic yapıdadır. T tipinde bir nesne ve keyof T tipinde bir anahtar alır, T[K] değerini döndürür.

## Soru 5
search fonksiyonu için iki farklı overload tanımladım:
number alırsa ID’ye göre tek User döndürür.
string alırsa isme göre bir User[] döndürür.
Aşağıda bu iki durumu yöneten asıl fonksiyon bulunuyor.

## Soru6
MemoryCache adında generic bir sınıf yazdım. set(), get() ve clear() metotları ile Map yapısı kullanılarak basit bir cache sistemi oluşturuldu.

## Soru7
updateUser fonksiyonu, kullanıcı bilgilerini kısmi olarak güncelliyor.
Partial<User> sayesinde sadece gerekli alanlar güncellenebiliyor.
Fonksiyonun dönüş tipi Readonly<User>

## Soru8
sum fonksiyonu, rest parametre (...nums: number[]) kullanılarak tüm sayıları topluyor.
reduce() ile dizideki elemanların toplamı bulunuyor.

## Soru9
Shape adında soyut bir sınıf ve getArea() adlı abstract metot tanımlandı.
Circle sınıfı bu metodu override ederek alanı π * r² formülüyle hesaplıyor.

 ## Soru 10
MathHelper sınıfı, static PI ve static calculateCircumference() metodlarını içeriyor.
Bu sayede sınıfın örneği oluşturulmadan doğrudan kullanılabiliyor.


## Soru11
UnwrapPromise<T> adında bir tip yazdım. Eğer T bir Promise tipiyse içindeki değeri çıkarıyor, değilse direkt T tipini döndürüyor.
Yani Promise<number> → number olarak çalışıyor.

## Soru12
GetReturnType<T> tipi, bir fonksiyonun dönüş tipini bulmak için yazıldı.
Bu tip ReturnType<T>’in mantığını kullanıyor ama tamamen elle yazıldı.
infer ile dönüş tipini yakalayıp onu döndürüyor.

## Soru13
CreateGetters<T> tipi, bir nesnedeki her özelliği getX şeklinde bir metot haline getiriyor.
Örneğin { id: number; name: string } → { getId: () => number; getName: () => string }.
Bu soruda keyof, Capitalize ve template literal kullanıldı.

## Soru14
DeepReadonly<T> tipi, bir nesnenin sadece dış katmanını değil, iç içe tüm alanlarını da readonly yapıyor.
Bu şekilde hem ana obje hem de alt objeler değiştirilemez hale geliyor.

## Soru15
PickByValueType<T, V> tipi, bir nesnedeki sadece tipi V olan alanları alıyor.
Yani string | number verilirse sadece o tipteki alanlar seçiliyor.

## Soru16
Bu soruda UserID ve PostID adında iki tip tanımladım.
İkisi de string olsa da, karışmamaları için Brand yapısını kullandım.
Yani userID yanlışlıkla postID’ye atanamıyor.

## Soru 17
FilterUnion<T, U> tipi, bir union içinden belirli değerleri çıkartıyor.
T extends U ? never : T şeklinde çalışıyor ve U’ya uyan değerleri listeden siliyor.

## Soru18
LastParameter<T> tipi, bir fonksiyonun son parametresinin tipini bulmak için yazıldı.
Kaç parametre olursa olsun sonuncusunun tipini infer ile yakalıyor.

## Soru19
Flatten<T> tipi, bir dizi içindeki eleman tipini alıyor.
Eğer T bir dizi değilse, direkt kendisini döndürüyor.
Kısacası [number] → number, string → string.

## Soru 20
Bu soruda /users/:id gibi bir metni { id: string } tipine çevirdim.
ParseRouteParams<T> tipi, Template Literal ve Recursive Type kullanıyor.
String içinde :param yakalayarak parametre adını çıkartıyor ve bunu bir nesne tipine dönüştürüyor.

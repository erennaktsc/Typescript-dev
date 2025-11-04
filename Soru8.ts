function sum(...nums: number[]): number {
  return nums.reduce((total, n) => total + n, 0);
  // 'reduce' kullanarak tüm sayıları toplayın
}

console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));

// BEKLENEN EKRAN ÇIKTISI:
// 6
// 100

function mergeArrays<T, U>(arr1: T[], arr2: U[]): (T | U)[] {
  /* ??? */
  return [...arr1, ...arr2];

}

const number = [1, 2, 3];
const strings = ["a", "b", "c"];

console.log(mergeArrays(number, strings));

// BEKLENEN EKRAN ÇIKTISI:
// [ 1, 2, 3, 'a', 'b', 'c' ]
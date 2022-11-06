export default function averageCalc(arr = []) {
  let result = 0;
  for (let i = 0; i < arr.length; i += 1) {
    result += arr[i];
  }
  return Math.round(result / arr.length);
}

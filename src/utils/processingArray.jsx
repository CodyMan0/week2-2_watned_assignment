import averageCalc from '../components/averageCalc';

export default function (key, arr = []) {
  const resultArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    resultArr.push(arr[i][key]);
  }
  return averageCalc(resultArr);
}

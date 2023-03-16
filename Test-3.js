let arraySample = [3, 1, 2, 4, 6, 5, 9, 7, 8];
let sort = () => {
  for (let i = 0; i < arraySample.length; i++) {
    for (let j = 0; j < arraySample.length - i - 1; j++) {
      if (arraySample[j + 1] < arraySample[j]) {
        [arraySample[j + 1], arraySample[j]] = [
          arraySample[j],
          arraySample[j + 1],
        ];
      }
    }
  }
  console.log(arraySample);
};
sort();

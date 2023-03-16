let knoseLoop = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 7 === 0 && i % 5 === 0) {
      console.log("Knose Pet Care Made Easy");
    } else if (i % 5 === 0) {
      console.log("Knose");
    } else if (i % 7 === 0) {
      console.log("Pet Care Made Easy");
    } else {
      console.log(i);
    }
  }
};

knoseLoop(35);

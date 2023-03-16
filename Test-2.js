let printStar = (n) => {
  for (let i = 1; i <= n; i++) {
    let dash = "-".repeat(n - i);
    let star = "*".repeat(i);
    console.log(dash + star);
  }
};

printStar(7);

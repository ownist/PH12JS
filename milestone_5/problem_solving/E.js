// একটি অ্যারে থেকে ডুপ্লিকেট (একই সংখ্যা বারবার থাকলে) সংখ্যাগুলো বাদ দিয়ে শুধু ইউনিক সংখ্যাগুলো রাখো।

function unique(arr) {
  const uarr = [];

  for (const n of arr) {
    if (!uarr.includes(n)) {
      uarr.push(n);
    }
  }

  return uarr;
}

const input = [1, 2, 2, 3, 4, 4];
const output = unique(input);
console.log(output);

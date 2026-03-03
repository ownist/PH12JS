/**
 * Task 3: জোড় সংখ্যা চেক (Even Number Check)
 *
 * একটি সংখ্যা ইনপুট নিন। if-else ব্যবহার করে চেক করুন সংখ্যাটি জোড় (Even) কি না। যদি জোড় হয় তবে "Even", না হলে "Odd" প্রিন্ট করুন।
 */

const checkNumIsEvenOrNot = (num) => {
  if (num % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
};

checkNumIsEvenOrNot(68);

// Slug Generator: একটি আর্টিকেলের টাইটেলকে URL ফ্রেন্ডলি 'slug' এ রূপান্তর করো।

function slugGen(str) {
  return str.split(" ").join("-");
}

const input = "who is ownist";
const output = slugGen(input);
console.log(output);

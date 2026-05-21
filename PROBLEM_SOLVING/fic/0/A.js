// Search Filter: একটি প্রোডাক্টের নামের অ্যারে দেওয়া আছে। ইউজার একটি শব্দ ইনপুট দিলে ওই শব্দ দিয়ে শুরু হওয়া প্রোডাক্টগুলো খুঁজে বের করো।

function search(arr, str) {
  return arr.filter((s) => s.startsWith(str));
}

const input = [
  "pen",
  "notebook",
  "english book",
  "eng drawing",
  "cpp",
  "programming",
  "html",
  "css",
  "javascript",
  "python",
  "c#",
  "java",
  "ruby",
  "rust",
  "c++",
];
const output = search(input, "c");
console.log(output);

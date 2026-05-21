// Truncate Text: একটি লম্বা প্যারাগ্রাফকে ২০টি ক্যারেক্টারের পর কেটে দাও এবং শেষে ... যোগ করো (যেমন ব্লগ কার্ডে দেখা যায়)।

function truncateText(p) {
  return `${p.slice(0, 21)}...`;
}

const input =
  "typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages";

const output = truncateText(input);
console.log(output);

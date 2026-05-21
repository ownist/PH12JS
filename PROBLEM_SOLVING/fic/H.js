// Toggle Status: একটি ইউজারের স্ট্যাটাস 'active' থাকলে তাকে 'inactive' করো এবং 'inactive' থাকলে 'active' করো।

function toggleStatus(status) {
  if (status) return "inactive";
  return "active";
}

const input = false;
const output = toggleStatus(input);
console.log(output);

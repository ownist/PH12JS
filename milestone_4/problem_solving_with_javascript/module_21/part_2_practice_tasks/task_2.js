function findSmallestName(friends) {
  let smallestName = friends[0];

  for (const f of friends) {
    if (f.length < smallestName.length) {
      smallestName = f;
    }
  }

  return smallestName;
}

const friends = findSmallestName(["rahim", "robin", "rafi", "ron", "rashed"]);
console.log(friends);

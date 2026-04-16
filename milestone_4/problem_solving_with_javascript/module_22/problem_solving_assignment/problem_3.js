function bestTeam(p1, p2) {
  // edge case
  if (typeof p1 !== "object" || typeof p2 !== "object") return "Invalid";

  let player1 = p1.foul + p1.cardY + p1.cardR;
  let player2 = p2.foul + p2.cardY + p2.cardR;

  if (player1 === player2) {
    return "Tie";
  } else if (player1 < player2) {
    return p1.name;
  } else {
    return p2.name;
  }
}

const player1 = { name: "Germany", foul: 10, cardY: 1, cardR: 1 };
const player2 = { name: "France", foul: 10, cardY: 2, cardR: 1 };
const output = bestTeam(player1, player2);
console.log(output);

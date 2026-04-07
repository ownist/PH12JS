## Day 10 Problem

**Problem:** একটা function লিখতে হবে। Function name `getAdults()`. এই function একটি array of objects parameter হিসেবে নিবে। প্রতিটি object এ থাকবে `{ name: string, age: number }`. তোমাকে শুধু যাদের age ≥ 18 তাদের নিয়ে একটি নতুন array return করতে হবে।

##

**Example 1**

input:

```js
[
  { name: "Rahim", age: 17 },
  { name: "Karim", age: 25 },
  { name: "Jamal", age: 30 },
];
```

output:

```js
[
  { name: "Karim", age: 25 },
  { name: "Jamal", age: 30 },
];
```

##

Example 2

input:

```js
[
  { name: "A", age: 10 },
  { name: "B", age: 15 },
];
```

output: `[]`

##

**Rules:** তুমি ব্যবহার করতে পারবে না `filter()`. নিজের loop + condition ব্যবহার করতে হবে।

**Function structure**

```js
function getAdults(people) {
  // body
}
```

**Edge Case:** Empty array → `[]`, Missing age → ignore করবে

**Example:** `{ name: "X" }`, এটা skip হবে।

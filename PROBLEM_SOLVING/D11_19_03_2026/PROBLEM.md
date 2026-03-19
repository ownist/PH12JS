## Day 11 Problem

**Problem:** একটা function লিখতে হবে। Function name `findMostFrequent()`. এই function একটি array of numbers parameter হিসেবে নিবে। তোমাকে array থেকে যে number সবচেয়ে বেশি বার এসেছে সেটাকে return করতে হবে।

**Example 1:**

> **Input:** [1, 2, 2, 3, 3, 3, 4]
>
> **Output:** 3
>
> **Explanation:** 1 → 1 বার, 1 → 1 বার, 3 → 3 বার, 4 → 1 বার

**Example 2:**

> **Input:** [5, 5, 5, 2, 2]
>
> **Output:** 5

**Example 3:**

> **Input:** [1, 2, 3]
>
> **Output:** 1
>
> কারণ সবাই 1 বার এসেছে → first one return করবে

##

**Rules:**

- তুমি ব্যবহার করতে পারবে না `reduce()`
- নিজের loop + object/logic ব্যবহার করতে হবে।

##

**Function structure:**

```js
function findMostFrequent(arr) {
  // body
}
```

**Edge Case:**

> **Input:** []
>
> **Output:** null

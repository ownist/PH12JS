## Day 14 Problem

**Problem:** একটা function লিখতে হবে। Function name `findMissingNumber()`. এই function একটি array of numbers parameter হিসেবে নিবে। Array টিতে থাকবে 1 থেকে n পর্যন্ত সব number, কিন্তু একটা number missing। তোমাকে সেই missing number return করতে হবে।

#

**Example 1:**

> **Input:** [1, 2, 4, 5]
>
> **Output:** 3

**Example 2:**

> **Input:** [2, 3, 1, 5]
>
> **Output:** 4

**Example 3:**

> **Input:** [1]
>
> **Output:** 2

#

**Important Rules:**

- Array unsorted হতে পারে
- Number সবসময় positive (1 → n)
- শুধু একটাই missing number থাকবে

#

**Function structure:**

```js
function findMissingNumber(arr) {
  // body
}
```

#

**Rules:** তুমি ব্যবহার করতে পারবে না `sort()`

#

**Hint না, direction:**

> **ভাবো:** 1 থেকে n পর্যন্ত total sum কেমন হওয়া উচিত?
>
> আর actual array এর sum কত?
>
> difference = missing number

#

**Example চিন্তা:**

> [1, 2, 4, 5]
>
> **Expected:** 1 + 2 + 3 + 4 + 5 = 15
>
> **Actual:** 1 + 2 + 4 + 5 = 12
>
> **Missing:** 15 - 12 = 3

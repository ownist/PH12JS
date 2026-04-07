## Day 9 Problem

**problem:** একটা function লিখতে হবে। Function name `findSecondLargest()`, এই function একটি array of numbers parameter হিসেবে নিবে। তোমাকে array থেকে second largest number (দ্বিতীয় সবচেয়ে বড় সংখ্যা) return করতে হবে।

**Example 1**

input: `[10, 5, 8, 20, 15]`

output: `15`

**কারণ:** largest = 20, second largest = 15

##

**Example 2**

input: `[7, 7, 7, 7]`

output: `null`

কারণ unique number একটাই।

##

**Example 3**

input: `[5]`

output: `null`

কারণ second largest নেই।

##

**Rules:** তুমি ব্যবহার করতে পারবে না `sort()`, `Math.max()`. নিজের logic + loop ব্যবহার করতে হবে।

##

**Function structure**

```js
function findSecondLargest(arr) {
  // body
}
```

##

**Edge Case:**

- Empty array → `null`
- Single element → `null`
- All same → `null`

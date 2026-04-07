## Day 6 Problem

একটা function লিখতে হবে। function name `sumOfEvenNumbers`. এই function একটি array of numbers parameter হিসেবে নিবে। তোমাকে array এর ভিতরে যত even number (জোড় সংখ্যা) আছে সেগুলোর sum return করতে হবে।

Example 1

```md
input: [1, 2, 3, 4, 5, 6]
output: 12
explanation: কারণ 2 + 4 + 6 = 12
```

Example 2

```md
input: [7, 9, 11]
output: 0
explanation: কারণ এখানে কোনো even number নেই।
```

Example 3

```md
input: [10, 15, 20]
output: 30
explanation: কারণ 10 + 20 = 30
```

##

> [!NOTE]
> তুমি ব্যবহার করতে পারবে না: `filter()`, `reduce()`. নিজের loop + condition ব্যবহার করতে হবে।

##

Function structure

```js
function sumOfEvenNumbers(arr) {
  // body
}
```

Edge Case: Input যদি হয় `[]`, তাহলে return করবে `0`

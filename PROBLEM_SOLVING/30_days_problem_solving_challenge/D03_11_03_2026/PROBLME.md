## Day 3 Problem

একটা function লিখতে হবে। Function name `removeDuplicates`

এই function একটি array of numbers parameter হিসেবে নিবে। তোমাকে এমন একটি নতুন array return করতে হবে যেখানে duplicate number থাকবে না। মানে একই number যদি একাধিকবার থাকে, শুধু একবার থাকবে।

```md
Example 1

input: [1, 2, 2, 3, 4, 4, 5], output: [1, 2, 3, 4, 5]
```

```md
Example 2

input: [7, 7, 7, 7], output: [7]
```

```md
Example 3

input: [5, 3, 5, 2, 3, 1], output: [5, 3, 2, 1]
```

> [!WARNING]
> লক্ষ্য করো: order change করা যাবে না। প্রথমবার যেভাবে এসেছে সেই order রাখতে হবে।

##

> [!NOTE]
> তুমি ব্যবহার করতে পারবে না: `set`, `filter()`, `reduce()`
>
> মানে shortcut না। নিজের logic + loop ব্যবহার করতে হবে।

Function structure

```javascript
function removeDuplicates(arr) {
  //body
}
```

Edge Case: Input যদি হয় `[]`, তাহলে return করবে `[]`

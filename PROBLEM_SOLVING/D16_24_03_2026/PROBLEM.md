## Day 16 Problem

**Problem:** একটা function লিখতে হবে। Function name `findTopStudent()`. এই function একটি array of objects নিবে। প্রতিটি object হবে `{ name: string, marks: number }`. তোমাকে সেই student return করতে হবে যার marks সবচেয়ে বেশি।

#

**Example 1:**

> **Input:**
>
> ```js
> [
>   { name: "A", marks: 50 },
>   { name: "B", marks: 80 },
>   { name: "C", marks: 70 },
> ];
> ```
>
> **Output:**
>
> ```js
> { name: "B", marks: 80 }
> ```

**Example 2:**

> **Input:**
>
> ```js
> [
>   { name: "X", marks: 90 },
>   { name: "Y", marks: 90 },
> ];
> ```
>
> **Output:**
>
> ```js
> { name: "X", marks: 90 }
> ```
>
> _same marks হলে **first one** return করবে_

**Example 3:**

> **Input:** []
>
> **Output:** null

#

**Rules:** ব্যবহার করতে পারবে না `sort()`, `Math.max()`

#

**Edge Case (খুব গুরুত্বপূর্ণ):**

> **_invalid data ignore করবে_**
>
> **Example:**
>
> ```js
> [
>   { name: "A", marks: 50 },
>   { name: "B" },
>   { name: "C", marks: "80" },
>   { name: "D", marks: 70 },
> ];
> ```
>
> **Output:**
>
> ```js
> { name: "D", marks: 70 }
> ```
>
> **কারণ:**
>
> - B → no marks
> - C → string
> - valid শুধু A, D

#

**Function structure:**

```js
function findTopStudent(students) {
  // body
}
```

#

**Direction:**

**তুমি ভাবো:** maxMarks track করবে, topStudent track করবে

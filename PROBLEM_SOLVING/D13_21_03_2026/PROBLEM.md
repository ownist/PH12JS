## Day 13 Problem

**Problem:** একটা function লিখতে হবে। function name `countWords()`. এই function একটি string parameter নিবে। তোমাকে string এর ভিতরে কয়টা word আছে সেটা return করতে হবে।

**Rule (খুব গুরুত্বপূর্ণ):**

- Word মানে: characters এর group যেগুলো space দিয়ে আলাদা
- Multiple space থাকলে ignore করতে হবে

#

**Example 1:**

> **Input:** "I love JavaScript"
>
> **Output:** 3

**Example 2:**

> **Input:** `" Hello world "`
>
> **Output:** 2
>
> extra space ignore

**Example 3:**

> **Input:** ""
>
> **Output:** 0

#

**Rules:**

- তুমি ব্যবহার করতে পারবে না: `split()`
- নিজের loop + logic ব্যবহার করতে হবে।

#

**Function structure:**

```js
function countWords(str) {
  // body
}
```

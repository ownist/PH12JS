## Day 15 Problem

**Problem:** একটা function লিখতে হবে। Function name `findFirstNonRepeating()`. এই function একটি string parameter নিবে। তোমাকে string এর ভিতরে প্রথম যে character একবারই এসেছে সেটা return করতে হবে।

#

**Example 1:**

> **Input:** "aabbcdd"
>
> **Output:** "c"

**Example 2:**

> **Input:** "programming"
>
> **Output:** "p"

**Example 3:**

> **Input:** "aabbcc"
>
> **Output:** null

#

**Rules:** ব্যবহার করতে পারবে না `indexOf()`, `lastIndexOf()`. নিজের logic ব্যবহার করতে হবে

#

**Function structure:**

```js
function findFirstNonRepeating(str) {
  // body
}
```

#

**Edge Case:**

- Empty string → `null`
- সব character repeat → `null`

#

**Example Thinking:**

```md
"programming"
```

Frequency:

```md
p:1, r:2, o:1, g:2, a:1, m:2, i:1, n:1
```

First non-repeating: `p`

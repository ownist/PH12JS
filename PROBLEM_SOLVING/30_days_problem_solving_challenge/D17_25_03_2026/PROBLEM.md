## Day 17 Problem

**Problem:** একটা function লিখতে হবে। Function name `findLongestStreak()`. এই function একটি array of numbers নিবে। তোমাকে বের করতে হবে consecutive (ধারাবাহিক) number এর longest streak length।

#

**Example 1:**

> **Input:** [1, 2, 3, 5, 6, 8]
>
> **Output:** 3

**কারণ:**

- 1,2,3 → length = 3
- 5,6 → length = 2
- 8 → length = 1
- Longest = 3

**Example 2:**

> **Input:** [10, 11, 12, 15, 16, 17, 18]
>
> **Output:** 4
>
> **_15,16,17,18 → length = 4_**

**Example 3:**

> **Input:** []
>
> **Output:** 0

#

**Important Condition:** Array unsorted হতে পারে `[5, 1, 2, 3]`. এখানে longest streak: `1,2,3 → 3`

#

**Function structure:**

```js
function findLongestStreak(arr) {
  // body
}
```

#

**Direction (very important):** ভাবো একটা number start point কিনা? start point তখনই num - 1 array তে নাই তারপর num + 1, num + 2 ... check করো

#

**Example Thinking:**

```js
[1, 2, 3, 5, 6];
```

- 1 → start (0 নাই) → 1,2,3 → length 3
- 2 → skip (1 আছে already)
- 3 → skip
- 5 → start → 5,6 → length 2

#

**Bonus (optional):**

> **duplicate থাকলে ignore করো:** [1,2,2,3]
>
> **_still streak = 3_**

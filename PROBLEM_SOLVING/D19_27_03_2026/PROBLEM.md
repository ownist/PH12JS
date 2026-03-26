## Day 19 Problem

**Problem:** একটা function লিখতে হবে। Function Name `getActiveUsers()`. এই function একটি array of objects নিবে। প্রতিটি object `{ name: string, isActive: boolean }`. তোমাকে শুধু সেই user গুলো return করতে হবে যাদের: `isActive === true`. **Output** একটি array of objects return করবে

#

**Example 1**

> **Input:**
>
> ```js
> [
>   { name: "A", isActive: true },
>   { name: "B", isActive: false },
>   { name: "C", isActive: true },
> ];
> ```
>
> **Output:**
>
> ```js
> [
>   { name: "A", isActive: true },
>   { name: "C", isActive: true },
> ];
> ```

**Example 2**

> **Input:** []
>
> **Output:** []

#

**Important Edge Case**

> **Important Edge Case**
>
> ```js
> [
>   { name: "A", isActive: true },
>   { name: "B" },
>   { name: "C", isActive: "true" },
>   { name: "D", isActive: false },
> ];
> ```
>
> **Output:**
>
> ```js
> [{ name: "A", isActive: true }];
> ```

#

**Function structure**

```js
function getActiveUsers(users) {
  // body
}
```

## Day 23 Problem

**Problem:** একটা function লিখতে হবে। Function name `getCategorySummary()`. এই function একটি array of objects নিবে। প্রতিটি object: `{ name: string, category: string, price: number }`

**তোমার কাজ:**

- category অনুযায়ী group করে
- প্রতিটি category এর জন্য return করবে

```js
{
  categoryName: {
    totalItems: number,
    totalPrice: number
  }
}
```

#

**Example 1**

> **Input:**
>
> ```js
> [
>   { name: "Apple", category: "Fruit", price: 10 },
>   { name: "Banana", category: "Fruit", price: 5 },
>   { name: "Carrot", category: "Vegetable", price: 7 },
> ];
> ```
>
> **Output:**
>
> ```js
> {
>  Fruit: {
>    totalItems: 2,
>    totalPrice: 15
>  },
>  Vegetable: {
>    totalItems: 1,
>    totalPrice: 7
>  }
> }
> ```

**Example 2**

> **Input:** []
>
> **Output:** {}

#

**Important Edge Case**

> **invalid data skip করবে:**
>
> ```js
> [
>   { name: "Apple", category: "Fruit", price: 10 },
>   { name: "Banana", category: "Fruit" },
>   { name: "Carrot", category: 123, price: 7 },
>   { name: "Tomato", category: "Vegetable", price: "20" },
> ];
> ```
>
> **Output:**
>
> ```js
> {
>  Fruit: {
>    totalItems: 1,
>    totalPrice: 10
>  }
> }
> ```

#

**Function structure**

```js
function getCategorySummary(items) {
  // body
}
```

**Direction (important):**

ভাবো:

```txt
object[category] = {
  totalItems: 0,
  totalPrice: 0
}
```

তারপর: `increment + sum`

**অনেকেই ভুল করে:** `if (item.category && item.price)`. এটা ভুল, কারণ: `price = 0 → falsy (but valid)`

**Correct validation:**

```js
typeof item.category === "string";
typeof item.price === "number";
```

**Goal:** `group + count + sum`

## Day 24 Problem

**Problem:** একটা function লিখতে হবে। Function name `getTotalActivePrice()`. এই function একটি array of objects নিবে। প্রতিটি object:

```js
{
  name: string,
  isActive: boolean,
  products: [
    { name: string, price: number }
  ]
}
```

**তোমার কাজ:** শুধু সেই users গুলো নিবে যাদের `isActive === true`, তারপর তাদের সব products এর `total price (sum) বের করবে`, শেষে একটি number return করবে

#

**Example 1**

**Input:**

```js
[
  {
    name: "A",
    isActive: true,
    products: [
      { name: "p1", price: 10 },
      { name: "p2", price: 20 },
    ],
  },
  {
    name: "B",
    isActive: false,
    products: [{ name: "p3", price: 50 }],
  },
];
```

**Output:** 30

**_শুধু A count হবে → 10 + 20_**

#

**Example 2**

> **Input:** []
>
> **Output:** 0

#

**Important Edge Case**

**invalid data skip করবে:**

```js
[
  {
    name: "A",
    isActive: true,
    products: [{ name: "p1", price: 10 }, { name: "p2" }],
  },
  {
    name: "B",
    isActive: "true",
    products: [{ name: "p3", price: 50 }],
  },
  {
    name: "C",
    isActive: true,
    products: "not array",
  },
];
```

**Output:** 10

#

**শুধু valid:**

- A → শুধু p1 (p2 invalid)
- B → skip (invalid isActive)
- C → skip (products array না)

#

**Function structure**

```js
function getTotalActivePrice(users) {
  // body
}
```

#

**Direction:** `loop users → validate user → loop products → validate product → sum`

**অনেকেই ভুল করে:** `if (user.isActive)` **_wrong ❌_**

**Correct validation:**

```js
typeof user.isActive === "boolean";
Array.isArray(user.products);
typeof product.price === "number";
```

**Goal:** `nested loop + validation + sum`

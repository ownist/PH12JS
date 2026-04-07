## Day 30 Problem

**Problem:** একটা function লিখতে হবে। Function name `getFinalReport()`

**Data Structure:**

```js
[
  {
    name: string,
    isActive: boolean,
    orders: [{ category: string, price: number }],
  },
];
```

**তোমার কাজ (multi-step):**

- **Step 1:** শুধু active users নিবে
- **Step 2:** তাদের সব orders loop করবে
- **Step 3:** invalid data skip করবে
- **Step 4:** category অনুযায়ী group করবে
- **Step 5:** প্রতিটি category এর জন্য:

```js
{
  totalOrders: number,
  totalRevenue: number
}
```

**Final output:**

```js
{
  categoryName: {
    totalOrders: number,
    totalRevenue: number
  }
}
```

#

**Example**

Input:

```js
[
  {
    name: "A",
    isActive: true,
    orders: [
      { category: "Food", price: 100 },
      { category: "Food", price: 50 },
      { category: "Tech", price: 200 },
    ],
  },
  {
    name: "B",
    isActive: false,
    orders: [{ category: "Food", price: 500 }],
  },
];
```

Output:

```js
{
  Food: {
    totalOrders: 2,
    totalRevenue: 150
  },
  Tech: {
    totalOrders: 1,
    totalRevenue: 200
  }
}
```

#

**Important Edge Case**

```js
[
  {
    name: "A",
    isActive: true,
    orders: [
      { category: "Food", price: 100 },
      { category: 123, price: 50 },
      { category: "Tech" },
    ],
  },
  {
    name: "B",
    isActive: "true",
    orders: [{ category: "Food", price: 500 }],
  },
  {
    name: "C",
    isActive: true,
    orders: "invalid",
  },
];
```

Output:

```js
{
  Food: {
    totalOrders: 1,
    totalRevenue: 100
  }
}
```

#

**Direction (important):** `loop users → validate user → loop orders → validate order → group + count + sum`

**অনেকেই ভুল করবে:** `if (user.orders)` // wrong. use: `Array.isArray(user.orders)`

#

**Function structure**

```js
function getFinalReport(users) {
  // body
}
```

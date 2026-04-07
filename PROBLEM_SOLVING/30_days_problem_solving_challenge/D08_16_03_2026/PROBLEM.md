## Day 8 Problem

**Problem:** একটা function লিখতে হবে। Function name `countCharacters()`. এই function একটি string parameter নিবে। তোমাকে একটি object return করতে হবে, যেখানে প্রতিটি character কতবার এসেছে সেটা count থাকবে।

**Example 1:** Input `"hello"`

Output:

```js
{
  h: 1,
  e: 1,
  l: 2,
  o: 1
}

```

##

**Example 2:** Input `"programming"`

Output:

```js
{
  p:1,
  r:2,
  o:1,
  g:2,
  a:1,
  m:2,
  i:1,
  n:1
}

```

##

**Rules:** তুমি ব্যবহার করতে পারবে না `reduce()`, নিজের loop + object logic ব্যবহার করতে হবে।

**Function structure**

```js
function countCharacters(str) {
  // body
}

// Edge Case: Input যদি হয় "", তাহলে return করবে {}
```

##

**Bonus Challenge (optional):**

Input `"Hello"`

Output ideally:

```js
{
  h:1,
  e:1,
  l:2,
  o:1
}
```

*মানে uppercase / lowercase ignore করতে পারলে bonus।*

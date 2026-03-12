## Day 5 Problem

একটা function লিখতে হবে। Function name `isPalindrome`. এই function একটি string parameter নিবে। তোমাকে check করতে হবে string টি `palindrome` কিনা।

Palindrome মানে: string সামনে থেকে পড়লেও যেমন, উল্টো দিক থেকে পড়লেও একই।

Example 1

```md
Input: "madam"
Output: true
Explanation: কারণ সামনে এবং উল্টো দুই দিকেই একই।
```

Example 2

```md
Input: "racecar"
Output: true
```

Example 3

```md
Input: "hello"
Output: false
```

##

> [!NOTE]
> তুমি ব্যবহার করতে পারবে না: `reverse()`
>
> এগুলোও ব্যবহার করবে না: `split()`, `join()`. নিজের logic + loop ব্যবহার করতে হবে।

##

Function structure

```js
function isPalindrome(str) {
  // body
}
```

Edge Case

```md
Input যদি হয়: ""
তাহলে return করবে: true
কারণ empty string technically palindrome।
```

##

> [!TIP]
> Bonus Challenge (optional)
>
> ```md
> input: "RaceCar"
> output: true
> মানে uppercase / lowercase ignore করতে পারলে bonus।
> ```

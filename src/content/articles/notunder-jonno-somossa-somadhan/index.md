---
title: নতুনদের জন্য সমস্যা সমাধান
description: >-
    Problem এর বাংলা হলো সমস্যা আর Solving হলো সেই সমস্যা সমাধান করা। কিন্তু আমার কাছে Problem
    বা সমস্যা মানে হলো কোন unknown situation বা অজানা পরিস্থিতি
date: 25 January 2022
featured: true
published: true

tags:
    - cpp
    - problem-solving
    - programming
cover:
    src: ./cover.jpg
    alt: ""
---

Problem এর বাংলা হলো সমস্যা আর Solving হলো সেই সমস্যা সমাধান করা। কিন্তু আমার কাছে Problem বা সমস্যা মানে হলো কোন unknown situation বা অজানা পরিস্থিতি। আর সেই unknown situation থেকে নিজেকে বের করে নিয়ে আসাই হলো Problem solving। Problem solving অনেকটা adventure এর মতো you don't know what will be next।

## বাস্তব জীবনে Problem Solving

আমাদের বাস্তব দুনিয়ায় Problem solving সব জায়গা আছে।

- একজন কৃষক বিভিন্ন ফসল চাষের মাধ্যমে আমাদের খাদ্যের সমস্যা সমাধান করছে।
- একজন ডাক্তার আমাদের শারিরীক সমস্যার সমাধান করে।

কিন্তু এগুলোর মধ্যে এই ব্লগে আমরা Programming এর Problem Solving নিয়ে আলোচনা করবো।

## Programming এ Problem Solving

প্রথমেই আসে Programming এ Problem Solving কি?

> কোন বাস্তর জিবনের সমস্যা যদি কম্পিউটার বা কম্পিউটিং ডিভাইস দিয়ে সমাধান করা যায় তবে তাকে আমরা Programming এ Problem solving হিসাবে আখ্যায়িত করতে পারি।

### Problem Solving এর ধাপসমূহ

1. সমস্যা খুজে বের করা
2. সমস্যাটিকে analysis করা
3. মনে মনে, খাতায় বা white board ইত্যাদিতে সমস্যাটির সমাধান করা
4. সমাধানটি কম্পিউটারকে বোঝানো (কোড লেখা)

## উদাহরণ: Watermelon Problem

Problem টি [Codeforces Beta Round #4 (Div. 2 Only) এর A নম্বর Problem](https://codeforces.com/problemset/problem/4/A)।

### Problem এর বর্ণনা

Pete এবং Billy Watermelon কিনেছে। এখন তারা এমন ভাবে ওজন অনুযায়ী Watermelon কে ভাগ করতে চায় যে:

- দুই ভাগের ওজন জোড় সংখ্যা (even number) হবে
- প্রতিটি ভাগের ওজন 0 থেকে বড় হবে

আমাদের বলতে হবে যে আমরা এ রকম ভাবে ভাগ করতে পারবো কি না। যদি পারি তবে YES প্রিন্ট করতে হবে না হলে NO প্রিন্ট করতে হবে।

### Analysis

- যেকােন জোড় সংখ্যাকেই দুইটি জোড় সংখ্যায় ভাগ করা যায়
- কর্ণার কেস: 2 কে আমরা 2, 0 তে ভাগ করতে পারি না (0 valid নয়)
- সিদ্ধান্ত: 2 থেকে বড় যেকোন জোড় সংখ্যাকে দুইটি জোড় সংখ্যায় ভাগ করা যাবে

### Implementation

#### C/C++ implementation:

```cpp
#include <bits/stdc++.h>
using namespace std;

int main()
{
	int num;
	cin >> num;

	if (num <= 2)
		cout << "NO\n";
	else
	{
		if (num % 2 == 0)
			cout << "YES\n";
		else
			cout << "NO\n";
	}
	return 0;
}
```

[Run on Codeforces](https://codeforces.com/contest/4/submission/159295024)

#### Python implementation:

```python
num = int(input())

if num <= 2:
    print("NO")
else:
    if num % 2 == 0:
        print("YES")
    else:
        print("NO")
```

[Run on Codeforces](https://codeforces.com/contest/4/submission/159295164)

## সারাংশ

Problem Solving একটি গুরুত্বপূর্ণ দক্ষতা যা Programming এ অত্যন্ত প্রয়োজনীয়। এটি শুধু কোড লেখা নয়, বরং সমস্যা বিশ্লেষণ, সমাধান পরিকল্পনা এবং তা বাস্তবায়ন করার একটি পূর্ণাঙ্গ প্রক্রিয়া। নিয়মিত অনুশীলনের মাধ্যমে এই দক্ষতা উন্নত করা যায়।

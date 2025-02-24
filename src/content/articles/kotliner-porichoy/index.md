---
title: কোটলিনের পরিচয়
description: >-
    Java Virtual Machines-এর জন্য একটি আধুনিক প্রোগ্রামিং ভাষা | Better Java
date: 15 October 2022
featured: false
published: true

tags:
    - jvm
    - kotlin
    - programming
cover:
    src: ./cover.png
    alt: ""
draft: false
---

কটলিন (Kotlin) একটি স্ট্যাটিকালি টাইপ করা মাল্টি-প্যারাডাইম প্রোগ্রামিং ল্যাঙ্গুয়েজ যা জাভা-এর একটি ভাল বিকল্প হিসাবে ডিজাইন করা হয়েছে।

## কোটলিনের মূল বৈশিষ্ট্য

- জাভা ভার্চুয়াল মেশিনে চালিত বাইটকোডগুলিতে কম্পাইল করে
- আধুনিক ডেভেলপারদের পছন্দের সংক্ষিপ্ত সিনট্যাক্স
- উন্নত ল্যাঙ্গুয়েজ ফিচার:
    - টাইপ ইনফারেন্স
    - ফাংশনাল প্যার্টান
    - নাল সেফটি

> 2011 সালে Jetbrains দ্বারা ঘোষণা করা হয়েছিল এবং 2016 সালে এর প্রথম স্ট্যাবল ভার্শন প্রকাশ করা হয়।

## কোটলিনের ব্যবহার

1. বিদ্যমান জাভা কোডের সাথে ইন্টারপ করতে পারে
2. নেটিভ কোড এবং জাভাস্ক্রিপ্টে কম্পাইল করে
3. মাল্টি-প্ল্যাটফর্ম অ্যাপের দরজা খোলে
4. অ্যান্ড্রয়েড ডেভেলপমেন্টে জনপ্রিয়

## কোটলিন কোড উদাহরণ

### বেসিক সিনট্যাক্স

```kotlin
fun main() {
    var hello = "Hello World" // type inference
    var hello2: String = "Hello World 2" // explicit typing
    var hello3: String? = "Hello World 3" // nullable variable

    println(hello)
}
```

### অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং

```kotlin
class Humanoid {
    // attribute
    var name = "Shihab"

    // method
    fun yoName() {
        print(name)
    }
}

// extension function
fun Humanoid.walk() {
    println("waling ...")
}
```

### ফাংশনাল প্রোগ্রামিং

```kotlin
// first-class function
fun double(x: Int) = x * 2;

// anonymous lambda function
var lambda: (Int) -> Int = {num -> double(num)}
```

### ডেটা ক্লাস

```kotlin
data class User(val name: String, val age: Int)

val person = User("shihab", 19);

val {name, age} = person;
```

## কোটলিনের প্রধান ফিচার

- Concise Syntax (Write less)
- Null Safety
- First-class-function expression
- Interoperable with Java
- Multiplatform support:
    - Android
    - Server-side with JVM
    - Web frontend
    - Cross platform mobile applications

## কোটলিন কম্পাইল করা

টার্মিনালে কোটলিন কম্পাইলার চালানোর উদাহরণ:

```bash
kotlinc hello.kt -include-runtime -d hello.jar
```

## উপসংহার

এটাই ছিল কটলিন নিয়ে একটা ব্যাসিক ভূমিকা। কটলিন নিয়ে আরো জানার জন্য ভিজিট করুন: [kotlinlang.org](https://kotlinlang.org/)

ধন্যবাদ :)

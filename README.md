1. getElementById, getElementsByClassName, querySelector / querySelectorAll এর পার্থক্য:
getElementById("id") → একটার বেশি নয়, শুধু একটি element নেয় যেটার id দেওয়া আছে।
getElementsByClassName("class") → একই class এর সব element নেয়, এবং HTMLCollection রিটার্ন করে (array না)।
querySelector("selector") → CSS selector ব্যবহার করে প্রথম মিলে যাওয়া element নেয়।
querySelectorAll("selector") → CSS selector ব্যবহার করে সব মিল থাকা element নেয়, NodeList রিটার্ন করে।
2. 
ধাপ ১: এলিমেন্ট তৈরি করা (createElement)
প্রথমে জাভাস্ক্রিপ্টকে বলতে হবে আপনি কোন ট্যাগ তৈরি করতে চান (যেমন: div, p, বা li)।

উদাহরণ: let box = document.createElement('div');

ধাপ ২: এলিমেন্টে তথ্য ভরা (Content & Style)
এলিমেন্টটি তৈরি করার পর তাতে লেখা বা ডিজাইন যোগ করতে হবে।
লেখা যোগ করা: box.innerText = "নতুন লেখা";
ক্লাস যোগ করা: box.className = "my-style";
ধাপ ৩: স্ক্রিনে দেখানো বা ইনসার্ট করা (Append)
তৈরি করা এলিমেন্টটি মেমোরিতে থাকে, সেটাকে HTML-এর কোনো একটি জায়গায় (Parent Element) যুক্ত করতে হয়।
শেষে যুক্ত করতে: document.body.appendChild(box);
শুরুতে যুক্ত করতে: parent.prepend(box);
3.3. Event Bubbling কী এবং এটি কিভাবে কাজ করে:
Event Bubbling মানে একটি event প্রথমে target element এ ঘটে, তারপর ধীরে ধীরে তার parent elements এ চলে যায়।

উদাহরণ: button এ click করলে প্রথমে button handle করবে, তারপর তার parent div, তারপর body এ যায়।
4. Event Delegation কী এবং কেন দরকার:
Event Delegation হলো parent element এ event handle করা, যাতে তার child elements এ event ঘটলে parent detect করতে পারে।
দরকার কেন:
অনেক element এর জন্য আলাদা listener লাগানো লাগবে না।
নতুন dynamically added elements এর জন্য আলাদা listener লাগাতে হয় না।
5. preventDefault() vs stopPropagation():

preventDefault() → browser এর default action রোধ করে। যেমন, form submit বা link এ click করে page reload হওয়া।

stopPropagation() → event কে উপরের parent elements এ না পৌঁছাতে দেয়। Event Bubbling বন্ধ করে।

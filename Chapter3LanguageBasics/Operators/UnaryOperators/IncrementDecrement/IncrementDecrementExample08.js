let s1 = "2";
let s2 = "z";
let b = false;
let f = 1.1;
let o = { 
 valueOf() {
  return -1;
 }
};
      
s1++; // value becomes numeric 3
s2++; // value becomes NaN
b++;  // value becomes numeric 1
f--;  // value becomes 0.10000000000000009 (due to floating-point inaccuracies)
o--;  // value becomes numeric -2
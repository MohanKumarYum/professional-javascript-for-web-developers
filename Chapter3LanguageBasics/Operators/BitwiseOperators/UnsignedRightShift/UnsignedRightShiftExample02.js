let oldValue = -64;             // equal to binary 11111111111111111111111111000000
let newValue = oldValue >>> 5;  // equal to decimal 134217726

// 64 0000 0000 0000 0000 0000 0000 0100 0000 - Positive 64 Integer
//    1111 1111 1111 1111 1111 1111 1011 1111 - Applying Two's Complement
//                                          1
//-------------------------------------------
//    1111 1111 1111 1111 1111 1111 1100 0000  -64 [Negative number]

// because the binary representation of –64 is 11111111111111111111111111000000, but because the unsigned right shift treats 
// this as a positive number, it considers the value to be 4294967232. When this value is shifted to the right by five bits, 
// it becomes 00000111111111111111111111111110, which is 134217726.
function gcd(a, b) {
    if (b === 0) return a;
    
    return gdc(b, a % b);
}

a = 89, b = 35

1 - gdc(85, 35)
    2 - gdc(35, 2)
        3 - gdc(2, 17) 
            4 - gdc(17, 8)
                5 - gdc(8, 1)
                    6 - gdc(1, 0) // returns a = 1

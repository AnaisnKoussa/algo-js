function factorial(n) {
    if (n !== 0){
    return n * factorial(n-1);
    } else {
        return 1;
    }
}

// !5 -> 5 * 4 * 3 * 2 * 1
// n + factiorel(n-1);
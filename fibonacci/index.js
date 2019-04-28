const fibonnacciNumber = (num) => {
    if(num<2){
        return num;
    }
    else {
        return fibonnacciNumber(num-1) + fibonnacciNumber(num-2);
    }
}
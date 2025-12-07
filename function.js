function numberRandom (min , max ) {
    return Math.floor( Math.random() * (max - min) ) + min 
}

function isEven( number ) {
    if( number % 2 === 0){
        return true;
    }else {
        return false;
    }
}
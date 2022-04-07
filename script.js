function  factolial (n) {
    if (n===1 || n===0) {
        return 1
    }
    else if(n<0){ 
                return undefined
            }  
    else{ 
        return n * factolial(n-1)
    }  
}    
   
console.log( factolial(3), factolial(0),factolial(1),factolial(-3) );



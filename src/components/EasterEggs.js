import { ReactPropTypes } from "react";

const SecretWord = () =>{
    let savedKeys = [];
    const secretCode = 'bajs';
    return(
        document.addEventListener('keydown', event => {
            const key = event.key.toLocaleLowerCase();
            savedKeys.push(key);
            
            let guess = savedKeys.slice(-4);
            let guessString= guess.join('');
        
            console.log(guessString);
            if(guessString === secretCode){
        
                alert('bajs YES');
            } 
        })
    )
}



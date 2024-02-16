function play(){
    // by clicking the play button on home 
    hideElement('home');
    showElement('playground');
    continuePlaying();
    
}
function continuePlaying(){
    // generate a random letter
    const alphabet= getRandomLetter();

    // show it on the screen 
    const currentLetter= document.getElementById('current-letter');
    currentLetter.innerText=alphabet;

    // set bg color of keyboard 
    setBgColor(alphabet);
}
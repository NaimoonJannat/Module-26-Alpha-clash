function play(){
    // by clicking the play button on home 
    hideElement('home');
    hideElement('scoreBoard');
    showElement('playground');
    continuePlaying();
}

function handleKeyboardKeyup(event){
    const playerPressed= event.key;
    console.log('player Pressed', playerPressed);

    // Get expected to press 
    const currentAlphabetElement = document.getElementById('current-letter');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet= currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // Check matched or not 

    if(playerPressed === expectedAlphabet){
        console.log('You get a point');
        // const currentScore = getValueById('current-score');
        // const newScore= currentScore+1;
        // setTextById('current-score', newScore);
        

        // update score 
        // 1) get the Score 
        const getScoreById = document.getElementById('current-score');
        const currentScoreText = getScoreById.innerText;
        const currentScore= parseInt(currentScoreText);
        // 2) increase it 
        const newScore= currentScore+1;
    
        // 3) Display the score 
         getScoreById.innerText= newScore;
        // start a new round 
        removeBgColor(expectedAlphabet);
        continuePlaying();
    }
    else{
        console.log('You have lost one life!');
        // Decrease life 
        // 1) get currentLife 
        const getLifeById = document.getElementById('current-life');
        const currentLifeText = getLifeById.innerText;
        const currentLife= parseInt(currentLifeText);

        // 2) decrease it 
        const newLife= currentLife - 1;

        // 3)Display the current life 
        getLifeById.innerText= newLife;

        if (newLife==0){
            hideElement('playground');
            showElement('scoreBoard');
        }
    }
}

document.addEventListener('keyup',handleKeyboardKeyup);


function continuePlaying(){
    // generate a random letter
    const alphabet= getRandomLetter();

    // show it on the screen 
    const currentLetter= document.getElementById('current-letter');
    currentLetter.innerText=alphabet;

    // set bg color of keyboard 
    setBgColor(alphabet);
    
}
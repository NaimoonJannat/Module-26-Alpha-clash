function hideElement(elementId){
    const homeSection = document.getElementById(elementId);
    homeSection.classList.add('hidden');
}

function showElement(elementId){
    const playSection = document.getElementById(elementId);
    playSection.classList.remove('hidden');
}

function getValueById(elementId){
    const element = document.getValueById(elementId);
        const elementValueText = element.innerText;
        const value= parseInt(elementValueText);
        return value;
}

function setTextById(elementId, value){
    const element=document.getElementById(elementId);
    element.innerText= value;
}

function getRandomLetter(){
    const alphaString='abcdefghijklmnopqrstuvwxyz';
    const alphabets= alphaString.split('');

    const randomNum=Math.random()*25;
    const index= Math.round(randomNum);
    const alphabet= alphabets[index];
    return alphabet;
}

function setBgColor(elementId){
    const element= document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBgColor(elementId){
    const element= document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}
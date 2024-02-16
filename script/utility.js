function hideElement(elementId){
    const homeSection = document.getElementById(elementId);
    homeSection.classList.add('hidden');
}

function showElement(elementId){
    const playSection = document.getElementById(elementId);
    playSection.classList.remove('hidden');
}
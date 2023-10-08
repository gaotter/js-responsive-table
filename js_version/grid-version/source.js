(() => {
 const expandElemenets = document.getElementsByClassName("grid-expand");
 if(expandElemenets)
 {
    for(let i = 0; i< expandElemenets.length; i++) {
        expandElemenets[i].addEventListener('click', e => e.target.parentElement.classList.toggle('show'));
    }

 }
})();
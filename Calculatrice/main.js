const touch = [...document.querySelectorAll('.bouton')]; // permet de selectionné tout les élement avec cette classe
const recupKey = touch.map(touch => touch.dataset.key); // recupère le key de la touche correspondante
const ecran = document.querySelector('.ecran'); // recupere la valeur avec la classe ecran

//ajoute un evenement lorsque l'on clique sur une touche
document.addEventListener('click', (event) => {
    const vava = event.target.dataset.key;
    cal(vava);
})

//ajoute un evenement lorsque l'on tappe sur un touche
document.addEventListener('keydown', (event) => {
    const vava = event.keycode.toString();
    cal(vava);
})

// permet de gérer les exceptions pour supprimer (AC) et égale (=)
const cal = (vava) => {
    if (recupKey.includes(vava)){
        switch(vava) {
            case '8':
                ecran.textContent = "";
                break;

            case '187':
                const calcul = Function( " return " + ecran.textContent)();
                ecran.textContent = calcul;
                break;
            
            // gere les autres cas
            default: 
            const codeKey = recupKey.indexOf(vava);
            const touche = touch[codeKey];
            ecran.textContent += touche.innerHTML;

        }
    }
}

window.addEventListener('error', (event) =>{
    alert('Erreur dans votre calcul' + event.message);
})
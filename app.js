const inpUtilisateur = document.querySelector("#utilisateur");
const inpMail = document.querySelector("#email");
const inpMdp = document.querySelector("#mdp");
const inpConfirme = document.querySelector("#mdpconf")
const allImg = document.querySelectorAll('.icone-verif');
const allSpan = document.querySelectorAll('span');
const allLigne = document.querySelectorAll('.ligne div');
const groupe = document.querySelectorAll('.form-groupe');

// let cross = document.createElement('img');
// cross.setAttribute('src','ressources/error.svg');

// for(let i=0; i<4; i++){
//     groupe[i].appendChild(cross);
// }

// let expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;


let ren = /\S+@\S+\.\S+./


// let validMail = "^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$";


 

// Validation création du MDP


let valeurInp;
const specialCar = /[^a-zA-Z0-9]/;
const alphabet = /[a-z]/i;
const chiffres = /[0-9]/ ;


let objValidation = {
    symbole : 0,
    lettre : 0,
    chiffre : 0
}

function findchar(letter,word){
    word2 = word.split(letter);
    //console.log(word2)

    let numberofchar = word2.length-1;
    // console.log(numberofchar);

    return numberofchar;

}





inpUtilisateur.addEventListener('input',  function(e) {


    let username = inpUtilisateur.value;   // ou alors e.target.value

    if(username.length >=3 && username.length <=24 && username.indexOf(specialCar) == -1){

        allSpan[0].style.display = 'none'

        allImg[0].setAttribute('src','ressources/check.svg')
        allImg[0].style.display ='inline';

    }else{

        allSpan[0].style.display = 'contents';

        allImg[0].setAttribute('src','ressources/error.svg')

        allImg[0].style.display ='inline';

        


        // console.log('bad')
        // let textcondition = allSpan[0].textContent;
        // console.log(allSpan[0].textContent);     
    }    
})









inpMail.addEventListener('input',  function(e) {


    let mailinput = inpMail.value;

    
    if(ren.test(String(mailinput).toLowerCase())){                       //mailinput.indexOf(validMail) == -1
        
        allSpan[1].style.display ='none';
    
        allImg[1].setAttribute('src','ressources/check.svg')

        allImg[1].style.display ='inline';

        // console.log("you're doing good, keep working like that");

    }else{

        allSpan[1].style.display = 'contents'

        allImg[1].setAttribute('src','ressources/error.svg')

        allImg[1].style.display = 'inline'
        
        // console.log('not like that bro')
    
    }

})









inpMdp.addEventListener('input',  function(e) {

    let mdpinput = inpMdp.value;
    // console.log(mdpinput)

    if( chiffres.test(mdpinput) && alphabet.test(mdpinput) && specialCar.test(mdpinput) ){            //mdpinput.indexOf(specialCar) && mdpinput.indexOf(alphabet) && mdpinput.indexOf(chiffres)


        // console.log(' You re doing good, keep going i m proud of you')

        allSpan[2].style.display = "none"

        allImg[2].setAttribute('src','ressources/check.svg')

        allImg[2].style.display = "inline"

        allLigne[0].style.display = "inline"

        if(findchar(chiffres,mdpinput) >=2 && findchar(specialCar,mdpinput) >=2 && findchar(alphabet,mdpinput) >=5 ){

            allLigne[1].style.display = 'inline'

            if(findchar(specialCar,mdpinput) >2 && findchar(chiffres,mdpinput) >2 && findchar(alphabet,mdpinput) >5){


                allLigne[2].style.display = 'inline'
    
            }else{
                allLigne[2].style.display = 'none'
            }

        }else{

            allLigne[1].style.display = 'none'

        }
      
    }else{

        allSpan[2].style.display = "contents"

        allImg[2].setAttribute('src','ressources/error.svg')

        allImg[2].style.display = "inline"

        allLigne[0].style.display = "none"

        allLigne[1].style.display = "none"

        allLigne[2].style.display = "none"

    }


})






// confirmation


inpConfirme.addEventListener('input', function(e){

    inpMdp.addEventListener('input', function(e){});

    let user = inpMdp.value;
    // console.log(user);
 
    if(inpConfirme.value == user){

        allImg[3].setAttribute('src','ressources/check.svg')

        allImg[3].style.display = "inline";

    }else{

        allImg[3].setAttribute('src','ressources/error.svg')

        allImg[3].style.display = "inline";

    }


});

inpMdp.addEventListener('input', function(e){                //permet de vérifier la condition une fois que l'on change le champ mdp apres avoir rempli le champ confirmer

    inpConfirme.addEventListener('input', function(e){});

 

    let user = inpConfirme.value;
    // console.log(user);
 
    if(inpMdp.value == user){

        allImg[3].setAttribute('src','ressources/check.svg')

        allImg[3].style.display = "inline";

    }else if(inpConfirme.value == ''){
        allImg[3].setAttribute('src','ressources/error.svg');

        allImg[3].style.display = "inline";

    }
    else {

        allImg[3].setAttribute('src','ressources/error.svg');

        allImg[3].style.display = "inline";

    }


    });


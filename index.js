// variable 
// let cours = 'pi popo polopo pi polopo';
// const prenom = 'wassim' 

// console.log(prenom);


//les fonctions
// on declare la fonction
// function faireQuelqueChose(){
//     console.log('je fais un truc');
// }
// puis on appelle la fonction

// const faireUneTache = (type) =>{
//     console.log('je fais : ' + type);
// }

// faireQuelqueChose();
// faireUneTache('la vaisselle');
// faireUneTache('du crack');

// les deux  en dessous font la memes choses
const btn = document.querySelector('#btn');
const img = document.getElementById('img');

// on crée un evenement 
// on peut faire une fonction juste en fleche avec () =>
btn.addEventListener('click', () =>{
     img.classList.toggle('noshow');
    })

// ************************************

const mouseEvent = document.querySelector('.mouseEvent');
const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
// e c'est event mais on peut mettre n'importe quelle nom

mouseEvent.addEventListener('mousemove', (e) => {
  horizontal.innerHTML = e.x;
  vertical.innerHTML = e.y;
  mouseEvent.style.left = e.x / window.innerWidth * 100 + "%";

  if (e.x > 500 ){
      document.body.style.filter = "blur(3px)"
  }
  else {
      document.body.style.filter = "none"
  }

} )

// *************
// encore une autre manière de faire

document.getElementById('inputus').addEventListener('inputus', (e) => {
  vertical.innerHTML = e.target.value;
})


// *****************

const theme = document.querySelectorAll('.theme');

// pour chacun d'eux on utilisent for each
theme.forEach(item => {
    item.addEventListener('click', (e) => {
        console.log(e.target.id);
        document.body.classList.remove("darkTheme", "yellowTheme", "salmonTheme");
        switch(e.target.id){
            case "dark":
                document.body.classList.add("darkTheme");
                break;
            case "salmon":
                document.body.classList.add("salmonTheme");
                break;
                case "yellow":
                document.body.classList.add("yellowTheme");
                break;
                default:
                    null;
        }
    })
});
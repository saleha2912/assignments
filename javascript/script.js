const firstrandom = 
Math.floor(Math.random()*6)+1 

const firstdiceimg = 
'assets/dice.png' + 
firstrandom + '.png' ;
document.querySelectorAll('img')[0].setAttribute
('src', firstdiceimg);

const secondrandom = 
Math.floor(Math.random()*6)+1 

const seconddiceimg = 
"assets/dice.png"+ 
firstrandom + '.png' ;
document.querySelectorAll('img')[1].setAttribute
('src', seconddiceimg);
if(firstrandom > secondrandom){
    document.querySelector('h1').innerHTML =
     "The Winner is User 1";

}else if(firstrandom < secondrandom){
    document.querySelector('h1').innerHTML =
     "The Winner is User 2";
}else {
    document.querySelector('h1').innerHTML =
     "It's a Draw";
}
var scores,roundScore,activePlayer,gamePlaying;
init();

document.querySelector('.btn--roll').addEventListener('click',function(){
    if(gamePlaying)
    {
        var dice=Math.floor(Math.random()*6)+1;

        var diceDoM=document.querySelector('.dice');
        diceDoM.style.display='block';
        diceDoM.src='dice-'+dice+'.png';

        if(dice!==1){
            roundScore+=dice;
            document.querySelector('#current--'+activePlayer).textContent=roundScore;
        }else{
            nextPlayer();   
        }
    }
});

document.querySelector('.btn--hold').addEventListener('click',function(){
    if(gamePlaying){
        scores[activePlayer]+=roundScore;
        document.querySelector('#score--'+activePlayer).textContent=scores[activePlayer];
        if(scores[activePlayer]>=100){
            document.querySelector('#name--'+activePlayer).textContent='WINNER..!!!';
            document.querySelector('.dice').style.display='none';
            document.querySelector('.player--'+activePlayer).classList.add('winner');
            document.querySelector('.player--'+activePlayer).classList.remove('active');
            gamePlaying=false;
        }
        else{
            nextPlayer();
        }
    }
});

document.querySelector('.btn--new').addEventListener('click',init);

function init(){
    scores=[0,0];
    activePlayer=0;
    roundScore=0;
    gamePlaying=true;
    document.querySelector('.dice').style.display='none';

    document.querySelector('#current--0').textContent='0';
    document.querySelector('#current--1').textContent='0';
    document.querySelector('#score--0').textContent='0';
    document.querySelector('#score--1').textContent='0';
    document.querySelector('#name--0').textContent='Player 1';
    document.querySelector('#name--1').textContent='Player 2';
    document.querySelector('.player--0').classList.remove('winner');
    document.querySelector('.player--1').classList.remove('winner');
    document.querySelector('.player--0').classList.remove('active');
    document.querySelector('.player--1').classList.remove('active');
    document.querySelector('.player--0').classList.add('active');


}
function nextPlayer(){
        roundScore=0;
        activePlayer=activePlayer===0?activePlayer=1:activePlayer=0;
        document.querySelector('#current--0').textContent='0';
        document.querySelector('#current--1').textContent='0';
        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');
        document.querySelector('.dice').style.display='none';

}
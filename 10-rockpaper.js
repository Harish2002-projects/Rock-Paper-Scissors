const score =  JSON.parse(localStorage.getItem('score')) || 
{
  wins: 0,
  loss: 0,
  draw: 0
};
document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, losses: ${score.loss}, ties: ${score.draw}`;
function playgame(pmove)
{
  let randNum = Math.random();
  let computer='';
  if(randNum >= 0 && randNum < 1/3)
  {
    computer = 'rock';
  }
  else if(randNum >= 1/3 && randNum < 2/3)
  {
    computer = 'paper';
  }
  else if(randNum >= 2/3 && randNum < 1)
  {
    computer = 'scissors';
  }
  console.log(computer);
  var result = resultfun(computer,pmove);
  updatescore(result);
  updatemove(pmove,computer);
}
function updateresult()
{
  document.querySelector('.js-result').innerHTML = `${result}`;
}
function updatemove(pmove,computer)
{
  document.querySelector('.js-moves').innerHTML = `You<img class="iconstyle" src="photos/${pmove}-emoji.png">
<img class="iconstyle" src="photos/${computer}-emoji.png">Computer`;
}
function updatescore()
{
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, losses: ${score.loss}, ties: ${score.draw}`;
}
function resultfun(computer,pmove)
{
  if(pmove === 'scissors')
  {
    if(computer === 'rock')
    {
      result= 'you lose';
      score.loss++;
    }
    else if(computer === 'paper')
    {
      result= 'you win';
      score.wins++;
    }
    else
    {
      result= 'draw';
      score.draw++;
    }
  } 
  else if (pmove === 'paper')
  {
    if(computer === 'rock')
    {
      result= 'you win';
      score.wins++;
    }
    else if(computer === 'paper')
    {
      result= 'draw';
      score.draw++;
    }
    else
    {
      result= 'you lose';
      score.loss++;
    }
  }
  else if(pmove === 'rock')
  {
    if(computer === 'rock')
    {
      result= 'draw';
      score.draw++;
    }
    else if(computer === 'paper')
    {
      result= 'you lose';
      score.loss++;
    }
    else
    {
      result= 'you win';
      score.wins++;
    }
  }
  updateresult();
  localStorage.setItem('score',JSON.stringify(score));
  return result;
}
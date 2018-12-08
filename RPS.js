  var userScore=0;
  var computerScore=0;
  const userScore_span= document.getElementById("user-score");
  const computerScore_span= document.getElementById("computer-score");
  const scoreBoard_div= document.querySelector(".score-board");
  const result_p= document.querySelector(".result > p");
  const rock_div= document.getElementById ("rock");
  const paper_div= document.getElementById ("paper");
  const scissors_div= document.getElementById ("scissors");
  
  function getComputerChoice() {
  	  const choices =['rock','paper','scissors'];
  	  const X= Math.floor(Math.random()*3);
  	  return choices [X];
  }
  function convert(word) {
  	
     if(word==="rock") return"Rock";
     if(word==="paper") return"Paper";
     return "Scissors";
  }
     convert();
  
  function win(userChoice , computerChoice) {
    const smallUserWord="user".fontsize(3).sup();
    const  smallCompWord = "comp".fontsize(3).sup();
    userScore++ ;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convert(userChoice)+smallUserWord +" beats "+ convert(computerChoice)+ smallCompWord+ " , YOU WIN ! ";
    

  }
  
  function lose(userChoice , computerChoice) {
    computerScore++ ;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML= userScore;
    const smallUserWord="user".fontsize(3).sup();
    const  smallCompWord = "comp".fontsize(3).sup();
    result_p.innerHTML = convert(userChoice)+smallUserWord +" beats "+ convert(computerChoice)+ smallCompWord+ " , YOU LOST ! ";
   
  
  
  }
  
  function draw(userChoice , compChoice) {
    computerScore_span.innerHTML = computerScore;
    userScore.innerHTML = userScore;
    const smallUserWorld = "user".fontsize(3).sup();
    const smallCompWorld = "comp".fontsize(3).sup();
    result_p.innerHTML = convert(userChoice)+smallUserWorld +" equals "+ convert(compChoice)+ smallCompWorld+ " IT'S A DRAW ! ";
  
  }
  
  
  function game(userChoice) {
    const computerChoice = getComputerChoice ();
    switch (userChoice + computerChoice) {
    	case"rockscissors":
    	case"paperrock":
    	case"scissorspaper":
       win(userChoice , computerChoice);
    	  break;
    	case"scissorsrock":
    	case"rockpaper":
    	case"paperscissors":
       lose(userChoice , computerChoice );
    	  break;
    	case"rockrock":
    	case"paperpaper":
    	case"scissorsscissors":
    	 draw(userChoice , computerChoice);
    	  break;
    }
  	 
  }
  
  
  
  function main() {
  	
   rock_div.addEventListener('click', function() {
      game("rock");
    })
    
   paper_div.addEventListener('click', function() {
       game("paper");
    }) 
  
   scissors_div.addEventListener('click', function() {
       game("scissors");
    }) 
    
  }
   
   main();
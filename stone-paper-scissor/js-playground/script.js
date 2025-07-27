let userscore = 0;
let compscore = 0;

const usrscrup = document.querySelector("#user-score");
const compscrup = document.querySelector("#comp-score");
const msgupdate = document.querySelector("#msg");



const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    //funct wrk activate click get clciked value
    choice.addEventListener("click",() => {
        const userclick1 = choice.getAttribute("id");
        console.log("choice clicked",userclick1);
        //function which manage game logic
        playGame(userclick1);

    })
  
});

const playGame = (userclick1) => {
    //funct wrk reciv user choice
    console.log("user choice is:",userclick1);
    //generating computer choice
    const compselect = genComputerChoice();//recv computer choice
    console.log("comp.. choice is:",compselect);

    if(userclick1 === compselect)
    {
        console.log("Match Draw..!");
        msgupdate.innerText = "Match Draw! Play again.";
        //msgupdate.style.backgroundColor = "blue";
        //msgupdate.style.objectFit = "cover";

        

    }

    else if(userclick1 === "paper" && compselect === "scissor")
    {
        console.log("Com.. win..!");
        compscore++;
        compscrup.innerText = compscore;
         msgupdate.innerText = "😞You Lose.!\nScissor defeated your Paper.";
                 //msgupdate.style.backgroundColor = "red";
                 //msgupdate.style.objectFit = "cover";



    }

    else if(userclick1 === "paper" && compselect === "rock")
    {
        console.log("user.. win..!");
        userscore++;
        usrscrup.innerText = userscore;
        msgupdate.innerText = "🏆You Win.\nYour Paper defeated Rock";
               // msgupdate.style.backgroundColor = "green";


    }

    else if(userclick1 === "scissor" && compselect === "paper")
    {
        console.log("user.. win..!");
        userscore++;
        usrscrup.innerText = userscore;
        msgupdate.innerText = "🏆You win.\nYour Scissor Defeated Paper.";
               // msgupdate.style.backgroundColor = "green";




    }
    

    else if(userclick1 === "rock" && compselect === "paper")
    {
        console.log("comp.. win..!");
        compscore++;
        compscrup.innerText = compscore;
        msgupdate.innerText = "😞You Lose.!\nPaper defeted your Rock.";
               // msgupdate.style.backgroundColor = "red";


    }

    else if(userclick1 === "scissor" && compselect === "rock")
    {
        console.log("comp.. win..!");
        compscore++;
        compscrup.innerText = compscore;
         msgupdate.innerText = "😞You Lose.!\nRock defeated Your Scissor.";
               //  msgupdate.style.backgroundColor = "red";


    }

    else if(userclick1 === "rock" && compselect === "scissor")
    {
        console.log("user.. win..!");
        userscore++;
        usrscrup.innerText = userscore;
         msgupdate.innerText = "🏆You win.\nYour Rock defeated Scissor";

                // msgupdate.style.backgroundColor = "green";


    }


};

const genComputerChoice = () => {
    const options = ["rock","paper","scissor"];
    const ind = Math.floor(Math.random() * 3);
    const compchoic = options[ind];
    return compchoic;
}; 

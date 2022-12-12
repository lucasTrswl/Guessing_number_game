var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random * 100) + 1;
number_of_guesses = 0;
guessed_number = [];


function play(){
    var user_guess = document.getElementById("guess").value;

    if(user_guess < 1 || user_guess > 100){
        alert("Saisir un numéro entre 1 et 100");
    }

    else{

        number_of_guess +=1;
        guessed_numbers.push(user_guess);

        if(number_of_guess > 10){
            alert("10 essais, c'est perdu!!!!");

        }
        else if(user_guess < answer){
            msg1.textContent = "Plus haut!";
            msg2.textContent = "Vous avez eu " + number_of_guess + "tentatives";
            msg3.textContent = "Les numéros sortis sont : " + guessed_numbers;

        }

        else if(user_guess > answer){
            msg1.textContent = "Plus bas!";
            msg2.textContent = "Vous avez eu " + number_of_guess + "tentatives";
            msg3.textContent = "Les numéros sortis sont : " + guessed_numbers;

        }
        else if(user_guess == answer){
            msg1.textContent = "C'est gagné!!!!!";
            msg2.textContent = "La bonne réponse était : " + answer;
            msg3.textContent = "Vous avez trouvé en : " + number_of_guess + "tentatives";

    
        }
    }


}
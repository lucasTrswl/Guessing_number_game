var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random() * 200) + 1;
var number_of_guess = 0;
var guessed_numbers = [];

function play(){
    var user_guess = document.getElementById("guess").value;

    if(user_guess < 1 || user_guess > 100){
        alert("Saisir un nombre entre 1 et 100");
    }
    else{
        number_of_guess +=1;
        guessed_numbers.push(user_guess);

        if(number_of_guess > 10){
            alert("10 essais, c'est perdu!");
            location.reload();
        }
        else if(user_guess < answer){
            msg1.textContent = "Plus haut!";
            msg2.textContent = "Nombre de tentatives : " + number_of_guess;
            msg3.textContent = "Numéros saisis : " + guessed_numbers;
        }

        else if(user_guess > answer){
            msg1.textContent = "Plus bas!";
            msg2.textContent = "Nombre de tentatives : " + number_of_guess;
            msg3.textContent = "Numéros saisis : " + guessed_numbers;
        }
        else if(user_guess == answer){
            msg1.textContent = "C'est gagné!";
            msg2.textContent = "Le numéro à trouver était : " + answer;
            msg3.textContent = "Tu as trouvé en : " + number_of_guess + " tentatives";
        }
    }
}
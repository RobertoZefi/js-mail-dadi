console.log('Daje')

const email = ['wakewa8409@crtsec.com', 'nccralo@seventol.world', 'nccralo@pickuplanet.com', 'zefiroberto@yahoo.edu']
console.log(email)

let emailUtente = prompt("Qual'è il tuo indirizzo email")
console.log(emailUtente)

for (i = 0; i < email.length; i++){

    // console.log(email[i])

    if (email[i] == emailUtente){
        console.log('Email corretta')
    } else {
        console.log('Email sbagliata')
    }
        
} 

let dadoUtente = Math.floor (Math.random () *6) + 1
let dadoComputer = Math.floor (Math.random () *6) + 1

console.log(dadoUtente, dadoComputer)

if (dadoUtente < dadoComputer){
    console.log ('Il computer vince')
} else if (dadoUtente === dadoComputer){
    console.log  ('Pareggio')
} else{
    console.log ('Utente vince')
}







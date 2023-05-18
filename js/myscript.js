
const {createApp} = Vue;

createApp({
    data() {
        return {
            saluto: 'Ciao Vue Js!',
            linkImg: '',
            altImg: '',
            numeroCasuale: numeroCasuale(1, 10)
        }
    },
    methods: {

        generaImg: function () {
            
            this.linkImg = 'https://picsum.photos/400/200?random=' + numeroCasuale(1, 100);
            this.altImg = 'immagine casuale';
 
        },

        generaSaluto: function () {
            this.saluto = 'Ciao ' + nomeRandom() + '!';
        }
    }    
}).mount("#esercizio");



//***genera numeri casuali in un range***
function numeroCasuale(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function nomeRandom() {
    const num = numeroCasuale(1, 10);

    if (num === 1) {
        return 'Alessandro';
    } else if (num === 2){
        return 'Paolo';
    } else if (num === 3){
        return 'Giuseppe';
    } else if (num === 4){
        return 'Giulio';
    } else if (num === 5){
        return 'Giulia';
    } else if (num === 6){
        return 'Pino';
    } else if (num === 7){
        return 'Beppe';
    } else if (num === 8){
        return 'Ciccio';
    } else if (num === 9){
        return 'Luca';
    } else if (num === 10){
        return 'Frank';
    }

}
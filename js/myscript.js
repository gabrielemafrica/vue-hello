
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
    const nomi = ['Alessandro', 'Paolo', 'Giuseppe', 'Giulio', 'Giulia', 'Pino', 'Beppe', 'Ciccio', 'Luca', 'Frank'];
    const num = numeroCasuale(1, 10);
    return nomi[num];
}
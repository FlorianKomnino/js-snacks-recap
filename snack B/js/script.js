console.log('Hello Universe!');

const { createApp } = Vue;

createApp ({
    data() {
        return {
            message: 'Inserisci la quantità di numeri randomici, diversi tra loro, che vuoi generare.',

            subtitle: 'non possono essere più di 100',

            userRequestedQuantity: 0,

            arrayOfRandomlyGeneratedUniqueNumbers : [],
        }
    },

    methods: {
        async getRandomSequenceOfNumbers() {
            await axios.get(`https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=${this.userRequestedQuantity}`)
            .then((response) => {
                this.arrayOfRandomlyGeneratedUniqueNumbers = response.data.response;
            });
        },
    },
}).mount ('#app')
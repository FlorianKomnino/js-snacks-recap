console.log('Hello Universe!');

const { createApp } = Vue;

createApp ({
    data() {
        return {
            message: 'Clicca il bottone per generare un numero randomico!',

            subTitle: 'Il numero verrà automaticamente aggiunto al gruppo corretto',

            evenNumbers: [2, 4, 6, 8, 10],

            oddNumbers: [1, 3, 5, 7, 9],

        }
    },
    
    methods: {
        async getRandomNumberAndPushIt () {
            await axios.get("https://flynn.boolean.careers/exercises/api/random/int")
            .then((response) => {
                if(response.data.response % 2 == 0){
                    this.evenNumbers.push(response.data.response);
                } else {
                    this.oddNumbers.push(response.data.response);
                }
            });
        },
    },

    created() {
    }
}).mount ('#app')




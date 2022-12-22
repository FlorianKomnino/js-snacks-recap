console.log('Hello Universe!');

const { createApp } = Vue;

createApp ({
    data() {
        return {
            message: 'Click this title to get a new random number!',

            subTitle: 'Il numero verrà automaticamente aggiunto al gruppo corretto',

            evenNumbers: [2, 4, 6, 8, 10],

            oddNumbers: [1, 3, 5, 7, 9],

        }
    },
    
    methods: {
        async getRandomNumber () {
            await axios.get("https://flynn.boolean.careers/exercises/api/random/int")
            .then((response) => {
                this.evenNumbers.push(response.data.response);
            });
        },
    },

    created() {
    }
}).mount ('#app')




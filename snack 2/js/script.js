console.log('Hello Universe!');

const { createApp } = Vue;

createApp ({
    data() {
        return {
            message: 'Attendi di poter inserire il tuo nome, per verificare se sei in lista.',

            invitedPeopleList: [],

            dataGivenByUser: '',

        }
    },
    
    methods: {
        async getRandomNameAndPushIt () {
            await axios.get("https://flynn.boolean.careers/exercises/api/random/name")
            .then((response) => {
                this.invitedPeopleList.push(response.data.response);
            });
        },

        checkIfUserIsInList (givenData) {
            if (this.invitedPeopleList.includes(givenData)) {
                alert('Complimenti signore! Lei è ammesso')
            } else {
                alert('Vai a disturbare qualcun\'altro, ciaparat!')
            }
        }
    },

    created() {
        for (let i=0 ; i<10 ; i++) {
            this.getRandomNameAndPushIt();
        }

        console.log(this.invitedPeopleList);
    }
}).mount ('#app')




console.log('Hello Universe!');

const { createApp } = Vue;

createApp ({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },

            ],

            contactToShow: 0,

            messageToAdd: '',

            DateTime: luxon.DateTime,

            randomSentenceFromResponse: '',

        }
    },
    
    methods : {

        async getRandomSentence () {
            await axios.get("https://flynn.boolean.careers/exercises/api/random/sentence")
            .then((response) => {
                this.randomSentenceFromResponse = response.data.response;
                this.contacts[this.contactToShow].messages.push(
                    {
                        date: this.DateTime.now().toISO().replace('T', '  ').replaceAll('-', '/').slice(0, -10),
                        message: this.messageToAdd,
                        status: 'sent'
                    });
                    this.messageToAdd = '';
                    setTimeout(this.receivedMessageAdder, 3000);
            });
        },

        messagesToShowFinder() {
            return this.contacts[this.contactToShow].messages;
        },

        messageAdderToConversation() {

        },

        receivedMessageAdder() {
            this.contacts[this.contactToShow].messages.push(
                {
                    date: this.DateTime.now().toISO().replace('T', '  ').replaceAll('-', '/').slice(0, -10),
                    message: this.randomSentenceFromResponse,
                    status: 'received'
                });
        },

        dropdownShower(index) {
            this.messagesToShowFinder()[index].visible = true;
        },

        messagesDeletedStatusAdder (messageIndex) {
            this.contacts[this.contactToShow].messages[messageIndex].deletedStatus = 'deleted';
            this.dropdownMenusArray = [];
        },

        dropdownMenuRemover (index) {
            delete this.messagesToShowFinder()[index].visible;
        },

    },


}).mount ('#app')

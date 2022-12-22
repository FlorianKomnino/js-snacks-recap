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
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },

            ],

            contactToShow: 0,

            messageToAdd: '',

            DateTime: luxon.DateTime,

        }
    },
    
    methods : {

        messagesToShowFinder() {
            return this.contacts[this.contactToShow].messages;
        },

        messageAdderToConversation() {
            this.contacts[this.contactToShow].messages.push(
            {
                date: this.DateTime.now().toISO().replace('T', '  ').replaceAll('-', '/').slice(0, -10),
                message: this.messageToAdd,
                status: 'sent'
            });
            this.messageToAdd = '';
            setTimeout(this.receivedMessageAdder, 3000);
        },

        receivedMessageAdder() {
            this.contacts[this.contactToShow].messages.push(
                {
                    date: this.DateTime.now().toISO().replace('T', '  ').replaceAll('-', '/').slice(0, -10),
                    message: 'Ok! ;)',
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

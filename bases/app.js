const app = Vue.createApp({
    /* template: `
        <h1>Hola Mundo</h1>
        <p> {{ !true ? 'Activo' : 'Inactivo' }} </p>
    ` */
    
    data() {
        return {
            quote: 'Im Batman',
            author: 'Bruce Wayne'
        }
    },

    methods: {
        changeQuote(){
            console.log('Hola mundo')
            this.author = 'Ricardo Zapata'

            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    },

})

app.mount('#myApp')
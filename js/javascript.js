const { createApp } = Vue;

createApp({
    data(){
        return{
            randomEmails: [],
        }
    },
    methods:{
        generateEmails(){
            for(let i=0; i < 10; i++){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((result) => {
                this.randomEmails.push(result.data.response) 
                })
            }
            console.log(this.randomEmails)
        }
    }
}).mount("#app")
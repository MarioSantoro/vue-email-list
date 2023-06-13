const {createApp} = Vue;
createApp({
    data(){
        return{
            emailList : [],
        }
    },

    methods:{
        generateEmail(){
            for(let i= 0 ; i < 10 ; i++){
                axios.get(" https://flynn.boolean.careers/exercises/api/random/mail")
                .then( (email) => {
                    this.emailList.push(email.data.response)
            });
            }
        }
    },

    created(){
        this.generateEmail();
    }
}).mount("#app")
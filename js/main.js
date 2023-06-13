const {createApp} = Vue;
createApp({
    data(){
        return{
            emailList : [],
        }
    },

    methods:{
        generateEmail(){
            axios.get(" https://flynn.boolean.careers/exercises/api/random/mail")
            .then( (email) => {
               for(let i= 0 ; i < 10 ; i++){
                    this.emailList.push(email.data.response)
               }
        });
        }
    },

    created(){
        this.generateEmail();
    }
}).mount("#app")
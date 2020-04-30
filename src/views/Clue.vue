<template>
  <div class="question-container">
    <template>
    <div class="padding-1">
      <template>  
      <v-card
        class="mx-auto card"
        elevation=8 color="blue-grey lighten-5" :tile="true"
      >
      <v-container>
    <v-card-text class="card-text">
      <h3 class="display-1 text--primary">{{singleClue.question}}</h3>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions class="actions center">
      <template>
      <v-form
      ref="form"
      class="form center-2"
      @submit="checkAnswers"
    >
      <v-text-field
        v-model="playerAnswer"
        label="Answer here"
        class="input"
        required
      ></v-text-field>
      
      <v-btn
        color="blue-grey grey lighten-2--text"
        class="mr-4"
        @click="checkAnswers"
      >
        Submit
      </v-btn>
    </v-form>
    </template>
    </v-card-actions>

    <v-card-text>
      <p>Attempt:{{attempts}}</p>
    </v-card-text>
    </v-container>
  </v-card>
  </template>
  <v-banner v-if="isSubmitted" class="actions" 
  single-line transition="slide-y-transition"
  :color="correctAnswer?'success':'red'"
  >
      <h4 v-if="correctAnswer">Correct</h4>
      <h4 v-if="correctAnswer===false && attempts < 4">Wrong: Please try again </h4>
      <h4 v-if="attempts===4 && correctAnswer===false">   
        Sorry the correct answer is: {{singleClue.answer}}
      </h4>
      <template v-slot:actions="{ dismiss }">
        <v-btn class="reset" text color="grey darken-4" @click="dismiss(); reset()">Dismiss</v-btn>
      </template>
    </v-banner>
    
    </div>
</template>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name: "Clue",
  data: function() {
    return {
      playerAnswer:"",
      correctAnswer: null, 
      attempts:1,
      interval:'',
      isSubmitted: false
    }
  },
  created: function() {
    const values ={
      id: this.$route.params.id,
      value: this.$route.params.value
    }
    this.getClue(values)
  },
  methods: {
    ...mapActions(['getClue', 'incrementPrize', 'decrementPrize']),
    direct: function(){
     this.interval = setInterval(()=>{
        this.$router.push('/')
        .catch(err=>{
          console.log(err)
        })
      }, 4000)
    },
    checkAnswers: function($event) {
      console.log($event);
      const lowerCaseAnswer = this.singleClue.answer.toLowerCase();
      const lowerCasePlayerAnswer = this.playerAnswer.toLowerCase();

      $event.preventDefault();

      if(lowerCaseAnswer === lowerCasePlayerAnswer){
        this.correctAnswer = true;
        this.incrementPrize(this.singleClue);
        this.direct();
      }else{
        this.correctAnswer=false;
        this.attempts+=1
        this.playerAnswer=""
      }
      if(this.attempts===4 && this.correctAnswer===false){
        this.decrementPrize(this.singleClue);
        this.direct();
      }
      console.log(lowerCaseAnswer)
      console.log(lowerCasePlayerAnswer)
      console.log(this.singleClue.answer)
      this.isSubmitted=true;
      console.log($event);
    },
    reset: function() {
      this.isSubmitted=false;
    }
  },
  computed:{
    ...mapGetters(['singleClue', 'getPrize'])
  },
  beforeDestroy: function() {
    clearInterval(this.interval)
  } 
}
</script>

<style scoped>
.center{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
.center-2{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.question-container{
  display: flex;
  justify-content: center;
  align-content: center;
}
.question{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  border: solid black 1.5px;
  margin-top: 100px;
  padding:100px;
}
.padding-1{
  padding:75px;
}
.card{
  padding:70px;
  width: 70%;
  height: 500px;
}
.form{
  width:80%;
}
.input{
  width:100%;
}
.card-text{
  margin-bottom: 30px;
}
.actions{
  margin-top:50px;
}

@media only screen and (max-width: 1260px) {
   .card{
     padding: 5%;
     width:90%;
     margin:0 15px 0 15px;
   }
   .actions{
     margin-top:25px;
   }
}
@media only screen and (max-width: 650px) {
   .padding-1{
     padding: 0;
   }
   .card{
     padding: 0;
     width:100%;
     margin:30px 0 0 0;
   }
   .actions{
     margin-top:25px;
   }
}
</style>




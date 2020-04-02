<template>
  <div class="question">
    <h3>{{singleClue.question}}</h3>
    <input :disabled="disable" v-model="playerAnswer" />
    <button v-on:click="checkAnswers">Submit</button>
    <h4 v-if="correctAnswer" style="background:green">Correct</h4>
    <h4 v-else-if="correctAnswer===false && attempts < 3">Wrong: Please try again </h4>
    <h4 v-if="attempts === 3">   
      Sorry the correct answer is: {{singleClue.answer}}
    </h4>
    <h3>Attempts: {{attempts}}</h3>
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
      attempts:0,
      disable:false
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
    ...mapActions(['getClue', 'incrementPrize']),
    direct: function(){
      setInterval(()=>{
        this.$router.push('/')
      }, 3000)
    },
    checkAnswers: function() {
      const lowerCaseAnswer = this.singleClue.answer.toLowerCase();
      const lowerCasePlayerAnswer = this.playerAnswer.toLowerCase();

      if(lowerCaseAnswer.includes(lowerCasePlayerAnswer) === true){
        this.correctAnswer = true;
        this.incrementPrize(this.singleClue);
        this.direct();
      }else{
        this.correctAnswer=false;
        this.attempts+=1
        this.playerAnswer=""
      }
      if(this.attempts===3){
        this.disable = true;
        this.direct();
      }
    }
  },
  computed:{
    ...mapGetters(['singleClue', 'getPrize'])
  },
  beforeDestroy: function() {
    clearInterval(this.direct)
  } 
}
</script>

<style scoped>
input{
  border: solid black 1px;
}

h4{
  background: red;
  color: whitesmoke;
}

button{
  background: lightgray;
}
</style>



<template>
  <div class="question">
    <h3>{{question.question}}</h3>
    <input v-model="playerAnswer" />
    <button v-on:click="checkAnswers">Submit</button>
    <h4 v-if="correctAnswer">Correct</h4>
    <h4 v-else-if="correctAnswer===false" style="background:red">Wrong</h4>
    <h3>Prize Total: ${{prize}}</h3>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Clue",
  data: function() {
    return {
      question:{},
      playerAnswer:"",
      correctAnswer: null,
      prize:0
    }
  },
  mounted: function() {
    axios.get(`http://www.jservice.io/api/clues?category=${this.$route.params.id}&value=${this.$route.params.value}`)
      .then((response)=>{
        console.log(response)
        this.question = response.data[0];
        console.log(this.question);
      })
      .catch((err)=>{
        console.log(err.message);
      })
  },
  methods: {
    checkAnswers: function() {
      const lowerCaseAnswer = this.question.answer.toLowerCase();
      const lowerCasePlayerAnswer = this.playerAnswer.toLowerCase();

      if(lowerCaseAnswer.includes(lowerCasePlayerAnswer) === true){
        this.correctAnswer = true;
        this.prize+=this.question.value;
      }else{
        this.correctAnswer=false;
      }

    }
  }
}
</script>

<style scoped>
input{
  border: solid black 1px;
}

h4{
  background: green;
  color: whitesmoke;
}

button{
  background: lightgray;
}
</style>



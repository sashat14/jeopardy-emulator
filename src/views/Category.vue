<template>
  <div>
    <h1>{{questions[0].category.title}}</h1>
      <div v-for="question in questions" :key="question.id">
        <div>
          <router-link class="value" :to="`/category/${question.category.id}/${question.value}`">{{question.value}}</router-link>
        </div>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name:"Category",
    components:{
    },
    data: function() {
    return{
      questions: []
    }
  },
  mounted: function() {
    axios.get(`http://www.jservice.io/api/clues?count=6&category=${this.$route.params.id}`)
      .then((response)=>{
        console.log(response)
        this.questions = response.data;
        console.log(this.questions);
      })
      .catch((err)=>{
        console.log(err.message);
      })
  },
  methods:{
    
  } 

}
</script>

<style>

</style>

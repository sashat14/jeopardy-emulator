<template>
  <div class="category-container">
    <div class="title">
      <h1 v-if="allClues.length>0">Category: {{allClues[0].category.title}}</h1>
    </div>
    <div v-if="allClues.length>0" class="values-container">
      <div v-for="clue in allClues" :key="clue.id" class="border" >
          <template>
          <v-card class="d-inline-block mx-auto" :to="`/category/${clue.category.id}/${clue.value}`"
          width="250px" height="250px" color="blue accent-4" :hover="true" @click="handleValue"
          :tile="true"  
          >
            <v-container class="categories-text">
              <div class="c-text">{{clue.value}}</div>
            </v-container>
          </v-card>
        </template>
      </div>
      </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  name:"Category",
  data: function(){
    return {
      selected: false
    }
  },
  created: function() {
    const id = this.$route.params.id;
    this.getClues(id)
  },
  methods:{
    ...mapActions(['getClues']),
    handleValue: function($event) {
      console.log(this)
      console.log($event)
    }
  },
  computed: mapGetters(['allClues'])
}
</script>

<style scoped>
.category-container{
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: column;
}

.values-container{
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    margin-top: 75px;
    box-shadow: 5px 5px 8px 5px rgba(10, 13, 25, 0.51);
  }

.title{
  text-align: center;
  margin-top:50px;
  padding: 25px;
  background: lightgray;
  box-shadow: 5px 5px 8px 5px rgba(10, 13, 25, 0.61);
}


</style>

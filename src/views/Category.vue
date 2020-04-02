<template>
  <div>
    <h1>{{allClues[0].category.title}}</h1>
      <div v-for="clue in allClues" :key="clue.id">
        <div>
          <router-link v-on:click='selected=true' class="value" :to="`/category/${clue.category.id}/${clue.value}`">{{clue.value}}</router-link>
        </div>
      </div>
      <router-view></router-view>
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
    ...mapActions(['getClues'])
  },
  computed: mapGetters(['allClues'])
}
</script>

<style>

</style>

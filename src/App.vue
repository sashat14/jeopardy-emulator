<template>
  <div>
    <v-app>
      <v-app-bar
        app
        color="blue accent-4"
        dark
      >
      <div class="header">
        <h1><router-link to="/">JEOPARDY</router-link></h1>
        <div class="prize">
          <img src="./assets/cash-usd.png" />
          <h2>{{getPrize}}</h2>
        </div>
      </div>
      </v-app-bar>
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'App',
  components:{
  },
  computed: {
    ...mapGetters(['getPrize'])
  }
};
</script>

<style scoped>
  .header{
    width:100%;
    display: flex;
    justify-content: space-around;
  }
  .prize{
    display: flex;
    align-items: flex-end;
  }
  header a{
    text-decoration: none;
    color: whitesmoke;
  }
</style>

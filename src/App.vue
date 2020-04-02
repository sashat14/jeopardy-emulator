<template>
  <div>
    <v-app>
      <v-app-bar
        app
        color="primary"
        dark
      >
      <h3>Prize Total: ${{getPrize}}</h3>
      </v-app-bar>
      <v-content>
        <div>
          <router-link to="/category/:id">Category</router-link> |
          <router-link to="/">Categories</router-link> |
          <router-link to="/category/:id/:value">Clues</router-link> |
        </div>
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

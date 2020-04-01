<template>
  <div>
    <v-app>
      <v-app-bar
        app
        color="primary"
        dark
      > 
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

export default {
  name: 'App',
  components:{
  }
};
</script>

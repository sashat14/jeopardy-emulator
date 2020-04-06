<template>
  <div v-if="allCategories.length>0"  class="categories-container">
    <!-- <h1>Categories</h1> -->
    <div v-for="category in allCategories" :key="category.id" class="border">
      <template>
        <v-card class="d-inline-block mx-auto" :to="`/category/${category.id}`"
        width="350px" height="250px" color="blue accent-4" :hover="true" :tile="true"
        >
          <v-container class="categories-text">
            <div class="c-text">{{category.title}}</div>
          </v-container>
        </v-card>
      </template>
    <!-- <router-link :to="`/category/${category.id}`">{{category.title}}</router-link> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: 'Categories',
  components: {
  },
  methods: {
    ...mapActions(['getCategories'])
  },
  created: function(){
    this.getCategories()
  },
  computed: mapGetters(['allCategories'])
}
</script>

<style>
  .categories-container{
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    margin-top: 75px;
  }

  .categories-text{
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    padding: 80px 0 !important;
  }

  .c-text{
    height: 100px;
    font-size: 2rem;
    font-weight:bold;
    display: flex;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
  }

  .border{
  border: solid black 2.5px;
}
</style>


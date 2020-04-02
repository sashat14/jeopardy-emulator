<template>
  <div class="home">
    <h1>Categories</h1>
    <div v-for="category in allCategories" :key="category.id">
    <router-link :to="`/category/${category.id}`">{{category.title}}</router-link>
    </div>
    <router-view></router-view>
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

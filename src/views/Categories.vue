<template>
  <div class="home">
    <h1>Categories</h1>
    <div v-for="category in categories" :key="category.id">
    <router-link :to="`/category/${category.id}`">{{category.title}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Categories',
  components: {
  },
  data: function() {
    return{
      categories:[]
    }
  },
  mounted: function(){
    axios.get('http://www.jservice.io/api/categories?count=8')
    .then((response)=>{
      console.log(response)
      this.categories=response.data;
      console.log(this.categories)
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }
}
</script>

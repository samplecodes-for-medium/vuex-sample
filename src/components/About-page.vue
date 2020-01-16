<template>
  <div class="hello">
    <h1>About Page</h1>
    <h1>It is about {{fullname}}</h1>
    <br>
    <h3>Router:</h3>
    <router-link to="/home">Go to Home</router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "About-page",
  props: {
    msg: String
  },
  computed: {
    ...mapGetters({
      name: "getName",
      surname: "getSurname"
    }),
    fullname() {
      return this.name + " " + this.surname;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

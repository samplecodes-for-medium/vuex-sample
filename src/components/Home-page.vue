<template>
  <div class="hello">
    <h1>Home Page</h1>
    <input type="text" placeholder="Name..." v-model="inputName">
    <br>
    <input type="text" placeholder="Surname..." v-model="inputSurname">
    <br>
    <button id="clearButton" @click="clear()">Clear</button>
    <button id="setButton" @click="setFullname(inputName,inputSurname)">Set Your Fullname</button>
    <h3>Router:</h3>
    <router-link to="/about">Go to About</router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Home-Page",
  props: {
    msg: String
  },
  mounted() {
    this.inputName = this.name;
    this.inputSurname = this.surname;
  },
  data() {
    return {
      inputName: this.name,
      inputSurname: this.surname
    };
  },
  computed: {
    ...mapGetters({
      name: "getName",
      surname: "getSurname"
    })
  },
  methods: {
    ...mapActions({
      setName: "setName",
      setSurname: "setSurname"
    }),
    clear() {
      this.inputName = "";
      this.inputSurname = "";
      this.setSurname("");
      this.setName("");
    },
    setFullname(_name, _surname) {
      this.setName(_name);
      this.setSurname(_surname);
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

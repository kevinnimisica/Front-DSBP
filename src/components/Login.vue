<template>
  <div class="login">
      <div class="form">
        <form @submit.prevent="login">
          <div>
            <label>E-mail</label>
            <input required v-model="username" type="text" />
          </div>
          <div>
            <label>Password</label>
            <input required v-model="password" type="password" />
          </div>
          <button class="login-button" type="sumbit">Log In</button>
        </form>
      </div>
      <div v-if="incorrectCredentials" class="error-response">
        <p>Incorrect Credentials</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: "",
      password: "",
      incorrectCredentials: false,
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.username = "";
          this.password = "";
          this.$router.push({ name: "home" });
        })
        .catch(() => {
          this.incorrectCredentials = true;
        });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div class="login">
      <div class="form">
        <form>
          <div>
            <h1>SPMP</h1>
          </div>
          <div class="container">
            <input type="radio" name="signUp" v-model="signUp" v-bind:value="false">
            <label for="signIn"> Sign In</label>
            <input type="radio" name="signUp" v-model="signUp" v-bind:value="true">
            <label for="signUp"> Sign Up</label>
          </div>
          <div class="container">
            <label>Username</label>
            <input required v-model="username" type="text" />
          </div>
          <div class="container" v-if="isSignUp">
            <label>E-mail</label>
            <input required v-model="email" type="text" />
          </div>
          <div class="container">
            <label>Password</label>
            <input required v-model="password" type="password" />
          </div>
          <button class="login-button" type="sumbit" @click="login">Sign In</button>
          <button class="login-button" type="sumbit" @click="signUp">Sign Up</button>
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
      email: "",
      incorrectCredentials: false,
      isSignUp: false
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
    signUp() {
      this.$store
        .dispatch("signUp", {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.username = "";
          this.email= "";
          this.password = "";
        })
        .catch(() => {
          this.incorrectCredentials = true;
        });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  height: 300px;
  background-color: white;
  padding: 40px;
  box-sizing: border-box;
  border-radius: 20px;
  border: 1px solid rgb(140, 126, 80);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
.form {
  width: 250px;
  position: fixed;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.login-button {
  margin: 10px;
  font-weight: bold;
  width: 100px;
  color: white;
  text-transform: uppercase;
  font-size: 0.8rem;
  background: rgb(66, 203, 245);
  border-radius: 5px;
  border: none;
  padding: 0.4rem 0;
}
.container, label{
  margin: 5px;
}
</style>

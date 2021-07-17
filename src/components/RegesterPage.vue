<template>
  <div class="login-page">
    <div class="login-page-top">
      <div class="container">
        <nav class="p-2">
          <h2 class=" font-weight-bold text-white mr-auto">
            <span class=" text-dark">V</span> argon
          </h2>
          <router-link to="/">
            <span class="icon-dash"><i class="fas fa-desktop"></i></span>
            Dashboard</router-link
          >
          <router-link to="/Register">
            <span class="icon-register"
              ><i class="fas fa-user-circle"></i
            ></span>
            Register</router-link
          >
          <router-link to="/Login">
            <span class="icon-login"><i class="fab fa-keycdn"></i></span>
            Login</router-link
          >
          <router-link to="/UserProfile">
            <span class="icon-user"><i class="fas fa-user"></i></span> User
            Profile</router-link
          >
        </nav>
        <div class="page-info">
          <h3>Create an account</h3>
          <p>
            Use these awesome forms to login or create new <br />
            account in your project for free.
          </p>
        </div>
      </div>
    </div>
    <div class="skew"></div>
    <div class="login-page-down">
      <div class="container">
        <div class="form py-4 m-auto rounded">
          <h3 class="text-center text-secondary h5 pb-3">Sign up with</h3>
          <div class="social-container text-center">
            <a class="social-box btn bg-white py-2 px-4 m-1 rounded" href="#">
              <i class="fab fa-github fa-fw fa-fh"></i>
              <span class="social-name text-primary d-inline-block ml-1 "
                >Githup</span
              >
            </a>
            <a class="social-box btn bg-white py-2 px-4 m-1 rounded" href="#">
              <i class="fab fa-google fa-fw fa-fh"></i>
              <span class="social-name text-primary d-inline-block ml-1 "
                >Google</span
              >
            </a>
          </div>
          <hr />
          <h3 class="text-center text-secondary h5 pb-3">
            Or sign in with credentials
          </h3>
          <ul v-if="erorrs.length">
            <li v-for="erorr in erorrs" :key="erorr" class="text-center text-danger p-1">{{erorr}}</li>
          </ul>
          <form @submit="checkRegisterForm">
            <div class="name">
              <input
                class="rounded"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                v-model="name"
              />
              <span class="icon"><i class="fas fa-graduation-cap"></i></span>
            </div>
            <div class="email">
              <input
                class=" rounded"
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                v-model="email"
              />
              <span class="icon"><i class="fas fa-envelope"></i></span>
            </div>
            <div class="password">
              <input
                class=" rounded"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                v-model="password"
              />
              <span class="icon"><i class="fas fa-key"></i></span>
            </div>
            <div class="password-strong">
              <p class=" text-secondary font-italic">
                password strength: <strong class=" text-success">strong</strong>
              </p>
            </div>
            <div class="check-box">
              <input class="mr-4" type="checkbox" name="privacy" id="privacy" />
              <label class=" text-secondary" for="privacy"
                >I agree with the Privacy Policy</label
              >
            </div>
            <div ref="bt" class="submit">
              <input class="rounded" type="submit" value="Create Account" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      email: null,
      password: null,
      erorrs: []
    };
  },
  methods:{
    checkRegisterForm(e){

      if(this.name && this.password){
        return true
      }
      this.erorrs = [];
      if(!this.name){
        this.erorrs.push("Please Enter Your Name")
      }

      if(!this.email){
        this.erorrs.push("Please Enter Your Email")
      }

      if(!this.password){
        this.erorrs.push("Please Enter Your Password")
      }
      e.preventDefault();
    }
  }
};
</script>

<style lang="scss" scoped>
.login-page-top {
  position: relative;
  min-height: 70vh;
  background: linear-gradient(87deg, #2dce89, #2dcecc);
  nav {
    display: flex;
    align-items: center;
    h2 {
      cursor: pointer;
    }
    a {
      display: inline-block;
      margin-left: 25px;
      color: #fff;
      letter-spacing: 0.8px;
      transition: all 0.3s ease-in-out;
      font-size: 15px;
      &:hover {
        color: rgba($color: #fff, $alpha: 0.7);
      }
      @media (max-width: 991px) {
        display: none;
      }
    }
  }
  .page-info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
    p {
      line-height: 1.7;
      letter-spacing: 0.8px;
      font-weight: lighter;
    }
     @media(max-width: 991px){
      top: 35%;
      width: 90%;
    }
  }
}
.skew {
  height: 80px;
  background-color: #172b4c;
  transform: skewY(-3deg);
  margin-top: -40px;
}
.login-page-down {
  position: relative;
  background-color: #172b4c;
  color: #fff;
  margin-top: -40px;

  .form {
    background-color: #eeeeee;
    width: 45%;
    transform: translateY(-25%);

    @media (max-width: 991px) {
      width: 90%;
    }

    h3,
    p,
    label {
      font-size: 15px;
    }

    .social-container {
      margin-bottom: 50px;
    }

    .social-box {
      letter-spacing: 0.8px;
      box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
        0 1px 3px rgba(0, 0, 0, 0.08);
      transition: all 0.2s ease-in-out;

      span {
        transition: all 0.2s ease-in-out;
      }

      &:hover {
        transform: translateY(-2px);
      }
      &:hover span {
        color: #333 !important;
      }
    }
    hr {
      margin-bottom: 50px;
    }
    .email,
    .password,
    .name {
      width: 80%;
      margin: 30px auto;
      text-align: center;
      position: relative;
      box-shadow: 0 1px 3px rgba(50, 50, 93, 0.15), 0 1px 0 rgba(0, 0, 0, 0.02);

      input {
        width: 100%;
        border: none;
        padding: 10px 10px 10px 40px;
        font-size: 14px;

        &:focus {
          outline: none;
        }
      }
      .icon {
        position: absolute;
        color: gray;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .password-strong {
      width: 80%;
      margin: 30px auto;
    }
    .check-box {
      width: 80%;
      margin: 30px auto;
      cursor: pointer;
    }
    .submit {
      text-align: center;
      margin-bottom: 40px;
      input {
        padding: 10px 20px;
        color: #fff;
        background-color: #5e72e3;
        border: none;

        &:focus {
          outline: 0;
        }
      }
    }
  }
}
</style>

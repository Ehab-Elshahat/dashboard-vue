<template>
  <div class="user-page">
    <header class="min-header">
      <div class="container-fluid">
        <div class="header-info text-white px-4 position-absolute">
          <h1 class="display-4 font-weight-bold ">Hello Jesse</h1>
          <p class="font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            veritatis nostrum, laudantium reiciendis necessitatibus, sunt
            distinctio
          </p>
          <button class="btn text-white d-inline-block  bg-primary mt-4">
            Edite Profile
          </button>
        </div>
      </div>
    </header>
    <div class="container-fluid">
      <div class="edite-profile">
        <div class="row">
          <div class="col-md-12 col-lg-8">
            <div class="edite bg-white">
              <div
                class="edite-nav d-flex justify-content-between align-items-center p-3"
              >
                <h3 class="h5">Edite Profile</h3>
                <button class=" settings">Settings</button>
              </div>
              <div class="user-information">
                <h4 class="text-uppercase text-secondary  p-3">
                  user information
                </h4>
                <form class="">
                  <div class="row">
                    <div class="col-lg-6 col-md-12">
                      <div class="my-3">
                        <label for="user-name">User name</label>
                        <input
                          class="form-control"
                          type="text"
                          name="user-name"
                          id="user-name"
                          placeholder="Ehab 123"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="my-3">
                        <label for="email"> Email Address</label>
                        <input
                          class="form-control"
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Ehab@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6 col-md-12">
                      <div class="my-3">
                        <label for="user-name">First name</label>
                        <input
                          class="form-control"
                          type="text"
                          name="user-name"
                          id="user-name"
                          placeholder="Ehab"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="my-3">
                        <label for="email">Last name</label>
                        <input
                          class="form-control"
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Elshahat"
                        />
                      </div>
                    </div>
                  </div>
                </form>
                <hr />
              </div>
              <div class="contact-information">
                <h4 class="text-uppercase text-secondary p-3">
                  contact information
                </h4>
                <form>
                  <div class="row">
                    <div class="col-12">
                      <div class="my-3">
                        <label for="address">Address</label>
                        <input
                          class="form-control"
                          type="text"
                          name="address"
                          id="address"
                          placeholder="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-4 col-md-12">
                      <div class="my-3">
                        <label for="">City</label>
                        <input
                          class="form-control"
                          type="text"
                          name="city"
                          id="city"
                          placeholder="New York"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                      <div class="my-3">
                        <label for="">Country</label>
                        <input
                          class="form-control"
                          type="text"
                          name="country"
                          id="country"
                          placeholder="USA"
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                      <div class="my-3">
                        <label for="">Posta Code</label>
                        <input
                          class="form-control"
                          type="text"
                          name="post-code"
                          id="post-code"
                          placeholder="Zip Code"
                        />
                      </div>
                    </div>
                  </div>
                </form>
                <hr />
              </div>
              <div class="about">
                <h4 class="text-uppercase text-secondary p-3">
                  about
                </h4>
                <form>
                  <div class="row">
                    <div class="col">
                      <div class="my-3">
                        <label for="about-me">About Me</label>
                        <textarea
                          class="form-control"
                          name="about-me"
                          id="about-me"
                          placeholder="A beautiful premium dashboard for BootstrapVue."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-4">
            <div class="card-profile bg-white">
              <nav
                class="d-flex w-100 justify-content-between align-items-center"
              >
                <button class="connect border-0">Connect</button>
                <img
                  class="rounded-circle"
                  src="../assets/profile.jpg"
                  alt="User Profile"
                />
                <button class="message border-0">Message</button>
              </nav>
              <div class="counters d-flex justify-content-between ">
                <div class="p-1">
                  <span class="text-muted">22</span>
                  <h3 class="h6 text-muted font-weight-normal">Friends</h3>
                </div>
                <div class="p-1">
                  <span class="text-muted">10</span>
                  <h3 class="h6 text-muted font-weight-normal">Photos</h3>
                </div>
                <div class="p-1">
                  <span class="text-muted">89</span>
                  <h3 class="h6 text-muted font-weight-normal">Comments</h3>
                </div>
              </div>
              <div class="user-info text-center">
                <h3 class="h5">
                  Jessica Jones,<span
                    class="text-secondary ml-2 font-weight-light"
                    >27</span
                  >
                </h3>
                <p class="city my-3 text-secondary">Bucharest, Romania</p>
                <p class="job h6 mb-3 px-3 text-muted">
                  Solution Manager - Creative Tim Officer
                </p>
                <p class="university  text-secondary">
                  University of Computer Science
                </p>
                <hr class="my-4 mx-auto" />
                <p class="ryan text-secondary font-weight-light px-2 mb-0">
                  Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick
                  Murphy — writes, performs and records all of his own music.
                </p>
                <a class="d-inline-block my-4 text-info" href="#">Show More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.user-page{
  width: calc(100% - 250px);
  margin-left: auto;

  @media(max-width: 991px){
    width: 100%;
  }
}
.min-header {
  position: relative;
  min-height: 80vh;
  background-image: url("../assets/profile-cover.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(87deg, #2dce89, #2dcecc85) !important;
  }

  .header-info {
    width: 50%;
    top: 50%;
    transform: translateY(-50%);

    @media(max-width: 991px){
      width: 100%;
    }

    h1 {
      @media (max-width: 991px) {
        font-size: 30px;
        margin-top: 0;
      }
    }

    p {
      margin: 12px 0;
      line-height: 1.7;
      letter-spacing: 0.8px;
      @media (max-width: 991px) {
        font-size: 14px;
      }
    }

    button {
      letter-spacing: 0.8px;
      transition: all 0.3s ease-in-out;

      &:hover {
        box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
          0 3px 6px rgba(0, 0, 0, 0.08);
        transform: translateY(-1px);
        outline: none;
      }
    }
    @media (max-width: 767px) {
      top: 10%;
      transform: translateY(0);
    }
  }
}
.edite-profile {
  margin-top: -100px;

  .edite {
    border-radius: 10px;

    @media (max-width: 991px) {
      margin-bottom: 100px;
    }

    label {
      margin-bottom: 10px;
    }

    form {
      padding-left: 40px;

      input {
        font-size: 15px;
        &:focus {
          box-shadow: none;
        }
      }
    }

    .edite-nav {
      border-bottom: 1px solid #ccc;

      .settings {
        border: none;
        background-color: #5e72e3;
        color: #fff;
        padding: 5px 15px;
        border-radius: 5px;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
        font-size: 15px;
        letter-spacing: 0.8px;

        &:hover {
          transform: translateY(-1px);
        }
      }
    }
    .user-information,
    .contact-information,
    .about {
      padding: 0 20px;

      h4 {
        font-size: 15px;
        letter-spacing: 0.8px;
      }
    }
    .about {
      border-bottom: none;

      textarea {
        height: 150px;
        font-size: 15px;
        &:focus {
          box-shadow: none;
        }
      }
    }
  }
  .card-profile {
    border-radius: 10px;

    nav {
      padding: 20px;
      height: 70px;
      position: relative;
      .connect,
      .message {
        position: relative;
        z-index: 1;
        border: none;
        color: #fff;
        padding: 5px 10px;
        border-radius: 5px;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease-in-out;
        font-size: 15px;
        letter-spacing: 0.8px;
        &:hover {
          transform: translateY(-1px);
          outline: none;
          border: none;
        }
      }
      .connect {
        background-color: #11cdf1;
      }
      .message {
        background-color: #162c4c;
      }
      img {
        position: absolute;
        z-index: 0;
        width: 170px;
        height: 170px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          transform: translate(-50%, -52%);
        }
      }
    }
    .counters {
      padding: 20px;
      margin-top: 50px;

      @media(max-width: 1199px){
        flex-direction: column;
      }

      div {
        text-align: center;
        span {
          font-weight: bold;
          font-size: 20px;
        }
        h3 {
          margin-top: 8px;
          font-size: 18px;
          color: gray;
        }
      }
    }
    .user-info {
      hr {
        width: 90%;
      }
    }
  }
}
</style>

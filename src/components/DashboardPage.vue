<template>
  <div class="activity">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 col-lg-8">
          <div class="visits mb-4">
            <nav>
              <h3>page visits</h3>
              <button>See all</button>
            </nav>
            <table>
              <tr>
                <th>Page name</th>
                <th>visitors</th>
                <th>Uniqe Users</th>
                <th>bounce rate</th>
              </tr>
              <tr>
                <td>/argon/</td>
                <td>569</td>
                <td>500</td>
                <td>53%</td>
              </tr>
              <tr>
                <td>/argon/index.html</td>
                <td>5,000</td>
                <td>340</td>
                <td>40%</td>
              </tr>
              <tr>
                <td>/argon/table.html</td>
                <td>4,569</td>
                <td>340</td>
                <td>76.5%</td>
              </tr>
              <tr>
                <td>/argon/charts.html</td>
                <td>4,000</td>
                <td>340</td>
                <td>80%</td>
              </tr>
              <tr>
                <td>/argon/profile.html</td>
                <td>8,300</td>
                <td>340</td>
                <td>77%</td>
              </tr>
            </table>
          </div>
        </div>
        <div class="col-xs-12 col-lg-4">
          <div class="visits social">
            <nav>
              <h3>social traffic</h3>
              <button>See all</button>
            </nav>
            <div class="scroll">
              <table>
                <tr>
                  <th>referral</th>
                  <th>visitors</th>
                  <th></th>
                </tr>
                <tr>
                  <td>facebook</td>
                  <td>569</td>
                  <td>
                    <div class="progress">
                      <span>50%</span>
                      <div class="pro-back">
                        <div
                          class="pro-child bg-danger"
                          style="width:50%"
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>linkedin</td>
                  <td>5,000</td>
                  <td>
                    <div class="progress">
                      <span>60%</span>
                      <div class="pro-back">
                        <div
                          class="pro-child bg-warning"
                          style="width:60%"
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>instagram</td>
                  <td>4,569</td>
                  <td>
                    <div class="progress">
                      <span>70%</span>
                      <div class="pro-back">
                        <div
                          class="pro-child bg-warning"
                          style="width:70%"
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>twitter</td>
                  <td>4,000</td>
                  <td>
                    <div class="progress">
                      <span>80%</span>
                      <div class="pro-back">
                        <div
                          class="pro-child bg-primary"
                          style="width:80%"
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>google</td>
                  <td>8,300</td>
                  <td>
                    <div class="progress">
                      <span>90%</span>
                      <div class="pro-back">
                        <div
                          class="pro-child bg-success"
                          style="width:90%"
                        ></div>
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    titleText: function() {
      return this.title.toUpperCase;
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  .activity {
    margin-top: -100px;
    width: calc(100% - 250px);
    margin-left: auto;

    @media(max-width: 991px){
    width: 100%;
  }

    .visits {
      nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 15px;
        background-color: #fff;
        border: 1px solid rgba($color: #000000, $alpha: 0.1);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        h3 {
          font-size: 16px;
        }
        button {
          border: none;
          background-color: #5e72e3;
          color: #fff;
          font-size: 14px;
          padding: 5px 15px;
          border-radius: 5px;
          box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease-in-out;
          &:hover {
            transform: translateY(-3px);
          }
          &:focus {
            outline: none;
          }
        }
      }
      table {
        border-collapse: collapse;
        width: 100%;
        font-size: 14px;
        tr {
          background-color: #fff;
          &:hover {
            background-color: #f6fafd;
          }
        }
        td,
        th {
          border-bottom: 1px solid #ddd;
          padding: 15px;
        }
        td {
          color: rgba($color: #000000, $alpha: 0.7);
          text-transform: lowercase;
        }
        th {
          color: rgba($color: #000000, $alpha: 0.8);
          font-weight: 500;
          text-transform: uppercase;
          background-color: #f6fafd;
          font-size: 12px;

          &:nth-child(1) {
            width: 300px;
          }
        }
      }
      .scroll {
        overflow-x: scroll;
      }
      &.social {
        table {
          th {
            &:nth-child(1) {
              width: auto;
            }
          }
          .progress {
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span {
              font-size: 16px;
              display: inline-block;
              margin-right: 5px;
            }
            .pro-back {
              position: relative;
              width: 100px;
              height: 3px;
              background-color: #dbdbdb;
              overflow: hidden;
              border-radius: 4px;
              .pro-child {
                width: 50%;
                height: 100%;
                background-color: #2eceb4;
              }
            }
          }
        }
      }
    }
  }
  
}
</style>

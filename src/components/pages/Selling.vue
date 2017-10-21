<template>
  <div id="app">
    <!--Body Part-->
    <main>
      <!--<el-row>-->
      <el-col v-bind:span="12">
        <el-row>
          <el-tabs type="border-card" v-model="cateIndex">
            <el-tab-pane v-for="category in categories" :key="category.id" :label="category.title">
              <el-card class="box-card" v-for="item in category.commodity" :key="item.id">
                <div slot="header" class="clearfix">
                  <!--Card name-->
                  <el-row>
                    <el-col v-bind:span="4">
                      <strong style="line-height: 36px;">Name</strong>
                    </el-col>
                    <el-col v-bind:span="20">
                      <strong style="line-height: 36px;">{{item.name}}</strong>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col v-bind:span="4">
                      <strong style="line-height: 36px;">Amount</strong>
                    </el-col>
                    <el-col v-bind:span="20">
                      <el-input :comm-name="item.name" :comm-unit="item.price" v-bind:min="0" v-bind:max="item.amount"
                                v-model="item.num" v-on:change="handleChange(item)"></el-input>
                    </el-col>
                  </el-row>
                </div>
                <el-row>
                  <el-col :span="12">
                    <div class="text item">
                      <!--List of content-->
                      <p>Unit: {{item.unit}}</p>
                      <p>Unit price: {{item.price}}</p>
                      <p>Amount available: {{item.amount}}</p>
                      <p>Status: {{item.state}}</p>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <img style="max-width: 100%; height: auto; float: right;" src="../../pic/apple.jpg" class="image">
                  </el-col>
                </el-row>
              </el-card>
            </el-tab-pane>
          </el-tabs>
        </el-row>
      </el-col>
      <el-col v-bind:span="12">
        <el-row>
          <el-tabs type="border-card">
            <el-tab-pane label="CURRENT ORDER">
              <!--Selected commodities list-->
              <el-table v-bind:data="commodityList" height="250" style="width: 100%;">
                <el-table-column
                  prop="name"
                  label="Commodity">
                </el-table-column>
                <el-table-column
                  prop="amount"
                  label="Amount">
                </el-table-column>
                <el-table-column
                  prop="unit"
                  label="Unit Price">
                </el-table-column>
                <el-table-column
                  prop="subtotal"
                  label="Subtotal">
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-row>
        <el-row>
          <el-card class="box-card">
            <el-col v-bind:span="4">
              <p>Discount </p>
            </el-col>
            <el-col v-bind:span="8">
              <el-input placehoder="100%" v-model="totalDiscount"></el-input>
            </el-col>
            <el-col v-bind:span="4">
              <p>Total</p>
            </el-col>
            <el-col v-bind:span="8">
              <el-input v-model="totalPrice"></el-input>
            </el-col>
          </el-card>
          <el-card class="box-card">
            <el-button type="success" @click="checkoutDialogVisible = true">Check out</el-button>
            <!--Pop-up dialog for complete order display.-->
            <el-dialog
              title="Order Summary"
              :visible.sync="checkoutDialogVisible"
              size="tiny"
              :before-close="handleClose">
              <!--Add order summary here-->
              <el-row>
                <el-table v-bind:data="commodityList" height="250" style="width: 100%;">
                  <el-table-column
                    prop="name"
                    label="Commodity">
                  </el-table-column>
                  <el-table-column
                    prop="amount"
                    label="Amount">
                  </el-table-column>
                  <el-table-column
                    prop="unit"
                    label="Unit Price">
                  </el-table-column>
                  <el-table-column
                    prop="subtotal"
                    label="Subtotal">
                  </el-table-column>
                </el-table>
              </el-row>
              <el-row>
                <el-col v-bind:span="4">
                  <p>Discount </p>
                </el-col>
                <el-col v-bind:span="8">
                  <el-input placehoder="100%" v-model="totalDiscount"></el-input>
                </el-col>
                <el-col v-bind:span="4">
                  <p>Total</p>
                </el-col>
                <el-col v-bind:span="8">
                  <el-input v-model="totalPrice"></el-input>
                </el-col>
              </el-row>
              <el-row>
                <el-col v-bind:span="4">
                  <p>Receive </p>
                </el-col>
                <el-col v-bind:span="8">
                  <el-input placehoder="100%" v-model="received"></el-input>
                </el-col>
                <el-col v-bind:span="4">
                  <p>Change</p>
                </el-col>
                <el-col v-bind:span="8">
                  <el-input v-model="changes"></el-input>
                </el-col>
              </el-row>
              <span slot="footer" class="dialog-footer">
                <el-button type="success" @click="checkoutDialogVisible = false">Confirm</el-button>
                <el-button type="danger" @click="checkoutDialogVisible = false">Cancel</el-button>
              </span>
            </el-dialog>
            <el-button type="danger" v-on:click="clearAll()">Clear</el-button>
          </el-card>
        </el-row>
      </el-col>
      <!--</el-row>-->
    </main>
  </div>
</template>


<script>
  /* eslint-disable quotes,semi */

  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";
  import ElTabPane from "../../../node_modules/element-ui/packages/tabs/src/tab-pane";
  //  import ElInputNumber from '../node_modules/element-ui/packages/input-number'
  import ElInput from "../../../node_modules/element-ui/packages/input/index";
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button";
  import ElCard from "../../../node_modules/element-ui/packages/card/src/main";
  import firebase from "firebase";

  //  let config = {
  //    apiKey: 'AIzaSyDxF-ZmWZP0qtgeQQli2oPCTn6hw4aovbo',
  //    authDomain: 'se-retail.firebaseapp.com',
  //    databaseURL: 'https://se-retail.firebaseio.com',
  //    projectId: 'se-retail',
  //    storageBucket: 'se-retail.appspot.com',
  //    messagingSenderId: '193615524398'
  //  }

  let config = {
    apiKey: "AIzaSyBhr-1yhcgKdqiyYwPRWJ2DatlzxzonHhs",
    authDomain: "se-retail-management.firebaseapp.com",
    databaseURL: "https://se-retail-management.firebaseio.com",
    projectId: "se-retail-management",
    storageBucket: "se-retail-management.appspot.com",
    messagingSenderId: "729149844491"
  };

  let app = firebase.initializeApp(config);
  let db = app.database();
  let dbRef = {
    source: db.ref("categories")
    // asObject: true
  };
  let dbOrd = {
    source: db.ref("orders"),
    asObject: true
  };

  export default {
    firebase: {
      categories: dbRef,
      //      commodities: dbCom,
      orders: dbOrd
    },
    data () {
      return {
        cateIndex: "",
        commodityList: [],
        totalDiscount: 100,
        received: 0,
        checkoutDialogVisible: false
      };
    },
    computed: {
      totalPrice: function () {
        let total = 0;
        for (let i = 0; i < this.commodityList.length; i++) {
          total = total + this.commodityList[i].subtotal;
        }
        total = total * this.totalDiscount / 100;
        return total;
      },
      changes: function () {
        return this.received - this.totalPrice;
      }
    },
    methods: {
      // Function handleChange(item)
      // 1. [Done]Divided handle changes functions with flags / speared functions for each card.
      // 2. Functions should handle an array to record selected commodities and their amount.
      // 3. Refresh Views.
      handleChange: function (item) {
        let flag;
        debugger;
        console.log("In handleChange, current value is " + item.num);
        // Refreshing commodity list.
        // Verify whether exists or not.
        if (this.commodityList.length === 0) {
          console.log("Commodity list is empty.");
          // Adding object to list array.
          console.log("Pushing new object to the list.");
          this.commodityList.push({
            name: item.name,
            amount: item.num,
            unit: item.price,
            subtotal: item.num * item.price
          });
        } else {
          console.log("Commodity list is not empty.");
          for (let i = 0; i < this.commodityList.length; i++) {
            let listItem = this.commodityList[i];
            if (listItem.name === item.name) {
              listItem.amount = item.num;
              listItem.subtotal = item.num * item.price;
              flag = 0;
              break;
            } else {
              flag = 1;
              continue;
            }
          }
          if (flag === 1) {
            this.commodityList.push({
              name: item.name,
              amount: item.num,
              unit: item.price,
              subtotal: item.num * item.price
            });
            flag = 0;
          }
        }
      },
      // TODO: Function is not working on the view side.
      clearAll: function () {
        // Clear commodityList
        debugger;
        this.commodityList.length = 0;
      },
      handleClose: function () {
        this.checkoutDialogVisible = false;
      }
    },
    components: {
      ElInput,
      ElCard,
      ElButton,
      ElTabPane,
      ElCol,
      ElRow
    }
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  header {
    z-index: 1000;
    min-width: 1200px;
    transition: all 0.5s ease;
    border-top: solid 4px #3091f2;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  }

  header.header-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 800px;
    border: solid 40px #ffffff;
    background-color: #ffffff;
  }

  main .el-card {
    margin-bottom: 15px;
  }

  main.el-table {
    text-align: center;
  }

  main.el-col {
    margin: 10px;
  }
</style>

<template>
  <div id="app">
    <!--Head Part-->
    <header class="header">
      <!--Top header nav bar-->
      <el-row>
        <el-col>
          <el-menu defaultActive="3" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1">SE Retail Management System</el-menu-item>
            <el-menu-item index="2">Storage</el-menu-item>
            <el-menu-item index="3">Sell</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>
    <!--Body Part-->
    <main>
      <!--left navigate-->
      <!--<el-row>-->
      <el-col v-bind:span="12">
        <!--TODO: List of commodities-->
        <el-row>
          <el-tabs type="border-card">
            <el-tab-pane v-for="item in categories" :key="item.id" :label="item.title" >
              <el-card class="box-card" v-for="item in commodities" :key="item.id">
                <div slot="header" class="clearfix">
                  <!--Card name-->
                  <strong style="line-height: 36px;">{{item.name}}</strong>
                  <!--Cannot use props from child component ElInput.-->
                  <amount-input :label="item.name" v-model="exampleCommodityList.amount" v-bind:min="0"
                                v-on:change="handleChange"></amount-input>
                </div>
                <el-row>
                  <el-col :span="12">
                    <div class="text item">
                      <!--List of content-->
                      <p>Unit: {{item.unit}}</p>
                      <p>Unit price: {{item.price}}</p>
                      <p>Amount: {{item.amount}}</p>
                      <p>Status: {{item.state}}</p>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <img style="max-width: 100%; height: auto; float: right;" src="./pic/apple.jpg" class="image">
                  </el-col>
                </el-row>
              </el-card>
            </el-tab-pane>
          </el-tabs>
        </el-row>
      </el-col>
      <el-col v-bind:span="12">
        <!--TODO: List of transaction-->
        <el-row>
          <el-tabs type="border-card">
            <el-tab-pane label="CURRENT ORDER">
              <!--Selected commodities list-->
              <el-table v-bind:data="exampleCommodityList" height="250" style="width: 100%;">
                <el-table-column
                  prop="name"
                  label="Commodity Name">
                </el-table-column>
                <el-table-column
                  prop="amount"
                  label="Amount">
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
              <el-input placehoder="100%"></el-input>
            </el-col>
            <el-col v-bind:span="4">
              <p>Total</p>
            </el-col>
            <el-col v-bind:span="8">
              <el-input></el-input>
            </el-col>
          </el-card>
          <el-card class="box-card">
            <el-button type="success">Check out</el-button>
            <el-button type="danger">Clear</el-button>
          </el-card>
        </el-row>
        <el-row>
          <el-card class="box-card">
            <p>Database raw data</p>
          </el-card>
        </el-row>
      </el-col>

      <!--</el-row>-->
    </main>
  </div>
</template>


<script>
  import ElRow from 'element-ui/packages/row/src/row'
  import ElCol from 'element-ui/packages/col/src/col'
  import ElTabPane from '../node_modules/element-ui/packages/tabs/src/tab-pane'
  import ElInputNumber from '../node_modules/element-ui/packages/input-number'
  import ElButton from '../node_modules/element-ui/packages/button/src/button'
  import ElCard from '../node_modules/element-ui/packages/card/src/main'
  import firebase from 'firebase'

  //  let config = {
  //    apiKey: 'AIzaSyDxF-ZmWZP0qtgeQQli2oPCTn6hw4aovbo',
  //    authDomain: 'se-retail.firebaseapp.com',
  //    databaseURL: 'https://se-retail.firebaseio.com',
  //    projectId: 'se-retail',
  //    storageBucket: 'se-retail.appspot.com',
  //    messagingSenderId: '193615524398'
  //  }

  let config = {
    apiKey: 'AIzaSyBhr-1yhcgKdqiyYwPRWJ2DatlzxzonHhs',
    authDomain: 'se-retail-management.firebaseapp.com',
    databaseURL: 'https://se-retail-management.firebaseio.com',
    projectId: 'se-retail-management',
    storageBucket: 'se-retail-management.appspot.com',
    messagingSenderId: '729149844491'
  }

  let app = firebase.initializeApp(config)
  let db = app.database()
  let dbRef = db.ref('categories')
  let dbCom = db.ref('commodities/cg1')
  let dbOrd = db.ref('orders')
  export default {
    firebase: {
      categories: dbRef,
      commodities: dbCom,
      orders: dbOrd
    },
    // TODO: Binding amount input with this array, compute remaining values automatically.
    data () {
      return {
        num1: 0,
        exampleCommodityList: [{
          name: 'Apple',
          amount: '10',
          subtotal: '30.00'
        }, {
          name: 'Pear',
          amount: '5',
          subtotal: '20.00'
        }]
      }
    },
//    computed: {
//      name: function () {
//        return name
//      },
//      amount: function () {
//        return num1
//      },
//      subtotal: function () {
//        num1 * price
//      }
//    },
    methods: {
      // TODO: Function "handleChange"
      // 1. Divided handle changes functions with flags / speared functions for each card.
      // 2. Functions should handle an array to record selected commodities and their amount.
      // 3. Refresh Views.
      handleChange: function (value) {
        console.log(value)
      }
    },
    components: {
      ElCard,
      ElButton,
      ElTabPane,
      ElCol,
      ElRow,
      'amount-input': {
        extends: ElInputNumber,
        props: ['label']
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  header {
    z-index: 1000;
    min-width: 1200px;
    transition: all 0.5s ease;
    border-top: solid 4px #3091F2;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, .12), 0 0 6px 0 rgba(0, 0, 0, .04);
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
    border: solid 40px #FFFFFF;
    background-color: #FFFFFF;
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

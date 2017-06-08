<template>
  <div id="app">
    <!--Head Part-->
    <header class="header">
      <!--Top header nav bar-->
      <el-row>
        <el-col>
          <el-menu defaultActive="3" class="el-menu-demo" mode="horizontal" @select="">
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
            <el-tab-pane label="FRUITS">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <!--Card name-->
                  <strong style="line-height: 36px;">Apple</strong>
                  <el-input-number v-model="num1" v-bind:min="0" v-on:change="handleChange"></el-input-number>
                </div>
                <el-row>
                  <el-col :span="12">
                    <div class="text item">
                      <!--List of content-->
                      <p>Unit: 500g</p>
                      <p>Unit price: 3.00</p>
                      <p>Amount: 100</p>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <img style="max-width: 100%; height: auto; float: right;" src="./pic/apple.jpg" class="image">
                  </el-col>
                </el-row>
              </el-card>

              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <!--Card name-->
                  <strong style="line-height: 36px;">Apple</strong>
                  <el-input-number v-model="num1" v-bind:min="0" v-on:change="handleChange"></el-input-number>
                </div>
                <el-row>
                  <el-col :span="12">
                    <div class="text item">
                      <!--List of content-->
                      <p>Unit: 500g</p>
                      <p>Unit price: 3.00</p>
                      <p>Amount: 100</p>
                    </div>
                  </el-col>
                  <el-col :span="12">
                    <img style="max-width: 100%; height: auto; float: right;" src="./pic/apple.jpg" class="image">
                  </el-col>
                </el-row>
              </el-card>

              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <!--Card name-->
                  <strong style="line-height: 36px;">Apple</strong>
                  <el-input-number v-model="num1" v-bind:min="0" v-on:change="handleChange"></el-input-number>
                </div>
                <el-row>
                  <el-col :span="12">
                    <div class="text item">
                      <!--List of content-->
                      <p>Unit: 500g</p>
                      <p>Unit price: 3.00</p>
                      <p>Amount: 100</p>
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
            <ul>
              <li v-for="cg in categories"></li>
            </ul>
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
  import ElInputNumber from '../node_modules/element-ui/packages/input-number/src/input-number'
  import ElButton from '../node_modules/element-ui/packages/button/src/button'
  import ElCard from '../node_modules/element-ui/packages/card/src/main'
  import Vue from 'vue'
  import firebase from 'firebase'

  export default {
    data () {
      return {
        num1: 1,
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
    methods: {
      handChange (value) {
        console.log(value)
      }
    },
    components: {
      ElCard,
      ElButton,
      ElInputNumber,
      ElTabPane,
      ElCol,
      ElRow
    },
    name: 'app'
  }

  var db = firebase.initializeApp({
    databaseURL: 'https://se-retail.firebaseio.com'
  }).database().ref('se-retail')
  console.log('DB' + db)
  console.log(db.child('categories'))

  var vm = new Vue({
    el: '#app',
    firebase: {
      categories: db.child('categories')
    }
  })
  console.log(vm)
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

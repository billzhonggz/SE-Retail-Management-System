<template>
  <div id="app">
    <!--Body Part-->
    <!--<el-row>-->
    <main>
      <el-col v-bind:span="12" :offset="6">
        <el-row>
          <el-tabs type="border-card" v-model="cateIndex">
            <el-tab-pane v-for="category in categories" :key="category.id" :label="category.title">
              <el-card class="box-card">
                <el-row :span="4" :offset="20">
                  <el-button type="success" @click="newItemDialogVisible = true">ADD NEW ITEM</el-button>
                </el-row>
              </el-card>
              <el-card class="box-card" v-for="item in category.commodity" :key="item.id">
                <div slot="header" class="clearfix">
                  <!--Card name-->
                  <el-row>
                    <el-col v-bind:span="8">
                      <strong style="line-height: 36px;">Name: {{item.name}}</strong>
                    </el-col>
                    <el-col v-bind:span="4" :offset="8">
                      <el-button type="primary" @click="editDialogVisible = true">EDIT</el-button>
                    </el-col>
                    <el-col v-bind:span="4">
                      <el-button type="danger" @click="deleteDialogVisible = true">DELETE</el-button>
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
    </main>
    <!--Add new item dialog-->
    <el-dialog
      title="Add New Item"
      :visible.sync="newItemDialogVisible"
      size="tiny"
      :before-close="handleClose">
      <el-row style="margin: 10px">
        <el-col :span="6">
          <strong>Name</strong>
        </el-col>
        <el-col :span="18">
          <el-input></el-input>
        </el-col>
      </el-row>
      <el-row style="margin: 10px">
        <el-col :span="6">
          <strong>Unit</strong>
        </el-col>
        <el-col :span="18">
          <el-select v-model="newItemUnit" placeholder="Unit">
            <el-option
              v-for="item in unitOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <el-row style="margin: 10px">
        <el-col :span="6">
          <strong>Unit Price</strong>
        </el-col>
        <el-col :span="18">
          <el-input></el-input>
        </el-col>
      </el-row>
      <el-row style="margin: 10px">
        <el-col :span="6">
          <strong>Amount</strong>
        </el-col>
        <el-col :span="18">
          <el-input></el-input>
        </el-col>
      </el-row>
      <el-row style="margin: 10px">
        <el-col :span="6">
          <strong>Status</strong>
        </el-col>
        <el-col :span="18">
          <el-input></el-input>
        </el-col>
      </el-row>
    </el-dialog>
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
//  import firebase from "firebase";
  import ElDialog from "../../../node_modules/element-ui/packages/dialog/src/component.vue";
  // import ElOption from "../../../node_modules/element-ui/packages/select/src/option.vue";
  // import ElSelect from "../../../node_modules/element-ui/packages/select/src/select.vue";

  //  let config = {
  //    apiKey: 'AIzaSyDxF-ZmWZP0qtgeQQli2oPCTn6hw4aovbo',
  //    authDomain: 'se-retail.firebaseapp.com',
  //    databaseURL: 'https://se-retail.firebaseio.com',
  //    projectId: 'se-retail',
  //    storageBucket: 'se-retail.appspot.com',
  //    messagingSenderId: '193615524398'
  //  }

  // let config = {
  //   apiKey: "AIzaSyBhr-1yhcgKdqiyYwPRWJ2DatlzxzonHhs",
  //   authDomain: "se-retail-management.firebaseapp.com",
  //   databaseURL: "https://se-retail-management.firebaseio.com",
  //   projectId: "se-retail-management",
  //   storageBucket: "se-retail-management.appspot.com",
  //   messagingSenderId: "729149844491"
  // };

  // let app = firebase.initializeApp(config);
  import db from '../common/Firebase'
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
        newItemDialogVisible: false,
        unitOptions: [{
          value: 'pcs',
          label: 'pcs'
        }, {
          value: '500g',
          label: '500g'
        }],
        newItemUnit: '',
        statusOptions: [{
          value: 'new',
          label: 'new'
        }, {
          value: 'new',
          label: 'new'
        }]
      }
    },
    components: {
      // ElSelect,
      // ElOption,
      ElDialog,
      ElInput,
      ElCard,
      ElButton,
      ElTabPane,
      ElCol,
      ElRow
    }
  }
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

  main.el-card {
    margin-bottom: 15px;
  }

  main.el-table {
    text-align: center;
  }

  main.el-col {
    margin: 10px;
  }
</style>

<template>
  <div id="app">
    <!--Top header nav bar-->
    <header class="header">
      <el-row>
        <el-col>
          <el-menu defaultActive="2" class="el-menu-demo" mode="horizontal" @select="">
            <el-menu-item index="1">SE Retail Management System</el-menu-item>
            <el-menu-item index="2">Storage</el-menu-item>
            <el-menu-item index="3">Sell</el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </header>

    <main>
      <!--Left nav bar (categories)-->
      <div class="main-left">
        <el-menu defaultActive="l1" class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="l1" class="{'isActive' : active}">Fruit</el-menu-item>
          <el-menu-item index="l2" class="{'isActive' : '!active}">Food</el-menu-item>
        </el-menu>
      </div>
      <!--Main content area-->
      <div class="main-right">
        <!--A sample card-->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <!--Card name-->
            <span style="line-height: 36px;">Apple</span>
            <el-button style="float: right; margin: 5px;" type="danger">Delete</el-button>
            <el-button style="float: right; margin: 5px;" type="primary">Edit</el-button>
          </div>
          <el-row>
            <el-col :span="12">
              <div class="text item">
                <!--List of content-->
                <p>Unit: 500g</p>
                <p>Unit proce: 3.00</p>
                <p>Amount: 100</p>
              </div>
            </el-col>
            <el-col :span="12">
              <img style="max-width: 100%; height: auto; float: right;" src="./examples/apple.jpg" class="image">
            </el-col>
          </el-row>
        </el-card>
        <!--Another sample card-->
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <!--Card name-->
            <span style="line-height: 36px;">Pear</span>
            <el-button style="float: right; margin: 5px;" type="danger">Delete</el-button>
            <el-button style="float: right; margin: 5px;" type="primary" @clich="dialogFormVisible">Edit</el-button>
          </div>
          <el-row>
            <el-col :span="12">
              <div class="text item">
                <!--List of content-->
                <p>Unit: 500g</p>
                <p>Unit proce: 4.50</p>
                <p>Amount: 10</p>
              </div>
            </el-col>
            <el-col :span="12">
              <img style="max-width: 100%; height: auto; float: right;" src="./examples/pear.jpg" class="image">
            </el-col>
          </el-row>
        </el-card>
      </div>
    </main>
    <!--Pop-up window for Edit-->
    <!--<el-dialog title="Edit Commodity" :visible.sync="dialogFormVisible = true">-->
      <!--<el-form :model="form">-->
        <!--<el-form-item label="Name" :lable-width="formLabelWidth">-->
          <!--<el-input v-model="form.name" autoComplete="off"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-select label="Category">-->
          <!--<el-option-->
            <!--v-for="item in categories"-->
            <!--:key="item.value"-->
            <!--:label="item.label"-->
            <!--:value="item.label">-->
          <!--</el-option>-->
        <!--</el-select>-->
      <!--</el-form>-->
    <!--</el-dialog>-->
  </div>
</template>

<script>
    export default {
      name: 'app',
      data: function () {
        return {
          active: true
        }
      }
    }
</script>

<style>
  body {
    margin: 0;
  }

  #app {
    min-width: 1200px;
    margin: 0 auto;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }

  /*Header nav bar*/
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

  /*header .el-menu-demo {*/
    /*padding-left: 300px !important;*/
  /*}*/

  /*Main content area*/
  main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 800px;
    border: solid 40px #E9ECF1;
    background-color: #FCFCFC;
  }

  main .main-left {
    text-align: center;
    width: 200px;
    float: left;
  }

  main .main-right {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background-color: #FFF;
    padding: 50px 70px;
  }

  main .el-menu {
    background-color: transparent !important;
  }
</style>

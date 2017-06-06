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
      <div class="main-right"></div>
    </main>
  </div>
</template>

<script>
  import Vue from 'vue'
  import Element from 'element-ui'
  import 'element-ui/lib/theme-default/index.css'
  import ElRow from 'element-ui/packages/row/src/row'
  import ElCol from 'element-ui/packages/col/src/col'
  import ElMenu from '../node_modules/element-ui/packages/menu/src/menu'
  import ElMenuItem from '../node_modules/element-ui/packages/menu/src/menu-item'
  Vue.use(Element)

  export default {
    components: {
      ElMenuItem,
      ElMenu,
      ElCol,
      ElRow
    },
    name: 'app'
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

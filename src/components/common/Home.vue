<template>
    <div id="app" class="wrapper">
        <!--Head Part-->
    <header class="header">
      <!--Top header nav bar-->
      <el-row>
        <el-col>
          <el-menu defaultActive="3" class="el-menu-demo" mode="horizontal">
            <a href="#"><el-menu-item index="1">SE Retail Management System</el-menu-item></a>
            <a href="#/storage"><el-menu-item index="2">Storage</el-menu-item></a>
            <a href="#/selling"><el-menu-item index="3">Sell</el-menu-item></a>
          </el-menu>
        </el-col>
      </el-row>
    </header>
        <div class="content">
            <transition name="move" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<<script>
  import ElRow from 'element-ui/packages/row/src/row'
  import ElCol from 'element-ui/packages/col/src/col'

  export default {
    components: {
      ElRow,
      ElCol
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

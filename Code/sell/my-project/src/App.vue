   <template>
      <div id="app">
        <!-- 头部导航 -->
        <header class="header">
        <el-row>
            <el-col :span="24">
              <el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="">
                <el-menu-item index="1">SE Retail Management System</el-menu-item>
                <el-menu-item index="2">Storage</el-menu-item>
                <el-menu-item index="3">SelectProduct</el-menu-item>
                
              </el-menu>
            </el-col>
        </el-row>
        </header>
        <div style="position: relative;height: 60px;width: 100%;"></div>

        <main>
        	<!--Top Navigate-->
            <div class = "main-top">
            	<el-row>
				  <el-col :span="4"><div class="grid-content bg-purple">Type</div></el-col>
				  <el-col :span="4"><div class="grid-content bg-purple-light">Product Name</div></el-col>
				  <el-col :span="4"><div class="grid-content bg-purple">Unit Price</div></el-col>
				  <el-col :span="4"><div class="grid-content bg-purple-light">Amount</div></el-col>
				  <el-col :span="4"><div class="grid-content bg-purple">Discount</div></el-col>
				  <el-col :span="4"><div class="grid-content bg-purple-light">Subtotal</div></el-col>
				</el-row>


             
            <!-- 左侧导航 -->
            <div class="main-left">
              <el-menu default-active="/activePublic" class="el-menu-vertical-demo" :router="true">
              
                <el-menu-item index="/activeManage" :class="{'isActive': !active}">Book</el-menu-item>
                <el-menu-item index="/activeManage" :class="{'isActive': !active}">Drink</el-menu-item>
                <el-menu-item index="/activeManage" :class="{'isActive': !active}">Fruit</el-menu-item>
              </el-menu>
            </div>

              <!-- 右侧主内容区 -->
              <div  class="main-right" >
              		<el-card class="box-card">
					  <div slot="header" class="clearfix">
					    <span style="line-height: 36px;">Apple</span>
					   
						   <el-input-number size = "" v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
						
					  </div>
					  <div v-for="o in 4" :key="o" class="text item">
					    {{'Name '}}
					  </div>
					</el-card>

              </div>
              </div>
              <!-- Main Bottom-->
              <div class = "main-bottom">
              	<div class ="block">
              		<span class = "wrapper">
              			<el-button :plain="true" type="success">Received</el-button>
              			<el-button :plain="true" type="warning">Back</el-button>
              		</span>
              	</div>
              </div> 
        </main>
      </div>
    </template>

    <script>
    import Vue from 'vue'
    import Element from 'element-ui'
    import 'element-ui/lib/theme-default/index.css'

    Vue.use(Element)

    export default {
      name: 'app',
      data: function (){
        return {
          active:true
        }
      }
    }
var Main = {
    data() {
      return {
        num1: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')

    </script>

    <style>
      body{margin: 0;}
    #app {
      min-width: 1200px;
      margin: 0 auto;
      font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
    }
    /* 头部导航 */
    header{z-index: 1000;min-width: 1200px;transition: all 0.5s ease;  border-top: solid 4px #3091F2;  background-color: #fff;  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);  }
    header.header-fixed{position: fixed;top: 0;left: 0;right: 0;}
    header .el-menu-demo{padding-left: 300px!important;}

    /* 主内容区 */
      main{    display: -webkit-box;  display: -ms-flexbox;  display: flex;  min-height: 800px;  border: solid 40px #E9ECF1;  background-color: #FCFCFC;  }
      main .main-top{text-align: center;width: 100%;float: left;}
      main .main-left{text-align: center;width: 17%;float: left;}
      main .main-right{-webkit-box-flex: 1;  -ms-flex: 1;  flex: 1;  background-color: #fff; padding: 50px 70px; }
      main .el-menu{background-color: transparent!important;}
/* Main Top*/
 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
/* Card*/
.text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }

  .box-card {
    width: 280px;
  }
    </style>
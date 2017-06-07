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
				  <el-col :span="16"><div class="grid-content bg-purple-light">Commodities Information</div></el-col>
				  <el-col :span="4"><div class="grid-content bg-purple">List</div></el-col>
				  
				</el-row>

			<el-row>
             <el-col :span="20">
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
              		<div class = "commodity">
	              		<el-card class="box-card">
						  <div slot="header" class="clearfix">
						    <span style="line-height: 36px;">Apple</span>
							 <el-input-number size = "" v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
						  </div>
						  <div  class="text item">
						    {{'Product Name:'}}
						  </div>
						  <div  class="text item">
						    {{'Unit Price:'}}
						  </div>
						  <div  class="text item">
						    {{'Discount:'}}
						  </div>
						  <div  class="text item">
						    {{'Subtotal:'}}
						  </div>
						</el-card>

					</div>


              </div>
              </el-col>
              <el-col :span="4">
              <div class = "main-list">
              	<el-table :data="tableData" stripe style="width: 100%">
				    <el-table-column
				      prop="order"
				      label="Order Number"
				      width="18">
				    </el-table-column>
				    <el-table-column
				      prop="name"
				      label="Product Name"
				      width="18">
				    </el-table-column>
				    <el-table-column
				      prop="amount"
				      label="Amount"
				      width="18">
				    </el-table-column>

				 </el-table>

              </div>
              </el-col>
              </el-row>
              	<div class ="block">

              		<span class = "wrapper">
              		<el-row>
					  <el-col :span="4"><el-button :plain="true" type="success">Received</el-button></el-col>
					  <el-col :span="4"><el-button :plain="true" type="warning">Back</el-button></el-col>
					  <el-col :span="4"><el-input size = "small"v-model="input" placeholder="Input Discount"></el-input></el-col>
					  <el-col :span="4"><el-input size = "small"v-model="input" placeholder="Total Price"></el-input></el-col>
				  
					</el-row>
              			
              			
              			
              		</span>
              	
              	</div>
              </div>
              <!-- Main Bottom-->

        </main>
      </div>
    </template>
    <script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>
    <script>
    	
    	export default {
  data() {
    return {
      input: ''
    }
  }
}
    </script>
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
      main .main-right{-webkit-box-flex: 1;  -ms-flex: 1;  flex: 1;  background-color: #fff; padding: 50px 85px; width :83% }
      main .main-list{text-align: center;width: 100%;float: right;}
      main .el-menu{background-color: transparent!important;}
      main .block{text-align:left;}
      main .commodity{padding: 85px;}
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
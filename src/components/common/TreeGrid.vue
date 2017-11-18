<template>
  <div>
    <el-table
      :data="data"
      border
      style="width: 100%;">
      <el-table-column v-for="(column, index) in columns" :key="column.dataIndex"
                       :label="column.text">
        <template scope="scope">
          {{scope.row[column.dataIndex]}}
        </template>
      </el-table-column>
      <el-table-column label="Detail" width="260">
        <template scope="scope">
          <el-button
            size="small"
            type="primary"
            @click="viewDetail(scope.row)">
            View Detail
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--Pop-up dialog for complete order display.-->
    <el-dialog
      title="Transcription Detail"
      :visible.sync="transcriptionDetailDialogVisible"
      size="tiny"
      :before-close="handleDetailDialogClose">
      <el-row>
        <p>Time: {{transcriptionDetail.time}}</p>
      </el-row>
      <el-row>
        <el-table v-bind:data="transcriptionDetail.commodities" border style="width: 100%;">
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
          <el-input placehoder="100%" v-model="transcriptionDetail.discount" :disabled="true"></el-input>
        </el-col>
        <el-col v-bind:span="4">
          <p>Total</p>
        </el-col>
        <el-col v-bind:span="8">
          <el-input v-model="transcriptionDetail.total" :disabled="true"></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col v-bind:span="4">
          <p>Receive </p>
        </el-col>
        <el-col v-bind:span="8">
          <el-input placehoder="100%" v-model="transcriptionDetail.received" :disabled="true"></el-input>
        </el-col>
        <el-col v-bind:span="4">
          <p>Change</p>
        </el-col>
        <el-col v-bind:span="8">
          <el-input v-model="transcriptionDetail.change" :disabled="true"></el-input>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
       <el-button type="danger" @click="handleDetailDialogClose">Close</el-button>
    </span>
    </el-dialog>
  </div>
</template>

<script>
  import DataTransfer from '../common/dataTranslate.js'

  export default {
    name: 'tree-grid',
    props: {
// 该属性是确认父组件传过来的数据是否已经是树形结构了，如果是，则不需要进行树形格式化
      treeStructure: {
        type: Boolean,
        default: function () {
          return false
        }
      },
// 这是相应的字段展示
      columns: {
        type: Array,
        default: function () {
          return []
        }
      },
// 这是数据源
      dataSource: {
        type: Array,
        default: function () {
          return []
        }
      },
// 这个作用是根据自己需求来的，比如在操作中涉及相关按钮编辑，删除等，需要向服务端发送请求，则可以把url传过
      requestUrl: {
        type: String,
        default: function () {
          return ''
        }
      },
// 这个是是否展示操作列
      treeType: {
        type: String,
        default: function () {
          return 'normal'
        }
      },
// 是否默认展开所有树
      defaultExpandAll: {
        type: Boolean,
        default: function () {
          return false
        }
      }
    },
    data () {
      return {
        transcriptionDetail: [],
        transcriptionDetailDialogVisible: false
      }
    },
    computed: {
      // 格式化数据源
      data: function () {
        let me = this
        if (me.treeStructure) {
          let data = DataTransfer.treeToArray(me.dataSource, null, null, me.defaultExpandAll)
          console.log(data)
          return data
        }
        return me.dataSource
      }
    },
    methods: {
      // 展开下级
      toggle: function (trIndex) {
        let me = this
        let record = me.data[trIndex]
        record._expanded = !record._expanded
      },
      // 显示层级关系的空格和图标
      spaceIconShow (index) {
        let me = this
        if (me.treeStructure && index === 0) {
          return true
        }
        return false
      },
      // 点击展开和关闭的时候，图标的切换
      toggleIconShow (index, record) {
        let me = this
        if (me.treeStructure && index === 0 && record.commodities && record.commodities.length > 0) {
          return true
        }
        return false
      },
      viewDetail (row) {
        console.log(row)
        // Give a dialog to display the detail information.
        this.transcriptionDetail = row
        this.transcriptionDetailDialogVisible = true
      },
      handleDetailDialogClose () {
        this.transcriptionDetail = []
        this.transcriptionDetailDialogVisible = false
      }
    }
  }
</script>
<style scoped>
  .ms-tree-space {
    position: relative;
    top: 1px;
    display: inline-block;
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: 400;
    line-height: 1;
    width: 18px;
    height: 14px;
  }

  .ms-tree-space::before {
    content: ""
  }

  table td {
    line-height: 26px;
  }
</style>

<template>
  <div id="app">
    <!--Body Part-->
    <!--<el-row>-->
    <main>
      <el-col v-bind:span="12" :offset="6">
        <el-row>
          <el-tabs type="border-card" v-model="selectedCategory">
            <el-tab-pane v-for="category in categories" :key="category.id"
                         :label="category.title">
              <el-card class="box-card">
                <el-row :span="4" :offset="20">
                  <el-button type="success" @click="newItemDialogVisible=true">ADD NEW ITEM</el-button>
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
                      <el-button type="primary" @click="openEditDialog(item.name)">EDIT</el-button>
                    </el-col>
                    <el-col v-bind:span="4">
                      <el-button type="danger" @click="openDeleteDialog(item.name)">DELETE</el-button>
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
      size="tiny">
      <el-row style="margin: 10px">
        <strong>You are adding a new item in {{this.selectedCategory}}</strong>
      </el-row>
      <el-row style="margin: 10px">
        <el-col :span="6">
          <strong>Name</strong>
        </el-col>
        <el-col :span="18">
          <el-input v-model="newItemName"></el-input>
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
          <el-input v-model="newItemPrice" v-price="newItemPrice"></el-input>
        </el-col>
      </el-row>
      <el-row style="margin: 10px">
        <el-col :span="6">
          <strong>Amount</strong>
        </el-col>
        <el-col :span="18">
          <el-input v-model="newItemAmount"></el-input>
        </el-col>
      </el-row>
      <el-row style="margin: 10px">
        <el-col :span="6">
          <strong>Status</strong>
        </el-col>
        <el-col :span="18">
          <el-select v-model="newItemStatus" placeholder="Status">
            <el-option
              v-for="item in statusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
         <el-button type="success" @click="doAddNewItem">Confirm</el-button>
         <el-button type="danger" @click="newItemDialogVisible = false">Cancel</el-button>
      </span>
    </el-dialog>

    <!--Edit item dialog-->
    <el-dialog
      title="Edit Item"
      :visible.sync="editItemDialogVisible"
      size="tiny">
      <el-row>
        <strong>You are editing {{ editItemName }}, with key {{ editItemKey }}</strong>
      </el-row>
      <el-row style="margin: 10px">
        <el-col :span="6">
          <strong>Name</strong>
        </el-col>
        <el-col :span="18">
          <el-input v-model="editItemName"></el-input>
        </el-col>
      </el-row>
      <el-row style="margin: 10px">
        <el-col :span="6">
          <strong>Unit</strong>
        </el-col>
        <el-col :span="18">
          <el-select v-model="editItemUnit" placeholder="Unit">
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
          <el-input v-model="editItemPrice"></el-input>
        </el-col>
      </el-row>
      <el-row style="margin: 10px">
        <el-col :span="6">
          <strong>Amount</strong>
        </el-col>
        <el-col :span="18">
          <el-input v-model="editItemAmount"></el-input>
        </el-col>
      </el-row>
      <el-row style="margin: 10px">
        <el-col :span="6">
          <strong>Status</strong>
        </el-col>
        <el-col :span="18">
          <el-select v-model="editItemStatus" placeholder="Status">
            <el-option
              v-for="item in statusOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
         <el-button type="success" @click="saveEdit()">Save</el-button>
         <el-button type="danger" @click="editItemDialogVisible = false">Cancel</el-button>
      </span>
    </el-dialog>

    <!-- Delete Item Confirmation Dialog -->
    <el-dialog
      title="Delete Item"
      :visible.sync="deleteItemDialogVisible"
      size="tiny">
      <strong>Are you sure to delete the following item? This cannot be undone.</strong>
      <p>Item Name: {{ deleteItemName }}</p>
      <p>Item Key: {{ deleteItemKey }}</p>
      <span slot="footer" class="dialog-footer">
         <el-button type="success" @click="doDelete()">Confirm</el-button>
         <el-button type="danger" @click="deleteItemDialogVisible = false">Cancel</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  /* eslint-disable quotes,semi */
  import db from '../common/Firebase'
  import ElRow from "element-ui/packages/row/src/row";

  let dbRef = {
    source: db.ref("categories")
  };
  let dbOrd = {
    source: db.ref("orders"),
    asObject: true
  };

  export default {
    components: {ElRow},
    firebase: {
      categories: dbRef,
      //      commodities: dbCom,
      orders: dbOrd
    },
    data () {
      return {
        selectedCategory: '',
        newItemDialogVisible: false,
        editItemDialogVisible: false,
        deleteItemDialogVisible: false,
        newItemName: '',
        editItemName: '',
        newItemPrice: '',
        editItemPrice: '',
        newItemAmount: '',
        editItemAmount: '',
        unitOptions: [{
          value: 'pcs',
          label: 'pcs'
        }, {
          value: '500g',
          label: '500g'
        }],
        newItemUnit: '',
        editItemUnit: '',
        statusOptions: [{
          value: 'new',
          label: 'New'
        }, {
          value: 'second-hand',
          label: 'Second-handed'
        }],
        newItemStatus: '',
        editItemStatus: '',
        editItemKey: '',
        deleteItemKey: '',
        deleteItemName: ''
      }
    },
    methods: {
      // ADD NEW ITEM
      // 1. Identify the current selected category. (By v-model binding.)
      // 2. Read the input from user.
      // 3. Perform a check.
      // 4. Write the data into database.
      // 5. Clear the remaining data.
      doAddNewItem () {
        // TODO: Cheek if input is empty or not.
        // TODO: Forbid adding if there is a item have same name.
        // Get the selected category.
        let cate = this.$firebaseRefs.categories.child(this.selectedCategory).child('commodity')
        // Do add new item to db.
        cate.push({
          'amount': this.newItemAmount,
          'name': this.newItemName,
          'price': this.newItemPrice,
          'state': this.newItemStatus,
          'unit': this.newItemUnit
        })
        // Clean up variables.
        this.newItemAmount = ''
        this.newItemName = ''
        this.newItemPrice = ''
        this.newItemStatus = ''
        this.newItemUnit = ''
        // Close dialog
        this.newItemDialogVisible = false
      },
      // OPEN EDIT DIALOG
      // 1. Identify which button was clicked.
      // 2. Load the data of that item to variables.
      // 3. Display data on the dialog.
      openEditDialog (itemName) {
        console.log(itemName)
        // DB query according to item name.
        this.$firebaseRefs.categories.child(this.selectedCategory).child('commodity')
          .orderByChild("name").equalTo(itemName).once('value', function (snap) {
            // Assign values to bind variables.
            let queryResult = snap.val()
            let selectedItem = queryResult[Object.keys(queryResult)]
            console.log(selectedItem)
            this.editItemKey = Object.keys(queryResult)
            this.editItemName = selectedItem["name"]
            this.editItemPrice = selectedItem["price"]
            this.editItemAmount = selectedItem["amount"]
            this.editItemUnit = selectedItem["unit"]
            this.editItemStatus = selectedItem["state"]
          }.bind(this)) // Binding "this" to allow callback function access outer variables.
        // Popup the window.
        this.editItemDialogVisible = true
      },
      // SAVE EDIT
      // 1. Read all edited items in the variables.
      // 2. Update database according to the key.
      saveEdit () {
        // Set up the item to add.
        let item = {
          'amount': this.editItemAmount,
          'name': this.editItemName,
          'price': this.editItemPrice,
          'state': this.editItemStatus,
          'unit': this.editItemUnit
        }
        delete item['.key']
        // Do database update.
        this.$firebaseRefs.categories.child(this.selectedCategory).child('commodity')
          .child('/' + this.editItemKey).set(item)
        // Clean up variables.
        this.editItemKey = ''
        this.editItemName = ''
        this.editItemPrice = ''
        this.editItemAmount = ''
        this.editItemUnit = ''
        this.editItemStatus = ''
        // Close window.
        this.editItemDialogVisible = false
      },
      // OPEN DELETE DIALOG
      // Read selected item, find its key and popup the window.
      openDeleteDialog (itemName) {
        this.deleteItemName = itemName
        // Search DB.
        this.$firebaseRefs.categories.child(this.selectedCategory).child('commodity')
          .orderByChild("name").equalTo(itemName).once('value', function (snap) {
          // Assign values to bind variables.
            let queryResult = snap.val()
            this.deleteItemKey = Object.keys(queryResult)
          }.bind(this))
        // Popup the delete item window.
        this.deleteItemDialogVisible = true
      },
      // DO DELETE
      doDelete () {
        // Do database update.
        this.$firebaseRefs.categories.child(this.selectedCategory + '/commodity/' + this.deleteItemKey + '/').remove()
        // Cleanup variables
        this.deleteItemName = ''
        this.deleteItemKey = ''
        // Close the window.
        this.deleteItemDialogVisible = false
      }
    },
    directives: {
      // PRICE DIRECTIVE
      // Check user input in real-time.
      price: {
        params: ['min', 'max'],
        twoWay: true,
        update: function (result) {
//          var min = this.params.min;
//          var max = this.params.max;

          this.handler = function () {
            debugger;
            var value = parseFloat(this.el.value);
            if (isNaN(value)) {
              value = 0;
            }
          }
        }
      }
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

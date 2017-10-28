<template>
     <div class="select">
             本店分类 <Select v-model="model3" style="width:100px" >
        
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
              供应商 <Select v-model="model3" style="width:100px;margin-right:30px;">
             
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
           <div class="ivu-input-wrapper ivu-input-wrapper-small ivu-input-type"><!----> <i class="ivu-icon ivu-icon-ios-search ivu-input-icon ivu-input-icon-normal"></i> <!----> <input autocomplete="off" type="text" placeholder="请输入搜索内容" class="ivu-input ivu-input-small"> <!----></div>
              
             <br> 
               <Table :columns="columns1" :data="data1"></Table>
     </div>
      
</template>
<style lang="less">
 @import "second.less";
</style>
<script>
export default {
  data () {
    return {
       columns1: [
                    {
                        title: 'ID',
                        key: 'name'
                    },
                    {
                        title: '商品名称',
                        key: 'age'
                    },
                    {
                        title: '上架',
                        key: 'address'
                    },
                    {
                        tittle:'价格',
                        key:'much'
                    },
                    {
                       tittle:'库存',
                        key:'much'
                    },
                    {
                        title:'操作',
                        key:'aticon'
                    }
                
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    }
                ]
                
    }
  }
}
</script>













     </div>
</template>
<script>
export default {
  
}
</script>

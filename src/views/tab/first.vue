<template>
      <div class="select">
             本店分类 <Select v-model="model3" style="width:100px" >
        
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
              供应商 <Select v-model="model3" style="width:100px;margin-right:30px;">
             
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            	审核状态<Select v-model="model3" style="width:100px">
                
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select> 
           <div class="ivu-input-wrapper ivu-input-wrapper-small ivu-input-type"><!----> <i class="ivu-icon ivu-icon-ios-search ivu-input-icon ivu-input-icon-normal"></i> <!----> <input autocomplete="off" type="text" placeholder="请输入搜索内容" class="ivu-input ivu-input-small"> <!----></div>
           
            </div>
             
</template>
<script>
export default {
  columns1: [
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '年龄',
                        key: 'age'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    }
                ]
}
</script>

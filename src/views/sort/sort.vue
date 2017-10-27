<style lang="less">
@import "./sort.less";
</style>
<template>
     <Breadcrumb separator=">">
        <BreadcrumbItem href="/">商家管理中心</BreadcrumbItem>
        <BreadcrumbItem href="/components/breadcrumb">商家</BreadcrumbItem>
        <BreadcrumbItem>出售的商品</BreadcrumbItem>
           <div class="tabmenu">
                <div class="tab">
                    <span class="active"><router-link to="#">出售中的商品</router-link></span>
                </div>
                <router-link to="" class="ncbtn ncbtn-mint" title="发布新商品"> 发布新商品</router-link>
            </div>
            <div class="tabplay">
                1、商品下架以后，重新上架之前需要平台审核.
            </div>
        <div class="select">
             本店分类 <Select v-model="model3" style="width:100px" >
        
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
              供应商 <Select v-model="model3" style="width:100px">
             
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            新品/推荐<Select v-model="model3" style="width:100px">
                
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select> 
            </div>
            <Table :columns="columns1" :data="data1" ></Table>
      </Breadcrumb>
   
</template>
<script>
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ],
                model2: '',
                model3: '',
                model4: '',
                  columns1: [
                    {
                        title: 'ID',
                        key: 'name',
                       
                    },
                    {
                        title: '商品名称',
                        key: 'age'
                    },
                    {
                        title: '分类',
                        key: 'address'
                    },
                     {
                        title: '价格',
                        key: 'address'
                    },
                     {
                        title: '上架',
                        key: 'address'
                    },
                    {
                        title: '排序',
                        key: 'address'
                    },
                    {
                        title: '操作',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: '39',
                        age: '华为（HUAWEI） M2 10.0 平板电脑 WiFi 月光银商品货号：TP0000038',
                        address: '北京市朝阳区芍药居'
                    },
                    {
                        name: '40',
                        age: 25,
                        address: '北京市海淀区西二旗'
                    },
                    {
                        name: '41',
                        age: 30,
                        address: '上海市浦东新区世纪大道'
                    },
                    {
                        name: '42',
                        age: 26,
                        address: '深圳市南山区深南大道'
                    }
                ]
            }
        },
        methods(){
            
        },
        columns:[
            {
                 columns1Align: 'center',
                        columnAlign: 'center',
            }
        ]
    }
</script>


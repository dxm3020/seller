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
                <router-link to="./mall/mall.vue" class="ncbtn ncbtn-mint" title="发布新商品"> 发布新商品</router-link>
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
           <div class="ivu-input-wrapper ivu-input-wrapper-small ivu-input-type"><!----> <i class="ivu-icon ivu-icon-ios-search ivu-input-icon ivu-input-icon-normal"></i> <!----> <input autocomplete="off" type="text" placeholder="请输入搜索内容" class="ivu-input ivu-input-small"> <!----></div>
            </div>
     <br>
            <Table border :columns="columns7" :data="data6"></Table>
      </Breadcrumb>
</template>

<script>
import Cookies from "js-cookie";
    export default {
        data () {
            return {
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市',
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
                   columns7: [
                    {
                        title: '姓名',
                        key: 'name',
                        width: 220,
                        fixed: 'left'
                    },
                    {
                        title: '年龄',
                        key: 'age',
                        width: 220
                    },
                    {
                        title: '省份',
                        key: 'province',
                        width: 220
                    },
                    {
                        title: '市区',
                        key: 'city',
                        width: 220
                    },
                    {
                        title: '地址',
                        key: 'address',
                        width: 220
                    },
                   
                     {
                        title: '操作',
                        key: 'action',
                        fixed: 'right',
                        width: 220,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                        
                                    },
                                    router:()=>{
                                        require('.tab/tab/html')
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                        
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                   ],
              data6: [
                    {
                        name: '王小明',
                        age: 18,
                        address: '北京市朝阳区芍药居',
                        province: '北京市',
                        city: '朝阳区',
                        zip: 100000
                    },
                    {
                        name: '张小刚',
                        age: 25,
                        address: '北京市海淀区西二旗',
                        province: '北京市',
                        city: '海淀区',
                        zip: 100000
                    },
                    {
                        name: '李小红',
                        age: 30,
                        address: '上海市浦东新区世纪大道',
                        province: '上海市',
                        city: '浦东新区',
                        zip: 100000
                    }
              ]
            }
        },
        methods:{
               show (index) {
                this.$Modal.info({
                    title: '用户信息',
                    content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
        
    }
</script>


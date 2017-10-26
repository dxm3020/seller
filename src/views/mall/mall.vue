<style lang="less">
    @import './mall.less';
</style>
<template>


<div class=".wp_sor">
    <!-- <Breadcrumb>
                <Breadcrumb-item href="/">商家管理中心</Breadcrumb-item>
                <Breadcrumb-item href="/components/breadcrumb">商家</Breadcrumb-item>
                <Breadcrumb-item>选择商品分类</Breadcrumb-item>
            </Breadcrumb>   
    <Cascader :data="data" v-model="value1" class="downtop"></Cascader>
      <input id="submit" value="下一步，填写商品信息" class="submit" style=" width: 200px;" type="submit" >
    </div> -->
    
    <div class="contains">
	<!--面包屑导航-->
	<div class="crumbNav">
		<a href="#">首页</a>
		<font>&gt;</font>
		发布商品
		<font>&gt;</font>
		选择商品所在分类
	</div>
	<!--商品分类-->
    <div class="wareSort clearfix">
		<ul id="sort1"></ul>
		<ul id="sort2" style="display: none;"></ul>
		<ul id="sort3" style="display: none;"></ul>
	</div>
	<div class="selectedSort"><b>您当前选择的商品类别是：</b><i id="selectedSort"></i></div>
	<div class="wareSortBtn">
		<input id="releaseBtn" type="button" value="下一步" disabled="disabled" />
	</div>
  
</template>
<script>
import Cookies from 'js-cookie';
import Mall from '/mall.js';
import Madt from '/Madt.js';
import $ from 'jquery';



//     export default {
//         data () {
//             return {
//                 value1: [],
//                 data: [{
//                     value: 'beijing',
//                     label: '个人化妆',
//                     children: [
//                         {
//                             value: 'gugong',
//                             label: '身体护肤',
//                             children: [
//                                 {
//                                     value: 'fuzimiao',
//                                     label: '沐浴',
//                                 },
//                                 {
//                                     value: 'fuzimiao',
//                                     label: '润肤',
//                                 }, {
//                                     value: 'fuzimiao',
//                                     label: '颈部',
//                                 },
//                                 {
//                                     value: 'fuzimiao',
//                                     label: '颈部',
//                                 }
//                             ]
//                         },
//                         {
//                             value: 'tiantan',
//                             label: '口腔护理',
//                             children: [
//                                 {
//                                     value: 'fuzimiao',
//                                     label: '牙膏/牙粉',
//                                 },
//                                 {
//                                     value: 'fuzimiao',
//                                     label: '牙膏/牙粉',
//                                 }
//                             ]
//                         },
//                         {
//                             value: 'wangfujing',
//                             label: '女性护理',
//                               children: [
//                                 {
//                                     value: 'fuzimiao',
//                                     label: '卫生巾',
                                    
//                                 }
//                             ]
                            
//                         }
//                     ]
//                 },
//                 {
//                     value: 'beijing',
//                     label: '图书、音像、电子书',
//                     children: [
//                         {
//                             value: 'gugong',
//                             label: '故宫',
//                             children: [
//                                 {
//                                     value: 'fuzimiao',
//                                     label: '夫子庙',
//                                 }
//                             ]
//                         },
//                         {
//                             value: 'tiantan',
//                             label: '天坛',
//                             children: [
//                                 {
//                                     value: 'fuzimiao',
//                                     label: '夫子庙',
//                                 }
//                             ]
//                         },
//                         {
//                             value: 'wangfujing',
//                             label: '王府井',
//                               children: [
//                                 {
//                                     value: 'fuzimiao',
//                                     label: '夫子庙',
//                                 }
//                             ]
                            
//                         }
//                     ]
//                 },
//                 {
//                     value: 'beijing',
//                     label: '手机 、 数码 、 通信',
//                     children: [
//                         {
//                             value: 'gugong',
//                             label: '故宫',
//                             children: [
//                                 {
//                                     value: 'fuzimiao',
//                                     label: '夫子庙',
//                                 }
//                             ]
//                         },
//                         {
//                             value: 'tiantan',
//                             label: '天坛',
//                             children: [
//                                 {
//                                     value: 'fuzimiao',
//                                     label: '夫子庙',
//                                 }
//                             ]
//                         },
//                         {
//                             value: 'wangfujing',
//                             label: '王府井',
//                               children: [
//                                 {
//                                     value: 'fuzimiao',
//                                     label: '夫子庙',
//                                 }
//                             ]
                            
//                         }
//                     ]
//                 },
//                  {
//                     value: 'jiangsu',
//                     label: '家用电器',
//                     children: [
//                         {
//                             value: 'nanjing',
//                             label: '南京',
//                             children: [
//                                 {
//                                     value: 'fuzimiao',
//                                     label: '夫子庙',
//                                 }
//                             ]
//                         },
//                         {
//                             value: 'suzhou',
//                             label: '苏州',
//                             children: [
//                                 {
//                                     value: 'zhuozhengyuan',
//                                     label: '拙政园',
//                                 },
//                                 {
//                                     value: 'shizilin',
//                                     label: '狮子林',
//                                 }
//                             ]
//                         }
//                     ],
//                 },
//                  {
//                     value: 'jiangsu',
//                     label: '运动户外',
//                     children: [
//                         {
//                             value: 'nanjing',
//                             label: '南京',
//                             children: [
//                                 {
//                                     value: 'fuzimiao',
//                                     label: '夫子庙',
//                                 }
//                             ]
//                         },
//                         {
//                             value: 'suzhou',
//                             label: '苏州',
//                             children: [
//                                 {
//                                     value: 'zhuozhengyuan',
//                                     label: '拙政园',
//                                 },
//                                 {
//                                     value: 'shizilin',
//                                     label: '狮子林',
//                                 }
//                             ]
//                         }
//                     ],
//                 }]
//             }
//         }
//     }
// </script>



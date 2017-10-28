


<style lang="less">
@import "./tab.less";
</style>

<template>
    <div class="">
          <Breadcrumb separator=">">
        <BreadcrumbItem href="/">商家管理中心</BreadcrumbItem>
        <BreadcrumbItem href="/components/breadcrumb">商家</BreadcrumbItem>
        <BreadcrumbItem>出售中的商品</BreadcrumbItem>
          </Breadcrumb>
    　　　　<nav>
    　　　　　　<a href="javascript:void(0);" @click="toggleTabs(first);">{{first}}</a>
            　 　　<a href="javascript:void(0);" @click="toggleTabs(second);">{{second}}</a>
    　　　　</nav>

　　　　　　<first :is="currentView" keep-alive></first>
    </div>
</template>

<script  type="text/ecmascript-6">

import first from './first';
import second from './second';

export default {
        data () {
             return {
                 first: "first", 
                second: "second", 
                currentView: 'first', 
             };
         },
         components: { 
             first,
             second
         },
         methods: {
             toggleTabs (tabText) {
                 this.currentView = tabText;
             }
         }
    }
</script>

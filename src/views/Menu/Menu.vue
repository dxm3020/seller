<template>
    <Menu mode="horizontal" :theme="theme1" active-name="1">
         <MenuItem name="4">
            <Icon type="navicon-round"></Icon>
            首页 
        </MenuItem>
        <Submenu name="1">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                商品
            </template>
                 <router-link :to="{ path:'/mall',name: 'mall',component: resolve => { require(['./views/mall/mall.vue'], resolve); }}"><MenuItem name="3-1" >商品发布</MenuItem></router-link>
                 <router-link :to="{ path:'/sort',name: 'sort',component: resolve => { require(['./views/sort/sort.vue'], resolve);}}"><MenuItem name="3-2"> 出售中的商品</MenuItem> </router-link>
                <MenuItem name="3-3"> 仓库中的商品 </MenuItem>
                <MenuItem name="3-4"> 库存日志 </MenuItem>
                <MenuItem name="3-5"> 商品规格 </MenuItem>
                 <MenuItem name="3-6">  品牌申请  </MenuItem> 
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="stats-bars"></Icon> 
                订单物流
            </template>
               </router-link :to='/access'  @click="goFirst"> <MenuItem name="3-1">订单列表</MenuItem></router-link>
                <MenuItem name="3-2">虚拟订单</MenuItem>
                <MenuItem name="3-3">拼团订单</MenuItem>
                <MenuItem name="3-4">发货商品</MenuItem>
                <MenuItem name="3-5">商品评论</MenuItem>
        </Submenu>
         <MenuItem name="2">
            <Icon type="ios-people"></Icon>
            促销
        </MenuItem>
        <MenuItem name="4">
            <Icon type="settings"></Icon>
            店铺
        </MenuItem>
    </Menu>
</template>
<script>
export default {
  
}
</script>

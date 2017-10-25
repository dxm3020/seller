<template>
  <div>
         <Dropdown placement="bottom-start">
                        <a href="javascript:void(0)" style="color:#495060">
                          商品
                        </a>
                            <DropdownMenu slot="list">
                            <DropdownItem @click="shoep()">商品发布</DropdownItem>
                            <DropdownItem><router-link to="/mall/send"> 出售中的商品</router-link></DropdownItem>
                            <DropdownItem> 仓库中的商品</DropdownItem>
                            <DropdownItem> 库存日志</DropdownItem>
                            <DropdownItem> 商品规格</DropdownItem>
                            </DropdownMenu>
                    </Dropdown>
                               <Dropdown placement="bottom-start">
                                    <a href="javascript:void(0)" style="color:#495060">
                                      订单物流
                                    </a>
                                        <DropdownMenu slot="list">
                                        <DropdownItem> 订单列表 </DropdownItem>
                                        <DropdownItem>  虚拟订单 </DropdownItem>
                                        <DropdownItem>  拼团订单 </DropdownItem>
                                        <DropdownItem>  发货商品 </DropdownItem>
                                        <DropdownItem>   商品评论  </DropdownItem>
                                        </DropdownMenu>
                                </Dropdown>
      </div>
</template>

<script>
export default {
    methods:{
        shoep:function(){
             this.$router.push('/send')
         }
    }
}
</script>

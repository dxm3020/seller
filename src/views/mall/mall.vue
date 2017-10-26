<template>
   <div class="content">内容
   <div class="contains">
	<div class="crumbNav">
		<a href="demo.html">首页</a>
		<font>&gt;</font>
		发布商品
		<font>&gt;</font>
		选择商品所在分类
	</div>
    <div class="wareSort clearfix">
		<ul id="sort1">
			<li v-for="ss in sites" :key="ss">
				<a href="javascript:void(0);" @click="first(ss.id)">{{ss}}</a>	
			</li>
		</ul>
		<ul id="sort2" style="display: none;">

		</ul>
		<ul id="sort3" style="display: none;">

		</ul>
	</div>
	<div class="selectedSort"><b>您当前选择的商品类别是：</b><i id="selectedSort"></i></div>
	<div class="wareSortBtn">
		<input id="releaseBtn" type="button" value="下一步" disabled="disabled" />
	</div>
	</div>
   </div>
</template>

<style lang="less">
@import "./mall.less";
</style>


<script>
import $ from "jquery";

export default {
        data () {
            return {
                sites:["教育", "文艺", "青春", "生活", "人文社科", "经管", "科技", "电子书"]
            }
		},
		methods: {
			first:function(){
				alert("33")
			}
		}
};
</script>

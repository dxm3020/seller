<template>
   <div class="contains">
	<div class="crumbNav">
		<a href="demo.html">首页</a>
		<font>&gt;</font>
		商品
		<font>&gt;</font>
		商品发布
	</div>
    <div class="wareSort clearfix">
		   
    <Cascader :data="data"  @on-change="handleChange" >
        <a href="javascript:void(0)">请选择商品</a>
    </Cascader>
	</div>
	<div class="selectedSort"><b>您当前选择的商品类别是：</b><i id="selectedSort"> {{text}}</i></div>
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
    export default {
        data () {
            return {
                value2: ['jiangsu', 'suzhou', 'zhuozhengyuan'],
                text: '未选择',
                data: [{
                    value: 'beijing',
                    label: '个人化妆',
                    children: [
                        {
                            value: 'gugong',
                            label: '身体护肤',
                                 children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'tiantan',
                            label: '口腔护理'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }]
            }
        },
		created(){
			this.handleChange();
		},
        methods: {
            handleChange (value, selectedData) {
                this.text = selectedData.map(o => o.label).join(', ');
            }
        }
    }
</script>

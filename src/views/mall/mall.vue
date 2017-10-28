<template>
   <div class="contains">
	<div class="crumbNav">
		<a href="demo.html">首页</a>
		<font>&gt;</font>
		商品
		<font>&gt;</font>
		商品发布
	</div>
    <Steps :current="1" size="0" class="step">
        <Step title="选择商品分类" icon="person-add"> </Step>
        <Step title="填写商品详情" icon="compose"></Step>
        <Step title="上传商品图片" icon="social-instagram-outline"></Step>
        <Step title="商品发布成功" icon="checkmark-circled"></Step>
    </Steps>
    <Icon type=""></Icon>
    <Icon type=""></Icon>
    <div class="wareSort clearfix">
    <Cascader :data='data' @on-change="handleChange">
        <a href="javascript:void(0)" ref="image">选择商品分类</a>
    </Cascader>
	</div>
	<div class="selectedSort"><b>您当前选择的商品类别是：</b><i id="selectedSort"> {{text}}</i></div>
	<div class="wareSortBtn">
		<router-link to="#"><input id="releaseBtn" type="button" value="下一步" disabled="disabled" /> 
        </router-link>
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
                                },
                                 {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                },
                                 {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'tiantan',
                            label: '口腔护理',
                             children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                },
                                 {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                },
                                 {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'tiantan',
                            label: '天坛',
                             children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                },
                                 {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                },
                                 {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井',
                             children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                },
                                 {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                },
                                 {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        }
                        
                    ]
                }, 
                {
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
                },
                 {
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
                }

                ],
            }
            
        },
		created(){
			this.handleChange();
		},
       methods: {
            handleChange (value, selectedData) {
                this.text = selectedData.map(o => o.label).join(', ');
                var ivu=document.querySelector(".ivu-cascader-menu");
                setInterval(function(){
                    ivu.style.display="block";
                },1)
            },
            
        },
          mounted () {
              this.$refs.image.click();
           }
    }
</script>

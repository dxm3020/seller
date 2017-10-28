var current_control = 'Goods/addEditGoods';
$(document).ready(function(){
    //添加删除快捷操作
    $('[nctype="btn_add_quicklink"]').on('click', function() {
        var $quicklink_item = $(this).parent();
        var item = $(this).attr('data-quicklink-act');
        if($quicklink_item.hasClass('selected')) {
            $.post("/index.php/Seller/Index/quicklink_del", { item: item }, function(data) {
                $quicklink_item.removeClass('selected');
                var idstr = 'quicklink_'+ item;
                $('#'+idstr).remove();
            }, "json");
        } else {
            var scount = $('#quicklink_list').find('dd.selected').length;
            if(scount >= 8) {
                layer.msg('快捷操作最多添加8个', {icon: 2,time: 2000});
            } else {
                $.post("/index.php/Seller/Index/quicklink_add", { item: item }, function(data) {
                    $quicklink_item.addClass('selected');
                    if(current_control=='Index/index'){
                        var $link = $quicklink_item.find('a');
                        var menu_name = $link.text();
                        var menu_link = $link.attr('href');
                        var menu_item = '<li id="quicklink_' + item + '"><a href="' + menu_link + '">' + menu_name + '</a></li>';
                        $(menu_item).appendTo('#seller_center_left_menu').hide().fadeIn();
                    }
                }, "json");
            }
        }
    });
    //浮动导航  waypoints.js
    $("#sidebar,#mainContent").waypoint(function(event, direction) {
        $(this).parent().toggleClass('sticky', direction === "down");
        event.stopPropagation();
        });
    });
    // 搜索商品不能为空
    $('input[nctype="search_submit"]').click(function(){
        if ($('input[nctype="search_text"]').val() == '') {
            return false;
        }
    });

	function fade() {
		$("img[rel='lazy']").each(function () {
			var $scroTop = $(this).offset();
			if ($scroTop.top <= $(window).scrollTop() + $(window).height()) {
				$(this).hide();
				$(this).attr("src", $(this).attr("data-url"));
				$(this).removeAttr("rel");
				$(this).removeAttr("name");
				$(this).fadeIn(500);
			}
		});
	}
	if($("img[rel='lazy']").length > 0) {
		$(window).scroll(function () {
			fade();
		});
	};
	fade();
	
    function delfunc(obj){
    	layer.confirm('确认删除？', {
    		  btn: ['确定','取消'] //按钮
    		}, function(){
    		    // 确定
   				$.ajax({
   					type : 'post',
   					url : $(obj).attr('data-url'),
   					data : {act:'del',del_id:$(obj).attr('data-id')},
   					dataType : 'json',
   					success : function(data){
                        layer.closeAll();
   						if(data==1){
   							layer.msg('操作成功', {icon: 1});
   							$(obj).parent().parent().parent().remove();
   						}else{
   							layer.msg(data, {icon: 2,time: 2000});
   						}
   					}
   				})
    		}, function(index){
    			layer.close(index);
    			return false;// 取消
    		}
    	);
    }

    /*
     * 上传之后删除组图input
     * @access   public
     * @val      string  删除的图片input
     */
    function ClearPicArr2(obj,path){
        var action = $(obj).attr('ncaction');
        if(action != undefined && action =='del'){
            $(obj).parent().parent().remove();
        }
        //删除图片文件
        if(path == '' || path == undefined){
            return;
        }
        // 删除数据库记录
         $.ajax({
            type:'GET',
            url:"/index.php/Seller/Goods/del_goods_images",
            data:{filename:path},
            success:function(){
                 $(obj).parent().siblings('.upload-thumb').find('img').attr("src", '/public/static/images/default_goods_image_240.gif'); // 删除完服务器的, 再删除 html上的图片
                //删除input goods_image
                $(obj).parent().siblings('.upload-thumb').find('input[type=hidden]').val("");
                $(obj).parent().siblings('.show-sort').find('input[type=text]').val("0");
                
                //如果删除的是商品主图, 则把商品主图隐藏域删掉
                if($("#original_img").val() == path){
                	$("#original_img").val("");
                    $("#original_img2").attr("src" , '/Public/static/images/default_goods_image_240.gif');
                }
            }
        });
    }

    function select_nav(obj){
        var data_id = $(obj).attr('data-id');
        $('.ncsc-form-goods').hide();
        $('#'+data_id).show();
        $(obj).parent().parent().find('li').removeClass('active');
        $(obj).parent().addClass('active');
    }
    // 上传商品图片成功回调函数
    function call_back(fileurl_tmp){
        $("#original_img").val(fileurl_tmp);
        $("#original_img2").attr('src', fileurl_tmp);
    }

    var cur_img_id = "";
    function img_upload(num,elementid,path,callback){
    	cur_img_id = elementid;
    	GetUploadify3(num,elementid,path,callback);
    }

    // 上传商品相册回调函数
    function call_back2(paths){
    	if(paths == undefined || paths[0] == undefined) return ;
    	$("img[nctype="+cur_img_id+"]").attr("src" , paths[0]);
    	$("input[data-id="+cur_img_id+"]").val(paths[0]);

    	//重新绑定删除事件
    	$("input[data-id="+cur_img_id+"]").parent().siblings(".show-default").find("a:eq(0)").removeAttr('onclick').click(function(){  ClearPicArr2(this, paths[0]) }); ;

    }

    /**
     *	添加图片
     */
    function add_image(){
    	var length = $('.goods-pic-list>.ncsc-goodspic-upload').length;
    	if(length >= 10){
    		layer.alert("缩略图数量不能超过10个!", {icon:2});
    		return;
    	}
    	var new_id = "file_"+(length);
    	var  last_div = $(".goods-pic-list:last").children("li:first-child").prop("outerHTML");
    	$(".goods-pic-list:last").children("li:last-child").after(last_div);

    	var last_li = $(".goods-pic-list").children("li:last-child");
    	//第一个: a标签
    	last_li.find("a:eq(0)").attr("href" ,  '/public/static/images/default_goods_image_240.gif');
    	//img标签
    	last_li.find("img:eq(0)").attr("nctype" , new_id).attr("src" ,  '/public/static/images/default_goods_image_240.gif'); //src
    	//隐藏域: goods_images
    	last_li.find("input[type=hidden]:eq(0)").attr("data-id" , new_id);
    	//排序字段:
    	last_li.find("input.text").val(0);

    	//第二个: a标签 移除, 图片上传后, 修改ClearPicArr2参数, 添加ncaction属性, 如果该属性是del, 说明是超过5个的上传框, 可以删除.
    	last_li.find("a:eq(1)").attr("ncaction" , "del").removeAttr('onclick').click(function(){  ClearPicArr2(this,'') });
    	//第三个: a标签, 上传图片按钮
    	last_li.find("a:eq(2)").unbind('click').removeAttr('onclick').click(function(){  img_upload(10,  new_id, 'goods', 'call_back2') });

    }

    /**
     * ajax 加载规格 和属性
     */
    function ajaxGetSpecAttr()
    {
        // ajax调用 返回规格
        var goods_id = $('input[name=goods_id]').val();
        var cat_id3 = $('input[name=cat_id3]').val();
        $.ajax({
            type:'GET',
//			data:{goods_id:goods_id,cat_id3:cat_id3},
            url:"/index.php?m=Seller&c=Goods&a=ajaxGetSpecSelect&goods_id="+goods_id+"&cat_id3="+cat_id3,
            success:function(data){
                $("#ajax_spec_data").empty().html(data);
                if($.trim(data) != ''){
                    ajaxGetSpecInput();	// 触发完  马上触发 规格输入框
                }
            }
        });

        // 商品类型切换时 ajax 调用  返回不同的属性输入框
        $.ajax({
            type:'GET',
            url:"/index.php?m=Seller&c=Goods&a=ajaxGetAttrInput&goods_id="+goods_id+"&cat_id3="+cat_id3,
            success:function(data){
                $("#goods_attr_table tr:gt(0)").remove();
                $("#goods_attr_table").append(data);
            }
        });
    }
    
   
    /** 以下是编辑时默认选中某个商品分类*/
    $(document).ready(function(){
    	$("#shop_price").blur(function(){  
    		//可赠送积分    			
			var send_point = calc_send_point();
			$("#give_integral_hint").html("可赠送积分不能超过"+send_point);
        });
    	$('#shop_price').trigger("blur");

        // 店铺内部分类
                ajaxGetSpecAttr();
        // 商品品牌根据分类显示相关的品牌
        $('#brand_id option').each(function(){
            var cat_id1 = $('input[name=cat_id1]').val();
            if($(this).data('cat_id1') != cat_id1 && $(this).val() > 0){
                $(this).hide();
            }
        });
        
        		
		$("#addEditGoodsForm").validate({
    		debug: false, //调试模式取消submit的默认提交功能   
    		focusInvalid: false, //当为false时，验证无效时，没有焦点响应  
            onkeyup: false,   
            submitHandler: function(form){   //表单提交句柄,为一回调函数，带一个参数：form
                $('#submit').attr('disabled',true);
            	var send_point = calc_send_point();   
            	var give_integral = $("input[name='give_integral']").val();
            	if(give_integral > send_point){
            		layer.alert("最多可赠送积分不能超过"+send_point , {icon:2, time:2000},function () {
                        $('#submit').attr('disabled',false);
                    });
            		return;
            	}
                $.ajax({
                    type: "POST",
                    url: "/index.php/seller/Goods/save",
                    data: $('#addEditGoodsForm').serialize(),
                    dataType: "json",
                    error: function(request) {
                        layer.alert("服务器繁忙, 请联系管理员!",{icon:2});
                        return false;
                    },
                    success: function (data) {
                        if (data.status == 1) {
                            layer.msg(data.msg,{icon: 1,time: 2000});
                            $("input[name=goods_id]").attr('value',data.result.goods_id);
                            window.location.href="/index.php/seller/Goods/goodsList";
                        } else {
                            layer.msg(data.msg,{icon: 2,time:2000},function () {
                                $('#submit').attr('disabled',false);
                            });
                            // 验证失败提示错误
                            for (var i in data.result) {
                                $("#err_" + i).text(data.result[i]).show(); // 显示对于的 错误提示
                            }
                        }
                    }
                });
            },
            ignore:":button,:checkbox",	//不验证的元素
            rules:{
            	goods_name:{
            		required:true
            	},
            	shop_price:{
            		required:true,
            		number:true,
            		min:0
            	},
            	market_price:{
            		required:true,
            		number:true,
            		min:0
            	},
            	store_count:{
            		required:true,
            		digits:true,
            		min:0
            	}
            },
            messages:{
            	goods_name:{
            		required:"请填写商品名称"
            	},
            	shop_price:{
            		required:"请填写商品售价",
            		number:"请输入数字",
            		min:"商品价格不能小于0"
            	},
            	market_price:{
            		required:"请填写市场售价",
            		number:"请输入数字",
            		min:"商品价格不能小于0"
            	},
            	store_count:{
            		required:"请输入库存",
            		digits:"库存必须是正数",
            		min:"库存数量不能小于0"
            	}
            }
    	});
    });
    
    /** 计算最多可赠送积分数 */
    function calc_send_point(){
    	
    	var point_rate = "100";
    	var point_send_limit = "1";
    	 
    	var shop_price = $("#shop_price").val();
		//可赠送积分    			
		var send_point = shop_price * point_rate * point_send_limit / 100;
		return send_point;
    }
    
    function get_store_category(id,next,select_id){
        var url = '/index.php?m=Home&c=api&a=get_store_category';
        var store_id = "1";
        $.ajax({
            type : "GET",
            url : url,
            data:{'store_id':store_id,'parent_id':id},
            error: function(request) {
                layer.alert("服务器繁忙, 请联系管理员!",{icon:2});
                return;
            },
            success: function(v) {
                v = "<option value='0'>请选择商品分类</option>" + v;
                $('#'+next).empty().html(v);
                (select_id > 0) && $('#'+next).val(select_id);//默认选中
            }
        });
    }

    // 属性输入框的加减事件
    function addAttr(a)
    {
        var attr = $(a).parent().parent().prop("outerHTML");
        attr = attr.replace('addAttr','delAttr').replace('+','-');
        $(a).parent().parent().after(attr);
    }
    // 属性输入框的加减事件
    function delAttr(a)
    {
        $(a).parent().parent().remove();
    }
    function choosebox(o){
        var vt = $(o).is(':checked');
        if(vt){
            $('input[type=checkbox]').prop('checked',vt);
        }else{
            $('input[type=checkbox]').removeAttr('checked');
        }
    }
    $(document).ready(function(){
        $(":checkbox[cka]").click(function(){
            var $cks = $(":checkbox[ck='"+$(this).attr("cka")+"']");
            if($(this).is(':checked')){
                $cks.each(function(){$(this).prop("checked",true);});
            }else{
                $cks.each(function(){$(this).removeAttr('checked');});
            }
        });
    });
    
    
    var is_virtual = 1;
    
    /* 虚拟控制 // 虚拟商品有效期 */
    if(is_virtual == '1'){	//虚拟商品属性
    	$('#virtual_indate').layDate();
        $('[name="is_virtual"]').change(function(){
            if ($('#is_virtual_1').prop("checked")) {
                $('[nctype="virtual_valid"]').show();
                $('[nctype="virtual_null"]').hide();
                $('.goods_shipping').hide();
            } else {
                $('[nctype="virtual_valid"]').hide();
                $('[nctype="virtual_null"]').show();
                $('.goods_shipping').show();
                $('#virtual_limit').val(1);
            }
        });
    }

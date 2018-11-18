$(document).ready(function () {
    function Page(){
        this.createItem = function(){
            var $item =$('<div class="row partment-item"></div>');
            $item.append('<div class="center nav-left"><span class="partment circle"></span></div>')
            $item.append('<div class="detail"><div>部门介绍</div><p></p></div>');
            return $item;
        }
        
    }
    /**
     * 获取从服务器传来的数据
     * 并将数据展现在page-home 页面中
     * #department select 加载部门信息 
     */
    (function () {
        var $parents = $('#partment select');
        $.ajax({
            type: "GET",
            url: "https://www.easy-mock.com/mock/5a32721f9cab610f1539e1d2/example/mock",
            dataType: "json",
            success: function (res) {
                console.log(res);
                //resLen 表示接受数据的长度
                //itemsLen 表示拥有的partment_div数量，初始化itemsLen有4个
                //若itemsLen数量小于resLen,增加itemsLen的数量
                var resLen = res.data.length;
                var itemsLen = 4;
                // if(itemsLen<resLen){
                   for(var i=0;i<Math.ceil((resLen-itemsLen)/2);i++){
                        addItems();    
                   } 
                // }
                //初始化select选择框，和部门信息
                var items = $('.partments-list .partment-item');        
                for(var i=0;i<resLen;i++){
                    var name  = res.data[i].name;
                    var detail  = res.data[i].detail;
                    var $option = $('<option></option>').text(name);
                    $parents.append($option);
                    $(items[i]).find('.detail p').text(detail);
                    $(items[i]).find('span').text(name)   
                }
            }
        })
    })();



    //点击 #cog-apartment_btn 按钮，在管理部门信息与返回主页面中切换。    
    $("#cog_apartment_btn").click(function () {
        switchPage();
    })


    //在主页面和修改页面中切换
    function switchPage() {
        if ($(".content").css('display') == "block") {
            $(".content").hide();
            $(".cog_apartment").show();
        } else if ($(".content").css('display') == "none") {
            $(".content").show();
            $(".cog_apartment").hide();
        }
    }


    //增加一行items_div
    function addItems(){
        var page = new Page();
        $('#col_1').append(page.createItem());
        $('#col_2').append(page.createItem());
    }

    //点击修改信息
    $('#alter').click(function(){
        $.ajax({
            type: "GET",
            url: "",
            dataType: "json",
            data:{
                name:$('#partment select option').val(),
                detail:$('#introduce textarea').val()
            },
            success : function(jsondata) {
                if(jsondata.success ==true){
                    alert("success");   
                }else{
                    alert("failed");
                    return false;
                }
                },
            error: function (err) {
                alert("提交失败");
            }
        })
    })

})
Array.prototype.remove = function (dx) {//拓展Array remove方法；
    if (isNaN(dx) || dx > this.length) { return false; }
    for (var i = 0, n = 0; i < this.length; i++) {
    if (this[i] != this[dx]) {
    this[n++] = this[i];
    }
    }
    this.length -= 1;
    }
    
    
$(document).ready(function() {

    // 给三个一级菜单添加点击隐藏子菜单事件
    $('.list ').each(function() {
        $(this).click(function() {
            //指示符的转换
            var $span = $(this).find('.float-right');
            $span.toggleClass('glyphicon-chevron-left');
            $span.toggleClass('glyphicon-chevron-down');
            //子菜单隐藏和出现的转换
            var $ul = $(this).find('ul');
            var show = $ul.css('display');
            if (show == 'block') {
                $ul.css('display', 'none');
            } else {
                $ul.css('display', 'block');
            }
            //阻止冒泡事件
            $(this).find('li').each(function() {
                $(this).click(function(event) {
                    event.stopPropagation();
                })
            })

        })
    })


    //点击超链接  lframe 跳到对应网页
    // 点击每一个li标签在右边page-tabs 生成一个导航标签,items 用与存储导航标签
    var items = [];
    $('.nav-items a').each(function(){
        //给其父节点设置src;
        $(this).click(function(){
            //iframe 跳转到对应网页
            // var url = $(this).attr('url');
            // $('iframe').attr('src',url);
            var url = iframeChangeUrl($(this));

            var $parent = $(this).parent();
            $parent.click(function(e) {
                var text = $(this).find('a').html();
                if (items.indexOf(text) == -1) {
                    items.push(text);
                    var $dom = $("<li><a href=\"#\""+"URL="+url+">" + text + "<span class=\"glyphicon glyphicon-remove\"></span>" + "</a></li>");
                    $('.page-tabs ul').append($dom);
                }
                e.stopPropagation();
    
            })
        })
    })

    //点击page-tabs的关闭按钮关闭对应page-tabs
    //并跳转到相应的page-tabs
    $('.page-tabs').on("click",".glyphicon-remove",function(e){
        var $a = $(this).parent();
        var $li = $a.parent();
        var text = $a.html();
        //删除items中对应的元素,并设置新页面
        //index表示删除页面在items中的位置
        var index = strIndex(text,items);
        items.remove(index);
        if(items.length==0){
            //如果page-tabs 为空，展示首页
            $(".homePage").click();
        }else if(index<items.length){
            //若page-tabs不为空且删除的不是最后一个，跳转到被删除页面的下一个页面
            var $a = $li.next().find('a');
            iframeChangeUrl($a);
        }else{
            //删除的是page-tabs中的最后一个元素
            var $a = $li.prev().find('a');
            iframeChangeUrl($a);
        }
        $li.remove();//dom中删除对应li元素
        e.stopPropagation();
    })

    //点击page-tabs中的元素 跳到对应iframe。
    $('.page-tabs').on("click",'li a',function(){
        iframeChangeUrl($(this));
    })

    //点击首页跳到首页框
    $('.homePage').click(function(){
        // var url =$(this).attr('url');
        // $('iframe').attr('src',url);
        iframeChangeUrl($(this));
    })

    //为iframe更换链接
    function iframeChangeUrl($aDom){
        var url = $aDom.attr('url');
        $('iframe').attr('src',url);
        return url;
    }

    //寻找str S 在数组Array中的位置
    function strIndex(str,Array){
        for(var i =0;i<Array.length;i++){
            if(str.indexOf(Array[i])>-1) return i
        }
        return -1;
    }

    //changeActive：在page-tabs中某个li被点击时，增加.active，其余li失去active属性 
    function changeActive(pageTab,index){

    }
})
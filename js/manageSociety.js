$(document).ready(function(){
    /**
     * 查看/隐藏信息
     */
    $('#checkMessage').click(function(){
        if($('.partmentMessage').css('display')=='block'){
            $('.partmentMessage').hide();
        }else if($('.partmentMessage').css('display')=='none'){
            $('.partmentMessage').show();
        }
    })

    $('#addPartment').click(function(){
        addtrDom()
    })

    function addtrDom(){
        var parent = $('.partmentMessage tbody');
        var tdDom = $('<td>' + 
            '<tr>'+
        '</td>')
    }

    $('.content div input').each(function(){
        $(this).focus(function(){
            console.log($(this));
            $(this).removeAttr('readonly');
        })

    })
})
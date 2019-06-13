/****************************************************************
 *																*		
 * 						      代码库							*
 *                        www.dmaku.com							*
 *       		  努力创建完善、持续更新插件以及模板			*
 * 																*
****************************************************************/

var flag = true;
$('.navs').click(function(){
    if(flag){
        flag = false;
        $('.navs span').eq(0).addClass('active');
        $('.navs span').eq(2).addClass('active');
        $('.navs span').eq(1).hide();
        $('.ul').slideDown();
    }else{
        flag = true;
        $('.navs span').eq(0).removeClass('active');
        $('.navs span').eq(2).removeClass('active');
        $('.navs span').eq(1).show();          
        $('.ul').slideUp();
    }
});
var arrLocation = window.location.href.split('/');
var activeName = '';
activeName = arrLocation[arrLocation.length - 1];
if(activeName == "about.html" || activeName == "contact.html"){}else{ activeName = arrLocation[arrLocation.length - 2]; }
switch(activeName){
    case 'product': 
        for(var i = 0; i<$('.ul li').length; i++){ if($('.ul li').eq(i).attr("name") == 'product'){ $('.ul li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
    case 'case':
        for(var i = 0; i<$('.ul li').length; i++){ if($('.ul li').eq(i).attr("name") == 'case'){ $('.ul li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
    case 'news':
        for(var i = 0; i<$('.ul li').length; i++){ if($('.ul li').eq(i).attr("name") == 'news'){ $('.ul li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
    case 'jobs':
        for(var i = 0; i<$('.ul li').length; i++){ if($('.ul li').eq(i).attr("name") == 'jobs'){ $('.ul li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
    case 'about.html':
        for(var i = 0; i<$('.ul li').length; i++){ if($('.ul li').eq(i).attr("name") == 'about.html'){ $('.ul li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
    case 'contact.html':
        for(var i = 0; i<$('.ul li').length; i++){ if($('.ul li').eq(i).attr("name") == 'contact.html'){ $('.ul li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
    default: 
        $('.ul li').eq(0).addClass('active').siblings('li').removeClass('active'); break;
}






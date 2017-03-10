/**
 * Created by iamwe on 2017/3/9.
 */
var winWidth = 0,winHeight = 0;
function changebleWidthHeight() {
    if (window.innerWidth)
        winWidth = window.innerWidth;
    else if ((document.body) && (document.body.clientWidth))
        winWidth = document.body.clientWidth;
//获取窗口高度
    if (window.innerHeight)
        winHeight = window.innerHeight;
    else if ((document.body) && (document.body.clientHeight))
        winHeight = document.body.clientHeight;
//通过深入Document内部对body进行检测，获取窗口大小
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth)
    {
        winHeight = document.documentElement.clientHeight;
        winWidth = document.documentElement.clientWidth;
    }
    document.getElementById("content").style.width = winWidth - 100;
    document.getElementById("content").style.height = winHeight - 80;
    document.getElementById("aside").style.height = winHeight - 80;
}
window.onresize = changebleWidthHeight();
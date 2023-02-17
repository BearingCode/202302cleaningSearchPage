window.onload=function(){
// document.querySelector返回文档中指定选择器匹配的对象，参数包含要匹配选择器的DOM字符串

searchBtn = document.querySelector('.search-btn')
//  document.createElement创建一个指定的HTML元素（可选）
 var style1 = document.createElement('style')
 var searchBox = document.querySelector('.search-box')
 var timeBox = document.querySelector('.timeBox')
// 将指定的监听器注册到searchBtn上，当focus触发事件，指定的回调函数会执行
 searchBtn.addEventListener('focus', function () {
// 先定义伪类::before创建一个伪元素，成为匹配选中的元素的第一个子元素，后content{包含修饰性样式，transform为二维放缩}，此元素默认为行内元素
     style1.innerHTML = "body::before{ filter: blur(20px); transform: scale(1.01);}";
// 将一个节点附加到指定父节点的子节点列表中
     document.head.appendChild(style1);
// 搜索框样式，调用style方法
     searchBox.style.width = '440px'
 })
// 监听器注册，当元素失去焦点，即blur事件被触发
 searchBtn.addEventListener('blur', function () {
// 从DOM中删除子节点
     document.head.removeChild(style1);
// 搜索框恢复初始样式
     searchBox.style.width = ""
 })
// 重复调用（执行）一个代码片段，每次调用具有固定时间间隔
 setInterval(function () {
     var date = new Date()
     let hh = padZero(date.getHours())
     let mm =padZero( date.getMinutes())
     let ss = padZero(date.getSeconds())
     timeBox.innerText = hh + ':' + mm + ':' + ss
 }, 1000)
// 循环表示进位
 function padZero(n) {
     return n > 9 ? n : '0' + n
 }
}
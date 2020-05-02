
//写一个判断函数

function ScreenWidth() {      //获取屏幕尺寸，判断PC端或移动端

    if (/phone|pad|pod|iPhone|iPod|ios|iPad|Android|Fennec|BlackBerry|Mobile|IEMobile|MQQBrowser|JUC|Fennec|WosBrowser|BrowserNG|WebOS|Symbian|Windows Phone/i.test(navigator.userAgent)) {

//如果是移动端，则跳转到移动端对应的页面；否则，跳转到PC端对应的页面

          window.location.href = 'Internet.html';
      } 
      }
  }
//第一种方式，通过点击屏幕的方式，调用函数，进行页面跳转
  document.body.onclick = function() {
      ScreenWidth()
  }
//第二种方式，等待页面加载完成，调用函数，进行自动跳转（但是在网速较慢的情况下，可能动画或者内容还没加载完成，就自动跳转咯）

window.οnlοad=function(){
      ScreenWidth()
  }


$(document).ready(function() {
  //为重置按钮设置响应事件
  $('#reset').click(function() {
    $('*').removeAttr('style') //去除所有元素的style属性
    $('div[class=none]').css('display', 'none') //将类名为none的div隐藏
  })
  //为input下的所有按钮设置响应事件。当重置页面的复选框被选上时，按下一个按钮就会执行上面的函数，即重置页面
  $('input[type=button]').click(function() {
    if ($('#isreset').is(':checked')) {
      $('#reset').click()
    }
  })
  function animateIt() {
    $('#move').slideToggle('slow', animateIt)
  }
  animateIt()
})

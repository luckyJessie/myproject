// 实现原理： 在窗体加载时截取整个屏幕保存为图片，在监视鼠标的事件，鼠标左键拖拉一个矩形框，获取此时
// 矩形框的左上角坐标和右下角坐标， 这2个坐标即可为要抠取的图片定位，然后使用Clone方法截取指定图片，
// 并且将该图片复制到粘贴板就OK了。 设置一个窗体，加载时将窗体边框设置为FormBorderStyle.None，并且将
// 窗体最大化，且不再任务栏显示图标，设置不透明程度 自定义（默认值为1.0），并且在此时截取整个图片。
// 然后监视鼠标按下的事件：在该事件中获取起始点的坐标，
// 再监视鼠标按键放开的事件， 在该事件中获取鼠标放开的坐标，并在此时从最初截取的图片中抠取刚才2个坐
// 标组成的矩形框范围图片，并保存到粘贴板中即可。
// 在监视鼠标的移动事件，在该事件中动态获取高和宽，并用当前屏幕的画板使用指定画刷来填充鼠标拖拉的矩
// 形范围框。使得用户可以看到自己的截取范围。






-- 引入外部模块
require("01")
-- 向屏幕输出一段文字
io.write("what is your name:")
-- 从控制台读取一段字符串
name = io.read()
-- 向屏幕输出一段文字
print(name)
-- 引入了01.lua文件中的testFunc方法。
module.testFunc(1);

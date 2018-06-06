-- lua中的数组 也叫table
array = {"qiusz","qiu"};
-- lua中获取数组长度或者字符串长度。在变量之前加#符号即可
print('array的长度为',#array)
-- for循环的使用
-- for i=1,2 do
--   print(i,array[i])
-- end
-- print("hello")
-- local index = 1
-- while 循环的使用
-- while(index < 10)
-- do
--   print(index)
--   index = index+1;
-- end

-- 可以定义并导出一个表，给其他的lua文件使用。
module = {}

function module.testFunc(name)
  print(name)
end

return module


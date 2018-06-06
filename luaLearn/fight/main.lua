require("fight/world")


local world = World:new();
print("世界生成ing")
print(world:getName());
world:joinRobot("邱上哲");
world:joinRobot("超级战甲");
world:joinRobot("斗士");

local function key(k)
  if (k == "1") then
    world:robotAllSpeak();
  elseif (k == "2") then
    world:fight();
  elseif (k == "3") then
    return true;
  else
    print("输入值无效");
  end
end

print("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
world:robotAllSpeak();
print("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
while true do
  -- io.write("what is your code:");
  -- local code = io.read();
  -- if key(code) then break end
  world:beginToFight();
  if(world:isGameOver()) then
    print("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"); 
    print("游戏结束 胜利者为");
    world:robotAllSpeak();
    print("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"); 
    break;
  end
end

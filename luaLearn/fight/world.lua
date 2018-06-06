require("fight/robot")
World = {
  name = "world",
  robotList = {}
};

World.__index = World;

function World:new(name)
  local o = {};
  setmetatable(o, self);
  o.name = name;
  return o;
end

function World:getName()
  return self.name;
end

function World:joinRobot(name)
  os.execute("sleep 2");
  local robot = Robot:new(name);
  table.insert(self.robotList,robot);
end

function World:robotAllSpeak()
  for i=1,#self.robotList do
    local name = self.robotList[i]:getName();
    local blood = self.robotList[i]:getBlood();
    local attack = self.robotList[i]:getAttack();
    print("选手名：",name,"当前的血量是",blood,"攻击力是",attack);
  end
end

function World:fight()
  local attackIndex = math.random(1,#self.robotList);
  local defenceIndex = attackIndex;
  while (defenceIndex == attackIndex) do 
    defenceIndex = math.random(1,#self.robotList);
  end
  local attackRobot = self.robotList[attackIndex];
  local defenceRobot = self.robotList[defenceIndex];
  print("选手",attackRobot:getName(),"向选手",defenceRobot:getName(),"发动攻击造成伤害",attackRobot:getAttack(),"点");
  local nowBlood = defenceRobot:getBlood() - attackRobot:getAttack();
  if nowBlood<=0 then 
    print("--------------------------")
    print(defenceRobot:getName(),"死亡");
    print("--------------------------")
    for i=0,#self.robotList do
      if (defenceRobot == self.robotList[i]) then
        table.remove(self.robotList,i);
      end
    end
  end
  defenceRobot:setBlood(nowBlood);
end

function World:isGameOver()
  return #self.robotList == 1;
end

function World:beginToFight()
  math.randomseed(tostring(os.time()):reverse():sub(1, 6));
  self:fight();
  os.execute("sleep 1");
end
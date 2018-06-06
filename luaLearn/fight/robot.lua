Robot = {
  name = "robot",
  blood = 20,
  attack = 1;
}

Robot.__index = Robot;

function Robot:new(name)
  local o = {};
  setmetatable(o, self);
  math.randomseed(tostring(os.time()):reverse():sub(1, 6));
  o.name = name;
  o.blood = math.random( 10,30 )
  o.attack = math.random( 1,10 );
  return o;
end

function Robot:getName()
  return self.name;
end

function Robot:getBlood()
  return self.blood;
end

function Robot:setBlood(blood)
  self.blood = blood;
end

function Robot:getAttack()
  return self.attack;
end




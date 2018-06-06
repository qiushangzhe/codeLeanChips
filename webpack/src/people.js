function people(name,age){
  this.name = name ;
  this.age = age;
}

people.prototype.SayHello = function () {
  console.log('大家好我是:'+this.name);
};

module.exports = people;

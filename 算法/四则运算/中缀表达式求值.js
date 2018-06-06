// javascript 中使用 push和pop模拟 栈 数据结构
var stack_op = [];
var stack_num = [];

var input_string = '5+2*2-(9+1)*3';

// 计算函数
function calc(){
  //1. 取出num栈的顶部作为第二个计算数
  var calc_num_2 = stack_num.pop() * 1;
  //2. 取出op栈的顶部作为运算符
  var calc_op = stack_op.pop();
  //3. 取出num栈的顶部作为第一个计算数
  var calc_num_1 = stack_num.pop() * 1;
  switch (calc_op) {
    case '+': stack_num.push(calc_num_1 + calc_num_2); break;
    case '-': stack_num.push(calc_num_1 - calc_num_2); break;
    case '*': stack_num.push(calc_num_1 * calc_num_2); break;
    case '/': stack_num.push(calc_num_1 / calc_num_2); break;
    default: return null;
  }
}

// 分析表达式
function analyse(){
  stack_op.length = 0;
  stack_num.length = 0;
  for(var i = 0 ; i<input_string.length ; i++){
    var char = input_string[i];
    switch (char) {
      case '+':
      case '-':
        while(stack_op.length != 0 && stack_op[stack_op.length-1] != '('){
          calc();
        }
        stack_op.push(char);
        break;
      case '*':
      case '/':
        if(stack_op.length != 0 && stack_op[stack_op.length-1] == '*' || stack_op[stack_op.length-1] == '/'){
          calc();
        }
        stack_op.push(char);
        break;
      case '(':
        stack_op.push(char);
        break;
      case ')':
        while(stack_op[stack_op.length-1]!='('){
            calc();
        }
        stack_op.pop();
        break;
      default:
        stack_num.push(char);
        break;
    }
  }
  while(stack_op.length){
    calc();
  }
}

analyse();
console.log(stack_num);
console.log(eval(input_string));

// 判断是否为 运算符
function isOperator(value){
	var operatorString = "+-*/()";
	return operatorString.indexOf(value) > -1
}

// 判断运算符优先级
function getPrioraty(value){
	switch(value){
		case '+':
		case '-':
			return 1;
		case '*':
		case '/':
			return 2;
		default:
			return 0;
	}
}

// 判断是否 参数1 优先级 小于等于 参数2
function prioraty(o1, o2){
	return getPrioraty(o1) <= getPrioraty(o2);
}


function dal2Rpn(exp){
  // 输入队列
	var inputStack = [];
  // 输出栈
	var outputStack = [];
  // 输出队列
	var outputQueue = [];

  // 把输入的四则运算表达式变成单个符号 放入输入队列中
	for(var i = 0, len = exp.length; i < len; i++){
		var cur = exp[i];
		if(cur != ' ' ){
			inputStack.push(cur);
		}
	}

	console.log('step one');
	while(inputStack.length > 0){
    // 输入队列弹出一个记号
		var cur = inputStack.shift();
    // 判断 如果是符号的话
		if(isOperator(cur)){
			if(cur == '('){
        // 如果是左括号 入栈
				outputStack.push(cur);
			}else if(cur == ')'){
        // 如果是右括号 栈中不断的弹出操作符 并加入输出队列
				var po = outputStack.pop();
        // 如果不是左括号并且 栈中还有东西
				while(po != '(' && outputStack.length > 0){
					outputQueue.push(po);
					po = outputStack.pop();
				}
        // 如果没有发现左括号，说明原来的表达式中括号不对称，有错误。
				if(po != '('){
					throw "error: unmatched ()";
				}
			}else{
        // 如果不是括号 那么就是一个操作符 则比较它与输出堆栈中栈顶的操作符 如果优先级小于或等于栈顶的操作符，
        // 那么将栈顶的操作符弹出并加入输出队列（循环，直到上述条件不满足），最后将本次的操作符压入堆栈。
				while(prioraty(cur, outputStack[outputStack.length - 1]) && outputStack.length > 0){
					outputQueue.push(outputStack.pop());
				}
				outputStack.push(cur);
			}
		}else{
			outputQueue.push(new Number(cur));
		}
	}

	console.log('step two');
	if(outputStack.length > 0){
		if(outputStack[outputStack.length - 1] == ')' || outputStack[outputStack.length - 1] == '('){
			throw "error: unmatched ()";
		}
		while(outputStack.length > 0){
			outputQueue.push(outputStack.pop());
		}
	}
	console.log('step three');
	return outputQueue;

}


console.log(dal2Rpn('3*2+5/(3+11)'));

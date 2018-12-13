var counter = (function(){
	var _number;
	var _checkPositive = function(x){
		if (x < 0 ) {
			return false;
		} else {
			return true;
		}
	}
	var setNumber = function(x){
		if ( _checkPositive(x) ){
			_number = x;
		} else {
			console.log('Wrong number');
		}
	}

	var increaseCounter = function(){
		_number++;
	}

	var decreaseCounter = function(){
		_number--;
	}

	var printCounter = function(){
		console.log(_number);
	}
	return {
		setNumber,
		increaseCounter,
		decreaseCounter,
		printCounter
	}
}())

counter.setNumber(17);
counter.increaseCounter();
counter.increaseCounter();
counter.increaseCounter();
counter.increaseCounter();
counter.decreaseCounter();
counter.printCounter();

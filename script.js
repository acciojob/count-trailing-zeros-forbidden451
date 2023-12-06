function trailingZeros(n) {
  //your JS code here. If required.
	num = 1;
	while(n > 0){
		num *= n;
		n-=1;
	}
	var count = 0;
	while( num % 10 == 0){
		count += 1;
		num /= 10;
	}
	return count;
}

const input = prompt("Enter a number");
alert(trailingZeros(input));

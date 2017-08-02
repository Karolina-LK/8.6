var a = 1,
    b = 2,
    value = (a*a)+(2*a*b)-(b*b);


console.log('The value of the task is ' +value)



if (value>0) {
	console.log ('Wynik dodatni')
}  else if (value<0) {
	console.log('Wynik ujemny')
}  	else {
	console.log('Wynik równa się zero')
}
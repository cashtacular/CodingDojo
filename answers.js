
<!DOCTYPEHTML>
<html>
<head></head>
<body></body>
	<script type="text/javascript">
//setting and swapping
var myName= 'Cash';

var myNumber= 42;

var temp=myName;

myName=myNumber;

myNumber=temp;
console.log(myName,myNumber);


//print and count
var log=0;
for(var i=512; i<4097; i++){
	if(i%5===0){
		console.log(i);
		log+=1; 

	}

}
console.log(log);

//print -52 to 1066
for(var i=-52; i<1067; i++){
			console.log(i);
		}

//multiples of 6
var num=6;
		while(num<60001){
			if(num%6===0){
				console.log(num);
				num=num+6;
				
			}
		}

//dont worry be happy
function beCheerful(){
		var msg="good morning!";
		for(var i=0; i<98; i++){
			console.log(msg);
		}

	}

beCheerful();

//counting the dojo way
var num=6;
		while(num<60001){
			if(num%6===0){
				console.log(num);
				num=num+6;
				
			}
		}

//multiples of 3
for(i=-300;i<0;i++){
			if(i!=-3 && i!=-6){
				
				console.log(i);

			}
		}

//what do you know
var x ="incoming"
		function onItsWay(i){
			console.log(i);
		}
		onItsWay(x);
//integers using while
 var num=2000;
		 while(num<5281){
		 	console.log(num);
		 num++;
		 }
		 
//thats huge
	var sum=0;
		for(var i=-300000; i<300001; i++){
			if(i%2 ===0){
				sum+=i;
			}
			
		}
console.log(sum);

//its your bday
var birthMonth = 4;
var birthDay = 17;

function bday(month, day)
{
	if((month==birthMonth && day==birthDay)||(month==birthDay && day==birthMonth))
	{
		console.log("how did you know?");
	}
	else
	{
		console.log("another day");
	}
}

bday(4,17);

//


</script>

</html>


//

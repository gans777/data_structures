
	function open_brackets_in_code(bracket){

		var open =['{', '[', '('];
		 var ind = 'no';
		 open.some(function(value, index) {
		 if (value == bracket) { 
    console.log('скобка = '+ value);
           ind = index;
     return 
    };  
     
});
		 return ind
	} //end open_brackets_in_code

	function close_brackets_in_code(bracket){
		var close =['}',']',')'];
		var ind = 'no';
		 close.some(function(value, index) {
         if (value == bracket) { 
    console.log('скобка = '+ value);
                ind = index;
     return
                 }  
		});
    return ind
	}
	
function breackets_in_code (str) {
	var steck=[];
	var mess="Success";

	for (var i = 0; i < str.length; i++) {
		 var ind_break = open_brackets_in_code(str[i]);
      if (ind_break != 'no') {
           steck.push(ind_break);
      } else {  
         var ind = close_brackets_in_code(str[i]);
         var open_bracket = steck.pop();
         if (open_bracket != ind) {
         	mess =i++;
         	break;

         }
       }
		 
	}//end цикла



	if ((mess=='Success')&&((steck.length!=0))) {
		
		mess= steck.length;
	}

return mess;
}//end func
		
//var str="(([]";
var str="([](){([])})";
//var str ="()[]}";
//var str="{{[()]]";
 console.log(breackets_in_code (str));


			
	
	



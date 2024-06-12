var isValid = function(s) {

    const pairs = {
        '{' : '}','[' : ']', '(' : ')'
    }

//check if its even
if(s % 2 === 2)return false

//check if first element is an opening brace
if(s[0] == '}' || s[0] == ']' ||s[0] == ')' )return false

//check if the last element is a closing brace
if(s[s.length-1] =='{' ||s[s.length-1] =='(' ||s[s.length-1] =='[' )return false

  
    let stack = []
   
   /*iterate over the string to determine if all opening parenthesis have closing parenthesis*/
   for(let i = 0; i < s.length; i++){
    
    //when the first element is an opener add it to the stack
       if(s[i] == '{' || s[i] == '(' ||s[i] == '[' ){
            stack.push(s[i])}
              else if(pairs[stack.pop()] !== s[i]){
                return false}

   }

    return stack.length === 0
    
};
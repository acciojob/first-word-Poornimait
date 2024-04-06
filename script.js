function firstWord(s) {
  // your code here
	let scount=0;
	let res='';
	for(let i=0;i<s.length();i++){
		if(scount<1){
			if(s[i]!==' '){
				res=res+s[i];
			}
			else if(s[i]===''){
				scount++;
				
			}
		}
		else if{
			return res;
		}
	}
}

// Do not change the code below

//const s = prompt("Enter String:");
alert(firstWord(s));

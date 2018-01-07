function myfunction(){
	var c=document.getElementById("myinput").value;
	var text;
			
	if (c>181) {
		document.getElementById("cr").innerHTML = "Benefits will be announced later. :)";
	}
	else if (c<=180 && c>=80) {
		document.getElementById("cr").innerHTML = "SGD 0.5 per 15 minutes. Not bad...";
	}
			
			
	else if (c>=60 && c<=79) {
		document.getElementById("cr").innerHTML = "SGD 5 per 15 minutes. Try harder!"
	}
			 
	else if (c<60){
		document.getElementById("cr").innerHTML = "SGD 5 per 15 minutes. Please do better!!"
	}

	document.getElementById("c").innerHTML = text;
	}
		
		
		
		
function calculate(){		
		
	var v8=document.getElementById('va2').value;
	var v9=document.getElementById('va3').value;
	var v10=document.getElementById('va4').value;
	var v11=document.getElementById('va5').value;
			
	if (v8!=''|| v9!=''|| v10!=''|| v11!=''){			
		document.getElementById("come").innerHTML = '0';
	}



	else if (v8=='' && v9=='' && v10=='' && v11==''){
		n= -20;
		n1= 1;
		n2= 2;
		n3= 3;				
					
		var v=document.getElementById('va').value;
		var nums=0;
		if (v!=''){					
			nums=parseInt(v)*parseInt(n);
		}
				

		var v1=document.getElementById('va1').value;
		var nums1=0;
		if (v1!=''){					
			nums1=parseInt(v1)*parseInt(n);
		}
				
				
		var v2=document.getElementById('va6').value;
		var nums2=0;
		if (v2!=''){					
			nums2=parseInt(v2)*parseInt(n1);
		}
				
				
		var v3=document.getElementById('va7').value;
		var nums3=0;
		if (v3!=''){					
			nums3=parseInt(v3)*parseInt(n2);
		}
				
				
		var v4=document.getElementById('va8').value;
		var nums4=0;
		if (v4!=''){					
			nums4=parseInt(v4)*parseInt(n3);
		}
				
				
		var v5=document.getElementById('va9').value;
		var nums5=0;
		if (v5!=''){					
			nums5=parseInt(v5)*parseInt(n2);
		}
				
				
		var v6=document.getElementById('va10').value;
		var nums6=0;
		if (v6!=''){					
			nums6=parseInt(v6)*parseInt(n2);
		}
				
				
		var v7=document.getElementById('va11').value;
		var nums7=0;
		if (v7!=''){
			nums7=parseInt(v7)*parseInt(n2);
		}
				
				
		var totalnums=100+parseInt(nums)+parseInt(nums1)+parseInt(nums2)+parseInt(nums3)+parseInt(nums4)+parseInt(nums5)+parseInt(nums6)+parseInt(nums7);			
			
		document.getElementById("come").innerHTML = totalnums;
			
	}
}	

function resizeText(multiplier) {
	var elem = document.getElementById("everything");
	var currentSize = elem.style.fontSize || 16;
	elem.style.fontSize = ( parseFloat(currentSize) + (multiplier * 0.2)) + "px";
}
		
function sizenormal(){
	document.getElementById('everything').style.fontSize = "16px";
}




/*
function resizeText(multiplier) {
	var elem = document.getElementById("everything");
	var currentSize = elem.style.fontSize || 14;
	elem.style.fontSize = ( parseFloat(currentSize) + (multiplier * 0.2)) + "px";
}
		
function sizenormal(){
	document.getElementById('everything').style.fontSize = "14px";
}

		
function language(){
	if (document.getElementById('lan').value=='1'){
		window.location.href='obike1.html';
	}
	
	else if (document.getElementById('lan').value=='2'){
		window.location.href='obike1chinese.html';
	}
	
	else if (document.getElementById('lan').value=='3'){
		window.location.href='obikemalay.html';
	}
	
	else if (document.getElementById('lan').value=='1'){
		window.location.href='obiketamil.html';
	}
	
}	
	
*/

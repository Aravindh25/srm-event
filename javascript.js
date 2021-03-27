var row=1,bool;var n=1;var x1=[],y1=[],z1=[];
function out(event)
{   
    event.preventDefault();
	var x=document.getElementById("x").value;
	var y=document.getElementById("y").value;
	var z=document.getElementById("z").value;
		
	 if(y==""||z=="")
		 {
			 alert("All Details must be filled");
			 return false;
	 }
	 else if(x.length<3){
		 alert("Name should atlest have 3 characters");
		 return false;
	 }
	 
	if(n==1)
{ 
	 var display = document.getElementById("disp");
    var newRow =display.insertRow(row);
    var cell0=newRow.insertCell(0);
	var cell1=newRow.insertCell(1);
     var cell2=newRow.insertCell(2);
      var cell3=newRow.insertCell(3);
      cell0.innerHTML=row;
	  cell1.innerHTML=x;
       cell2.innerHTML=y;
        cell3.innerHTML=z;
		
			
			x1[n-1]=x;
    y1[n-1]=y;
    z1[n-1]=z;  
    n++;
         		
		
}
else {
	for(var i=0;i<(n-1);i++)
	 {
		 if(y==y1[i]||z==z1[i])
		 {
			 bool=true;
			break; 
		 }
		 else
		 {
			 bool=false;
		 }
	 }
	 if(bool)
	 {	 
	alert("Data already found");
	return false;
	 }
    else
    {   row++; 
	    var display = document.getElementById("disp");
        var newRow =display.insertRow(row);
        var cell0=newRow.insertCell(0);
	    var cell1=newRow.insertCell(1);
        var cell2=newRow.insertCell(2);
        var cell3=newRow.insertCell(3);
        cell0.innerHTML=row;
	    cell1.innerHTML=x;
        cell2.innerHTML=y;
        cell3.innerHTML=z;
		
		
 x1[n-1]=x;
    y1[n-1]=y;
    z1[n-1]=z;  
	n++;	
}

}
   
        
}
function remove(event)
{
	if(n==1)
	{
		alert("No Data Found!");
		return false;
	}
	else
	{
	event.preventDefault();
	document.getElementById("disp").deleteRow(row);
	x1.pop();
	y1.pop();
	z1.pop();
	--n;
	row--;
	if(row==0)
	{
		row=1;
	}
	}
}
var Calendar = [];

Calendar.NonDisplay=function($Table){
	$Table.style.display = "none";
}

Calendar.IsLeapYear = function(chkVal){
	if( (chkVal%4)==0 && (chkVal%100) !=0 ){
		return	true;
	}else if((chkVal%400)==0){
		return	true;
	
	}else{
		return false;
	} 
}
Calendar.WriteTableHeader =function ()
{
	document.write("<table id=\'test-calender\' border=\'1\'>");
}

Calendar.WriteTableFooter =function (){
	document.write("</table>");                               
}
Calendar.WriteHeader = function (myYear, myMonth){
   document.write("<tr>");
   document.write("<td colspan='7' bgcolor='#7fffd4'>");  
   document.write("<strong>",myYear, "年", (myMonth+1), "月 Calender</strong>");
   document.write("</td>");
   document.write("</tr>");

}
Calendar.WriteDay = function (myWeekTbl){
	document.write("<tr>");                                    
	for(i=0; i<7; i++){                                        
	   document.write("<td align='center' ");
	   if(i==0)document.write("bgcolor='#fa8072'>");           
	   else    document.write("bgcolor='#ffebcd'>");           
	   document.write("<strong>",myWeekTbl[i],"</strong>");    
	   document.write("</td>");
	}
	document.write("</tr>");


}

Calendar.WriteDate = function (myTblLine, myTable){
	for(i=0; i<myTblLine; i++){                               
   document.write("<tr>");                                 
   for(j=0; j<7; j++){                                     
      document.write("<td align='center' ");               
      myDat = myTable[j+(i*7)];                            
      if (myDat==Calendar.myToday)document.write("bgcolor='#00ffff'>");
      else if(j==0)      document.write("bgcolor='#ffb6c1'>");
      else               document.write("bgcolor='#ffffe0'>");
      document.write("<strong>",myDat,"</strong>");        
      document.write("</td>");                             
   }
   document.write("</tr>");                                
	}

}

Calendar.myWeekTbl = new Array("Sun","Mon","Tue","Wed","Thu","Fri","Sat")
Calendar.myMonthTbl= new Array(31,28,31,30,31,30,31,31,30,31,30,31);
Calendar.myDate    = new Date();
Calendar.myYear = Calendar.myDate.getFullYear();
if (Calendar.IsLeapYear(Calendar.myYear)){
   Calendar.myMonthTbl[1] = 29;  
}


Calendar.myMonth = Calendar.myDate.getMonth();
Calendar.myToday = Calendar.myDate.getDate(); 
Calendar.myDate.setDate(1);          
Calendar.myWeek = Calendar.myDate.getDay();   




Calendar.myTblLine = Math.ceil( ( Calendar.myWeek + Calendar.myMonthTbl[Calendar.myMonth] ) /7 );
Calendar.myTable   = new Array(7*Calendar.myTblLine);

for(i=0; i<7*Calendar.myTblLine; i++) 
{Calendar.myTable[i]="";}

for(i=0; i<Calendar.myMonthTbl[Calendar.myMonth]; i++)
{
	Calendar.myTable[i+Calendar.myWeek]=i+1; 
}


Calendar.WriteTableHeader();
Calendar.WriteHeader(Calendar.myYear,Calendar.myMonth);
Calendar.WriteDay(Calendar.myWeekTbl);
Calendar.WriteDate(Calendar.myTblLine, Calendar.myTable);
Calendar.WriteTableFooter();

var $Calender = document.getElementById('test-calender');

Calendar.NonDisplay( $Calender);

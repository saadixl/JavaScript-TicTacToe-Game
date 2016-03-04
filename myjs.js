// Author: A.M. Masudul Haque

function player00()
{
	
	var x = document.getElementById("box00").innerHTML;
	if(x!="O")
	{
	document.getElementById("box00").innerHTML = "X";
	document.getElementById("box00").style.backgroundColor='red'; 
	}
	saadi();
	check();
}

function player01()
{
	var x = document.getElementById("box01").innerHTML;
	if(x!="O")
	{
	document.getElementById("box01").innerHTML = "X";
	document.getElementById("box01").style.backgroundColor='red'; 
	}
	saadi();
	check();
}


function player02()
{
	var x = document.getElementById("box02").innerHTML;
	if(x!="O")
	{
	document.getElementById("box02").innerHTML = "X";
	document.getElementById("box02").style.backgroundColor='red'; 
	}
	saadi();
	check();
}


function player10()
{
	var x = document.getElementById("box10").innerHTML;
	if(x!="O")
	{
	document.getElementById("box10").innerHTML = "X";
	document.getElementById("box10").style.backgroundColor='red'; 
	}
	saadi();
	check();
}

function player11()
{
	var x = document.getElementById("box11").innerHTML;
	if(x!="O")
	{
	document.getElementById("box11").innerHTML = "X";
	document.getElementById("box11").style.backgroundColor='red'; 
	}
	saadi();
	check();
}

function player12()
{
	var x = document.getElementById("box12").innerHTML;
	if(x!="O")
	{
	document.getElementById("box12").innerHTML = "X";
	document.getElementById("box12").style.backgroundColor='red'; 
	}
	saadi();
	check();
}

function player20()
{
	var x = document.getElementById("box20").innerHTML;
	if(x!="O")
	{
	document.getElementById("box20").innerHTML = "X";
	document.getElementById("box20").style.backgroundColor='red'; 
	}
	saadi();
	check();
}

function player21()
{
	var x = document.getElementById("box21").innerHTML;
	if(x!="O")
	{
	document.getElementById("box21").innerHTML = "X";
	document.getElementById("box21").style.backgroundColor='red'; 
	}
	saadi();
	check();
}

function player22()
{
	var x = document.getElementById("box22").innerHTML;
	if(x!="O")
	{
	document.getElementById("box22").innerHTML = "X";
	document.getElementById("box22").style.backgroundColor='red'; 
	}
	saadi();
	check();
}

function saadi()
{
	var y00 = document.getElementById("box00").innerHTML;
	var y01 = document.getElementById("box01").innerHTML;
	var y02 = document.getElementById("box02").innerHTML;
	var y10 = document.getElementById("box10").innerHTML;
	var y11 = document.getElementById("box11").innerHTML;
	var y12 = document.getElementById("box12").innerHTML;
	var y20 = document.getElementById("box20").innerHTML;
	var y21 = document.getElementById("box21").innerHTML;
	var y22 = document.getElementById("box22").innerHTML;
	check();
	
	// check for win starts 
	// checking row one
	 if(y00==="O" && y01==="O" &&y02==="")
	{
		document.getElementById("box02").innerHTML = "O";
		document.getElementById("box02").style.backgroundColor='silver';
	}
	else if(y00==="O" && y02==="O" &&y01==="")
	{
		document.getElementById("box01").innerHTML = "O";
		document.getElementById("box01").style.backgroundColor='silver';
	}
	else if(y01==="O" && y02==="O" &&y00==="")
	{
		document.getElementById("box00").innerHTML = "O";
		document.getElementById("box00").style.backgroundColor='silver';
	}
	// checking row 2
	else if(y10==="O" && y11==="O" &&y12==="")
	{
		document.getElementById("box12").innerHTML = "O";
		document.getElementById("box12").style.backgroundColor='silver';
	}
	else if(y10==="O" && y12==="O" &&y11==="")
	{
		document.getElementById("box11").innerHTML = "O";
		document.getElementById("box11").style.backgroundColor='silver';
	}
	else if(y11==="O" && y12==="O" &&y10==="")
	{
		document.getElementById("box10").innerHTML = "O";
		document.getElementById("box10").style.backgroundColor='silver';
	}
	// checking row 3
	else if(y20==="O" && y21==="O" &&y22==="")
	{
		document.getElementById("box22").innerHTML = "O";
		document.getElementById("box22").style.backgroundColor='silver';
	}
	else if(y20==="O" && y22==="O" &&y21==="")
	{
		document.getElementById("box21").innerHTML = "O";
		document.getElementById("box21").style.backgroundColor='silver';
	}
	else if(y21==="O" && y22==="O" &&y20==="")
	{
		document.getElementById("box20").innerHTML = "O";
		document.getElementById("box20").style.backgroundColor='silver';
	}
	
	// checking col 1
	else if(y00==="O" && y10==="O" &&y20==="")
	{
		document.getElementById("box20").innerHTML = "O";
		document.getElementById("box20").style.backgroundColor='silver';
	}
	else if(y00==="O" && y20==="O" &&y10==="")
	{
		document.getElementById("box10").innerHTML = "O";
		document.getElementById("box10").style.backgroundColor='silver';
	}
	else if(y10==="O" && y20==="O" &&y00==="")
	{
		document.getElementById("box00").innerHTML = "O";
		document.getElementById("box00").style.backgroundColor='silver';
	}
	// checking col 2
	else if(y01==="O" && y11==="O" &&y21==="")
	{
		document.getElementById("box21").innerHTML = "O";
		document.getElementById("box21").style.backgroundColor='silver';
	}
	else if(y01==="O" && y21==="O" &&y11==="")
	{
		document.getElementById("box11").innerHTML = "O";
		document.getElementById("box11").style.backgroundColor='silver';
	}
	else if(y11==="O" && y21==="O" &&y01==="")
	{
		document.getElementById("box01").innerHTML = "O";
		document.getElementById("box01").style.backgroundColor='silver';
	}
	// checking col 3
	else if(y02==="O" && y12==="O" &&y22==="")
	{
		document.getElementById("box22").innerHTML = "O";
		document.getElementById("box22").style.backgroundColor='silver';
	}
	else if(y02==="O" && y22==="O" &&y12==="")
	{
		document.getElementById("box12").innerHTML = "O";
		document.getElementById("box12").style.backgroundColor='silver';
	}
	else if(y12==="O" && y22==="O" &&y02==="")
	{
		document.getElementById("box02").innerHTML = "O";
		document.getElementById("box02").style.backgroundColor='silver';
	}
	
	// checking digonal 1
	else if(y00==="O" && y11==="O" &&y22==="")
	{
		document.getElementById("box22").innerHTML = "O";
		document.getElementById("box22").style.backgroundColor='silver';
	}
	else if(y00==="O" && y22==="O" &&y11==="")
	{
		document.getElementById("box11").innerHTML = "O";
		document.getElementById("box11").style.backgroundColor='silver';
	}
	else if(y11==="O" && y22==="O" &&y00==="")
	{
		document.getElementById("box00").innerHTML = "O";
		document.getElementById("box00").style.backgroundColor='silver';
	}
	
	// checking digonal 2
	else if(y02==="O" && y11==="O" &&y20==="")
	{
		document.getElementById("box20").innerHTML = "O";
		document.getElementById("box20").style.backgroundColor='silver';
	}
	else if(y02==="O" && y20==="O" &&y11==="")
	{
		document.getElementById("box11").innerHTML = "O";
		document.getElementById("box11").style.backgroundColor='silver';
	}
	else if(y11==="O" && y20==="O" &&y02==="")
	{
		document.getElementById("box02").innerHTML = "O";
		document.getElementById("box02").style.backgroundColor='silver';
	}
	
	
	
		// check for win ends
	// check for prevent loss starts 
	// checking row one
	else if(y00==="X" && y01==="X" &&y02==="")
	{
		document.getElementById("box02").innerHTML = "O";
		document.getElementById("box02").style.backgroundColor='silver';
	}
	else if(y00==="X" && y02==="X" &&y01==="")
	{
		document.getElementById("box01").innerHTML = "O";
		document.getElementById("box01").style.backgroundColor='silver';
	}
	else if(y01==="X" && y02==="X" &&y00==="")
	{
		document.getElementById("box00").innerHTML = "O";
		document.getElementById("box00").style.backgroundColor='silver';
	}
	// checking row 2
	else if(y10==="X" && y11==="X" &&y12==="")
	{
		document.getElementById("box12").innerHTML = "O";
		document.getElementById("box12").style.backgroundColor='silver';
	}
	else if(y10==="X" && y12==="X" &&y11==="")
	{
		document.getElementById("box11").innerHTML = "O";
		document.getElementById("box11").style.backgroundColor='silver';
	}
	else if(y11==="X" && y12==="X" &&y10==="")
	{
		document.getElementById("box10").innerHTML = "O";
		document.getElementById("box10").style.backgroundColor='silver';
	}
	// checking row 3
	else if(y20==="X" && y21==="X" &&y22==="")
	{
		document.getElementById("box22").innerHTML = "O";
		document.getElementById("box22").style.backgroundColor='silver';
	}
	else if(y20==="X" && y22==="X" &&y21==="")
	{
		document.getElementById("box21").innerHTML = "O";
		document.getElementById("box21").style.backgroundColor='silver';
	}
	else if(y21==="X" && y22==="X" &&y20==="")
	{
		document.getElementById("box20").innerHTML = "O";
		document.getElementById("box20").style.backgroundColor='silver';
	}
	
	// checking col 1
	else if(y00==="X" && y10==="X" &&y20==="")
	{
		document.getElementById("box20").innerHTML = "O";
		document.getElementById("box20").style.backgroundColor='silver';
	}
	else if(y00==="X" && y20==="X" &&y10==="")
	{
		document.getElementById("box10").innerHTML = "O";
		document.getElementById("box10").style.backgroundColor='silver';
	}
	else if(y10==="X" && y20==="X" &&y00==="")
	{
		document.getElementById("box00").innerHTML = "O";
		document.getElementById("box00").style.backgroundColor='silver';
	}
	// checking col 2
	else if(y01==="X" && y11==="X" &&y21==="")
	{
		document.getElementById("box21").innerHTML = "O";
		document.getElementById("box21").style.backgroundColor='silver';
	}
	else if(y01==="X" && y21==="X" &&y11==="")
	{
		document.getElementById("box11").innerHTML = "O";
		document.getElementById("box11").style.backgroundColor='silver';
	}
	else if(y11==="X" && y21==="X" &&y01==="")
	{
		document.getElementById("box01").innerHTML = "O";
		document.getElementById("box01").style.backgroundColor='silver';
	}
	// checking col 3
	else if(y02==="X" && y12==="X" &&y22==="")
	{
		document.getElementById("box22").innerHTML = "O";
		document.getElementById("box22").style.backgroundColor='silver';
	}
	else if(y02==="X" && y22==="X" &&y12==="")
	{
		document.getElementById("box12").innerHTML = "O";
		document.getElementById("box12").style.backgroundColor='silver';
	}
	else if(y12==="X" && y22==="X" &&y02==="")
	{
		document.getElementById("box02").innerHTML = "O";
		document.getElementById("box02").style.backgroundColor='silver';
	}
	
	// checking digonal 1
	else if(y00==="X" && y11==="X" &&y22==="")
	{
		document.getElementById("box22").innerHTML = "O";
		document.getElementById("box22").style.backgroundColor='silver';
	}
	else if(y00==="X" && y22==="X" &&y11==="")
	{
		document.getElementById("box11").innerHTML = "O";
		document.getElementById("box11").style.backgroundColor='silver';
	}
	else if(y11==="X" && y22==="X" &&y00==="")
	{
		document.getElementById("box00").innerHTML = "O";
		document.getElementById("box00").style.backgroundColor='silver';
	}
	
	// checking digonal 2
	else if(y02==="X" && y11==="X" &&y20==="")
	{
		document.getElementById("box20").innerHTML = "O";
		document.getElementById("box20").style.backgroundColor='silver';
	}
	else if(y02==="X" && y20==="X" &&y11==="")
	{
		document.getElementById("box11").innerHTML = "O";
		document.getElementById("box11").style.backgroundColor='silver';
	}
	else if(y11==="X" && y20==="X" &&y02==="")
	{
		document.getElementById("box02").innerHTML = "O";
		document.getElementById("box02").style.backgroundColor='silver';
	}
	
	// check for prevent loss ends
	
	
	
	
	
	else if(y00==="")
	{
		document.getElementById("box00").innerHTML = "O";
		document.getElementById("box00").style.backgroundColor='silver'; 
	}
	
	else if(y01==="")
	{
		document.getElementById("box01").innerHTML = "O";
		document.getElementById("box01").style.backgroundColor='silver'; 
	}
	
	else if(y02==="")
	{
		document.getElementById("box02").innerHTML = "O";
		document.getElementById("box02").style.backgroundColor='silver'; 
	}
	
	else if(y10==="")
	{
		document.getElementById("box10").innerHTML = "O";
		document.getElementById("box10").style.backgroundColor='silver'; 
	}
	
	else if(y11==="")
	{
		document.getElementById("box11").innerHTML = "O";
		document.getElementById("box11").style.backgroundColor='silver'; 
	}
	
	else if(y12==="")
	{
		document.getElementById("box12").innerHTML = "O";
		document.getElementById("box12").style.backgroundColor='silver'; 
	}
	
	else if(y20==="")
	{
		document.getElementById("box20").innerHTML = "O";
		document.getElementById("box20").style.backgroundColor='silver'; 
	}
	
	else if(y21==="")
	{
		document.getElementById("box21").innerHTML = "O";
		document.getElementById("box21").style.backgroundColor='silver'; 
	}
	
	else if(y22==="")
	{
		document.getElementById("box22").innerHTML = "O";
		document.getElementById("box22").style.backgroundColor='silver'; 
	}
	

}

function check()
{
	
	var y00 = document.getElementById("box00").innerHTML;
	var y01 = document.getElementById("box01").innerHTML;
	var y02 = document.getElementById("box02").innerHTML;
	var y10 = document.getElementById("box10").innerHTML;
	var y11 = document.getElementById("box11").innerHTML;
	var y12 = document.getElementById("box12").innerHTML;
	var y20 = document.getElementById("box20").innerHTML;
	var y21 = document.getElementById("box21").innerHTML;
	var y22 = document.getElementById("box22").innerHTML;
	
	if(y00==="X" && y01==="X" && y02==="X")
	{
		document.getElementById('youwin').style.display='block';
	}
	
	else if(y10==="X" && y11==="X" && y12==="X")
	{
		document.getElementById('youwin').style.display='block';
	}	
	else if(y20==="X" && y21==="X" && y22==="X")
	{
		document.getElementById('youwin').style.display='block';
	}
	
	else if(y00==="X" && y10==="X" && y20==="X")
	{
		document.getElementById('youwin').style.display='block';
	}
	
	else if(y01==="X" && y11==="X" && y21==="X")
	{
		document.getElementById('youwin').style.display='block';
	}	
	else if(y02==="X" && y12==="X" && y22==="X")
	{
		document.getElementById('youwin').style.display='block';
	}
	
	else if(y00==="X" && y11==="X" && y22==="X")
	{
		document.getElementById('youwin').style.display='block';
	}
	
	else if(y02==="X" && y11==="X" && y20==="X")
	{
		document.getElementById('youwin').style.display='block';
	}
		
		
	else if(y00==="O" && y01==="O" && y02==="O")
	{
		document.getElementById('youloss').style.display='block';
	}
	
	else if(y10==="O" && y11==="O" && y12==="O")
	{
		document.getElementById('youloss').style.display='block';
	}	
	else if(y20==="O" && y21==="O" && y22==="O")
	{
		document.getElementById('youloss').style.display='block';
	}
	
	else if(y00==="O" && y10==="O" && y20==="O")
	{
		document.getElementById('youloss').style.display='block';
	}
	
	else if(y01==="O" && y11==="O" && y21==="O")
	{
		document.getElementById('youloss').style.display='block';
	}	
	else if(y02==="O" && y12==="O" && y22==="O")
	{
		document.getElementById('youloss').style.display='block';
	}
	
	else if(y00==="O" && y11==="O" && y22==="O")
	{
		document.getElementById('youloss').style.display='block';
	}
	
	else if(y02==="O" && y11==="O" && y20==="O")
	{
		document.getElementById('youloss').style.display='block';
	}
	
	else if(y00!="" &&y01!="" &&y02!="" &&y10!="" &&y11!="" &&y12!="" &&y20!="" &&y21!="" &&y22!="")
	{
		document.getElementById('youloss').innerHTML = "Draw!!";
		document.getElementById('youloss').style.display='block';
	}
	
}
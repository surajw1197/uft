'''''''''''''''''''Select'''''''''''''''''

Dim d
d=6
Select Case d
	Case 1: result="Sun"
	Case 2: result="Mon"
	Case 3: result="Tue"
	Case 4: result="Wed"
	Case 5: result="Thr"
	Case 6: result="Fri"
	Case 7: result="Sat"
	Case Else : result="Invalid Input"
		
		
End Select
MsgBox result


'''''''''''''''''''User Procedures and function'''''''''''''''''

Function Magic()
	MsgBox ("Inside fun")
End Function
MsgBox("Outside fun")
Call Magic()

''''''''''''''''''Parameter passing (ByRef)''''''''''''''

Function Magic(ByRef a,ByRef b)
	a=0
	b=0
End Function

Dim x,y
x=5
y=6

msgbox("Before:"& x &", "&y) '& for concatination 
Magic x,y
MsgBox("After: "& x &", "&y)


''''''''''''''''''Parameter passing (ByVal)''''''''''''''

Function Magic(ByVal a,ByVal b)
	a=0
	b=0
End Function

Dim x,y
x=5
y=6

msgbox("Before:"& x &", "&y) '& for concatination 
Magic x,y
MsgBox("After: "& x &", "&y)




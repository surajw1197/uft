
'WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john" @@ hightlight id_;_1880184312_;_script infofile_;_ZIP::ssf4.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").SetSecure "5d808427ef16a34d2e81" @@ hightlight id_;_1880184936_;_script infofile_;_ZIP::ssf6.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click @@ hightlight id_;_1880185032_;_script infofile_;_ZIP::ssf5.xml_;_

cnt=WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").GetItemsCount
For i = 1 To cnt Step 1	
FromCity = WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").GetItem(i)
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select FromCity @@ hightlight id_;_1880185656_;_script infofile_;_ZIP::ssf10.xml_;_

Next @@ hightlight id_;_1116662_;_script infofile_;_ZIP::ssf24.xml_;_

a=1 @@ hightlight id_;_1880190792_;_script infofile_;_ZIP::ssf23.xml_;_
b=2
c=3
v=4
n=5
m=6
q=12
w=23
r=34
u=9




Function A()
	dummy1=10
	Call B()
End Function


Function B()
	dummy2=20
	Call C()
End Function


Function C()
	dummy3=30
	
End Function

Call C()
Call B()
Call A()

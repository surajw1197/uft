WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john" @@ hightlight id_;_2035851224_;_script infofile_;_ZIP::ssf5.xml_;_
'WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").SetSecure "5d7f30359714e114ae19"
WpfWindow("devname:=HPE MyFlight Sample Application").wpfEdit("devname:=password").SetSecure "5d7f30359714e114ae19"
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click @@ hightlight id_;_1977526584_;_script infofile_;_ZIP::ssf6.xml_;_
''WpfWindow("HPE MyFlight Sample Applicatio").Close @@ hightlight id_;_2098808_;_script infofile_;_ZIP::ssf8.xml_;_

''''''GetItemscount'''''''
cnt=WpfWindow("devname:=HPE MyFlight Sample Application").WpfComboBox("devname:=fromCity").GetItemsCount
MsgBox(cnt)

'''''''GetItem'''''''''''
index=WpfWindow("devname:=HPE MyFlight Sample Application").WpfComboBox("devname:=fromCity").GetItem(5)
MsgBox(index)


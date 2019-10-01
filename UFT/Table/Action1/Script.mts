WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set "john" @@ hightlight id_;_2145184424_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").SetSecure "5d80a17fff1695167186" @@ hightlight id_;_2145187400_;_script infofile_;_ZIP::ssf3.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click @@ hightlight id_;_2145189608_;_script infofile_;_ZIP::ssf2.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select "Denver" @@ hightlight id_;_2145190328_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1880186328_;_script infofile_;_ZIP::ssf8.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 1,2 @@ hightlight id_;_1880187000_;_script infofile_;_ZIP::ssf9.xml_;_

WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 5,3

WpfWindow("HPE MyFlight Sample Applicatio").Close @@ hightlight id_;_1835642_;_script infofile_;_ZIP::ssf11.xml_;_


''''ReportEvent
Reporter.ReportEvent micPass,"Login in","login Successful"


Reporter.ReportEvent micWarning,"Login in","Warning while login"


Reporter.ReportEvent micFail,"Login in","Login Failed"




''''AddRunInfromation, ReportNote, ReportHtmlEvent
Dim a,b,sum
a=10
b=20

sum = a+b
Reporter.AddRunInformation "Tranining Room","Pune PDC3"
Reporter.ReportHtmlEvent micDone,"<b>UFT :Demo</b> <i>practicle</i>","<span style='color:red'>Practice all the syntaxes.</span>"
Reporter.ReportNote "My pratice !!!!"

MsgBox sum

'''filter
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select "Denver" @@ hightlight id_;_2145190328_;_script infofile_;_ZIP::ssf5.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1880186328_;_script infofile_;_ZIP::ssf8.xml_;_
Reporter.Filter=rfDisableAll
WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 1,2 @@ hightlight id_;_1880187000_;_script infofile_;_ZIP::ssf9.xml_;_

WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 5,3


'''path
path=Reporter.ReportPath
MsgBox path





'''Report status
Status = Reporter.RunStatus
MsgBox Status





SystemUtil.Run "C:\ProgramData\Microsoft\Windows\Start Menu\Programs\HPE Software\HPE Unified Functional Testing\Sample Applications\FlightsGUI.exe"


'''Run 
SystemUtil.Run "iexplore.exe","http://www.google.com"
SystemUtil.CloseProcessById( )

SystemUtil.CloseProcessByName("iexplore.exe")
WpfWindow("HPE MyFlight Sample Applicatio").Activate


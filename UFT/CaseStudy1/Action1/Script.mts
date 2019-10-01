 
'''''''''Casestudy 1
 
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName").Set "useristhis1" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password").SetSecure "5d81d7e40fd80af30d6375edfd7ed99935df" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password")_;_script infofile_;_ZIP::ssf10.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In").Click 45,6
If Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Exist(80) Then @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Image("mast flightfinder")_;_script infofile_;_ZIP::ssf15.xml_;_
	Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Link("SIGN-OFF").Click @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Link("SIGN-OFF")_;_script infofile_;_ZIP::ssf14.xml_;_
Else
	MsgBox "Page not loaded"
End If




''''Casestudy 2

Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName").Set "useristhis1" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("userName")_;_script infofile_;_ZIP::ssf9.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password").SetSecure "5d81d7e40fd80af30d6375edfd7ed99935df" @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").WebEdit("password")_;_script infofile_;_ZIP::ssf10.xml_;_

If Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In").Check(CheckPoint("Sign-In_2")) Then @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In")_;_script infofile_;_ZIP::ssf21.xml_;_

	Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Image("Sign-In").Click 45,6

	If Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Exist(5) Then
		Browser("Welcome: Mercury Tours").Page("Find a Flight: Mercury").Link("SIGN-OFF").Click
	End If
	
Else
	Browser("Welcome: Mercury Tours").CloseAllTabs
End If





'''''casestudy 3

Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Check CheckPoint("Welcome: Mercury Tours") @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours")_;_script infofile_;_ZIP::ssf24.xml_;_
no_imgs = DataTable.Value("No_Images",1)
no_links = DataTable.Value("No_Links",1)

If no_img=25 Then
	Reporter.ReportEvent micPass,"no_images","no_images equals to 25"
Else
	Reporter.ReportEvent micfail,"no_images","no_images Not Equals to 25"
End If

WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Output CheckPoint("fromCity") @@ hightlight id_;_2030179112_;_script infofile_;_ZIP::ssf34.xml_;_

If no_links=15 Then
	Reporter.ReportEvent micPass,"no_links","no_links Equals to 15"
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Output CheckPoint("fromCity_3") @@ hightlight id_;_1905644248_;_script infofile_;_ZIP::ssf37.xml_;_
Else
	Reporter.ReportEvent micfail,"no_links","no_links Not Equals to 15"
End If





''''''''''casestudy 4

cnt = WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").GetItemsCount @@ hightlight id_;_1050406_;_script infofile_;_ZIP::ssf66.xml_;_
For i = 0 To cnt-1 Step 1

	
	from_city = WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").GetItem(i)
	WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select from_city
    to_city = WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").GetItem(i)
    WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select to_city
    
    
    If from_city=to_city Then
    	Reporter.ReportEvent micfail,"from_city_toCity",from_city & " & " & to_city & "are same"
    Else
    	Reporter.ReportEvent micPass,"from_city_toCity",from_city & " & " & to_city & "are not same"
    End If
Next









'''''''''''caseStudy 5

Flight_no = "12522 AF"
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select "London" @@ hightlight id_;_2090786120_;_script infofile_;_ZIP::ssf93.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select "Paris" @@ hightlight id_;_2090789288_;_script infofile_;_ZIP::ssf100.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2060795912_;_script infofile_;_ZIP::ssf112.xml_;_
row_cnt = WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").RowCount


	For i = 0 To row_cnt-1 Step 1
	fn = WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").GetCellData(i,4)
	
	If fn=Flight_no Then
		Reporter.ReportEvent micPass,"Flight number","Flight Number is found"
	Else
		Reporter.ReportEvent micFail,"Flight number","Flight Number Not Found"
	End If
Next

	


 
 
 
 
 
 
 
 '''''''casestudy 6

WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select "London" @@ hightlight id_;_2090786120_;_script infofile_;_ZIP::ssf93.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select "Paris" @@ hightlight id_;_2090789288_;_script infofile_;_ZIP::ssf100.xml_;_
SelectedFromCity = WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").GetSelection
SelectedToCity = WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").GetSelection
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2060795912_;_script infofile_;_ZIP::ssf112.xml_;_


From = WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("From: London").GetROProperty("name")
ToCity = WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("To: Paris").GetROProperty("name")
Fromarr = Split(From,": ")
ToCityarr = Split(ToCity,": ")
If Fromarr(1)=SelectedFromCity Then @@ hightlight id_;_2036808016_;_script infofile_;_ZIP::ssf117.xml_;_
	If ToCityarr(1)=SelectedToCity Then @@ hightlight id_;_2036820944_;_script infofile_;_ZIP::ssf119.xml_;_
		Reporter.ReportEvent micPass,"FROM AND TO","From-To city selected and displayed are same"
	Else
		Reporter.ReportEvent micFail,"FROM AND TO","From-To city selected and displayed are not same"
	End If
End If



''''''CaseStudy 7

WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select DataTable("FromCity",dtGlobalSheet) @@ hightlight id_;_1891795720_;_script infofile_;_ZIP::ssf121.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select DataTable("ToCity",dtGlobalSheet) @@ hightlight id_;_1891798840_;_script infofile_;_ZIP::ssf129.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("numOfTickets").Select DataTable("No_Of_Tickets",dtGlobalSheet) @@ hightlight id_;_1891799080_;_script infofile_;_ZIP::ssf131.xml_;_
No_Tkts = WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("numOfTickets").GetROProperty("value")
'MsgBox No_Tkts
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_1891799320_;_script infofile_;_ZIP::ssf132.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell 0,1 @@ hightlight id_;_2029926208_;_script infofile_;_ZIP::ssf144.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("SELECT FLIGHT").Click

Per_Tkt_Price = WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("$108.60").GetROProperty("name")
Displayed_Total_price = WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("$325.80").GetROProperty("name")
'MsgBox Per_Tkt_Price
ptp = FormatNumber(Per_Tkt_Price,2)
TPrice = ptp * No_Tkts

If FormatNumber(TPrice,2)=FormatNumber(Displayed_Total_price,2) Then
	Reporter.ReportEvent micPass,"Total_Price","Price calculated correctly"
Else
	Reporter.ReportEvent micFail,"Total_Price","Price is not calculated correctly"
End If


''''''''''Casestudy 8


 @@ hightlight id_;_2024758392_;_script infofile_;_ZIP::ssf161.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select "London" @@ hightlight id_;_2024729784_;_script infofile_;_ZIP::ssf165.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select "Paris" @@ hightlight id_;_2024735640_;_script infofile_;_ZIP::ssf167.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click @@ hightlight id_;_2024739000_;_script infofile_;_ZIP::ssf168.xml_;_
rowcnt = WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").RowCount
row = 1

For i = 0 To rowcnt-1 Step 1
	
	WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").SelectCell i,2 @@ hightlight id_;_2024741400_;_script infofile_;_ZIP::ssf170.xml_;_
	flightNo = WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").GetCellData(i,4)
	Price = WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").GetCellData(i,0)
	DataTable.Value("FlightNo",1) = flightNo
	DataTable.Value("Price",1) = Price
	row = row+1
	DataTable.GlobalSheet.SetCurrentRow(row)
Next







'''''''''''Casestudy 9

totaldays = DataTable.GlobalSheet.GetRowCount()
'MsgBox totaldays

WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select "London"
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select "Paris"

For i = 1 To totaldays Step 1
  	WpfWindow("HPE MyFlight Sample Applicatio").WpfCalendar("datePicker").SetDate DataTable("Date", dtGlobalSheet) @@ hightlight id_;_-180529224_;_script infofile_;_ZIP::ssf217.xml_;_
    WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click
    flightcount = WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").RowCount @@ hightlight id_;_-227499000_;_script infofile_;_ZIP::ssf201.xml_;_
    DataTable.Value("No_Flights_available",1)=flightcount
    WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("BACK").Click
   DataTable.GlobalSheet.SetCurrentRow(i)
Next




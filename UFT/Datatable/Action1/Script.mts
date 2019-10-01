 @@ hightlight id_;_1982693096_;_script infofile_;_ZIP::ssf21.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("fromCity").Select DataTable("FromCity", dtGlobalSheet) @@ hightlight id_;_1964018064_;_script infofile_;_ZIP::ssf23.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("toCity").Select DataTable("ToCity", dtGlobalSheet) @@ hightlight id_;_1915868944_;_script infofile_;_ZIP::ssf25.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfComboBox("numOfTickets").Select DataTable("NoTickets", dtGlobalSheet) @@ hightlight id_;_1982709800_;_script infofile_;_ZIP::ssf30.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("FIND FLIGHTS").Click
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("BACK").Click @@ hightlight id_;_1982710328_;_script infofile_;_ZIP::ssf33.xml_;_


''''Environment  
osversion = Environment("OSVersion")
MsgBox osversion

testDir =Environment("TestDir")
MsgBox testDir




'''Standard CheckPoint @@ hightlight id_;_1943862440_;_script infofile_;_ZIP::ssf35.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Check CheckPoint("OK") @@ hightlight id_;_1943855768_;_script infofile_;_ZIP::ssf36.xml_;_

''''Bitmap Checkpoint
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("London to Paris,  all").Check CheckPoint("London to Paris,  all inclusive") @@ hightlight id_;_1909759184_;_script infofile_;_ZIP::ssf37.xml_;_

'''Text Checkpoint
WpfWindow("HPE MyFlight Sample Applicatio").WpfObject("John Smith").Check CheckPoint("John Smith") @@ hightlight id_;_1909758376_;_script infofile_;_ZIP::ssf39.xml_;_


'''Table Checkpoint @@ hightlight id_;_1919062344_;_script infofile_;_ZIP::ssf48.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfTable("flightsDataGrid").Check CheckPoint("flightsDataGrid") @@ hightlight id_;_1920853208_;_script infofile_;_ZIP::ssf49.xml_;_
 @@ hightlight id_;_65868_;_script infofile_;_ZIP::ssf40.xml_;_
 
''''Image Checkpoint 
WpfWindow("HPE MyFlight Sample Applicatio").WpfImage("image1").Check CheckPoint("image1") @@ hightlight id_;_1984882568_;_script infofile_;_ZIP::ssf50.xml_;_



''''Page CheckPoint
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Check CheckPoint("Welcome: Mercury Tours") @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours")_;_script infofile_;_ZIP::ssf51.xml_;_



''''Import

DataTable.AddSheet "Sheet1"
datatable.ImportSheet "C:\Users\pdc3a-training.pdc3a\Desktop\Demo.xlsx","Sheet1",1

a=DataTable.GetSheet(1).GetRowCount

For i  = 1 To a Step 1
	DataTable.GetSheet(1).SetCurrentRow(i)
	fname=DataTable.Value("First_Name",1)
	lname=DataTable.Value("LastName",1)
	

	Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("firstName").Set fname @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("firstName")_;_script infofile_;_ZIP::ssf55.xml_;_
	Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("lastName").Set lname @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").WebEdit("lastName")_;_script infofile_;_ZIP::ssf56.xml_;_
	
Next

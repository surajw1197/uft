﻿ @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours").Image("register")_;_script infofile_;_ZIP::ssf17.xml_;_
Browser("Welcome: Mercury Tours").Page("Welcome: Mercury Tours").Link("REGISTER").Click @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours 2").WebEdit("firstName")_;_script infofile_;_ZIP::ssf20.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours_2").WebEdit("firstName").Set DataTable("first_Name",dtGlobalSheet) @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours 2").WebEdit("firstName")_;_script infofile_;_ZIP::ssf21.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours_2").WebEdit("lastName").Set DataTable("last_Name",dtGlobalSheet) @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours 2").WebEdit("lastName")_;_script infofile_;_ZIP::ssf22.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours_2").WebEdit("phone").Set DataTable("phone",dtGlobalSheet) @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours 2").WebEdit("phone")_;_script infofile_;_ZIP::ssf24.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours_2").WebEdit("userName").Set DataTable("Email",dtGlobalSheet) @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours 2").WebEdit("userName")_;_script infofile_;_ZIP::ssf25.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours_2").WebEdit("address1").Set DataTable("address1",dtGlobalSheet) @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours 2").WebEdit("address1")_;_script infofile_;_ZIP::ssf26.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours_2").WebEdit("address2").Set DataTable("address2",dtGlobalSheet) @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours 2").WebEdit("address2")_;_script infofile_;_ZIP::ssf27.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours_2").WebEdit("city").Set DataTable("city",dtGlobalSheet) @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours 2").WebEdit("city")_;_script infofile_;_ZIP::ssf28.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours_2").WebEdit("state").Set DataTable("state",dtGlobalSheet) @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours 2").WebEdit("state")_;_script infofile_;_ZIP::ssf29.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours_2").WebEdit("postalCode").Set DataTable("postalCode",dtGlobalSheet) @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours 2").WebList("country")_;_script infofile_;_ZIP::ssf31.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours_2").WebList("country").Select DataTable("country",dtGlobalSheet) @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours 2").WebList("country")_;_script infofile_;_ZIP::ssf35.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours_2").WebEdit("email").Set DataTable("Username",dtLocalSheet) @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours 2").WebEdit("email")_;_script infofile_;_ZIP::ssf37.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours_2").WebEdit("password").SetSecure DataTable("password",dtLocalSheet) @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours 2").WebEdit("password")_;_script infofile_;_ZIP::ssf38.xml_;_
Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours_2").WebEdit("confirmPassword").SetSecure DataTable("confirm_Password", dtGlobalSheet) @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours 2").WebEdit("confirmPassword")_;_script infofile_;_ZIP::ssf39.xml_;_
'Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours_2").Image("register").Click 40,5 @@ hightlight id_;_Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours 2").Image("register")_;_script infofile_;_ZIP::ssf40.xml_;_


''Browser("Welcome: Mercury Tours").Page("Register: Mercury Tours_2").WebList("country").Submit
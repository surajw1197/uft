/* 
Copyright: Paul Hanlon

Released under the MIT/BSD licence which means you can do anything you want 
with it, as long as you keep this copyright notice on the page 
*/
(function(jq){
  jq.fn.jqTreeTable=function(map, options){
    var opts = jq.extend({openImg:"",shutImg:"",leafImg:"",lastOpenImg:"",lastShutImg:"",lastLeafImg:"",vertLineImg:"",blankImg:"",collapse:false,column:0,striped:false,highlight:false,state:true},options),
    mapa=[],mapb=[],tid=this.attr("id"),collarr=[],
	  stripe=function(){
      if(opts.striped){
  		  $("#"+tid+" tr:visible").filter(":even").addClass("even").end().filter(":odd").removeClass("even");
      }
	  },
    buildText = function(parno, preStr){//Recursively build up the text for the images that make it work
      var mp=mapa[parno], ro=0, pre="", pref, img;
      for (var y=0,yl=mp.length;y<yl;y++){
        ro = mp[y];
        if (mapa[ro]){//It's a parent as well. Build it's string and move on to it's children
          pre=(y==yl-1)? opts.blankImg: opts.vertLineImg;
          img=(y==yl-1)? opts.lastOpenImg: opts.openImg;
          mapb[ro-1] = preStr + '<img src="'+img+'" class="parimg" id="'+tid+ro+'">';
          pref = preStr + '<img src="'+pre+'" class="preimg">';
          arguments.callee(ro, pref);
        }else{//it's a child
          img = (y==yl-1)? opts.lastLeafImg: opts.leafImg;//It's the last child, It's child will have a blank field behind it
          mapb[ro-1] = preStr + '<img src="'+img+'" class="ttimage" id="'+tid+ro+'">';
        }
      }
    },
    expandKids = function(num, last){//Expands immediate children, and their uncollapsed children
      jq("#"+tid+num).attr("src", (last)? opts.lastOpenImg: opts.openImg);//
      for (var x=0, xl=mapa[num].length;x<xl;x++){
        var mnx = mapa[num][x];
        jq("#"+tid+mnx).parents("tr").removeClass("collapsed");
  			if (mapa[mnx] && opts.state && jq.inArray(mnx, collarr)<0){////If it is a parent and its number is not in the collapsed array
          arguments.callee(mnx,(x==xl-1));//Expand it. More intuitive way of displaying the tree
        }
      }
    },
    collapseKids = function(num, last){//Recursively collapses all children and their children and change icon
      jq("#"+tid+num).attr("src", (last)? opts.lastShutImg: opts.shutImg);
      for (var x=0, xl=mapa[num].length;x<xl;x++){
        var mnx = mapa[num][x];
        jq("#"+tid+mnx).parents("tr").addClass("collapsed");
        if (mapa[mnx]){//If it is a parent
          arguments.callee(mnx,(x==xl-1));
        }
      }
    },
  	creset = function(num, exp){//Resets the collapse array
  		var o = (exp)? collarr.splice(jq.inArray(num, collarr), 1): collarr.push(num);
      cset(tid,collarr);
  	},
  	cget = function(n){
	  	var v='',c=' '+document.cookie+';',s=c.indexOf(' '+n+'=');
	    if (s>=0) {
	    	s+=n.length+2;
	      v=(c.substring(s,c.indexOf(';',s))).split("|");
	    }
	    return v||0;
  	},
    cset = function (n,v) {
  		jq.unique(v);
	  	document.cookie = n+"="+v.join("|")+";";
	  };
    for (var x=0,xl=map.length; x<xl;x++){//From map of parents, get map of kids
      num = map[x];
      if (!mapa[num]){
        mapa[num]=[];
      }
      mapa[num].push(x+1);
    }
    buildText(0,"");
    jq("tr", this).each(function(i){//Inject the images into the column to make it work
      jq(this).children("td").eq(opts.column).prepend(mapb[i]);
      
    });
		collarr = cget(tid)||opts.collapse||collarr;
		if (collarr.length){
			cset(tid,collarr);
	    for (var y=0,yl=collarr.length;y<yl;y++){
	      collapseKids(collarr[y],($("#"+collarr[y]+ " .parimg").attr("src")==opts.lastOpenImg));
	    }
		}
    stripe();
    jq(".parimg", this).each(function(i){
      var jqt = jq(this),last;
      jqt.click(function(){
        var num = parseInt(jqt.attr("id").substr(tid.length));//Number of the row
        if (jqt.parents("tr").next().is(".collapsed")){//If the table row directly below is collapsed
          expandKids(num, (jqt.attr("src")==opts.lastShutImg));//Then expand all children not in collarr
					if(opts.state){creset(num,true);}//If state is set, store in cookie
        }else{//Collapse all and set image to opts.shutImg or opts.lastShutImg on parents
          collapseKids(num, (jqt.attr("src")==opts.lastOpenImg));
					if(opts.state){creset(num,false);}//If state is set, store in cookie
        }
        stripe();//Restripe the rows
      });
    });
    if (opts.highlight){//This is where it highlights the rows
      jq("tr", this).hover(
        function(){jq(this).addClass("over");},
        function(){jq(this).removeClass("over");}
      );
    };
  };
  return this;
})(jQuery);

// SIG // Begin signature block
// SIG // MIIi1wYJKoZIhvcNAQcCoIIiyDCCIsQCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // MqtnW6RLrOSGDtOQJDHk21B4zyGIse0tnkmjewFfRKWg
// SIG // ghGzMIIFcjCCBFqgAwIBAgIQUwwjQXKrHJXnYmMubFBT
// SIG // RzANBgkqhkiG9w0BAQsFADB9MQswCQYDVQQGEwJHQjEb
// SIG // MBkGA1UECBMSR3JlYXRlciBNYW5jaGVzdGVyMRAwDgYD
// SIG // VQQHEwdTYWxmb3JkMRowGAYDVQQKExFDT01PRE8gQ0Eg
// SIG // TGltaXRlZDEjMCEGA1UEAxMaQ09NT0RPIFJTQSBDb2Rl
// SIG // IFNpZ25pbmcgQ0EwHhcNMTcwODExMDAwMDAwWhcNMTgw
// SIG // ODExMjM1OTU5WjCB2zELMAkGA1UEBhMCR0IxETAPBgNV
// SIG // BBEMCFJHMTQgMVFOMRIwEAYDVQQIDAlCZXJrc2hpcmUx
// SIG // EDAOBgNVBAcMB05ld2J1cnkxJjAkBgNVBAkMHVRoZSBM
// SIG // YXduLCAyMi0zMCBPbGQgQmF0aCBSb2FkMSIwIAYDVQQK
// SIG // DBlNaWNybyBGb2N1cyBHcm91cCBMaW1pdGVkMSMwIQYD
// SIG // VQQLDBpNaWNybyBGb2N1cyBDeWJlciBTZWN1cml0eTEi
// SIG // MCAGA1UEAwwZTWljcm8gRm9jdXMgR3JvdXAgTGltaXRl
// SIG // ZDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEB
// SIG // AMo9n3Q+TL+DdrFzRcAtVZCIc1sUF868fv9Rvw9osEN8
// SIG // YB1PU0sl1N5b4P4QkRLO+Frn96/jo+qZC1858LF2k8ox
// SIG // WUigqmexFmEEX1q8DUQa60PCSoP5fItzoodRtUNbldft
// SIG // vjcn6UAlMnGBmEKmgFMdHltVrOGlykaL8iujCTSQdrsG
// SIG // ed5XCtF00XmWRnOpcZLTYDpEXNBFE3yEbKDCp0+VGIj3
// SIG // /Tk3F7UMNTUXv1egXbKkj3DbuGqzRIYTpbIo4EbXi7e1
// SIG // ujHHnlRXVbHpVGA0k0f19jfVWQKqLpFtPcW+ws6VYBu9
// SIG // xLEr1248sYO923dwXdiGP5aPZRabna25ZC0CAwEAAaOC
// SIG // AY0wggGJMB8GA1UdIwQYMBaAFCmRYP+KTfrr+aZquM/5
// SIG // 5ku9Sc4SMB0GA1UdDgQWBBQtcP3zrPE3YX/xosT6ljoU
// SIG // 1vR9dDAOBgNVHQ8BAf8EBAMCB4AwDAYDVR0TAQH/BAIw
// SIG // ADATBgNVHSUEDDAKBggrBgEFBQcDAzARBglghkgBhvhC
// SIG // AQEEBAMCBBAwRgYDVR0gBD8wPTA7BgwrBgEEAbIxAQIB
// SIG // AwIwKzApBggrBgEFBQcCARYdaHR0cHM6Ly9zZWN1cmUu
// SIG // Y29tb2RvLm5ldC9DUFMwQwYDVR0fBDwwOjA4oDagNIYy
// SIG // aHR0cDovL2NybC5jb21vZG9jYS5jb20vQ09NT0RPUlNB
// SIG // Q29kZVNpZ25pbmdDQS5jcmwwdAYIKwYBBQUHAQEEaDBm
// SIG // MD4GCCsGAQUFBzAChjJodHRwOi8vY3J0LmNvbW9kb2Nh
// SIG // LmNvbS9DT01PRE9SU0FDb2RlU2lnbmluZ0NBLmNydDAk
// SIG // BggrBgEFBQcwAYYYaHR0cDovL29jc3AuY29tb2RvY2Eu
// SIG // Y29tMA0GCSqGSIb3DQEBCwUAA4IBAQB5YiRic/bqzlQO
// SIG // /Wty9vqid2Yb+hu8vhzpXL7BptyB1NLKjggLH+0P0Q2B
// SIG // kRRxTPmbVuohcvfq0Lb3GBW0L9PlENAeNCE4JT6FMbTF
// SIG // GSEzEtQud6uYRaAva1+9gSoqmJS0KaVsUMulzdWW4jOY
// SIG // barNB8I13T0s+rpFGey20SJPd5xvJmoT12TCup4RRUnw
// SIG // dA8gTXGkfhEj7lQBOHO3ftSk6G8gaENEiOuXNDtl2Cs0
// SIG // t7j6pnPaVamvYnCf1qK/gkowB8aDF7R2Dq0N4q7553Gm
// SIG // o8rzQQAyvEwgZZa/cgjG1eyCgAbb8zhanjlY+d0qcNIC
// SIG // omToT8Y3N+zD4t4qkXi3MIIF4DCCA8igAwIBAgIQLnyH
// SIG // zA6TSlL+lP0ct800rzANBgkqhkiG9w0BAQwFADCBhTEL
// SIG // MAkGA1UEBhMCR0IxGzAZBgNVBAgTEkdyZWF0ZXIgTWFu
// SIG // Y2hlc3RlcjEQMA4GA1UEBxMHU2FsZm9yZDEaMBgGA1UE
// SIG // ChMRQ09NT0RPIENBIExpbWl0ZWQxKzApBgNVBAMTIkNP
// SIG // TU9ETyBSU0EgQ2VydGlmaWNhdGlvbiBBdXRob3JpdHkw
// SIG // HhcNMTMwNTA5MDAwMDAwWhcNMjgwNTA4MjM1OTU5WjB9
// SIG // MQswCQYDVQQGEwJHQjEbMBkGA1UECBMSR3JlYXRlciBN
// SIG // YW5jaGVzdGVyMRAwDgYDVQQHEwdTYWxmb3JkMRowGAYD
// SIG // VQQKExFDT01PRE8gQ0EgTGltaXRlZDEjMCEGA1UEAxMa
// SIG // Q09NT0RPIFJTQSBDb2RlIFNpZ25pbmcgQ0EwggEiMA0G
// SIG // CSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCmmJBjd5E0
// SIG // f4rR3elnMRHrzB79MR2zuWJXP5O8W+OfHiQyESdrvFGR
// SIG // p8+eniWzX4GoGA8dHiAwDvthe4YJs+P9omidHCydv3Lj
// SIG // 5HWg5TUjjsmK7hoMZMfYQqF7tVIDSzqwjiNLS2PgIpQ3
// SIG // e9V5kAoUGFEs5v7BEvAcP2FhCoyi3PbDMKrNKBh1SMF5
// SIG // WgjNu4xVjPfUdpA6M0ZQc5hc9IVKaw+A3V7Wvf2pL8Al
// SIG // 9fl4141fEMJEVTyQPDFGy3CuB6kK46/BAW+QGiPiXzjb
// SIG // xghdR7ODQfAuADcUuRKqeZJSzYcPe9hiKaR+ML0btYxy
// SIG // tEjy4+gh+V5MYnmLAgaff9ULAgMBAAGjggFRMIIBTTAf
// SIG // BgNVHSMEGDAWgBS7r34CPfqm8TyEjq3uOJjs2TIy1DAd
// SIG // BgNVHQ4EFgQUKZFg/4pN+uv5pmq4z/nmS71JzhIwDgYD
// SIG // VR0PAQH/BAQDAgGGMBIGA1UdEwEB/wQIMAYBAf8CAQAw
// SIG // EwYDVR0lBAwwCgYIKwYBBQUHAwMwEQYDVR0gBAowCDAG
// SIG // BgRVHSAAMEwGA1UdHwRFMEMwQaA/oD2GO2h0dHA6Ly9j
// SIG // cmwuY29tb2RvY2EuY29tL0NPTU9ET1JTQUNlcnRpZmlj
// SIG // YXRpb25BdXRob3JpdHkuY3JsMHEGCCsGAQUFBwEBBGUw
// SIG // YzA7BggrBgEFBQcwAoYvaHR0cDovL2NydC5jb21vZG9j
// SIG // YS5jb20vQ09NT0RPUlNBQWRkVHJ1c3RDQS5jcnQwJAYI
// SIG // KwYBBQUHMAGGGGh0dHA6Ly9vY3NwLmNvbW9kb2NhLmNv
// SIG // bTANBgkqhkiG9w0BAQwFAAOCAgEAAj8COcPu+Mo7id4M
// SIG // bU2x8U6ST6/COCwEzMVjEasJY6+rotcCP8xvGcM91hoI
// SIG // lP8l2KmIpysQGuCbsQciGlEcOtTh6Qm/5iR0rx57FjFu
// SIG // I+9UUS1SAuJ1CAVM8bdR4VEAxof2bO4QRHZXavHfWGsh
// SIG // qknUfDdOvf+2dVRAGDZXZxHNTwLk/vPa/HUX2+y392UJ
// SIG // I0kfQ1eD6n4gd2HITfK7ZU2o94VFB696aSdlkClAi997
// SIG // OlE5jKgfcHmtbUIgos8MbAOMTM1zB5TnWo46BLqioXwf
// SIG // y2M6FafUFRunUkcyqfS/ZEfRqh9TTjIwc8Jvt3iCnVz/
// SIG // RrtrIh2IC/gbqjSm/Iz13X9ljIwxVzHQNuxHoc/Li6jv
// SIG // HBhYxQZ3ykubUa9MCEp6j+KjUuKOjswm5LLY5TjCqO3G
// SIG // gZw1a6lYYUoKl7RLQrZVnb6Z53BtWfhtKgx/GWBfDJqI
// SIG // bDCsUgmQFhv/K53b0CDKieoofjKOGd97SDMe12X4rsn4
// SIG // gxSTdn1k0I7OvjV9/3IxTZ+evR5sL6iPDAZQ+4wns3bJ
// SIG // 9ObXwzTijIchhmH+v1V04SF3AwpobLvkyanmz1kl63zs
// SIG // RQ55ZmjoIs2475iFTZYRPAmK0H+8KCgT+2rKVI2SXM3C
// SIG // ZZgGns5IW9S1N5NGQXwH3c/6Q++6Z2H/fUnguzB9XIDj
// SIG // 5hY5S6cwggZVMIIEPaADAgECAgphGFSGAAAAAAAkMA0G
// SIG // CSqGSIb3DQEBBQUAMH8xCzAJBgNVBAYTAlVTMRMwEQYD
// SIG // VQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQHEwdSZWRtb25k
// SIG // MR4wHAYDVQQKExVNaWNyb3NvZnQgQ29ycG9yYXRpb24x
// SIG // KTAnBgNVBAMTIE1pY3Jvc29mdCBDb2RlIFZlcmlmaWNh
// SIG // dGlvbiBSb290MB4XDTExMDQxMTIyMDYyMFoXDTIxMDQx
// SIG // MTIyMTYyMFowgYUxCzAJBgNVBAYTAkdCMRswGQYDVQQI
// SIG // ExJHcmVhdGVyIE1hbmNoZXN0ZXIxEDAOBgNVBAcTB1Nh
// SIG // bGZvcmQxGjAYBgNVBAoTEUNPTU9ETyBDQSBMaW1pdGVk
// SIG // MSswKQYDVQQDEyJDT01PRE8gUlNBIENlcnRpZmljYXRp
// SIG // b24gQXV0aG9yaXR5MIICIjANBgkqhkiG9w0BAQEFAAOC
// SIG // Ag8AMIICCgKCAgEAkehUktIKVrGsDSTdxc9EZ3SZKzej
// SIG // fSNwAHG8U9/E+ioSj0t/EFa9n3Byt2F/yUsPF6c947AE
// SIG // Ye7/EZfH9IY+Cvo+XPmT5jR62RRr55yzhaCCenavcZDX
// SIG // 7P0N+pxs+t+wgvQUfvm+xKYvT3+Zf7X8Z0NyvQwA1onr
// SIG // ayzT7Y+YHBSrfuXjbvzYqOSSJNpDa2K4Vf3qwbxstovz
// SIG // Do2a5JtsaZn4eEgwRdWt4Q08RWD8MpZRJ7xnw8outmvq
// SIG // RsfHIKCxH2XeSAi6pE6p8oNGN4Tr6MyBSENnTnIqm1y9
// SIG // TBsoilwie7SrmNnu4FGDwwlGTm0+mfqVF9p8M1dBPI1R
// SIG // 7Qu2XK8sYxrfV8g/vOldxJuvRZnio1oktLqpVj3Pb6r/
// SIG // SVi+8Kj/9Lit6Tf7urj0Czr56ENCHonYhMsT8dm74Ylg
// SIG // uIwoVqwUHZwK53Hrzw7dPamWoUi9PPevtQ0iTMARgexW
// SIG // O/bTouJbt7IEIlKVgJNp6I5MZfGRAy1wdALqi2cVKWlS
// SIG // ArvX31BqVUa/oKMoYX9w0MOiqiwhqkfOKJwGRXa/ghgn
// SIG // tNWutMtQ5mv0TIZxMOmm3xaG4Nj/QN370EKIf6MzOi5c
// SIG // HkERgWPOGHFrK+ymircxXDpqR+DDeVnWIBqv8mqYqnK8
// SIG // V0rSS527EPywTEHl7R09XiidnMy/s1Hap0flhFMCAwEA
// SIG // AaOByzCByDARBgNVHSAECjAIMAYGBFUdIAAwHQYDVR0O
// SIG // BBYEFLuvfgI9+qbxPISOre44mOzZMjLUMAsGA1UdDwQE
// SIG // AwIBhjAPBgNVHRMBAf8EBTADAQH/MB8GA1UdIwQYMBaA
// SIG // FGL7CiFbf0NuEdoJVFBr9dKWcfGeMFUGA1UdHwROMEww
// SIG // SqBIoEaGRGh0dHA6Ly9jcmwubWljcm9zb2Z0LmNvbS9w
// SIG // a2kvY3JsL3Byb2R1Y3RzL01pY3Jvc29mdENvZGVWZXJp
// SIG // ZlJvb3QuY3JsMA0GCSqGSIb3DQEBBQUAA4ICAQCBmAeS
// SIG // /m8yX9nSS/V92XHg/fwWkgW0zmf1zEvUxxCYVPpSG0hY
// SIG // L3O/Gdk3oK0z81EFI3nZsndkiuu9w7Odt7HmN9HSWX5B
// SIG // 2Y+zFKsVd01s2kAkW7IHuFgsSwwrU1Gz3y65dqxpycLt
// SIG // ZDd7jSF6zNyfvBcoBMwlRyQqhcxW5jk5h3UYH0b2kQ+q
// SIG // RvpN5kdU4jIsdu77zb1i4ZYkKQZLDP40SukQHXTlei+V
// SIG // S8xuuv3XNV+R5FlC3vsAjgjxUVEtYiWEFQgZEYZAYdUl
// SIG // UyMsKXc4zFjTjF+8GbhmBkxjENuyrDBsFryLvNIbxgMT
// SIG // FUalUPSaloS7chA421Ga1MVTJ8u/KBWeCGs9P0zADJEc
// SIG // vxmEizdRoBmdhVXFXaVkee8Qpev0Ixzab+MufRewN3Yf
// SIG // TY3BAkEfNj4Ge8W3YC1BYlHe3eRRLafegfTD4ODpwxaA
// SIG // 3ZxJfRfPy1VjB9ZpUvSknSSNvhvJgJmHRUjLScXtcDUA
// SIG // JnynD3Uy9+0Ij/C8pWCgItUzHvvlAiyVpgf0vhTecEyO
// SIG // qX5B3qnZUGSGb5Qk96v2g5VdDUXRjCOMAwoT5A65QwMK
// SIG // Q2ezEHRG5G29Zd5FQYZwcgQLut26WR9XE5OwC+2xFEFp
// SIG // 0wkEWcc2jn22S53xIPzQ8Yu9aMo+sTHPQ9Bm9aPdr7Hc
// SIG // wxeM+jEoxz5JJ6tqGzGCEHwwghB4AgEBMIGRMH0xCzAJ
// SIG // BgNVBAYTAkdCMRswGQYDVQQIExJHcmVhdGVyIE1hbmNo
// SIG // ZXN0ZXIxEDAOBgNVBAcTB1NhbGZvcmQxGjAYBgNVBAoT
// SIG // EUNPTU9ETyBDQSBMaW1pdGVkMSMwIQYDVQQDExpDT01P
// SIG // RE8gUlNBIENvZGUgU2lnbmluZyBDQQIQUwwjQXKrHJXn
// SIG // YmMubFBTRzANBglghkgBZQMEAgEFAKB8MBAGCisGAQQB
// SIG // gjcCAQwxAjAAMBkGCSqGSIb3DQEJAzEMBgorBgEEAYI3
// SIG // AgEEMBwGCisGAQQBgjcCAQsxDjAMBgorBgEEAYI3AgEV
// SIG // MC8GCSqGSIb3DQEJBDEiBCCU2R4mwLBgo8ogukIyON3l
// SIG // +jq2vp8LKlGDRJoEYnG+9TANBgkqhkiG9w0BAQEFAASC
// SIG // AQCm28//C0nboEl6I2O2zYCaN+GwGLVtJKXxdRS61LrD
// SIG // g3sTPTW+CJP3s+vgPIMVmHQ//epyh7ys5E8CCdSKyhok
// SIG // b03lzTQ7Ig632Mp5gsmJF9UfJFXneLphsh/EbiCBtJ8t
// SIG // AMoGrF62S0wIUHEWzYhSdtTrHjf9/4ClmIIJhb1htnxs
// SIG // yz8nGL3ylNMXOfOcQUTcIJDCLIJKtjRq/pQATpDAOmwh
// SIG // 7huLTIDllV8Cd7JSmAy0BKeyizOqyohNVgY5OYiqZqpx
// SIG // L7Add/qUXQ+KYy3ZjgA50WFWrxKj6p9i+IdbdxtJFU+B
// SIG // c3NTiFbfZp/y6av4YL1+PTtbG6Qb+JNXSm60oYIOPTCC
// SIG // DjkGCisGAQQBgjcDAwExgg4pMIIOJQYJKoZIhvcNAQcC
// SIG // oIIOFjCCDhICAQMxDTALBglghkgBZQMEAgEwggEPBgsq
// SIG // hkiG9w0BCRABBKCB/wSB/DCB+QIBAQYLYIZIAYb4RQEH
// SIG // FwMwMTANBglghkgBZQMEAgEFAAQgGpwoUyp2CsXQN2mS
// SIG // u4vlCCKYSSp/KQ0K19I1gXXBPcgCFQDz1r0H6U1C8xfZ
// SIG // XJuYMuF6yzpJtRgPMjAxNzExMTUyMTMwNTZaMAMCAR6g
// SIG // gYakgYMwgYAxCzAJBgNVBAYTAlVTMR0wGwYDVQQKExRT
// SIG // eW1hbnRlYyBDb3Jwb3JhdGlvbjEfMB0GA1UECxMWU3lt
// SIG // YW50ZWMgVHJ1c3QgTmV0d29yazExMC8GA1UEAxMoU3lt
// SIG // YW50ZWMgU0hBMjU2IFRpbWVTdGFtcGluZyBTaWduZXIg
// SIG // LSBHMqCCCoswggU4MIIEIKADAgECAhB7BbHUSWhRRPfJ
// SIG // idKcGZ0SMA0GCSqGSIb3DQEBCwUAMIG9MQswCQYDVQQG
// SIG // EwJVUzEXMBUGA1UEChMOVmVyaVNpZ24sIEluYy4xHzAd
// SIG // BgNVBAsTFlZlcmlTaWduIFRydXN0IE5ldHdvcmsxOjA4
// SIG // BgNVBAsTMShjKSAyMDA4IFZlcmlTaWduLCBJbmMuIC0g
// SIG // Rm9yIGF1dGhvcml6ZWQgdXNlIG9ubHkxODA2BgNVBAMT
// SIG // L1ZlcmlTaWduIFVuaXZlcnNhbCBSb290IENlcnRpZmlj
// SIG // YXRpb24gQXV0aG9yaXR5MB4XDTE2MDExMjAwMDAwMFoX
// SIG // DTMxMDExMTIzNTk1OVowdzELMAkGA1UEBhMCVVMxHTAb
// SIG // BgNVBAoTFFN5bWFudGVjIENvcnBvcmF0aW9uMR8wHQYD
// SIG // VQQLExZTeW1hbnRlYyBUcnVzdCBOZXR3b3JrMSgwJgYD
// SIG // VQQDEx9TeW1hbnRlYyBTSEEyNTYgVGltZVN0YW1waW5n
// SIG // IENBMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKC
// SIG // AQEAu1mdWVVPnYxyXRqBoutV87ABrTxxrDKPBWuGmicA
// SIG // MpdqTclkFEspu8LZKbku7GOz4c8/C1aQ+GIbfuumB+Le
// SIG // f15tQDjUkQbnQXx5HMvLrRu/2JWR8/DubPitljkuf8En
// SIG // uHg5xYSl7e2vh47Ojcdt6tKYtTofHjmdw/SaqPSE4cTR
// SIG // fHHGBim0P+SDDSbDewg+TfkKtzNJ/8o71PWym0vhiJka
// SIG // 9cDpMxTW38eA25Hu/rySV3J39M2ozP4J9ZM3vpWIasXc
// SIG // 9LFL1M7oCZFftYR5NYp4rBkyjyPBMkEbWQ6pPrHM+dYr
// SIG // 77fY5NUdbRE6kvaTyZzjSO67Uw7UNpeGeMWhNwIDAQAB
// SIG // o4IBdzCCAXMwDgYDVR0PAQH/BAQDAgEGMBIGA1UdEwEB
// SIG // /wQIMAYBAf8CAQAwZgYDVR0gBF8wXTBbBgtghkgBhvhF
// SIG // AQcXAzBMMCMGCCsGAQUFBwIBFhdodHRwczovL2Quc3lt
// SIG // Y2IuY29tL2NwczAlBggrBgEFBQcCAjAZGhdodHRwczov
// SIG // L2Quc3ltY2IuY29tL3JwYTAuBggrBgEFBQcBAQQiMCAw
// SIG // HgYIKwYBBQUHMAGGEmh0dHA6Ly9zLnN5bWNkLmNvbTA2
// SIG // BgNVHR8ELzAtMCugKaAnhiVodHRwOi8vcy5zeW1jYi5j
// SIG // b20vdW5pdmVyc2FsLXJvb3QuY3JsMBMGA1UdJQQMMAoG
// SIG // CCsGAQUFBwMIMCgGA1UdEQQhMB+kHTAbMRkwFwYDVQQD
// SIG // ExBUaW1lU3RhbXAtMjA0OC0zMB0GA1UdDgQWBBSvY9bK
// SIG // o06FcuCnvEHzKaI4f4B1YjAfBgNVHSMEGDAWgBS2d/pp
// SIG // SEefUxLVwuoHMnYH0ZcHGTANBgkqhkiG9w0BAQsFAAOC
// SIG // AQEAdeqwLdU0GVwyRf4O4dRPpnjBb9fq3dxP86HIgYj3
// SIG // p48V5kApreZd9KLZVmSEcTAq3R5hF2YgVgaYGY1dcfL4
// SIG // l7wJ/RyRR8ni6I0D+8yQL9YKbE4z7Na0k8hMkGNIOUAh
// SIG // xN3WbomYPLWYl+ipBrcJyY9TV0GQL+EeTU7cyhB4bEJu
// SIG // 8LbF+GFcUvVO9muN90p6vvPN/QPX2fYDqA/jU/cKdezG
// SIG // dS6qZoUEmbf4Blfhxg726K/a7JsYH6q54zoAv86KlMsB
// SIG // 257HOLsPUqvR45QDYApNoP4nbRQy/D+XQOG/mYnb5DkU
// SIG // vdrk08PqK1qzlVhVBH3HmuwjA42FKtL/rqlhgTCCBUsw
// SIG // ggQzoAMCAQICEFRY8qrXQdZEvISpe6CWUuYwDQYJKoZI
// SIG // hvcNAQELBQAwdzELMAkGA1UEBhMCVVMxHTAbBgNVBAoT
// SIG // FFN5bWFudGVjIENvcnBvcmF0aW9uMR8wHQYDVQQLExZT
// SIG // eW1hbnRlYyBUcnVzdCBOZXR3b3JrMSgwJgYDVQQDEx9T
// SIG // eW1hbnRlYyBTSEEyNTYgVGltZVN0YW1waW5nIENBMB4X
// SIG // DTE3MDEwMjAwMDAwMFoXDTI4MDQwMTIzNTk1OVowgYAx
// SIG // CzAJBgNVBAYTAlVTMR0wGwYDVQQKExRTeW1hbnRlYyBD
// SIG // b3Jwb3JhdGlvbjEfMB0GA1UECxMWU3ltYW50ZWMgVHJ1
// SIG // c3QgTmV0d29yazExMC8GA1UEAxMoU3ltYW50ZWMgU0hB
// SIG // MjU2IFRpbWVTdGFtcGluZyBTaWduZXIgLSBHMjCCASIw
// SIG // DQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJnz/NgE
// SIG // CQOG+ddcppPAQnzqfGPPXQDijvPAkN+PKfUY6pS3kuXX
// SIG // sKBzgejpCptKfAH/nY+kOacO6kX0Igw6cO05RYvkxRtc
// SIG // 8EVoRiQFY3abHPyebCqxVuWKf1JxrvI11UYjBhzPSC0d
// SIG // tM242XYjjhz/Pr+7BlxpB6ZlDvhern0u7U2uNe/J1wBC
// SIG // /SiVDp9dckIJvMPaRNLtzEeE5PzKLaxYvq73rtlEDQi3
// SIG // wnfWGkNw0W4D3lKSxBAIcdm6IlXyH7ztm5074l4dTIP/
// SIG // lw97C+dVg07SDeu+1+yubke5n9+l1lG8BFXt/ydwTMnt
// SIG // KksT4bG5TA/JAe5VZV9pAnhmyz8CAwEAAaOCAccwggHD
// SIG // MAwGA1UdEwEB/wQCMAAwZgYDVR0gBF8wXTBbBgtghkgB
// SIG // hvhFAQcXAzBMMCMGCCsGAQUFBwIBFhdodHRwczovL2Qu
// SIG // c3ltY2IuY29tL2NwczAlBggrBgEFBQcCAjAZGhdodHRw
// SIG // czovL2Quc3ltY2IuY29tL3JwYTBABgNVHR8EOTA3MDWg
// SIG // M6Axhi9odHRwOi8vdHMtY3JsLndzLnN5bWFudGVjLmNv
// SIG // bS9zaGEyNTYtdHNzLWNhLmNybDAWBgNVHSUBAf8EDDAK
// SIG // BggrBgEFBQcDCDAOBgNVHQ8BAf8EBAMCB4AwdwYIKwYB
// SIG // BQUHAQEEazBpMCoGCCsGAQUFBzABhh5odHRwOi8vdHMt
// SIG // b2NzcC53cy5zeW1hbnRlYy5jb20wOwYIKwYBBQUHMAKG
// SIG // L2h0dHA6Ly90cy1haWEud3Muc3ltYW50ZWMuY29tL3No
// SIG // YTI1Ni10c3MtY2EuY2VyMCgGA1UdEQQhMB+kHTAbMRkw
// SIG // FwYDVQQDExBUaW1lU3RhbXAtMjA0OC01MB0GA1UdDgQW
// SIG // BBQJtcH+lnKXKUOayeACuq74/S+69jAfBgNVHSMEGDAW
// SIG // gBSvY9bKo06FcuCnvEHzKaI4f4B1YjANBgkqhkiG9w0B
// SIG // AQsFAAOCAQEAF7MKiOlcWl4gazsKFbJsxamKMofTsfQc
// SIG // U66Fvj+b/9e8t5SFtMdSfpTove1hstSnmeTDyZPBNT0L
// SIG // 6GgKXVaYvbEiO9FEete/8G1RMorVI984ATf24lMreisR
// SIG // j7dNbHozAxt8awmUF7vk21jUIRNl5+zRJcosdZqcf/zJ
// SIG // uypoq8R9tM+jyWyn2cQAnIkKd5H0TaL7MTuGbvbmH1AD
// SIG // hpu/y0Kr5nabcloRAYrG76VvlefdrrrmImXwGFkbEcnN
// SIG // gLfYl0cfQgj4rHEfsEZTs9Sy1aOrUHVIEheCrc/gQU8y
// SIG // fs2VHL+Rigg9pKdnApbfJEyl0EHAgmCjihcyS9O8z6S0
// SIG // jDGCAlowggJWAgEBMIGLMHcxCzAJBgNVBAYTAlVTMR0w
// SIG // GwYDVQQKExRTeW1hbnRlYyBDb3Jwb3JhdGlvbjEfMB0G
// SIG // A1UECxMWU3ltYW50ZWMgVHJ1c3QgTmV0d29yazEoMCYG
// SIG // A1UEAxMfU3ltYW50ZWMgU0hBMjU2IFRpbWVTdGFtcGlu
// SIG // ZyBDQQIQVFjyqtdB1kS8hKl7oJZS5jALBglghkgBZQME
// SIG // AgGggaQwGgYJKoZIhvcNAQkDMQ0GCyqGSIb3DQEJEAEE
// SIG // MBwGCSqGSIb3DQEJBTEPFw0xNzExMTUyMTMwNTZaMC8G
// SIG // CSqGSIb3DQEJBDEiBCCbxig9vYc05cz4R7Exmzi+l5wl
// SIG // L9FnzT9BW4BiawzKRDA3BgsqhkiG9w0BCRACLzEoMCYw
// SIG // JDAiBCDPesF60Efs1f3DaCIDGxLU7weLbytMXmukH4/y
// SIG // z0utZzALBgkqhkiG9w0BAQEEggEAWmzWpjfoLnpsPB6H
// SIG // Rby6iqHABQn2Zi3cEO859XAlUf3ueifoMMqUh3F8tEjM
// SIG // ht2ZVDhoVbw1jJD2lsusisPeHMJoX/G2du1kEke4ro2S
// SIG // psFD0ORm7CuQNDGgLVgvvQrveynsui5GJ5bgZKHtAFlZ
// SIG // 5vi+UR5vc7IOJRF0kks7uftWkaAp87jmmly2Jo7K1vzI
// SIG // typmtYUiM3ywhuUflHrmlUD1ok8l+PD/VzRfrbQCybGd
// SIG // TS/mpBIbWIT1A8ZK3iV55enfPvg3ErO7hscWEOAI8Sng
// SIG // cRD60Vb6rpv5xfEWT2dhwpkoB6co0xdgB1N7lCyZ1cOX
// SIG // MrW61HEd1xQKBQCN6g==
// SIG // End signature block

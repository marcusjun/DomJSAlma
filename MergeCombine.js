function ab() {
	function monitorImports(){
		var aTags = document.getElementsByTagName("a")
		var searchText = "MENU_LINK_ID_comexlibrisdpswrkgeneralmenuResMngMDImportMonitorViewImports"


		for (var i = 0; i < aTags.length; i++) {
				if (aTags[i].id === searchText) {
					aTags[i].click()
					break
				}
		}
	}

	function manualHandling(){
		var aTags = document.getElementsByTagName("a")
		var searchText1 = "Manual Handling Required"
		var searchText2 = "Manual Handling required (still processing files)"


		for (var i = 0; i < aTags.length; i++) {
				if (aTags[i].textContent === searchText1 || aTags[i].textContent === searchText2) {
					aTags[i].click()
					break
				}
		}
	}

	function checkMerge(){
		var inputs = document.getElementsByTagName('input')

		for(var i = 0; i < inputs.length; i++) {
		    inputs[i].checked=true
		}

		var aTags = document.getElementsByTagName("a")
		var searchText = "Merge Records and Combine Inventory"


		for (var i = 0; i < aTags.length; i++) {
	  		if (aTags[i].textContent === searchText) {
	   			aTags[i].click()
	    		break
	  		}
		}
	}

	function clickSubmit(){
		var buttons=document.getElementsByTagName("button")
		var titleValue="Submit"
		for (var i = 0; i < buttons.length; i++) {
			if (buttons[i].textContent===titleValue){
				buttons[i].click()
				break
			}
		}
	}
	monitorImports()

	setTimeout(manualHandling,8000)

	setTimeout(checkMerge,17000)

	setTimeout(clickSubmit,35000)

}

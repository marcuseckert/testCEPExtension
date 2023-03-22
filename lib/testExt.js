TestExt = (function(){
	
	var csInterface = new CSInterface()

	var ob = {}

	ob.didLoad = function(){
		console.log("did load")
		
		var extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) + "/jsx/";
		var mainScript= csInterface.getSystemPath(SystemPath.EXTENSION) + "/lib/MainScript.js";
		console.log("root", extensionRoot)
		csInterface.evalScript(' 10.0;', (v) => {
			for (var i = 0; i<arguments.length; ++i) {
				console.log(arguments[i])
			}
            console.log("did load files A", v)
        });
		
		csInterface.evalScript('$.script.evalFiles("' + extensionRoot + '")', (value) => {
            console.log("did load files")
        });
    
	}

	ob.didClick = function() {
		console.log("did click")
		console.log(csInterface)

		// csInterface.evalScript('alert("helo");', (value) => {
        //     console.log("did call extend script", value)
        // });
	
		csInterface.evalScript('$.dummy.iterate()', (value) => {
            console.log("did call extend script", value)
        });
	}

	return ob

})()
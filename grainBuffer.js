var pb = new PolyBuffer(jsarguments[1]);
var fileNameDict = new Dict(jsarguments[1])
var selection = new Array();
var fileCount = 1;
var maxSamples = 100;


function openwindow() {
    pb.open();
}


function closewindow() {
    pb.wclose();
}

function append(fileName) {
    pb.append(fileName);
	fileNameDict.set(fileName, fileCout);
	var curFile = "0;" + fileName + ";0";
	selection.push(curFile);
	fileCout++;

}

function appendSelection(fileName) {
   selection.push(fileName);

}

function get() {
	if(selection.length > 0)
	{
		var curMax = maxSamples;
		if(selection.length < curMax)
		{
			curMax = selection.length;
		}	
		var i = Math.floor(Math.random() * curMax);
		var stringArray = selection[i].split(";");
		var curFile = parseInt(fileNameDict.get(stringArray[1]));
		var curPos = stringArray[2];
		outlet(0, [jsarguments[1] + "." + curFile, parseFloat(stringArray[2])]);
	}
}

function setMax(curMax)
{
	maxSamples = curMax;
}

function clear() {
    pb.clear();
	clearSelection();
	fileNameDict.clear();
	fileCout = 1;
}

function clearSelection() {
    selection = []
}
inlets = 1;
outlets = 2;
var memstr;
var _recall = new Dict(jsarguments[1]);

function loadFromDict()
{
	keys = _recall.getkeys();
	if(keys != null)
	{
		for(i = 0; i < keys.length; i++)
		{
			var a = _recall.get(keys[i]);
			outlet(0, a);
			outlet(1, i);
		}
	}
	
}

function load(path)
{
	memstr = "";
	var f = new File(path);
	f.open();
	if (f.isopen)
	{
		while(f.position<f.eof)
		{
			memstr+=f.readstring(800);
		}
		f.close();
	} 
	else
	{
		post("Error\n");
	}
	data = JSON.parse(memstr);
	
	for(i = 0; i < data["files"].length; i++)
	{
		_recall.set(String(i), data["files"][i]);
		outlet(0, data["files"][i]);
		outlet(1, i);
	}
	
}
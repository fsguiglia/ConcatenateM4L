inlets = 1;
outlets = 2;
var memstr;

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
		outlet(0, data["files"][i]);
		outlet(1, i);
	}
	
}
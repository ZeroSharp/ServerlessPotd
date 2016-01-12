export class Generator 
{
	generate(date: Date) : string 
	{
        // simple password for now...
		return "Password";
	}	
	
	check(password : string) : boolean 
	{
		var today = new Date();
		var generator = new Generator();
		return password == generator.generate(today);
	}
} 
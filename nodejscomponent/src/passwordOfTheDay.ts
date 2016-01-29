export function checkPotd(password : string) : boolean
{
    return new PasswordGenerator().check(password);
}

export class PasswordGenerator 
{
	generate(date: Date) : string 
	{
        // generate today's password
 		return "Password"; 
	}	
	
	check(password : string) : boolean 
	{
        // check the value matches today's password of the day
		return password == this.generate(new Date());
	}
} 
let rows=prompt("Enter Number Of Rows")
rows=Number.parseInt(rows);
let pattern="";
for(let i=0;i<=rows;i++)
{
    for(let a=rows-i;a>=1;a--)
    {
        document.write("&nbsp");
    }
    for(let j=0;j<=i;j++)
    {
        document.write("*");
    }
    document.write("<br>")
    
}

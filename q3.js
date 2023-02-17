const name=prompt("Enter Your Name");
let marks=prompt("Enter Your Marks")
marks=Number.parseInt(marks);
if(marks>=97 && marks<=100)
{
    document.write("A+");
}
else if(marks>=93 && marks<=96)
{
    document.write(name+"has scored"+" A");
}
else if(marks>=90 && marks<=92)
{
    document.write(name+"has scored"+" A-");
}
else if(marks>=90 && marks<=92)
{
    document.write(name+"has scored"+" B+");
}
else if(marks>=83 && marks<=86)
{
    document.write(name+"has scored"+" B");
}
else if(marks>=80 && marks<=82)
{
    document.write(name+"has scored"+" B-");
}
else if(marks>=77 && marks<=79)
{
    document.write(name+"has scored"+" C+");
}
else if(marks>=73 && marks<=76)
{
    document.write(name+"has scored"+" C");
}
else if(marks>=70 && marks<=72)
{
    document.write(name+"has scored"+" C-");
}
else if(marks>=67 && marks<=69)
{
    document.write(name+"has scored"+" D+");
}
else if(marks>=65 && marks<=66)
{
    document.write(name+"has scored"+" D");
}
else if(marks>=0 && marks<=65)
{
    document.write(name+"has scored"+" E");
}
else{
    document.write("Please enter valid marks")
}
let number=prompt("Enter Number");
number=Number.parseInt(number);
const result=(number)=>{
    return number%2==0?"even":"odd";
}
document.write(result(number));

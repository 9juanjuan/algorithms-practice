
// tip calculator return total amount of total in array after tip 
   let _tipCalc = (bills) =>{
    let total = 0;
    let totals = [];
    for (bill of bills) {
        switch (bill) {
            case (bill < 50):
                totals.push((bill*.20)+bill);
                break;
            case (bill > 50 && bill < 200):
                totals.push((bill*.25)+bill);
                break;
            default: 
            totals.push((bill*.10)+bill);
                break; 
        }
    }
    return totals
}
console.log(_tipCalc([124,48,268,180]));
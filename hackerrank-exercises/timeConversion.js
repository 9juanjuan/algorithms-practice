// Given a time 12in -hour AM/PM format, convert it to military (24-hour) time.
// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.


// SOLUTION NOT OPTIMAL, next step is to refactor and clean up code
function timeConversion(s) {
    /*
     * Write your code here.
     */
    let newS =''
    let newTime = 12
    var newnewnewTime;
    let firstTwo= s.charAt(0);
    if (s.charAt(8) === 'P') {
        if (s.charAt(0) === '0') {
            newTime += parseInt(s.charAt(1))
            var newnewTime= newTime.toString();
            newS = s.slice(2, 8)
             newnewnewTime = newnewTime.concat('', newS)
           console.log(newnewnewTime)
            //  s.replace(newTime.toString(), s.substring(0,2))
        } else if (s.charAt(0) === '1' && s.charAt(1) !=='2') {
            firstTwo.concat('', s.charAt(1))
            var newnewTime = firstTwo.concat('', s.charAt(1));
            newTime += parseInt(newnewTime);
            console.log(newTime);
            var newnewTime = newTime.toString();
            newS = s.slice(2, 8)
            newnewnewTime = newnewTime.concat('', newS)
        } else if (s.charAt(1) === '2') {
            newnewnewTime = s.slice(0,8)
        } 
    }
    if (s.charAt(8) === 'A') {
        if (s.charAt(1) !== '2') {
            newnewnewTime = s.slice(0, 8)
        } else if (s.charAt(1) === '2') {
            newS = s.slice(2,8)
            newnewnewTime = '00'.concat('',newS)
        }
    }
    return newnewnewTime
}
// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".


var defangIPaddr = (address)=> {
    let newAddress = address.split(".")
    let newOutput = []
    for (let i=0; i < newAddress.length; i++) {
        if ( newAddress[i] != '.') {
            newOutput.push(newAddress[i])
        }
    }
    return (newOutput.join('[.]'))
};

console.log(defangIPaddr('255.100.50.0'))
//rest
function addNumbers(...restNumber) {
    console.log(restNumber)
    return null;
    
}
addNumbers(2,4,5,6,7);

//spread
function logNames(name1,name2,name3) {
    console.log(name1,name2,name3);
}
var names =['neha' ,'kratika','dev']
logNames( names[0],names[1],names[2])
logNames(...names);
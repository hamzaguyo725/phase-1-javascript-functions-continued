// code your solution here
function saturdayFun (activity) {
  if(activity==null) {return "This Saturday, I want to roller-skate!"}
  else {return `This Saturday, I want to `+ activity +`!`}
}
console.log(activity('bathe my dog'))

function mondayWork(activity){
    if (activity==null){return "This Monday, I will go to the office."}
    else{return `This Monday, I will `+ activity +`.` }
}
console.log(activity='work from home')



function wrapAdjective(name){
    return function wrap(emphatic){
        return `You are ${name}`+ emphatic + `${name}!`;
    }
    }
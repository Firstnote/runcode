let arr = []
let arr1 = []
let fun = []

function getUserById(userId) {
  if(arr.length<1){
    setTimeout(()=>{
      getUserByIds(arr)
      arr = []
    },300)
  }
  arr.push(userId)
  fun.push(success)
}
function getUserByIds(userIds) {
  console.log(userIds)
  return Promise.all(userIds).then(val=>{
    val.forEach((item,index)=>{
      fun[index](item)
    })
  })
}
getUserById(1).then(res=>{console.log(res)})
getUserById(2).then(res=>{console.log(res)})
getUserById(3).then(res=>{console.log(res)})
getUserById(4).then(res=>{console.log(res)})
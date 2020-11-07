let arr = []
let resarr = {}
function getUserById(userId) {
  if(arr.length<1){
    setTimeout(()=>{
      getUserByIds(arr)
      arr = []
    },300)
  }
  arr.push(userId)
}
function getUserByIds(userIds) {
  let arr = []
  userIds.forEach(item=>{
    let pro = new Promise((res,rej)=>{
      res(item)
    })
    arr.push(pro)
  })
  // 可加逻辑，如果userIds中只有一个元素的情况
  Promise.all(arr).then(res=>{
    console.log(res)
  })
}
getUserById(1)
getUserById(2)
getUserById(3)
getUserById(4)
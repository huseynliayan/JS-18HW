let users = []
 
document.getElementById('registration-form').addEventListener('submit',(ev) =>{
    ev.preventDefault()
    let formData = new FormData(ev.target)
    let values  =[...formData]
    let user = {}
    values.forEach((item) => {
        user[item[0]] = item[1]
    })
    console.log(user)
    users.push(user)
    console.log(users)
})
 
 
document.getElementById('login-form').addEventListener('submit',(ev) =>{
    ev.preventDefault()
    let formData = new FormData(ev.target)
    let values  = [...formData]
    let login = {}
    values.forEach((item) => {
        login[item[0]] = item[1]
    })
    let loginedUser = users.find((item) => login.password == item.password && login.email == item.email)
    console.log(loginedUser)
    if(loginedUser){
        console.log(loginedUser, 'loginedUser')
    }
 
})
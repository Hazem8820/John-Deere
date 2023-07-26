let title = document.getElementById('title')
let content = document.getElementById('content')
let userid = document.getElementById('userid')
let userName = document.getElementById('idName')
let inemail = document.getElementById('inEmail')
let email = document.getElementById('idEmail')
let password = document.getElementById('idPass')
let inpassword = document.getElementById('inPass')
let age = document.getElementById('idAge')
let signupUser = document.getElementById('signup')
let signinUser = document.getElementById('signin')
let crud = document.getElementById('crud')
let alert404 = document.getElementById('alert2')

function showData() {
    fetch('http://localhost:8000/note/get')
        .then(response => response.json())
        .then(responseData => {
            let Data = ''
            let counter = 1
            for (const note of responseData.data) {
                Data += `<tr>
                <td>${counter++}</td>
                <td>${note.title}</td>
                <td>${note.content}</td>
                <td>${note.User_id}</td>
                <td><button onclick="updateData(${note.id})" class="btn btn-warning">Update</button></td>
                <td><button onclick="deleteData([${note.id},${note.User_id}])" class="btn btn-danger">Delete</button></td>
            </tr>`
            }
            document.getElementById('tbody').innerHTML = Data
        })
}


function addData() {
    const newData = {
        title: title.value,
        content: content.value,
        User_id: userid.value
    }
    fetch('http://localhost:8000/note/add', {
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json()).then(responseData => {
        if (responseData?.message == 'Failed') {
            document.getElementById('alert1').classList.replace('d-none', 'd-block')
        } else {
            document.getElementById('alert1').classList.replace('d-block', 'd-none')
            showData()
            title.value = ' '
            content.value = ' '
            userid.value = ' '
        }
    })
}

function deleteData(id) {
    const newData = {
        User_id: id[1]
    }
    fetch(`http://localhost:8000/note/delete/${id[0]}`, {
        method: "DELETE",
        body: JSON.stringify(newData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json()).then(responseData => {
        if (responseData?.message == 'success') {
            showData()
        }
    })
}

function updateData(id) {
    const newData = {
        title: title.value,
        content: content.value,
        User_id: userid.value
    }
    fetch(`http://localhost:8000/note/update/${id}`, {
        method: "PUT",
        body: JSON.stringify(newData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json()).then(responseData => {
        if (responseData?.message == 'success') {
            title.value = ' '
            content.value = ' '
            userid.value = ' '
            showData()
        }
    })
}

function signup() {
    const newData = {
        name: userName.value,
        email: email.value,
        password: password.value,
        age: age.value
    }
    fetch('http://localhost:8000/user/signup', {
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json()).then(responseData => {
        if (responseData?.message == 'success') {
            signupUser.classList.add('d-none')
            signinUser.classList.replace('d-none', 'd-block')
        }
    })
}

function signin() {
    const newData = {
        email: inemail.value,
        password: inpassword.value
    }
    fetch('http://localhost:8000/user/signin', {
        method: "POST",
        body: JSON.stringify(newData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json()).then(responseData => {
        if (responseData?.status == 'success') {
            signinUser.classList.add('d-none')
            crud.classList.replace('d-none', 'd-block')
            showData()
        }
        else {
            alert404.innerText = responseData?.reason
        }
    })
}
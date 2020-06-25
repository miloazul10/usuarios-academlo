import { usersAcademlo } from './users.js'
// Resolver desde 0 ejercicio de usuarios
// Ejercicios:
// Asingar el id del nuevo usuario
// Agregar el nuevo usuario al inicio
// Hacer que funcione el botón eliminar

// function saludo(event) {
//     // Cancela la acción que se dispara por defecto
//     event.preventDefault()
//     alert('hola')
// }
// const links = document.querySelectorAll('a')
// links[0].addEventListener('click', saludo)

// Rutas relativas
// Eventos
// https://www.w3schools.com/js/js_events.asp
// Query Selector
// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector

// Sort by object property
// usersAcademlo.sort((a, b) => a.name > b.name ? 1 : -1 )
// podemos comparar dos valores utilizando pasando un callback al método sort, esto
// puede ser una alternativa para elegir la manera en que ordenamos los elementos
// si el resultado es negativo a es puesto antes de b
// si el resultado es positivo b es puesto antes de a
// si el resultado es 0, no se cambia el orden
// Esto es más comunmente utilizado para comparar números pero como podemos ver funciona
// con otros tipos de datos
// https://www.w3schools.com/js/js_array_sort.asp
// console.log(usersAcademlo)

// *Notas de clase
// document.getElementById('id-del-elemento').value -> un elemento
// document.getElementsByClassName('nombre-de-la-clase') -> array de elementos

// 1. Obtener el elemento donde quiero insertar el HTML
// 2. Generar el html
// 3. Insertar el html generado


// No es tan buena manera de hacerlo
// function createRow() {
//     const tableBody = document.querySelector('tbody')

//     for(let i = 0; i < usersAcademlo.length; i++) {
//         usersAcademlo[i].index = i + 1
//         tableBody.innerHTML += returnHTMLRow(usersAcademlo[i])
//     }
// }
// function returnHTMLRow(user) {
//     return `<tr>
//         <th>${user.index}</th>
//         <td>${user.name}</td>
//         <td>${user.lastname}</td>
//         <td>${user.email}</td>
//     </tr>`
// }

// function addUser() {
//     const name = document.getElementById('name').value
//     const lastname = document.getElementById('lastname').value
//     const email = document.getElementById('email').value

//     const totalUsers = usersAcademlo.length
//     // const newUser = {name, lastname, email}
//     const newUser = {
//         index: totalUsers + 1,
//         name: name,
//         lastname: lastname,
//         email: email
//     }
//     usersAcademlo.unshift(newUser)
//     const tableBody = document.querySelector('tbody')
//     const allHTML = returnHTMLRow(newUser) + tableBody.innerHTML
//     tableBody.innerHTML = allHTML
// }

// createRow()
function printUsers(users) {
    const tableBody = document.querySelector('tbody')
    tableBody.innerHTML = ''
    users.forEach((user, index) => {
        tableBody.innerHTML += `<tr>
                                <th>${index + 1}</th>
                                <td>${user.name}</td>
                                <td>${user.lastname}</td>
                                <td>${user.email}</td>
                                <td>
                                    <button onclick="removeUser(${index})" class='btn btn-danger'>Eliminar</button>
                                </td>
                            </tr>`

    })
}
function addUser() {
    const nameInput = document.getElementById('name')
    const lastname = document.getElementById('lastname').value
    const email = document.getElementById('email').value
    const genderInput = document.getElementById('gender')
    const newUser = {
        name: nameInput.value,
        lastname: lastname,
        email: email,
        genderInput: gender.value
    }
    usersAcademlo.unshift(newUser)
    printUsers(usersAcademlo)
    nameInput.value = ''
    genderInput.value = 'male'
}
// Filter
function filter() {
    const filter = document.getElementById('filter').value

    switch(filter) {
        case 'academlo':
          printAcademloUsers()
          break;
        case 'female':
            printByGender('female')
          break;
        case 'sort':
            printSortedByName()
            break;
        default:
            alert('No entro a ningún caso')
          // code block
      }
    // alert(`filtramos por ${filter}`)
}
function printByGender(filter) {
    const filteredUsers = usersAcademlo.filter(function(user) {
        return user.gender == filter
    })
    printUsers(filteredUsers)
}

function printAcademloUsers() {
    const filteredUsers = usersAcademlo.filter(function(user) {
        return user.email.endsWith("@academlo.com")
    })
    printUsers(filteredUsers)
}
function printSortedByName() {
    usersAcademlo.sort((a, b) => {
        return a.name > b.name ? 1 : -1
    })
    printUsers(usersAcademlo)
}

// Remove user
function removeUser(index) {
    usersAcademlo.splice(index, 1)
    printUsers(usersAcademlo)
}



window.addUser = addUser
window.printByGender = printByGender
window.removeUser = removeUser
window.filter = filter


printUsers(usersAcademlo)

let choreList = document.getElementById('chore-list')
let chorecontainer = document.getElementById('container')
let choreform = document.getElementById('new-chore-form')
let titleform = document.getElementById('title')
let priorityform = document.getElementById('priority')
let durationform = document.getElementById('duration')

choreform.addEventListener('submit', function(event) {
  event.preventDefault()
  fetch('http://localhost:3000/chores',
  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify({
        title: titleform.value,
        priority: priorityform.value,
        duration: durationform.value
      })
    }).then(function(response) {
      return response.json()
    }).then(function(chore){
      choreList.innerHTML += `<div class="chore-card">
                  <button class="delete-button" data-id="${chore.id}">x</button>
                  <h3> ${chore.title} </h3>
                  <p> Duration: ${chore.duration} </p>
                <input value="${chore.priority}"></div>`
    })


})


fetch ('http://localhost:3000/chores').then(function(response) {
return response.json()
}).then(function(json) {

json.forEach((chore)=> {

choreList.innerHTML += `<div class="chore-card">
            <button class="delete-button" data-id="${chore.id}">x</button>
            <h3> ${chore.title} </h3>
            <p> Duration: ${chore.duration} </p>
          <input value="${chore.priority}"></div>`

})

chorecontainer.addEventListener('click', function(event) {
  if(event.target.className === 'delete-button') {
    let  targetid = event.target.dataset.id
    event.target.parentElement.remove()

    fetch(`http://localhost:3000/chores/${targetid}`,
    {
        method: 'DELETE'
      })

  }

})










//
// function deleteData(item, url) {
//   return fetch(url + '/' + item, {
//     method: 'delete'
//   })
//   .then(response => response.json());
// }








})

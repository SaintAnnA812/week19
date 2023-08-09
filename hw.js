//задание 1

let container = document.getElementById('container');

//раскомментируйте, пожалуйста, код ниже

/*fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => {
        json.forEach((elem) => {
            container.innerHTML += `<div class='header'>Заголовок: ${elem.title}</div> <br /> <div class='article'>Статья: ${elem.body}</div><br/>`

        })
    })
    */

//задание 2

function createPost() {

    let post = {
        head: document.getElementById('headPost').value,
        text: document.getElementById('textPost').value
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then((post) => {
            document.getElementById('newPost').innerHTML = `<br/><h3 class='headP'>${post.head}</h3><p>${post.text}</p>`;
        })
}

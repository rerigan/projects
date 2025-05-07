fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => {
        console.log(posts)
        const container = document.querySelector('#container')
        posts.map(post => {
            console.log(post.title)
            const h2 = document.createElement('h2')
            const h3 = document.createElement('p')
            h2.textContent = post.title
            h3.textContent = post.body
            
            container.appendChild(h2)
            container.appendChild(h3)
        })
    })
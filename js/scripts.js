// caricamento array di oggetti
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15",
            "fallback":"PM"
        },
        "likes": 80,
        "created": "25-06-2021"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10",
            "fallback":"SP"
        },
        "likes": 120,
        "created": "03-09-2021"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20",
            "fallback":"CP"
        },
        "likes": 78,
        "created": "15-05-2021"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null,
            "fallback":"LF"
        },
        "likes": 56,
        "created": "03-04-2021"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29",
            "fallback":"AS"
        },
        "likes": 95,
        "created": "05-03-2021"
    }
];


// stampo l'array di oggetti nel dom tramite js

for (let i = 0; i < posts.length; i ++)
{const postContainer = document.querySelector('.posts-list');
    postContainer.innerHTML +=

        `<div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src=${posts[i].author.image} alt=${posts[i].author.fallback}>                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${posts[i].author.name}</div>
                        <div class="post-meta__time">${posts[i].created}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${posts[i].content}</div>
            <div class="post__image">
                <img src=${posts[i].media} alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" data-postid="${i+1}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-${i+1}" class="js-likes-counter">${posts[i].likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;
    
    
}

// seleziono i bottoni

let likeButton = document.querySelectorAll('.like-button');
        
        
// seleziono i contatori dei like
let likeCounter = document.querySelectorAll('.js-likes-counter');
        
for (let i = 0; i < posts.length; i++) {
        
    // al click aumento il valore del contatore e cambio la classe del pulsante
            
    const baseLike = posts[i].likes;
    likeButton[i].addEventListener('click',
        function() {
            // se il contatore è uguale al valore originale dei like del post aumenta, altrimenti diminuisce
            if (likeCounter[i].innerHTML == baseLike) {
                posts[i].likes++;
                likeCounter[i].innerHTML++;
                
            } else {
                   posts[i].likes--;
                likeCounter[i].innerHTML--;
                
               }
        
               // al click aggiunge la classe, cliccando di nuovo la toglie
            likeButton[i].classList.toggle('like-button--liked');
        }
    );
}
        

// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector('.cards-container')

axios.get("https://lambda-times-backend.herokuapp.com/articles")

.then(response => {
    console.log(response.data)

    const articleTopics = response.data.articles

    const articleKeys = Object.keys(articleTopics) 
    
    console.log(articleKeys)


    articleKeys.forEach( (element) => {
        const articleList = articleTopics[element]

        console.log(articleList)

        articleList.forEach((i) =>
        {
            cardsContainer.appendChild((cardMaker(i)))
        })
        
        
    })

    
        
        
    



    

})
.catch(err => {console.log("something went wrong")})

.then(() => {console.log("success")})

function cardMaker(item) {
    const cardDiv = document.createElement('div')
    const headDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imgBox =
    document.createElement('div')
    const authorImg = document.createElement('img')
    const authName = document.createElement('span')

headDiv.textContent = item.headline
authorImg.src = item.authorPhoto
authName.textContent = `By: ${item.authorName}`

cardDiv.appendChild(headDiv)
cardDiv.appendChild(authorDiv)
authorDiv.appendChild(imgBox)
imgBox.appendChild(authorImg)
authorDiv.appendChild(authName)


cardDiv.classList.add('card')
headDiv.classList.add('headline')
imgBox.classList.add('img-container')
authorImg.classList.add('img')
authorDiv.classList.add ('author')
authName.classList.add('span')


return cardDiv
}
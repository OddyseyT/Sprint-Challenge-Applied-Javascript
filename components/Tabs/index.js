// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>



const topicEntry = document.querySelector('.topics')

axios.get("https://lambda-times-backend.herokuapp.com/topics")

.then(response => {
    console.log(response.data)

    const topicList = response.data.topics

    console.log(topicList)

    topicList.forEach((i) => {topicEntry.appendChild(tabMaker(i))})

})
.catch(err => {console.log("something went wrong")})

.then(() => {console.log("success")})

function tabMaker(element) {
  const tabDiv = document.createElement('div')

  tabDiv.textContent = element

  tabDiv.classList.add('tab')

  return tabDiv

}
 


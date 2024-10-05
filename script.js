//   All post function
const loadAllPost = async (category) => {
    // console.log(category)
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts${category?`?category=${category}`:''}`)
    const data = await res.json();
    displayData(data.posts)
}
loadAllPost()

document.getElementById('post-container').innerHTML='';
// display data post
const displayData = (data) => {
    const postContainer = document.getElementById('post-container')

    data.forEach(post => {
        const div = document.createElement('div')
        div.classList = "m-5"
        div.innerHTML= `
        <div class="card card-side bg-base-100 shadow-xl">
                    <figure>
                      <img class="w-[200px] h-[200px] rounded-full"
                        src="${post.image}"
                        alt="Movie" />
                    </figure>
                    <div class="card-body">
                        <p>${post.category}<span> ${post.author.name}</span></p>
                      <h2 class="card-title">${post.title}</h2>
                      <p>${post.description}</p>
                      <div class="border-2 border-dashed"></div>
                      <div class="card-actions justify-between">
                        <p><span>${post.comment_count} </span> <span>${post.view_count} </span> <span>${post.posted_time}</span></p>
                        <button id="addToList" onclick="markBtn('${post.description}', '${post.view_count}')" class="btn btn-primary">Watch</button>
                      </div>
                    </div>
                </div>
        `
        postContainer.append(div)
    });
}

// mark button
const markBtn = (description, view_count) => {
    
    const titleCard = document.getElementById('title-card')
    const div = document.createElement('div')
    div.innerHTML= `
    <div class="card bg-base-100 w-96 shadow-xl">
                    <div class="flex flex-col gap-4">
                      <div class="flex justify-between">
                        <h2 class="card-title">title</h2>
                        <p>Mark as read <span id="markVew">0</span></p>
                      </div>
                      <div class="flex justify-between items-center">
                        <p></p>
                        <p></p>
                      </div>
                    </div>
                </div>
    `
    titleCard.append(div)
}

//    Search categorey function
const searchCategory =() => {
    const searchText = document.getElementById('search').value;
    loadAllPost(searchText)
}

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let postItems = ""
for(let post of posts){
    postItems += `
        <div class="card">
            <div class="card-top">
                <img class="avatar" src="${post.avatar}" alt="${post.name}">
                <h2>${post.name} <span>${post.location}</span></h2>
            </div>
            <img src="${post.post}" alt="${post.name}" class="img-main">
            <div class="card-buttons">
                <img src="images/icon-heart.png" alt="Like" class="img-btn">
                <img src="images/icon-comment.png" alt="Comment" class="img-btn">
                <img src="images/icon-dm.png" alt="Share" class="img-btn">
            </div>
            <p>${post.likes} likes</p>
            <p>${post.username} <span>${post.comment}</p>
        </div>
    `
}

let main = document.getElementById("main")
main.innerHTML = postItems

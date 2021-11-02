const posts = [

    {postTitle : "Deneme Bir post"},
    {postTitle : "Deneme Bir post 2"} 
]


const listPosts = () => {

    posts.map(post => {
        console.log(post.postTitle)
    })

}


const addPost = (newPost, callback) => {

    posts.push(newPost)
    console.log("YEni Post Eklendi")
    callback();

}

listPosts();

addPost({postTitle : "Deneme post 3"}, listPosts);





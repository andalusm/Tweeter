const tweeter = Tweeter()
const renderer = Renderer()

const postInput = $('#input')

const post= function(){
    const postText =postInput.val()
    tweeter.addPost(postText)
    postInput.val('')
    render()
}

const render = () => {
    renderer.renderPosts(tweeter.getPosts())




$('.delete').on("click",function(){
    const postID = $(this).closest(".post").data().id
    tweeter.removePost(postID)
    render()
})

$('.delete-comment').on("click",function(){
    const postID = $(this).closest(".post").data().id
    const commentID = $(this).closest(".comments").data().id
    tweeter.removeComment(postID,commentID)
    render()
})

$('.comment').on("click",function(){
    const commentText = $(this).siblings(".postComment").val()
    const postID = $(this).closest(".post").data().id
    tweeter.addComment(commentText, postID)
    render()
});



}
render()
const tweeter = Tweeter()
const renderer = Renderer()

const postInput = $('#input')

const post = function () {
    const postText = postInput.val()   
    try {
        tweeter.addPost(postText)
    }
    catch (err) {
        alert(err.message)
    }
    postInput.val('')
    render()
}




$('#posts').on("click", ".delete", function () {
    const postID = $(this).closest(".post").data().id
    tweeter.removePost(postID)
    render()
})

$("#posts").on("click", '.delete-comment', function () {
    const postID = $(this).closest(".post").data().id
    const commentID = $(this).closest(".comments").data().id
    tweeter.removeComment(postID, commentID)
    render()
})

$("#posts").on("click", '.comment', function () {
    const commentText = $(this).siblings(".postComment").val()
    const postID = $(this).closest(".post").data().id
    try {
        tweeter.addComment(commentText, postID)
    }
    catch (err) {
        alert(err.message)
    }
    $(this).siblings(".postComment").val('')
    render()
});


const render = () => {
    renderer.renderPosts(tweeter.getPosts())




}
render()
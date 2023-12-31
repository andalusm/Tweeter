const Renderer = function () {

    const _renderComment = function (comment, div) {
        const commentDiv = `<div data-id=${comment.id} class= comments>${comment.text}<div class=delete-comment>X</div></div>`
        div.append(commentDiv)

    }

    const _renderPost = function (post, div) {
        const postDiv = $(`<div data-id=${post.id}  class=post > <div class=post-text>${post.text} <div class=delete>Delete post</div></div></div>`)
        for (const c of post.comments) {
            _renderComment(c, postDiv)
        }
        const commentBtn = $("<input type='text' placeholder='comment' class=postComment> <button class=comment >post comment</button>")
        postDiv.append(commentBtn)
        div.append(postDiv)
    }



    const renderPosts = function (posts) {
         $("#posts").empty()
         for (const p of posts) {
             _renderPost(p, $("#posts"))
         }
        

    }



    return { renderPosts }
}
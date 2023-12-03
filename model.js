const Tweeter = function () {
    const INITIAL_POSTS_NUMBER = 3
    const INITIAL_COMMENTS_NUMBER = 7

    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    let postIdCounter = INITIAL_POSTS_NUMBER
    let commentIdCounter = INITIAL_COMMENTS_NUMBER

    const getPosts = function () {
        return _posts
    }
    const addPost = function (text) {
        _posts.push({ text, id: `p${postIdCounter}`, comments: [] })
        postIdCounter += 1
    }
    const removePost = function (postId) {
        const i = _posts.findIndex(p => p.id == postId)
        if (i >= 0) {
            _posts.splice(i, 1)

        }
    }

    const addComment = function (text, postId) {

        const i = _posts.findIndex(p => p.id == postId)
        if (i >= 0) {
            _posts[i].comments.push({ id: `c${commentIdCounter}`, text })
            commentIdCounter += 1
        }
    }

    const removeComment = function (postId, commentId) {

        const i = _posts.findIndex(p => p.id == postId)
        if (i >= 0) {
            const j = _posts[i].comments.findIndex(c => c.id == commentId)
            if (j >= 0) {
                _posts[i].comments.splice(j, 1)
            }
        }

    }

    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}
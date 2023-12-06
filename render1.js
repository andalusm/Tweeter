const Renderer = function () {

   



    const renderPosts = function (posts) {
        $("#posts").empty()
        const source = $('#posts-template').html();
        const template = Handlebars.compile(source);
        let newHTML = template({ posts });
        $("#posts").append(newHTML)


    }



    return { renderPosts }
}
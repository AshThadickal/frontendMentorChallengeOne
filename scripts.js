const myApp = {}

myApp.init = () => {
    myApp.getData()
}

myApp.getData = () => {
    fetch("../data.json")
        .then(res => res.json())
        .then(data => {
            console.log(data.comments);
            myApp.displayComments(data.comments)
        })
}

myApp.displayComments = (jsonResults) => {
    const commentContainer = $('.listContainer');
    const indvComment = $(`<ul class="comment card"></ul>`);
    jsonResults.forEach((comment) => {
        commentContainer.append(indvComment).append(`
            <p class="score">${comment.createdAt}</p>
            <img src=${comment.user.image.png} alt="${comment.user.username}">
            <p class="userName">${comment.user.username}</p>
            <p class="timeStamp">${comment.createdAt}</p>
            <p class="reply">Reply</p>
            <p class="comment">${comment.content}</p>`);
            
            if(comment.replies.length > 0) {
                comment.replies.forEach((reply) => {
                    console.log(reply)
                })
            }
    })
}

myApp.init();
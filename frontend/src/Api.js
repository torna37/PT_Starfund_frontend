const server = "http://localhost:3000/"


export async function createDoRequest(method, path, body={}) {
    try {
        let headers = new Headers();
        headers.append('Content-Type', "application/json");
        
        const options = {
            headers: headers,
            method: method,
            body: body
        }

        let response = await fetch(server + path, options)
        let json = await response.json();
        
        return json

    } catch (error) {
        return { "error": error }
    }
}

export const fetchPosts = async () => {
    const posts = await createDoRequest("GET", "posts")
    return posts.data
}

export const doUpvote = async (id) => {
    await createDoRequest("PATCH", "posts/" + id + "/upvote")
}

export const doDownvote = async (id) => {
    await createDoRequest("PATCH", "posts/" + id + "/downvote")
}

export const fetchUser = async (id) => {
    const user = await createDoRequest("GET", "users/" + id)
    return user.data
}

export const fetchComments = async (id) => {
    const comments = await createDoRequest("Get", "posts/" + id + "/comments")
    return comments.data
}

export const createComment = async (post_id, content, username) => {
    const body = {"post_id":post_id, "content":content, "username":username}
    createDoRequest("POST", "comments", body)
}
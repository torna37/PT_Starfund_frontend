const server = "http://localhost:3000/"

// , body={}
export async function createDoRequest(method, path, extraOptions) {
    try {
        let headers = new Headers();
        headers.append('Content-Type', "application/json");
        
        const options = {
            headers: headers,
            method: method, 
        }
        
        const finalOptions = Object.assign({}, options, extraOptions)

        let response = await fetch(server + path, finalOptions)
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
    createDoRequest("POST", "comments", {"body":JSON.stringify(body)})
}
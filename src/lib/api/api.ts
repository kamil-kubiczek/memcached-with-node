export function fetchUsers() {
   return fetch("https://dummyjson.com/users").then((res) => res.json())
}

export function fetchPosts() {
   return fetch("https://dummyjson.com/posts").then((res) => res.json())
}

export function fetchComments() {
   return fetch("https://dummyjson.com/comments").then((res) => res.json())
}

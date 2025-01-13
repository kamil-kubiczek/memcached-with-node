export function fetchUsers() {
   return fetch("https://dummyjson.com/users?limit=1000").then((res) => res.json())
}

export function fetchPosts() {
   return fetch("https://dummyjson.com/posts?limit=1000").then((res) => res.json())
}

export function fetchComments() {
   return fetch("https://dummyjson.com/comments?limit=1000").then((res) => res.json())
}

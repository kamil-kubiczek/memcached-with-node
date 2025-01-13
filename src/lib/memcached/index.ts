import { CommentEntity, PostEntity, UserEntity } from "@core/types/entities"
import { MemcacheClient } from "memcache-client"
import { getArrayOrObjectFromMemcached, saveArrayOrObjectInMemcached } from "./utils"

const memcached = new MemcacheClient({ server: "127.0.0.1:11211" })

async function setPostsForUserInCache(userId: UserEntity["id"], posts: PostEntity[]) {
   const key = `user:${userId}:posts`

   saveArrayOrObjectInMemcached(key, posts, memcached)
}

async function getPostsForUserFromCache(userId: UserEntity["id"]): Promise<PostEntity[] | null | undefined> {
   const key = `user:${userId}:posts`

   return getArrayOrObjectFromMemcached(key, memcached)
}

async function setUserInCache(user: UserEntity): Promise<void> {
   const key = `user:${user.id}`

   saveArrayOrObjectInMemcached(key, user, memcached)
}

async function getUserFromCache(userId: UserEntity["id"]): Promise<UserEntity | null | undefined> {
   const key = `user:${userId}`

   return getArrayOrObjectFromMemcached(key, memcached)
}

async function setPostInCache(post: PostEntity): Promise<void> {
   const key = `post:${post.id}`

   saveArrayOrObjectInMemcached(key, post, memcached)
}

async function getPostFromCache(postId: PostEntity["id"]): Promise<PostEntity | null | undefined> {
   const key = `post:${postId}`

   return getArrayOrObjectFromMemcached(key, memcached)
}

async function getCommentsForPostFromCache(postId: PostEntity["id"]): Promise<CommentEntity[] | null | undefined> {
   const key = `post:${postId}:comments`

   return getArrayOrObjectFromMemcached(key, memcached)
}

async function getCommentFromCache(commentId: CommentEntity["id"]): Promise<CommentEntity | null | undefined> {
   const key = `comment:${commentId}`

   return getArrayOrObjectFromMemcached(key, memcached)
}

async function setCommentInCache(comment: CommentEntity): Promise<void> {
   const key = `comment:${comment.id}`

   saveArrayOrObjectInMemcached(key, comment, memcached)
}

export {
   setPostsForUserInCache,
   setPostInCache,
   setUserInCache,
   setCommentInCache,
   getPostsForUserFromCache,
   getPostFromCache,
   getUserFromCache,
   getCommentsForPostFromCache,
   getCommentFromCache
}

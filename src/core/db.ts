import { CommentEntity, PostEntity, UserEntity } from "./types/entities"

export class Database {
   private users: UserEntity[]
   private posts: PostEntity[]
   private comments: CommentEntity[]
   constructor(users: UserEntity[], posts: PostEntity[], comments: CommentEntity[]) {
      this.users = users
      this.posts = posts
      this.comments = comments
   }

   getUsers() {
      return this.getUsers
   }

   getPosts() {
      return this.posts
   }

   getComments() {
      return this.comments
   }

   getCommentsByPostId(postId: number) {
      return this.comments.filter((comment) => comment.postId === postId)
   }

   getPostsByUserId(userId: number) {
      return this.posts.filter((post) => post.userId === userId)
   }

   getUserById(userId: number) {
      return this.users.find((user) => user.id === userId)
   }

   getPostById(postId: number) {
      return this.posts.find((post) => post.id === postId)
   }

   getCommentById(commentId: number) {
      return this.comments.find((comment) => comment.id === commentId)
   }

   getCommentsByUserId(userId: number) {
      return this.comments.filter((comment) => comment.user.id === userId)
   }

   getCommentsByPostIdAndUserId(postId: number, userId: number) {
      return this.comments.filter((comment) => comment.postId === postId && comment.user.id === userId)
   }
}

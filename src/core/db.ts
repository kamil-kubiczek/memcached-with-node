import { CommentEntity, PostEntity, UserEntity } from "./types/entities"

export class Database {
   private users: UserEntity[]
   private posts: PostEntity[]
   private comments: CommentEntity[]
   public initialized = false

   constructor(users: UserEntity[], posts: PostEntity[], comments: CommentEntity[]) {
      this.users = users
      this.posts = posts
      this.comments = comments
   }

   async getUsers() {
      await sleep(1300)
      return this.users
   }

   async getPosts() {
      await sleep(1000)
      return this.posts
   }

   async getComments() {
      await sleep(800)
      return this.comments
   }

   async getCommentsByPostId(postId: number) {
      await sleep(2230)
      return this.comments.filter((comment) => comment.postId === postId)
   }

   async getPostsByUserId(userId: number) {
      await sleep(2400)
      return this.posts.filter((post) => post.userId === userId)
   }

   async getUserById(userId: number) {
      await sleep(500)
      return this.users.find((user) => user.id === userId)
   }

   async getPostById(postId: number) {
      await sleep(1400)
      return this.posts.find((post) => post.id === postId)
   }

   async getCommentById(commentId: number) {
      await sleep(1353)
      return this.comments.find((comment) => comment.id === commentId)
   }

   async getCommentsByUserId(userId: number) {
      await sleep(1530)
      return this.comments.filter((comment) => comment.user.id === userId)
   }

   async getCommentsByPostIdAndUserId(postId: number, userId: number) {
      await sleep(3200)
      return this.comments.filter((comment) => comment.postId === postId && comment.user.id === userId)
   }
}

function sleep(ms: number) {
   return new Promise((resolve) => {
      setTimeout(resolve, ms)
   })
}

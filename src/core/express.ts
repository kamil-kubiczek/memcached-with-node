import {
   getCommentFromCache,
   getPostFromCache,
   getPostsForUserFromCache,
   getUserFromCache,
   setCommentInCache,
   setPostInCache,
   setPostsForUserInCache,
   setUserInCache
} from "@lib/memcached"
import { db, logger } from "."
import express, { NextFunction, Request, Response } from "express"
import responseTime from "response-time"

const loggingMiddleware = function (req: Request, res: Response, next: NextFunction) {
   logger.info(`Request: ${req.method} ${req.url}`, {
      params: req.params
   })
   next()
}

const app = express()
app.use(responseTime())
app.set("etag", false)

app.get("/", loggingMiddleware, async (req, res) => {
   res.send("API works")
})

app.get("/users", loggingMiddleware, async (req, res) => {
   const users = await db.getUsers()
   res.send(users)
})

app.get("/users/:id", loggingMiddleware, async (req, res) => {
   const cached = await getUserFromCache(Number(req.params.id))
   if (cached) {
      res.setHeader("X-Cache", "HIT")
      res.send(cached)
      return
   }

   res.setHeader("X-Cache", "MISS")

   const user = await db.getUserById(Number(req.params.id))

   if (!user) {
      res.status(404).send("User not found")
      return
   }
   setUserInCache(user)
   res.send(user)
})

app.get("/users/:id/comments", loggingMiddleware, async (req, res) => {
   const comments = await db.getCommentsByUserId(Number(req.params.id))
   res.send(comments)
})

app.get("/users/:id/posts", loggingMiddleware, async (req, res) => {
   const cached = await getPostsForUserFromCache(Number(req.params.id))
   if (cached) {
      res.setHeader("X-Cache", "HIT")
      res.send(cached)
      return
   }

   res.setHeader("X-Cache", "MISS")

   const posts = await db.getPostsByUserId(Number(req.params.id))

   if (!posts) {
      res.status(404).send("posts not found")
      return
   }

   setPostsForUserInCache(Number(req.params.id), posts)

   res.send(posts)
})

app.get("/posts", loggingMiddleware, async (req, res) => {
   const posts = await db.getPosts()
   res.send(posts)
})

app.get("/posts/:id", loggingMiddleware, async (req, res) => {
   const cached = await getPostFromCache(Number(req.params.id))
   if (cached) {
      res.setHeader("X-Cache", "HIT")
      res.send(cached)
      return
   }

   res.setHeader("X-Cache", "MISS")

   const post = await db.getPostById(Number(req.params.id))

   if (!post) {
      res.status(404).send("post not found")
      return
   }
   setPostInCache(post)

   res.send(post)
})

app.get("/comments", loggingMiddleware, async (req, res) => {
   const comments = await db.getComments()
   res.send(comments)
})

app.get("/comments/:id", loggingMiddleware, async (req, res) => {
   const cached = await getCommentFromCache(Number(req.params.id))
   if (cached) {
      res.setHeader("X-Cache", "HIT")
      res.send(cached)
      return
   }

   res.setHeader("X-Cache", "MISS")

   const comment = await db.getCommentById(Number(req.params.id))

   if (!comment) {
      res.status(404).send("comment not found")
      return
   }

   setCommentInCache(comment)
   res.send(comment)
})

export { app }

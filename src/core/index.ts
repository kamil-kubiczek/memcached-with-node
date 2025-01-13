import { fetchComments, fetchPosts, fetchUsers } from "@lib/api"
import { Database } from "./db"
import { app } from "./express"
import winston from "winston"

export const logger = winston.createLogger({
   level: "info",
   format: winston.format.cli(),
   transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: "logs/error.log", level: "error" }),
      new winston.transports.File({ filename: "logs/combined.log" })
   ]
})

let db: Database

const port = 3000

async function main() {
   const users = await fetchUsers()
   const comments = await fetchComments()
   const posts = await fetchPosts()

   db = new Database(users.users, posts.posts, comments.comments)
   db.initialized = true

   app.listen(port, () => {
      console.log(
         "!--- Welcome to API with Memcached. Checkout docs on GitHub: https://github.com/kamil-kubiczek/memcached-with-node ---! \n"
      )
      logger.info(`Server is running on localhost:${port}`)
   })
}

main()

export { db }

import { logger } from "@core/index"
import { MemcacheClient } from "memcache-client"

export async function saveArrayOrObjectInMemcached<Value extends object>(key: string, value: Value, memcached: MemcacheClient) {
   const data = JSON.stringify(value)

   logger.info(`memcached: Starting SET operation: key ${key}`)

   const result = await memcached.set(key, data)

   logger.info(`memcached: SET response for key ${key}: ${result}`)
}

export async function getArrayOrObjectFromMemcached<Value extends object>(
   key: string,
   memcached: MemcacheClient
): Promise<Value | null | undefined> {
   logger.info(`memcached: Starting GET operation: key ${key}`)

   const data = await memcached.get(key)

   if (data?.value === null || data?.value === undefined) {
      logger.info(`memcached: GET response for key ${key}: CACHE MISS`)
      return
   }

   logger.info(`memcached: GET response for key ${key}: CACHE HIT`)

   return JSON.parse(String(data.value))
}

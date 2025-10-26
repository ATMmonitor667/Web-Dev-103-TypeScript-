import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI || ""

declare global {
  var mongooseCache: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null }
}

let cached = global.mongooseCache || { conn: null, promise: null }

if (!global.mongooseCache) {
  global.mongooseCache = cached
}

export const connectToDatabase = async () => {
  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGODB_URI environment variable inside .env.local"
    )
  }

  if (cached.conn) {
    console.log("Using cached database connection")
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      dbName: "stockinator",
    }

    console.log("Creating new database connection...")
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("Database connected successfully")
      return mongoose
    })
  }

  try {
    cached.conn = await cached.promise
    return cached.conn
  } catch (error) {
    cached.promise = null
    console.error("Database connection failed:", error)
    throw error
  }
}

export const disconnectFromDatabase = async () => {
  if (cached.conn) {
    await cached.conn.disconnect()
    cached.conn = null
    cached.promise = null
    console.log("Database disconnected")
  }
}

export default connectToDatabase
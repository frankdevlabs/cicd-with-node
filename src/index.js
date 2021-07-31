import "core-js/stable";
import "regenerator-runtime/runtime";
import app from "./server.js"

const start = async () => {
  try {
    const server = await app.listen(3000)
    console.log(`*^!@4=> Process id: ${process.pid}`)

    async function closeGracefully(signal) {
      console.log(`*^!@4=> Received signal to terminate: ${signal}`)

      await server.close()
      // await db.close() if we have a db connection in this app
      // await other things we should cleanup nicely
      process.exit()
    }

    process.on('SIGINT', closeGracefully)
    process.on('SIGTERM', closeGracefully)

  } catch (err) {
    process.exit(1)
  }
}

start().then(r => r)

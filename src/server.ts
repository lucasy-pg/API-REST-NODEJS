import { app } from './app.js'
import { env } from './env/index.js'

const host = 'RENDER' in process.env ? '0.0.0.0' : 'localhost'

app
  .listen({
    port: env.PORT,
    host, // <== adiciona aqui
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })

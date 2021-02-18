import dotenv from 'dotenv'
import appInit from './src/app.js'
import dbInit from './src/db/index.js'

dotenv.config()

const app = appInit()

app.listen(app.get('port') || 8080, () => {
  console.log(
    `Express application is up and running on 
    http:/localhost:${app.get('port')}/ 🚀`
  )
})

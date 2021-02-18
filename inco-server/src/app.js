/* eslint-disable import/no-extraneous-dependencies */
import express from 'express'
import path from 'path'
import morgan from 'morgan'
import errorHandler from 'errorhandler'
import favicon from 'serve-favicon'

const appInit = () => {
  const app = express()
  const isDevEnv = process.env.NODE_ENV === 'development'
  const __dirname = path.resolve(path.dirname(''))
  app.set('port', process.env.PORT || 8080)
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')

  // Use it in Development Mode Only
  if (isDevEnv) {
    app.use(morgan('dev'))
    app.use(errorHandler())
  }

  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(express.static(path.join(__dirname, 'public')))
  app.use(favicon(path.join(__dirname, '/public/favicon.ico')))

  return app
}

export default appInit

import express  from 'express'

import router from './api/router'

const routing =  express.Router()


routing.use('route', router)


export default routing;
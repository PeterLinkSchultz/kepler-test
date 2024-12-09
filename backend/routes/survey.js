import express from 'express'
import { createSurvey, getSurvey, saveUserAnswer } from '../controllers/survey.js'
import { checkAuth } from '../controllers/auth.js'

const router = express.Router()

router.get('/create', checkAuth, createSurvey)
router.get('/:id', checkAuth, getSurvey)
router.put('/:id', checkAuth, saveUserAnswer)

export default router

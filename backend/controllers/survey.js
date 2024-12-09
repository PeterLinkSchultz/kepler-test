import SurveyModel from '../models/survey.js'
import UserAnswerModel from '../models/user-answer.js'
import QuestionModel from '../models/question.js'

export const createSurvey = async (req, res, next) => {
    try {
        await new QuestionModel({
                title: "First question",
                type: 'text',
        }).save()
        await new QuestionModel({
                title: "First question",
                type: 'number',
        }).save()
        await new QuestionModel({
                title: "Second question",
                type: 'multi',
                    options: [
                        {
                            id: 1,
                            label: 'Fisrt option'
                        },
                        {
                            id: 2,
                            label: 'Second option'
                        }
                    ]
        }).save()
        await new QuestionModel({
                title: "Second question",
                type: 'single',
                    options: [
                        {
                            id: 1,
                            label: 'Fisrt option'
                        },
                        {
                            id: 2,
                            label: 'Second option'
                        }
                    ]
        }).save()

        const questions = await QuestionModel.find()

        const survey = new SurveyModel({
            id: 1,
            questions: questions.map(({_id}) => _id)
        })
        await survey.save()
        res.json({ success: true })
    } catch(e) {
        res.json({ success: false })
    }
}

export const getSurvey = async (req, res, next) => {
    if (!req.params?.id) {
        res.end()
    }
    const survey = await SurveyModel.findOne({
        id: req.params.id,
    }).populate('questions')
    const userAnswers = await UserAnswerModel.findOne({
        user_id: 1,
        survey_id: survey._id
    })

    const surveyJSON = survey.toJSON()
    if (userAnswers) {
        surveyJSON.questions = surveyJSON.questions.map(question => {
            const questionId = question._id.toString()
            const userAnswer = userAnswers.answers.find((answer) => answer.question_id.toString() === questionId)

            if (userAnswer) {
                return {
                    ...question,
                    answer: userAnswer.answer
                }
            }

            return question
        })
    }
    if (!surveyJSON.questions.some(question => !question.answer)) {
        surveyJSON.questions = []
        surveyJSON.finished = true
    }

    res.json({ success: true, data: surveyJSON })
}

export const saveUserAnswer = async (req, res, next) => {
    if (!req.params?.id) {
        return res.json({ success: false })
    }
    const survey_id = req.params?.id
    const question_id = req.body.questionId
    const answer = req.body.answer
    const userAnswers = await UserAnswerModel.findOne({
        user_id: 1,
        survey_id,
    })

    if (!userAnswers) {
        await UserAnswerModel.create({
            user_id: 1,
            survey_id,
            answers: [
                {
                    question_id,
                    answer,
                }
            ]
        })
    } else {
        const existedIndex = userAnswers.answers.findIndex((answer) => answer.question_id.toString() === question_id)

        if (existedIndex === -1) {
            userAnswers.answers.push({
                question_id,
                answer,
            })
        } else {
            userAnswers.answers[existedIndex].answer = answer
        }
        await userAnswers.save()
    }
    const question = await QuestionModel.findById(question_id)
    
    res.json({ success: true, data: { ...question.toJSON(), answer } })
}
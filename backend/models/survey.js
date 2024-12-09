
import { Schema, model } from 'mongoose';

const SurveySchema = new Schema({
    id: {
        type: Schema.Types.Number,
        required: true
    },
    questions: {
        type: [{ type: Schema.Types.ObjectId, ref: 'questions' }],
        required: true,
    }
})

// SurveySchema.methods.updateQuestion = async function () {
//     this.currentQuestion += 1

//     return this.save()
// }

// SurveySchema.methods.finishSurvey = async function () {
//     this.isFinished = true

//     return this.save()
// }

// SurveySchema.methods.sent = async function () {
//     this.messageSent = true

//     return this.save()
// }

export default model('survey', SurveySchema)
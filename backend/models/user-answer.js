import { model, Schema } from "mongoose";

const AnswerSchema = new Schema({
    question_id: {
        type: Schema.Types.ObjectId,
        ref: 'surveys.questions',
        required: true,
    },
    answer: {
        type: Schema.Types.Mixed,
        required: true,
    }
})

const UserAnswerSchema = new Schema({ 
    user_id: { 
        type: Schema.Types.Number,
        required: true,
    },
    survey_id: {
        type: Schema.Types.ObjectId,
        ref: 'surveys',
        required: true,
    },
    answers: {
        type: [AnswerSchema],
        required: true,
    }
})

UserAnswerSchema.methods.update = async function() {
    
}

export default model('user-answers', UserAnswerSchema)
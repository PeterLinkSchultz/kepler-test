import { model, Schema } from "mongoose"

const OptionSchema = new Schema({
    id: { type: Schema.Types.Number, required: true },
    label: { type: Schema.Types.String, required: true }
})

const QuestionSchema = new Schema({
    title: { type: Schema.Types.String, required: true },
    type: { type: Schema.Types.String, required: true },
    options: { type: [OptionSchema] }
})

export default model('questions', QuestionSchema)
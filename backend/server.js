import { connect } from 'mongoose';
import express from 'express'
import bodyParser from 'body-parser'
import surveyRouter from './routes/survey.js'

const uri = "mongodb+srv://PeterSchulz:QHeypdA5dQyB8vgG@testcluster.cjdj8.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster";
const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/survey', surveyRouter)

async function run() {
    try {
        await connect(uri)

        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}`);
        });
    } finally {
        // Ensures that the client will close when you finish/error
    }
}
run().catch(console.dir);
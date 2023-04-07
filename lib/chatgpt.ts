import {Configuration,OpenAIApi} from "openai";

const configuration = new Configuration({
    apiKey: "sk"+"-"+"3ns9laazWvc"+"T5uzeydA0T3BlbkFJ47P5BDWShf3gMJHafunK",
})

const openai = new OpenAIApi(configuration)

export default openai;
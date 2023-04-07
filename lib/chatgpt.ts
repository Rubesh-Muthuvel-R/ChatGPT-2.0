import {Configuration,OpenAIApi} from "openai";

const configuration = new Configuration({
    apiKey: "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",
})

const openai = new OpenAIApi(configuration)

export default openai;
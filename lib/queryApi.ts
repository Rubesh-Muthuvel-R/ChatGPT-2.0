import openai from "./chatgpt"

const query = async(prompt:string,chatId:string,model:string) =>{

    //Chat id can be used to read before messages and respond according to the current conversation
    
    const res = await openai.createCompletion({
        model,
        prompt,
        temperature:1,
        max_tokens:1000,
        frequency_penalty:0,
        presence_penalty:0
    }).then((res) => res.data.choices[0].text)
    .catch((err) => `ChatGPT was unable to find an answer (Error:${err.message})`
    ); 
    return res;

};

export default query;
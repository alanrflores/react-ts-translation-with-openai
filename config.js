import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  organization: 'org-STxiEFABLPM8eMaTz7UtAyoo',
  apikey: process.env.REACT_APP_APIKEYOPENAI,
});

const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();

import { HttpException } from '@/exceptions/HttpException';
import { openAIHelper } from '@/server';
import { isBase64Image } from '@/utils/data';
import { Service } from 'typedi';

@Service()
export class OpenaiService {
  public async validateImage(image: string): Promise<unknown> {
    if (!isBase64Image(image)) throw new HttpException(400, 'Invalid image format');

    const prompt = `
                    Analyze the image provided. The image MUST satisfy all of the following criteria:
                        1. It must have as subject a seed or plant.
                        2. It must not be a screenshot.
                    Please respond always and uniquely with the following JSON object as you are REST API that returns the following object:
                    {
                    "validityFactor": {validityFactorNumber}, // 0-1, 1 if it satisfies all the criteria, 0 otherwise
                    "descriptionOfAnalysis": "{analysis}", // indicate your analysis of the image and why it satisfies or not the criteria. The analysis will be shown to the user so make him understand why the image doesn't satisfy the criteria if it doesn't without going into detail on exact criteria. Remember we are rewarding users that drink coffee in a sustainable way.
                    }
                    `;

    const gptResponse = await openAIHelper.askChatGPTAboutImage({
      base64Image: image,
      prompt,
    });

    const responseJSONStr = openAIHelper.getResponseJSONString(gptResponse);

    return openAIHelper.parseChatGPTJSONString(responseJSONStr);
  }
}
// based on this uploaded photo, estimate the CO2 saved if this was planted and harvested at home as oppose to buying it from grocery shop
// Please respond always and uniquely with the following JSON object as you are REST API that returns the following object:
// {
//   "estimatedWeight": {estimatedWeight}, // estimated harvested plant weight based on the photo uploaded
//   "estimatedTimeToHarvest": {estimatedTimeToHarvest}, // estimated time in days it takes from planting the seed to harvesting this plant based on the photo uploaded
//   "minRange": {minRange}, // minimum CO2 saved in kg
//   "maxRange": "{maxRange}", // maximum CO2 saved in kg
// }

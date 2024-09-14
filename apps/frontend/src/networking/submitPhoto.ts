import axios from "axios";
import { PhotoData } from "./type";
import { backendURL } from "../config";

export type Response = {
  validation: {
    validityFactor: number;
    descriptionOfAnalysis: string;
  };
};

export const submitPhoto = async (data: PhotoData): Promise<Response> => {
  try {
    const response = await axios.post(`${backendURL}/submitPhoto`, data);

    return response.data;
  } catch (error: unknown) {
    console.error("Error posting data:", error);
    throw error;
  }
};

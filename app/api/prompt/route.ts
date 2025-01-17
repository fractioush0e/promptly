import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@utils/database";
import Prompt, { IPrompt } from "@models/prompt";

export const GET = async (request: NextRequest): Promise<NextResponse> => {
  try {
    await connectDB();

    const prompts: IPrompt[] = await Prompt.find({}).populate("creator");
    return NextResponse.json(prompts, { status: 200 });
    
  } catch (error) {
    console.error("Error:", error);
    return new NextResponse("Failed to fetch the prompts!", { status: 500 });
  }
};

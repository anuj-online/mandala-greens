"use server";

import { aiFarmConsultation, type AiFarmConsultationInput, type AiFarmConsultationOutput } from '@/ai/flows/ai-farm-consultation';

export async function askAi(input: AiFarmConsultationInput): Promise<AiFarmConsultationOutput | null> {
    try {
        const response = await aiFarmConsultation(input);
        return response;
    } catch (e) {
        console.error(e);
        return null;
    }
}

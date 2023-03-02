import { FilterParams } from "./filterParams.model";


export interface FilterParamsPOMS extends FilterParams {
    vigourMoodState: number | string;
    tensionMoodState: number | string;
    fatigueMoodState: number | string;
    depressionMoodState: number | string;
    confusionMoodState: number | string;
    angerMoodState: number | string;
    totalMoodScore: number | string;
}
import { FilterParams } from "./filterParams.model";

export interface FilterParamsSessionRPE extends FilterParams {
    // sRPE: string | number;
    // duration: string | number;
    // trainingLoad: string | number;
    sRPE: number | string;
    duration: number | string;
    trainingLoad: number | string;
  }



import { FilterParams } from "./filterParams.model";

export interface FilterParamsSessionRPE extends FilterParams {
    sRPE: number | string;
    duration: number | string;
    trainingLoad: number | string;
  }



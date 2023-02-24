import { FilterParams } from "./filterParams.model";

export interface FilterParamsBodyMeasurements extends FilterParams {
    chest: number | string;
    leftArm: number | string;
    rightArm: number | string;
    aboveNavel: number | string;
    navel: number | string;
    belowNavel: number | string;
    hips: number | string;
    leftThigh: number | string;
    rightThigh: number | string;
    leftCalf: number | string;
    rightCalf: number | string;
}
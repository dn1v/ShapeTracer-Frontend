import { FilterParams } from "./filterParams.model";

export interface FilterParamsBodyweight extends FilterParams {
    weight: number | string;
}
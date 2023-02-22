export interface FilterParams {
    limit: number;
    skip: number;
    dateFrom: string | Date;
    dateTo: string | Date;
    rangeOperator: string;
    sRPE: string | number;
    duration: string | number;
    trainingLoad: string | number;
    sortBy: string;
  }
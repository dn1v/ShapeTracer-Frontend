export interface FilterParams {
    limit: number;
    skip: number;
    dateFrom: string | Date;
    dateTo: string | Date;
    rangeOperator: string;
    sortBy: string;
  }
export class SessionRPEResponse {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
    owner: string;
    duration: number;
    sRPE: number;
    trainingLoad: number;
    trainingType: string;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.createdAt = obj && obj.createdAt || null;
        this.updatedAt = obj && obj.updatedAt || null;
        this.owner = obj && obj.owner || null;
        this.duration = obj && obj.duration || null;
        this.sRPE = obj && obj.sRPE || null;
        this.trainingLoad = obj && obj.trainingLoad || null;
        this.trainingType = obj && obj.trainingType || null
    }

}
export class BodyMeasurements {
    _id: string;
    owner: string;
    chest: number;
    leftArm: number;
    rightArm: number;
    aboveNavel: number;
    navel: number;
    belowNavel: number;
    hips: number;
    leftThigh: number;
    rightThigh: number;
    leftCalf: number;
    rightCalf: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.owner = obj && obj.owner || null;
        this.chest = obj && obj.chest || null;
        this.leftArm = obj && obj.leftArm || null;
        this.rightArm = obj && obj.rightArm || null;
        this.aboveNavel = obj && obj.aboveNavel || null;
        this.navel = obj && obj.navel || null;
        this.belowNavel = obj && obj.belowNavel || null;
        this.hips = obj && obj.hips || null;
        this.leftThigh = obj && obj.leftThigh || null;
        this.rightThigh = obj && obj.rightThigh || null;
        this.leftCalf = obj && obj.leftCalf || null;
        this.rightCalf = obj && obj.rightCalf || null;
        this.createdAt = obj && obj.createdAt || new Date();
        this.updatedAt = obj && obj.updatedAt || new Date();
    }
}
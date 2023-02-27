export class Bodyweight {
    _id: string;
    owner: string;
    createdAt: Date;
    updatedAt: Date;
    weight: number;

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.owner = obj && obj.owner || null;
        this.createdAt = obj && obj.createdAt || new Date();
        this.updatedAt = obj && obj.updatedAt || new Date();
        this.weight = obj && obj.weight || null;
    }
}



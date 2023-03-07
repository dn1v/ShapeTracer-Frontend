export class Athlete {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    height: number
    weight: number;
    age: number;
    createdAt: Date
    updatedAt: Date

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.firstName = obj && obj.firstName || '';
        this.lastName = obj && obj.lastName || '';
        this.email = obj && obj.email || '';
        this.height = obj && obj.height || 0;
        this.weight = obj && obj.weight || 0;
        this.age = obj && obj.age || 0;
        this.createdAt = obj && obj.createdAt || null;
        this.updatedAt = obj && obj.updatedAt || null;
    }
}


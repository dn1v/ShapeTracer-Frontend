export class Athlete {
    _id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    height: number
    weight: number;
    age: number;
    profilePhoto: Buffer
    createdAt: Date
    updatedAt: Date

    constructor(obj?: any) {
        this._id = obj && obj._id || null;
        this.firstName = obj && obj.firstName || '';
        this.lastName = obj && obj.lastName || '';
        this.email = obj && obj.email || '';
        this.password = obj && obj.password || '';
        this.height = obj && obj.height || 0;
        this.weight = obj && obj.weight || 0;
        this.age = obj && obj.age || 0;
        this.profilePhoto = obj && obj.profilePhoto || null;
        this.createdAt = obj && obj.createdAt || null;
        this.updatedAt = obj && obj.updatedAt || null;
    }
}


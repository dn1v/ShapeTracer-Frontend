import { Athlete } from "./athlete.model";

export class AuthResponse {
    athlete: Athlete;
    token: string;

    constructor(obj?: any) {
        this.athlete = obj && obj.athlete && new Athlete(obj.athlete) || new Athlete();
        this.token = obj && obj.token || ''
    }
}
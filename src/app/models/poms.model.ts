export class POMS {
    _id: string;
    owner: string;
    createdAt: Date;
    updatedAt: Date;
    angry: number;
    annoyed: number; 
    badTempered: number;
    bitter: number;
    confused: number;    
    mixedUp: number;
    muddled: number;
    uncertain: number;
    depressed: number;
    downhearted: number;
    miserable: number;
    unhappy: number;
    exhausted: number;
    sleepy: number;
    tired: number;
    wornOut: number;
    anxious: number;
    nervous: number;
    panicky: number;
    worried: number;
    active: number;
    alert: number;
    energetic: number;
    lively: number;
    vigourMoodState: number;
    tensionMoodState: number;
    fatigueMoodState: number;
    depressionMoodState: number;
    confusionMoodState: number;
    angerMoodState: number;
    totalMoodScore: number;

    constructor(obj?: any) {
        this._id = obj && obj._id || null
        this.owner = obj && obj.owner || null
        this.createdAt = obj && obj.createdAt || null
        this.updatedAt = obj && obj.updatedAt || null
        this.angry = obj && obj.angry || null
        this.annoyed = obj && obj.annoyed || null
        this.badTempered = obj && obj.badTempered || null
        this.bitter = obj && obj.bitter || null
        this.confused = obj && obj.confused || null
        this.mixedUp = obj && obj.mixedUp || null
        this.muddled = obj && obj.muddled || null
        this.uncertain = obj && obj.uncertain || null
        this.depressed = obj && obj.depressed || null
        this.downhearted = obj && obj.downhearted || null
        this.miserable = obj && obj.miserable || null
        this.unhappy = obj && obj.unhappy || null
        this.exhausted = obj && obj.exhausted || null
        this.sleepy = obj && obj.sleepy || null
        this.tired = obj && obj.tired || null
        this.wornOut = obj && obj.wornOut || null
        this.anxious = obj && obj.anxious || null
        this.nervous = obj && obj.nervous || null
        this.panicky = obj && obj.panicky || null
        this.worried = obj && obj.worried || null
        this.active = obj && obj.active || null
        this.alert = obj && obj.alert || null
        this.energetic = obj && obj.energetic || null
        this.lively = obj && obj.lively || null
        this.vigourMoodState = obj && obj.vigourMoodState || null
        this.tensionMoodState = obj && obj.tensionMoodState || null
        this.fatigueMoodState = obj && obj.fatigueMoodState || null
        this.depressionMoodState = obj && obj.depressionMoodState || null
        this.confusionMoodState = obj && obj.confusionMoodState || null
        this.angerMoodState = obj && obj.angerMoodState || null
        this.totalMoodScore = obj && obj.totalMoodScore || null
    }
}

    // _id: string;
    // owner: string;
    // createdAt: Date;
    // updatedAt: Date;
    // "angry": 2,
    // "annoyed": 2, 
    // "badTempered": 2,
    // "bitter": 2,
    // "confused": 2,    
    // "mixedUp": 2,
    // "muddled": 2,
    // "uncertain": 2,
    // "depressed": 2,
    // "downhearted": 2,
    // "miserable": 2,
    // "unhappy": 2,
    // "exhausted": 2,
    // "sleepy": 2,
    // "tired": 2,
    // "wornOut": 2,
    // "anxious": 2,
    // "nervous": 2,
    // "panicky": 2,
    // "worried": 2,
    // "active": 2,
    // "alert": 2,
    // "energetic": 2,
    // "lively": 2,
    // vigourMoodState: number;
    // tensionMoodState: number;
    // fatigueMoodState: number;
    // depressionMoodState: number;
    // confusionMoodState: number;
    // angerMoodState: number;
    // totalMoodScore: number;
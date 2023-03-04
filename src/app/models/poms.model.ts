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
        this._id = obj && obj._id|| null
        this.owner = obj && obj.owner || null
        this.createdAt = obj && obj.createdAt || null
        this.updatedAt = obj && obj.updatedAt || null
        this.angry = obj && obj.angry || 0
        this.annoyed = obj && obj.annoyed || 0
        this.badTempered = obj && obj.badTempered || 0
        this.bitter = obj && obj.bitter || 0
        this.confused = obj && obj.confused || 0
        this.mixedUp = obj && obj.mixedUp || 0
        this.muddled = obj && obj.muddled || 0
        this.uncertain = obj && obj.uncertain || 0
        this.depressed = obj && obj.depressed || 0
        this.downhearted = obj && obj.downhearted || 0
        this.miserable = obj && obj.miserable || 0
        this.unhappy = obj && obj.unhappy || 0
        this.exhausted = obj && obj.exhausted || 0
        this.sleepy = obj && obj.sleepy || 0
        this.tired = obj && obj.tired || 0
        this.wornOut = obj && obj.wornOut || 0
        this.anxious = obj && obj.anxious || 0
        this.nervous = obj && obj.nervous || 0
        this.panicky = obj && obj.panicky || 0
        this.worried = obj && obj.worried || 0
        this.active = obj && obj.active || 0
        this.alert = obj && obj.alert || 0
        this.energetic = obj && obj.energetic || 0
        this.lively = obj && obj.lively || 0
        this.vigourMoodState = obj && obj.vigourMoodState || 0
        this.tensionMoodState = obj && obj.tensionMoodState || 0
        this.fatigueMoodState = obj && obj.fatigueMoodState || 0
        this.depressionMoodState = obj && obj.depressionMoodState || 0
        this.confusionMoodState = obj && obj.confusionMoodState || 0
        this.angerMoodState = obj && obj.angerMoodState || 0
        this.totalMoodScore = obj && obj.totalMoodScore || 0
    }
}


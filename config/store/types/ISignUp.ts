export interface IStageOne {
    phoneNumber: string;
}

export interface IStageTwo {
    firstName: string;
    lastName: string;
    dob: string;
    gender: string;
}

export interface IStageThree {
    address: string;
    city: string;
    state: string;
}

export interface IStageFour {
    email: string;
}

export interface IStageFive {
    password: string;
}

export interface IStageSix {
    pin: string;
}



export interface ISignUpSlice {
    stageOne: IStageOne;
    stageTwo: IStageTwo;
    stageThree: IStageThree;
    stageFour: IStageFour;
    stageFive: IStageFive;
    stageSix: IStageSix;
}

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    ISignUpSlice,
    IStageOne,
    IStageTwo,
    IStageThree,
    IStageFour,
    IStageFive,
    IStageSix
} from '../types/ISignUp';


const initialState: ISignUpSlice = {
    stageOne: {
        phoneNumber: "",
    },
    stageTwo: {
        dob: "",
        firstName: "",
        lastName: "",
        gender: "",
    },
    stageThree: {
        address: "",
        city: "",
        state: "",
    },
    stageFour: {
        email: "",
    },
    stageFive: {
        password: "",
    },
    stageSix: {
        pin: "",
    },
};

const signUpStateSlice = createSlice({
    name: "signUpStateSlice",
    initialState,
    reducers: {
        storeSignUpState1: ({ stageOne }, { payload }: PayloadAction<IStageOne>) => {
            stageOne.phoneNumber = payload.phoneNumber;
        },
        storeSignUpState2: ({ stageTwo }, { payload }: PayloadAction<IStageTwo>) => {
            stageTwo.firstName = payload.firstName;
            stageTwo.lastName = payload.lastName;
            stageTwo.gender = payload.gender
            stageTwo.dob = payload.dob;
        },
        storeSignUpState3: ({ stageThree }, { payload }: PayloadAction<IStageThree>) => {
            stageThree.address = payload.address;
            stageThree.city = payload.city;
            stageThree.state = payload.state;
        },
        storeSignUpState4: ({ stageFour }, { payload }: PayloadAction<IStageFour>) => {
            stageFour.email = payload.email;
        },
        storeSignUpState5: ({ stageFive }, { payload }: PayloadAction<IStageFive>) => {
            stageFive.password = payload.password;
        },
        storeSignUpState6: ({ stageSix }, { payload }: PayloadAction<IStageSix>) => {
            stageSix.pin = payload.pin;
        },
    }
});

export const {
    storeSignUpState1,
    storeSignUpState2,
    storeSignUpState3,
    storeSignUpState4,
    storeSignUpState5,
    storeSignUpState6,
} = signUpStateSlice.actions;

export default signUpStateSlice.reducer

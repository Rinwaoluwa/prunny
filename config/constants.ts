export const FLEX = { flex: 1 };

export const PAY_ACTIONS = [
    { icon: "share", title: "Send Money", },
    { icon: "mobile", title: "Airtime & Data", },
    { icon: "credit-card", title: "Pay a Bill", },
    { icon: "add", title: "More", },
]

export type PAY_ACTIONS_TYPE = keyof typeof PAY_ACTIONS;

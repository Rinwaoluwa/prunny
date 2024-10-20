export const FLEX = { flex: 1 };

export const PAY_ACTIONS = [
    { icon: "share", title: "Send Money", },
    { icon: "mobile", title: "Airtime & Data", },
    { icon: "credit-card", title: "Pay a Bill", },
    { icon: "add", title: "More", },
]

export type PAY_ACTIONS_TYPE = keyof typeof PAY_ACTIONS;

export const WALLET_BALANCE = ["5,000.29", "1,000,000.456"];

export const CARD_DETAILS = [{ name: "SOMTO OYINDA PETER", cardNumber: "5426125654261256" }, { name: "somto oyinda peter", cardNumber: "9358364667354628" }];

export type CARD_DETAILS_TYPE = keyof typeof CARD_DETAILS;
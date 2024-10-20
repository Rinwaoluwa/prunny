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

export const TRANSACTION_SUMMARY = {
    transactionDetails: [
        { label: 'Account Number', value: '0001234567' },
        { label: 'Bank', value: 'Access' },
    ],
    accountDetail: [
        { label: 'Account Name', value: 'Peter Odejobi' },
        { label: 'Transaction ID:', value: 'J2345678' },
    ],
    description: "Brief description here",
    amount: "N10,950",
}

export const NETWORK_PROVIDERS = [
    { name: "mtn", icon: "mtn", id: 1 },
    { name: "glo", icon: "glo", id: 2 },
    { name: "airtel", icon: "airtel", id: 3 },
    { name: "9-mobile", icon: "9-mobile", id: 4 }
];

export type NETWORK_PROVIDERS_TYPE = keyof typeof NETWORK_PROVIDERS;
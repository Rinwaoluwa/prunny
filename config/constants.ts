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
    { name: "9mobile", icon: "9-mobile", id: 4 }
];

export type NETWORK_PROVIDERS_TYPE = keyof typeof NETWORK_PROVIDERS;

export const NETWORK_PLANS = [
    { name: "20MB valid for 24hours (₦25)", id: 1 },
    { name: "2GB valid for 2days (₦500)", id: 2 },
    { name: "7GB valid for 7days (₦1,500)", id: 3 },
    { name: "40GB valid for 1month (₦11,000)", id: 4 }
];

export const GENDER = [
    {name: "Male", id: 1,},
    {name: "Female", id: 2,},
    {name: "Prefer not to say", id: 3,},
];

export const STATES = [
    {name: "Lagos", id: 1,},
    {name: "Abuja", id: 2,},
    {name: "Kano", id: 3,},
]
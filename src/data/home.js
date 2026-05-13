import { HandCoins, Repeat, ShieldCheck, Wallet } from "lucide-react";

export const homeFeatures = [
  [
    "SteadyPay",
    "Send money automatically on your schedule. Never forget important payments again.",
    Repeat,
    "/steadypay",
  ],
  [
    "Automatic Vault Savings",
    "Build healthy saving habits without thinking about it. Build your future one deposit at a time.",
    Wallet,
    "/vault",
  ],
  [
    "Peer Loan",
    "Borrow from people, lend to people, securely and with ease. A trusted lending ecosystem.",
    HandCoins,
    "/peer-loan",
  ],
  [
    "Fixed Deposit",
    "Grow your money with guaranteed returns. Secure, predictable, and rewarding.",
    ShieldCheck,
    "/vault",
  ],
];

export const uniqueFeatures = [
  {
    title: "Steady Pay",
    text: "Create viral money giveaways. Share a QR code and let anyone claim the cash. Perfect for social media contests, community rewards, and events.",
    image: "/assets/feature-steadypay.png",
    href: "/steadypay",
  },
  {
    title: "Peer Loan",
    text: "Generate payment QR codes in seconds. No more typing account numbers. Perfect for businesses, freelancers, and splitting bills with friends.",
    image: "/assets/feature-peer-loan.png",
    href: "/peer-loan",
    flip: true,
  },
  {
    title: "QR Cash Drop",
    text: "Create viral money giveaways. Share a QR code and let anyone claim the cash. Perfect for social media contests, community rewards, and events.",
    image: "/assets/feature-qr-drop.png",
    href: "/steeze-banking",
  },
  {
    title: "QR Request Payments",
    text: "Generate payment QR codes in seconds. No more typing account numbers. Perfect for businesses, freelancers, and splitting bills with friends.",
    image: "/assets/feature-qr-request.png",
    href: "/steeze-banking",
    flip: true,
  },
];

export const securityCards = [
  { title: "Encrypted Transactions", text: "Bank-grade encryption protects every transaction", img: "/assets/sec-lock.png" },
  { title: "Fraud Monitoring", text: "Bank-grade encryption protects every transaction", img: "/assets/sec-shield.png" },
  { title: "Secure Authentication", text: "Multi-factor authentication keeps your account safe", img: "/assets/sec-bolt.png" },
  { title: "Reliable Infrastructure", text: "Built on world-class payment infrastructure", img: "/assets/sec-check.png" },
];

export const testimonials = [
  [
    "The QR Request feature has transformed how I collect payments from customers. No more waiting for them to type account numbers.",
    "Toyosi",
  ],
  [
    "I used QR Cash Drop for a giveaway and it went viral! Over 500 people participated. This feature is a game changer!",
    "Adaeze Okafor",
  ],
  [
    "SteadyPay helps me automate my subscription payments. I never miss a payment deadline anymore. Love it!",
    "Toyosi",
  ],
];

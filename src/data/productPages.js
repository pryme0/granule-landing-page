import {
  Building2,
  Calendar,
  Clock3,
  CreditCard,
  FileText,
  Gift,
  GraduationCap,
  HandCoins,
  Heart,
  Home,
  Link2,
  LockKeyhole,
  Monitor,
  PartyPopper,
  Plane,
  QrCode,
  Repeat,
  ShieldCheck,
  Smartphone,
  Target,
  TrendingUp,
  Unlock,
  Users,
  Wallet,
} from "lucide-react";
import { AlertIcon, BellIcon, ZapIcon } from "../icons";

export const productPages = {
  "/pay-bills": {
    isBills: true,
  },
  "/steeze-banking": {
    eyebrow: "Steeze Banking",
    title: "Send & Receive Money with Style.",
    description:
      "Create money giveaways or payment requests with QR codes and shareable links. Perfect for sending gifts and collecting payments.",
    image: "/assets/hero-steeze.png",
    introTitle: "What is Steeze Banking?",
    introText:
      "Steeze Banking is your all-in-one QR payment solution. Send money as giveaways or request payments from others with two powerful features in one.",
    spotlight: [
      {
        title: "Send Money",
        text:
          "Create money drop orders for giveaways, contests, and rewards. Anyone with the QR code or link can claim the money.",
        icon: Gift,
        tone: "rose",
        items: [
          ["Money Giveaways", "Create money drops that anyone can claim by scanning or clicking."],
          ["Multi-Platform Sharing", "Share your money drops on social media and messaging apps."],
          ["Contest Mode", "Run viral contests, rewards, and campaign payouts."],
        ],
      },
      {
        title: "Receive Money",
        text:
          "Generate payment requests with QR codes and links. Send to anyone and get paid without sharing account numbers.",
        icon: QrCode,
        tone: "purple",
        items: [
          ["Payment Requests", "Create professional payment requests with custom amounts."],
          ["QR & Link Sharing", "Collect payments through a scan-ready code or simple link."],
          ["No Account Exposure", "Receive money without sending bank details around."],
        ],
      },
    ],
    steps: [
      ["Create Money Order", "Select the amount to share or request and add optional details."],
      ["Generate QR/Link", "Granule creates a secure QR code and shareable link instantly."],
      ["Set Rules", "Limit claims, set expiry, or define who can access the link."],
      ["Share & Track", "Send it anywhere and monitor activity from your dashboard."],
    ],
    features: [
      ["Access QR Code Generation", "Instantly create secure QR codes for sharing.", QrCode],
      ["Shareable Links", "Send payment links across any platform.", Link2],
      ["Built-In Tracking", "Monitor claims, requests, views, and engagement.", TrendingUp],
      ["Flexible Controls", "Set expiry times, usage limits, and payout rules.", LockKeyhole],
    ],
    reasons: [
      "Send money as giveaways with style",
      "Request payments without account numbers",
      "Run secure group campaigns and contests",
      "Track who claims, pays, and engages",
    ],
    useCases: [
      ["Social Media Giveaways", "Reward followers and campaign participants.", Gift],
      ["QR & Link Collections", "Collect payments for events and group activities.", QrCode],
      ["Event Promotions", "Attract attendees with exclusive money drop codes.", PartyPopper],
      ["Customer Rewards", "Thank loyal customers with instant cash rewards.", Heart],
    ],
    trust: [
      ["Set Limits", "Limit claims to first users or a total amount.", LockKeyhole],
      ["Expiry Time", "Set when your money drop or request expires.", Clock3],
      ["Analytics", "Track claims, views, and engagement.", TrendingUp],
    ],
  },
  "/peer-loan": {
    eyebrow: "Peer Loan",
    title: "Borrow From People. Lend To People. Securely.",
    description:
      "Granule Peer Loan connects users who want to lend with those who need to borrow securely and transparently.",
    image: "/assets/hero-peer-loan.png",
    introTitle: "What is Peer Loan?",
    introText: "Peer Loan allows users to lend money to other users within the Granule ecosystem.",
    systemCard: {
      title: "How the System Works",
      items: [
        ["Automatically deducts", "the loan amount from the lender."],
        ["Transfers it", "to the borrower instantly."],
        ["Calculates agreed interest", "if any."],
        ["Deducts repayment", "from the borrower on the due date."],
      ],
      note: "All transactions are system-controlled to reduce risk.",
    },
    splitSteps: [
      {
        title: "For Borrowers",
        icon: Users,
        items: [
          ["Request Loan", "Submit your loan request with the amount you need."],
          ["Select Amount & Duration", "Choose how much you need and when you will repay."],
          ["Agree to Interest Rate", "Review and accept the loan terms."],
          ["Get Funded", "Receive funds once a lender accepts the request."],
          ["Repay Automatically", "Granule handles repayment on the due date."],
        ],
      },
      {
        title: "For Lenders",
        icon: HandCoins,
        items: [
          ["Choose Request", "Browse borrowers and select loan requests."],
          ["Review Terms", "Check amount, duration, and interest rate."],
          ["Approve Funding", "Confirm the loan from your wallet balance."],
          ["Track Repayment", "Monitor repayment and loan status."],
          ["Receive Repayment + Interest", "Get your money back with returns on schedule."],
        ],
      },
    ],
    features: [
      ["Automated loan disbursement", "Funds move instantly once both sides agree.", ZapIcon],
      ["Automated repayment deduction", "Repayment happens on schedule.", Repeat],
      ["Transparent interest structure", "Both parties see terms before accepting.", FileText],
      ["Agreed percentage increase", "Interest is clearly stated upfront.", TrendingUp],
      ["Loan tracking dashboard", "Monitor active loans in one place.", Monitor],
      ["Credit history tracking", "Build a repayment record over time.", ShieldCheck],
    ],
    reasons: [
      "Borrow quickly from other app members",
      "Earn interest as a lender",
      "Transparent agreements for peace of mind",
      "Reduced manual repayment friction",
      "Secure ecosystem with automated controls",
    ],
    useCases: [
      ["Emergency Borrowing", "Get a quick bridge when urgent needs come up.", AlertIcon],
      ["Short-Term Business Capital", "Fund business gaps with flexible peers.", Building2],
      ["Investment Lending", "Earn predictable returns by lending responsibly.", TrendingUp],
      ["Salary Bridge", "Cover expenses before your next paycheck.", CreditCard],
    ],
    trust: [
      ["Verified Users", "All users go through verification before participating.", ShieldCheck],
      ["Credit History", "Track records help lenders make informed decisions.", TrendingUp],
      ["Automated System", "Automatic deductions reduce default risk.", Repeat],
    ],
    protection:
      "While multiple safeguards are built into the system, all lending carries some risk. Only lend what you can afford, and borrow responsibly.",
  },
  "/vault": {
    eyebrow: "Vault",
    title: "Save Towards Your Goals. Withdraw Anytime.",
    description:
      "Vault helps you create target savings plans with flexible access when you need your money. Set a goal, automate deposits, and stay disciplined.",
    image: "/assets/hero-vault.png",
    introTitle: "What is Vault?",
    introText: "Vault is a flexible target savings product that allows you to:",
    statCards: [
      ["Set a Savings Goal", "Define what you are saving for", Target],
      ["Automate Deposits", "Schedule regular contributions", Repeat],
      ["Withdraw Anytime", "Liquidate when you need to", Wallet],
    ],
    notice: {
      title: "Unlike fixed deposits, your money is not locked permanently.",
      text:
        "Enjoy the discipline of automated savings with the flexibility to access your funds whenever needed.",
    },
    steps: [
      ["Create a New Vault", "Start by creating your personalized savings vault."],
      ["Name Your Goal", "Give it a meaningful name like Vacation, Rent, or Gadget."],
      ["Set Target Amount", "Decide how much you want to save."],
      ["Choose Auto-Deposit", "Select amount and frequency, such as monthly or weekly."],
      ["Track Progress", "Watch your savings grow towards your milestone."],
    ],
    features: [
      ["Target-based savings", "Set specific amounts for specific goals.", Target],
      ["Auto-deposit setup", "Choose how much and how often to save.", Repeat],
      ["Instant liquidation anytime", "Access money when you need it most.", Unlock],
      ["Progress tracking", "Monitor how close you are to each goal.", TrendingUp],
      ["Multiple vaults allowed", "Create separate vaults for different goals.", Wallet],
      ["Flexible contribution amount", "Increase or reduce your contribution over time.", FileText],
    ],
    reasons: [
      "Stay disciplined with automated savings",
      "Save without stress",
      "Access funds in emergencies",
      "Track goal progress visually",
      "Separate savings from everyday balance",
    ],
    useCases: [
      ["Rent Savings", "Build up your rent fund and never scramble for payments.", Home],
      ["Travel Fund", "Save for that dream vacation you have always wanted.", Plane],
      ["Emergency Fund", "Prepare for the unexpected with a safety net.", Wallet],
      ["Gadget Purchase", "Save up for the latest tech without breaking the bank.", Smartphone],
      ["Wedding or Event Savings", "Plan your special day with dedicated savings.", PartyPopper],
    ],
    ctaTitle: "Take control of your savings.",
    ctaText: "Create your first Vault now and start building towards your financial goals.",
  },
  "/steadypay": {
    eyebrow: "SteadyPay",
    title: "Send Money Automatically. On Your Schedule.",
    description:
      "Whether it is your child allowance, family support, or recurring commitments, set it once and let Granule handle the rest.",
    image: "/assets/hero-steadypay.png",
    introTitle: "What is SteadyPay?",
    introText:
      "SteadyPay is a smart recurring transfer feature that allows you to schedule automatic payments to one or multiple beneficiaries.",
    metricCards: [
      ["N2,000", "Pay weekly for 3 weeks", "purple"],
      ["N20,000", "Send monthly for 3 months", "blue"],
      ["Ongoing", "Set monthly support with no end date", "green"],
    ],
    notice: {
      text:
        "Once scheduled, the system automatically deducts from your account and credits the recipient at the time you selected.",
    },
    steps: [
      ["Choose Recipient", "Select an existing beneficiary or add a new one to your account."],
      ["Enter Amount", "Specify the amount you want to send."],
      ["Select Frequency", "Choose between weekly or monthly transfers."],
      ["Set Duration", "Specify the number of transfers, months, or ongoing."],
      ["Confirm & Activate", "Review and activate your SteadyPay transfer."],
    ],
    features: [
      ["Recurring weekly or monthly payments", "Choose the frequency that works best for your schedule.", Calendar],
      ["End-date planning", "Set when a recurring payment should stop.", Clock3],
      ["Multiple beneficiaries support", "Send to multiple people with clear schedules.", Users],
      ["Recurring notifications", "Stay informed about every scheduled transfer.", BellIcon],
      ["Edit, pause, or cancel anytime", "Keep full control over your payment schedule.", FileText],
      ["Automatic deductions from your account", "Granule handles the rest once it is active.", Repeat],
    ],
    reasons: [
      "Never forget important payments",
      "Build financial discipline",
      "Support loved ones consistently",
      "Avoid manual transfers every time",
      "Full control over schedule and duration",
    ],
    useCases: [
      ["Child Weekly Allowance", "Teach financial responsibility with regular allowances.", GraduationCap],
      ["Monthly Family Support", "Help loved ones with consistent support.", Heart],
      ["Rent Contributions", "Never miss a rent payment with automated transfers.", Home],
      ["Subscription-Style Payments", "Manage recurring commitments effortlessly.", Calendar],
    ],
    ctaTitle: "Take control of your savings.",
    ctaText: "Create your first Vault now and start building towards your financial goals.",
  },
};

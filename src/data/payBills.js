import { BadgeCheck, Bolt, CircleDollarSign, Clock3, Smartphone, Tv, Wifi } from "lucide-react";

export const utilityCards = [
  { title: "Electricity", text: "All DISCOs supported", icon: Bolt, tone: "yellow" },
  { title: "Cable TV", text: "DSTV, GOtv, Startimes", icon: Tv, tone: "purple" },
  { title: "Airtime", text: "All networks", icon: Smartphone, tone: "blue" },
  { title: "Data", text: "All major networks", icon: Wifi, tone: "cyan" },
];

export const steps = [
  ["Select Service", "Choose the utility you want to pay - electricity, cable, airtime, or data."],
  ["Enter Details", "Input your meter number, smart card, phone number, or data plan."],
  ["Choose Amount/Package", "Select the amount or package you prefer."],
  ["Confirm & Pay", "Review details and pay securely from your Granule wallet."],
  ["Instant Delivery", "Receive service completion, token, or confirmation in seconds."],
];

export const electricityProviders = [
  "Ikeja Electric (IKEDC)",
  "Eko Electric (EKEDC)",
  "Abuja Electric (AEDC)",
  "Kano Electric (KEDCO)",
  "Enugu Electric (EEDC)",
  "Ibadan Electric (IBEDC)",
  "Benin Electric (BEDC)",
  "Jos Electric (JED)",
];

export const cableProviders = [
  ["DSTV", "Premium satellite TV plans"],
  ["GOtv", "Affordable decoder packages"],
  ["Startimes", "Flexible cable subscriptions"],
];

export const networks = [
  { name: "MTN", color: "#ffcc00" },
  { name: "GLO", color: "#11a546" },
  { name: "Airtel", color: "#ec0c27" },
  { name: "9mobile", color: "#bfd500" },
];

export const reasons = [
  ["Instant top-up", "Get value immediately after successful payment."],
  ["Multiple payment options", "Pay directly from wallet or linked bank cards."],
  ["Offline top-up", "Complete common payments with reliable fallback flows."],
  ["Smart reminders", "Never miss a renewal or due date again."],
  ["Instant processing", "Fast confirmation and real-time status updates."],
  ["Transaction history", "Track every bill payment in one place."],
];

export const benefits = [
  "Pay all your bills anywhere",
  "Low processing fees",
  "Competitive rates and cashback",
  "No queues or delays for quick service",
  "No service interruption",
  "No failed utility top-up hassles",
];

export const trustCards = [
  ["Secure Payments", "Bank-level encryption protects all your transactions", BadgeCheck],
  ["24/7 Availability", "Pay your bills anytime, anywhere - we never close", Clock3],
  ["Best Rates", "Competitive pricing with cashback rewards", CircleDollarSign],
];

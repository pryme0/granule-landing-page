import { Hero } from "../components/pay-bills/Hero";
import { UtilityPayments } from "../components/pay-bills/UtilityPayments";
import { HowItWorks } from "../components/pay-bills/HowItWorks";
import { ElectricityPanel } from "../components/pay-bills/ElectricityPanel";
import { CablePanel } from "../components/pay-bills/CablePanel";
import { AirtimePanel } from "../components/pay-bills/AirtimePanel";
import { Reasons } from "../components/pay-bills/Reasons";
import { Trust } from "../components/pay-bills/Trust";
import { CTA } from "../components/pay-bills/CTA";
import { Footer } from "../components/Footer";

export function PayBillsPage() {
  return (
    <main>
      <Hero />
      <UtilityPayments />
      <HowItWorks />
      <ElectricityPanel />
      <CablePanel />
      <AirtimePanel />
      <Reasons />
      <Trust />
      <CTA />
      <Footer />
    </main>
  );
}

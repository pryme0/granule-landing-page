import { SectionIntro } from "../components/SectionIntro";
import { Footer } from "../components/Footer";
import { ProductHero } from "../components/product/ProductHero";
import { Spotlight } from "../components/product/Spotlight";
import { SystemCard } from "../components/product/SystemCard";
import { StatCards } from "../components/product/StatCards";
import { Notice } from "../components/product/Notice";
import { SplitSteps } from "../components/product/SplitSteps";
import { ProductSteps } from "../components/product/ProductSteps";
import { FeatureSection } from "../components/product/FeatureSection";
import { ReasonsSection } from "../components/product/ReasonsSection";
import { UseCases } from "../components/product/UseCases";
import { ProductTrust } from "../components/product/ProductTrust";
import { ProductCTA } from "../components/product/ProductCTA";

export function ProductPage({ page }) {
  return (
    <main>
      <ProductHero page={page} />
      <section className="section">
        <SectionIntro title={page.introTitle} text={page.introText} />
        <Spotlight items={page.spotlight} />
        <SystemCard card={page.systemCard} />
        <StatCards cards={page.statCards} metricCards={page.metricCards} />
        <Notice notice={page.notice} />
      </section>
      {page.splitSteps ? <SplitSteps groups={page.splitSteps} /> : <ProductSteps steps={page.steps} />}
      <FeatureSection page={page} />
      <ReasonsSection page={page} />
      <UseCases page={page} />
      <ProductTrust page={page} />
      <ProductCTA page={page} />
      <Footer />
    </main>
  );
}

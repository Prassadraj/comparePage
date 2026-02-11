import BriefOne from "@/components/compare/compare-brief/brief-one";
import CompareBottom from "@/components/compare/compare-bottom";
import CompareConclusion from "@/components/compare/compare-conclusion";
import CostPricingStructure from "@/components/compare/compare-costpricing";
import CompareEco from "@/components/compare/compare-ecosystem";
import FAQ from "@/components/compare/compare-faq";
import FeatureComparison from "@/components/compare/compare-feature-compare";
import HyringFooter from "@/components/compare/compare-footer";
import CompareGlance from "@/components/compare/compare-glance";
import CompapreHero from "@/components/compare/compare-hero";
import Micro1Review from "@/components/compare/compare-hyringreview-product";
import CompareOverview from "@/components/compare/compare-overview";
import CompareSnapshot from "@/components/compare/compare-snapshot/compare-snapshot";
import CompareTable from "@/components/compare/compare-table-content";
import ClientTestimonials from "@/components/compare/compare-testimonial";
import HyringWorkflow from "@/components/compare/compare-workflow";
import {
  briefDataOne,
  featureComparisonDataUiUx,
  hyringReview,
  micro1Review,
} from "@/components/compare/data";
import { micro1BriefData } from "@/components/compare/data";
import { featureComparisonData } from "@/components/compare/data";
import { costPricingData } from "@/components/compare/data";
import { workflowData } from "@/components/compare/data";
import { vettingData } from "@/components/compare/data";
import ComparePlatform from "@/components/compare/compare-platform";

export default function Home() {
  const briefdataOne = briefDataOne;
  const briefTwo = micro1BriefData;

  return (
    <>
      <CompapreHero />
      <div className="lg:p-20 p-5 flex flex-col gap-20 ">
        <CompareTable />
        <CompareOverview />
        <CompareSnapshot />
        <CompareEco />
        <Micro1Review data={hyringReview} />
        <HyringWorkflow
          workflowSteps={workflowData}
          title="Hiring Workflow"
          description="Hyring follows a structured hiring pipeline. This workflow is optimized for speed, transparency, and recruiter control"
        />
        <BriefOne data={briefdataOne} />
        <Micro1Review data={micro1Review} />
        <HyringWorkflow
          title="Vetting Workflow"
          description="Micro1 follows a more programmatic, enterprise-oriented workflow. This workflow emphasises long-term expert quality and data reliability rather than large-scale, rapid hiring cycles."
          workflowSteps={vettingData}
        />
        <BriefOne data={briefTwo} />
        <CompareBottom />
        <CompareGlance />
        <FeatureComparison data={featureComparisonData} />
        <FeatureComparison data={featureComparisonDataUiUx} />
        <CostPricingStructure data={costPricingData} />
        <CompareConclusion />
        <ClientTestimonials />
        <FAQ />
        <ComparePlatform />
      </div>
      <HyringFooter />
    </>
  );
}

import BriefOne from "@/components/compare-new/compare-brief/brief-one";
import CompareBottom from "@/components/compare-new/compare-bottom";
import CompareConclusion from "@/components/compare-new/compare-conclusion";
import CostPricingStructure from "@/components/compare-new/compare-costpricing";
import CompareEco from "@/components/compare-new/compare-ecosystem";
import FAQ from "@/components/compare-new/compare-faq";
import FeatureComparison from "@/components/compare-new/compare-feature-compare";
import HyringFooter from "@/components/compare-new/compare-footer";
import CompareGlance from "@/components/compare-new/compare-glance";
import CompapreHero from "@/components/compare-new/compare-hero";
import Micro1Review from "@/components/compare-new/compare-hyringreview-product";
import CompareOverview from "@/components/compare-new/compare-overview";
import CompareSnapshot from "@/components/compare-new/compare-snapshot/compare-snapshot";
import CompareTable from "@/components/compare-new/compare-table-content";
import ClientTestimonials from "@/components/compare-new/compare-testimonial";
import HyringWorkflow from "@/components/compare-new/compare-workflow";
import {
  briefDataOne,
  comparePlateformData,
  conclusionData,
  featureComparisonDataUiUx,
  hyringReview,
  micro1Review,
  micro1BriefData,
  featureComparisonData,
  costPricingData,
  workflowData,
  vettingData,
  compareHeroData,
  compareOverviewData,
  compareEcosystemData,
  compareTestimonialData,
  compareFaqData,
} from "@/components/compare-new/data";
import ComparePlatform from "@/components/compare-new/compare-platform";

export default function Home() {
  const briefdataOne = briefDataOne;
  const briefTwo = micro1BriefData;

  return (
    <>
      {" "}
      <div className="gap-20 flex flex-col">
        <CompapreHero data={compareHeroData} />
        <div className="px-4 md:px-8 lg:px-10 flex flex-col gap-20 ">
          <CompareTable />
          <CompareOverview data={compareOverviewData} />
          <CompareSnapshot />
          <CompareEco data={compareEcosystemData} />
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
          <CompareConclusion data={conclusionData} />
          <ClientTestimonials data={compareTestimonialData} />
          <FAQ data={compareFaqData} />
        </div>
        <ComparePlatform data={comparePlateformData} />
        <HyringFooter />
      </div>
    </>
  );
}

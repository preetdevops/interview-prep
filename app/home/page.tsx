import { JobCard } from "@/components/job-card";
import { PageContainer } from "@/components/layouts/page-container";
import { SectionContainer } from "@/components/layouts/section-container";
import { ViewContainer } from "@/components/layouts/view-container";
import HomeHeader from "@/components/sections/home-header";

export default function Home() {
  return (
    <PageContainer>
      <HomeHeader />
      <SectionContainer>
        <ViewContainer className="grid grid-cols-3 gap-6">
          <JobCard
            roleType="senior"
            jobID={"8n378923bv7958b3465"}
            jobTitle={"Frontend Engineer"}
            companyName={"GitHub"}
            companyLogo={"/github-mark.png"}
            salary={{
              lower: "",
              higher: undefined
            }}
          />
          <JobCard
            roleType="entry"
            jobID="4k87sdf93h2l56jdsf"
            jobTitle="UX/UI Designer"
            companyName="PixelCrafters"
            companyLogo=""
            salary={{ lower: "$60,000", higher: "$80,000" }}
          />
          <JobCard
            roleType="mid"
            jobID="2o98f7y3456w3r4d5g"
            jobTitle="Data Scientist"
            companyName="Quantum Insights"
            companyLogo=""
            salary={{ lower: "$80,000", higher: "$100,000" }}
          />
          <JobCard
            roleType="senior"
            jobID="1n23k456m78p90o12i"
            jobTitle="Full Stack Developer"
            companyName="CodeCrafters Inc."
            companyLogo=""
            salary={{ lower: "$100,000", higher: "$120,000" }}
          />
          <JobCard
            roleType="entry"
            jobID="5t67yuhj890p1oi2u3"
            jobTitle="Product Manager"
            companyName="InnovateHub"
            companyLogo=""
            salary={{ lower: "$70,000", higher: "$90,000" }}
          />
        </ViewContainer>
      </SectionContainer>
    </PageContainer>
  );
}

import { JobCard } from "@/components/job-card";
import { PageContainer } from "@/components/layouts/page-container";
import { SectionContainer } from "@/components/layouts/section-container";
import { ViewContainer } from "@/components/layouts/view-container";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/typography";
import Link from "next/link";

export default function Landing() {
  return (
    <PageContainer>
      <ViewContainer>
        <SectionContainer className="py-24">
          <Heading as="h1" className="text-center">
            Your personal AI-interview assistant
          </Heading>
          <div className="flex flex-row items-center justify-center gap-4 my-6">
            <Link href={'/sign-in'}>
              <Button>Get Started</Button>
            </Link>
          </div>
        </SectionContainer>
      </ViewContainer>
    </PageContainer>
  )
}
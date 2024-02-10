import { CreateSessionButton } from "../flows/create-session";
import { SectionContainer } from "../layouts/section-container";
import { ViewContainer } from "../layouts/view-container";
import { Button } from "../ui/button";
import { Heading } from "../ui/typography";

export default function HomeHeader() {
  return (
    <SectionContainer>
      <ViewContainer className="flex flex-row items-center justify-between">
        <Heading>Good Evening</Heading>
        <CreateSessionButton />
      </ViewContainer>
    </SectionContainer>
  );
}

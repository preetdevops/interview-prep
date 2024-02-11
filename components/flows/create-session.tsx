"use client";
import { forwardRef, useContext } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { ExploreSessionFormatList, PreferredLevelList } from "@/common";
import { CreateNewSessionContext } from "@/contexts/create-new-session";
import { useRouter } from "next/navigation";
import { generateQuestions } from "@/services/questions";
import { SessionContext } from "@/contexts/session-context";
import { Heading, Text } from "../ui/typography";

export interface CreateSessionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const CreateSessionButton = forwardRef<
  HTMLButtonElement,
  CreateSessionButtonProps
>(({ className, ...args }, ref) => {
  const { sessionFormat } = useContext(CreateNewSessionContext);
  const { setSession } = useContext(SessionContext);
  const router = useRouter();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          ref={ref}
          variant={"gloss"}
          className={cn("create-session", className)}
          {...args}
        >
          Create new session
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Start a new interview session</DialogTitle>
          <DialogDescription>
            You can create a custom or start from the direct options
          </DialogDescription>
        </DialogHeader>
        <div className="dialog-body-content-container grid grid-cols-1 gap-4 my-4">
          <Tabs defaultValue="explore">
            <TabsList>
              <TabsTrigger value="explore">Explore Pre-designed</TabsTrigger>
              <TabsTrigger value="custom">Custom Interview</TabsTrigger>
            </TabsList>
            <TabsContent value="custom">
              <CustomNewSessionView />
            </TabsContent>
            <TabsContent value="explore">
              <ExplorePreDesignedSessionView />
            </TabsContent>
          </Tabs>
        </div>
        <DialogFooter>
          <Button variant="secondary">Cancel</Button>
          <Button
            variant="primary"
            disabled={
              !sessionFormat.jobDescription ||
              !sessionFormat.preferredLevelType ||
              !sessionFormat.roleName
            }
            onClick={async () => {
              const sessionResponse = await generateQuestions(sessionFormat.roleName, sessionFormat.preferredLevelType);
              setSession({
                // @ts-ignore
                questions: await sessionResponse,
                metadata: sessionFormat
              });
              if (sessionResponse) {
                router.replace('/session/3vr9n8b2347rv4x');
              }
            }}
          >
            Next
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
});
CreateSessionButton.displayName = "CreateSessionButton";

function CustomNewSessionView() {
  const { sessionFormat, setSessionFormat } = useContext(CreateNewSessionContext);
  return (
    <div className="custom-new-session-view my-4 grid grid-cols-1 gap-4">
      <Input
        placeholder="Name of the role you're preparing for"
        onChange={(e) => setSessionFormat({
          ...sessionFormat,
          roleName: e.target.value as string
        })}
      />
      <Textarea
        placeholder="Paste the Job Description"
        className="resize-none"
        onChange={(e) => {
          setSessionFormat({
            ...sessionFormat,
            jobDescription: e.target.value as string
          })
        }}
      />
      <Select onValueChange={(value: PreferredLevelType) => {
        setSessionFormat({
          ...sessionFormat,
          preferredLevelType: value
        })
      }}>
        <SelectTrigger>
          {sessionFormat.preferredLevelType || "Choose preferred role"}
        </SelectTrigger>
        <SelectContent>
          {PreferredLevelList.map((level: PreferredLevelType, index: number) => {
            return <SelectItem value={level} key={index} className="capitalize">
              {level} Level
            </SelectItem>
          })}
        </SelectContent>
      </Select>
    </div>
  )
}

function ExplorePreDesignedSessionView() {
  const router = useRouter();
  const { sessionFormat, setSessionFormat } = useContext(CreateNewSessionContext);
  const { session, setSession } = useContext(SessionContext);
  return <div className="explore-pre-designed-session-templates w-full grid grid-cols-2 gap-3 mt-6">
    {ExploreSessionFormatList.map((template, index) => {
      return <div className="border rounded-xl p-6 cursor-pointer hover:bg-blue-50 hover:border-blue-500" key={index}
        onClick={async () => {
          setSessionFormat({ ...template });
          const sessionResponse = await generateQuestions(sessionFormat.roleName, sessionFormat.preferredLevelType);
          setSession({
            // @ts-ignore
            questions: await sessionResponse,
            metadata: sessionFormat
          });
          if (sessionResponse) {
            router.replace('/session/3vr9n8b2347rv4x');
          }
        }}
      >
        <div className="text-left flex flex-col w-[20ch]">
          <Text as="muted" className="capitalize">
            {template.preferredLevelType} Level
          </Text>
          <Heading as="h4">
            {template.roleName}
          </Heading>
        </div>
      </div>
    })}
  </div>
}
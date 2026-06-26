import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  UniverseAnimation,
  SphereAnimation,
} from "@/animations/section-cards/Universe";

export default function ProjectCards() {
  return (
    <div className=" grid grid-cols-4 gap-4">
      <div className="col-span-4 h-[calc(10vh)]" />
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Certification Exams [Open Source]</CardTitle>
          <CardDescription>
            Trying to get certified? Site might be up or not but you can take
            the code and run locally.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UniverseAnimation />
        </CardContent>
      </Card>

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Twrk.com [Private(corpo code)]</CardTitle>
          <CardDescription>
            I was the lead engineer that build out the client side, backend and
            the cloud architecture.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SphereAnimation />
        </CardContent>
      </Card>

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Certification Exams [Open Source]</CardTitle>
          <CardDescription>
            Trying to get certified? Site might be up or not but you can take
            the code and run locally.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UniverseAnimation />
        </CardContent>
      </Card>

      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Certification Exams [Open Source]</CardTitle>
          <CardDescription>
            Trying to get certified? Site might be up or not but you can take
            the code and run locally.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <UniverseAnimation />
        </CardContent>
      </Card>
    </div>
  );
}

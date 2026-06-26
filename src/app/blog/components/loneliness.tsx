import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Loneliness() {
  return (
    <div className="">
      <Card className="w-[calc(50%)] mx-auto mt-4">
        <CardHeader>
          <CardTitle>Loneliness</CardTitle>
          <CardDescription>
            Is this the only way to be good at something?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <h2 className="font-heading text-2xl underline mt-2 mb-2">
            By Design or Poor Choices
          </h2>
          <p className="whitespace-pre-wrap">
            {"\t"}I am 29 years old and I have left social media completely. I
            don't text anyone during the day or night. I don't hang out with the
            little friends I do have and I don't interact with people when I go
            do my daily activities. Work, supermarket, gym etc. Now it sounds
            sad until but this is all by choice. I never really fit in with the
            crowd but I was always good at masking that I did fit in and liked
            what everyone else liked.I am unclear of how many people like me are
            out there just wearing a mask to fit in. I guess that is the
            contract we signed when we were brought into this world.
            <br />
            <br />
            {"\t"} I guess
            <br />
            <br />
          </p>
        </CardContent>

        <CardFooter className="flex-col gap-2"></CardFooter>
      </Card>
    </div>
  );
}

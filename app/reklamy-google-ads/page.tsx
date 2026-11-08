import { StronaUslugi, uslugaMetadata } from "@/components/StronaUslugi";

const SLUG = "reklamy-google-ads";
export const metadata = uslugaMetadata(SLUG);

export default function Page() {
  return <StronaUslugi slug={SLUG} />;
}

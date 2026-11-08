import { StronaUslugi, uslugaMetadata } from "@/components/StronaUslugi";

const SLUG = "strony-internetowe-z-cms";
export const metadata = uslugaMetadata(SLUG);

export default function Page() {
  return <StronaUslugi slug={SLUG} />;
}

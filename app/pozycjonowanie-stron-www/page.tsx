import { StronaUslugi, uslugaMetadata } from "@/components/StronaUslugi";

const SLUG = "pozycjonowanie-stron-www";
export const metadata = uslugaMetadata(SLUG);

export default function Page() {
  return <StronaUslugi slug={SLUG} />;
}

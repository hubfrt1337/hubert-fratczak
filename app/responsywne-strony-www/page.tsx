import { StronaUslugi, uslugaMetadata } from "@/components/StronaUslugi";

const SLUG = "responsywne-strony-www";
export const metadata = uslugaMetadata(SLUG);

export default function Page() {
  return <StronaUslugi slug={SLUG} />;
}

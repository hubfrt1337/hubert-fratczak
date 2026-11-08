import { StronaUslugi, uslugaMetadata } from "@/components/StronaUslugi";

const SLUG = "systemy-rezerwacji-online";
export const metadata = uslugaMetadata(SLUG);

export default function Page() {
  return <StronaUslugi slug={SLUG} />;
}

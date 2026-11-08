import { StronaUslugi, uslugaMetadata } from "@/components/StronaUslugi";

const SLUG = "projektowanie-stron-internetowych";
export const metadata = uslugaMetadata(SLUG);

export default function Page() {
  return <StronaUslugi slug={SLUG} />;
}

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Rozmowa i briefing",
    description:
      "Ustalamy cel strony, budżet i termin. Bez zobowiązań — po tej rozmowie wiesz, ile to potrwa i ile będzie kosztowało.",
  },
  {
    step: "02",
    title: "Projekt i makieta",
    description:
      "Pokazuję układ strony i kierunek wizualny, zanim powstanie kod. Poprawki na tym etapie są najtańsze.",
  },
  {
    step: "03",
    title: "Realizacja",
    description:
      "Koduję stronę, wgrywam treści i testuję na telefonie, tablecie i komputerze. Na bieżąco masz podgląd postępów.",
  },
  {
    step: "04",
    title: "Wdrożenie i wsparcie",
    description:
      "Podpinam domenę, hosting i analitykę, przekazuję dostępy i krótką instrukcję. Po starcie zostaję na czas gwarancji poprawek.",
  },
];

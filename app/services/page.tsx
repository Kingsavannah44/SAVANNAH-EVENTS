import { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";

export const metadata: Metadata = {
  title: "Our Services | Savannah Events",
  description:
    "Discover our comprehensive event services including event organizing, MC services, outside gatherings, and full event management in Kenya.",
};

export default function Services() {
  return <ServicesPage />;
}

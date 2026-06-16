import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live Dashboard Demo — See your in-product experience",
  description:
    "An interactive, in-product demo of the Hyventur dashboard. Explore the left-side menu, payments, consumers, campaigns, plans, settlements, reports, and integrations — exactly what your team sees once they're in.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

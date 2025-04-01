import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Studio",
  description: "Management",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}

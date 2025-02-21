import Link from "next/link";
import { type ComponentProps } from "react";

type Props = Omit<ComponentProps<typeof Link>, "locale" | "href"> & {
  locale: string;
  href: string;
};

export function LocaleLink({ locale, href, ...rest }: Props) {
  const newHref = locale === "en" ? href : `/${locale}${href}`;
  return <Link href={newHref} {...rest} />;
}

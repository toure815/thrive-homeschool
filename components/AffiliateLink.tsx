import { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

// Automatically applies rel="sponsored nofollow" to every affiliate link.
// Usage: <AffiliateLink href="https://example.com/product">Product Name</AffiliateLink>
export default function AffiliateLink({ href, children, className, ...props }: Props) {
  return (
    <a
      href={href}
      rel="sponsored nofollow"
      target="_blank"
      className={className ?? "text-brand-purple underline underline-offset-2 hover:text-brand-pink transition-colors"}
      {...props}
    >
      {children}
    </a>
  );
}

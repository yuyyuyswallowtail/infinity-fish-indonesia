"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Fragment } from "react/jsx-runtime";

export default function AutoBreadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  const pathArray = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    const name = segment.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());
    return { name, href };
  });

  return (
    <Breadcrumb className="pb-8">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" className="underline">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {pathArray.map((segment, idx) => (
          <Fragment key={idx}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {idx === pathArray.length - 1 ? (
                <>{segment.name}</>
              ) : (
                <BreadcrumbLink asChild>
                  <Link className="underline" href={segment.href}>{segment.name}</Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

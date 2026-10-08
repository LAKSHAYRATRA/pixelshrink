import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  items: { name: string; href: string }[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-1 text-xs text-slate-500 flex items-center flex-wrap gap-1 mb-2">
      <Link href="/" className="hover:text-slate-900 transition-colors">
        Home
      </Link>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <div key={item.href} className="flex items-center gap-1">
            <ChevronRight className="w-3 h-3 text-slate-400" />
            {isLast ? (
              <span className="text-slate-900 font-medium">{item.name}</span>
            ) : (
              <Link href={item.href} className="hover:text-slate-900 transition-colors">
                {item.name}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}

import type { Metadata } from 'next';
import { getToolBySlug } from '../../lib/constants';
import ToolPageLayout from '../../components/ToolPageLayout';

const tool = getToolBySlug('compress-webp')!;

export const metadata: Metadata = {
  title: tool.metaTitle,
  description: tool.metaDescription,
  keywords: tool.keywords,
};

export default function Page() {
  return <ToolPageLayout tool={tool} />;
}

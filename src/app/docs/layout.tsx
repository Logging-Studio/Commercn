import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { HomeIcon } from 'lucide-react';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.pageTree} sidebar={{
      tabs: {
        transform: (option, node) => ({
          ...option,
          icon: <HomeIcon />,
        }),
      },
    }} {...baseOptions()}>
      {children}
    </DocsLayout>
  );
}

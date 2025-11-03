import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { Footer } from './footer';

export default function Layout({ children }: LayoutProps<'/'>) {
  return <HomeLayout {...baseOptions()} className="retro-theme">{children}
  <Footer />
  </HomeLayout>;
}

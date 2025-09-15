// This is the home page. It is a server-side rendered component.
// We can fetch data here and pass it to the client-side components.
// We can also use this page to display a hero image and a brief introduction to the website.

import HomeFooter from '@/components/HomeFooter';
import HomeHeader from '@/components/HomeHeader';
import HomeMain from '@/components/HomeMain';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HomeHeader />
      <HomeMain />
      <HomeFooter />
    </div>
  );
}
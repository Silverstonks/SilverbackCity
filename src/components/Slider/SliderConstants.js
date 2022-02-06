import FirstSliderPage from './Content/FirstSliderPage';
import FourthSliderPage from './Content/FourthSliderPage';
import SecondSliderPage from './Content/SecondSliderPage';
import ThirdSliderPage from './Content/ThirdSliderPage';

export const initialNavPills = [
  {
    title: 'Own',
    description: `Own NFTs to join the community and gain access to Silverback City, the Silver Stonks metaverse.`,
    content: <FirstSliderPage />,
  },
  {
    title: 'Explore',
    description: `Silverback City brings every service Silver Stonks offers in one immersive experience. Explore the different areas of the city and use your avatar to interact with different metaverse zones.`,
    content: <SecondSliderPage />,
  },
  {
    title: 'Inmerse',
    description: `Choose which service of Silverback City you want to interact with and start living your own story in themetaverse.`,
    content: <ThirdSliderPage />,
  },
  {
    title: 'Play 2 Earn',
    description: `Earn SSTX tokens and free bids to win purchasing power by playing fun games in the metaverse,starting with Bids Arena.`,
    content: <FourthSliderPage />,
  },
];

export const HomeTitles = {
  pretitle: 'Our Vision',
  title: 'Acces to Silverback City',
  subtitle: 'A Way to Earn Passive Income in hard Assets',
};

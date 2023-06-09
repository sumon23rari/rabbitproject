import Banner from '@/components/Banner';
import Catagory from '@/components/Catagory';
import Footer from '@/components/Footer';
import Navbarsd from '@/components/Navbarsd'
import ShowItem from '@/components/ShowItem/ShowItem';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Package from './Package';


export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme=theme==='system' ? systemTheme:theme;
  const handlelight=()=>{
    setTheme('light')
  }
  const handleDark=()=>{
    setTheme('dark')
  }
  // export const[handleDark,handlelight,currentTheme]=
  return (
    <div>
    <Head>
<title>ribbithold</title>
    </Head>
    <main currentTheme={currentTheme}>
    <Navbarsd handleDark={handleDark} handlelight={handlelight} currentTheme={currentTheme}></Navbarsd>
    <Banner currentTheme={currentTheme}></Banner>
    <Catagory currentTheme={currentTheme}></Catagory>
    <ShowItem currentTheme={currentTheme}></ShowItem>
    <Footer currentTheme={currentTheme}></Footer>
    </main>
    </div>
  )
}

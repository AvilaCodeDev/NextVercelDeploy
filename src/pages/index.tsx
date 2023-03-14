import Head from 'next/head';
import Link from 'next/link';

import { MainLayout } from 'layouts/MainLayout';


export default function Home() {
  return (
    <>
      
      <MainLayout children={  
        <h1>
          Ir a <Link href="/about">About!</Link>
        </h1>} 
      />

    </>
  )
}

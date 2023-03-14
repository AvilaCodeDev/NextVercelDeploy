import { MainLayout } from "layouts/MainLayout";
import Link from "next/link";

export default function About(){
    return(
        <>
            <MainLayout children={ 
                <h1>Ir a <Link href="/">Home!</Link></h1>
             }/>

        </>
    );
}
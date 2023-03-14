import { MainLayout } from "layouts/MainLayout"
import Link from "next/link";

export default function Pricing(){
    return (
        <>
            <h1>Ir a <Link href="/">Home!</Link></h1>
        </>
    );
}

Pricing.getLayout = function getLayout ( page ){
    return(
        <MainLayout>
            { page }
        </MainLayout>
    );
}
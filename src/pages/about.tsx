import Link from "next/link";
import { MainLayout } from "layouts/MainLayout";
import { DarkLayout } from "layouts/DarkLayout";

export default function About() {
    return(
        <>
            <h1>Ir al <Link href="/"> Home!</Link></h1>
        </>
    );
}

About.getLayout = function getLayout ( page: JSX.Element) {
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    )
}
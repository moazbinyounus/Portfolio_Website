import {Outlet} from "react-router";
import Hero from "~/components/Hero";

const HomeLayout = () => {
    return <>
    <Hero name='Moaz'/>
       <section className="max-w-6xl max-auto px-6 my-8">
        <Outlet/>
       </section>
    </>;
}
 
export default HomeLayout;
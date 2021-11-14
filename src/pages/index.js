import { useState } from 'react';
import HeroSection from '../components/HeroSection';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import InfoSection from '../components/InfoSection';
import {
    homeObjOne,
    homeObjTwo,
    homeObjThree

} from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {
    const [SideBarIsOpen,steSideBarIsOpen] = useState(false);

    const SideBarOpenHAndler = () =>{
        steSideBarIsOpen(true);
    }

    const SideBarCloseHAndler = () =>{
        steSideBarIsOpen(false);
    }

    return (
        <>
            <SideBar isOpen={SideBarIsOpen} onClose={SideBarCloseHAndler}/>
            <NavBar onOpen = {SideBarOpenHAndler}/>
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <Services  />
            <InfoSection {...homeObjThree}/>
            <Footer  />
        </>
    )
}

export default Home;

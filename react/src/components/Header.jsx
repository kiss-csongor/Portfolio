import { navigation } from "../constants";
import { useLocation, Link } from "react-router-dom";
import Button from './Button';
import MenuSvg from '../assets/svg/MenuSvg'
import { HamburgerMenu } from './design/Header'
import { useState } from "react";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { sze_fekvo_logo, kcs_logo } from '../assets'

const Header = () => {
    const pathname = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            enablePageScroll();
        } else {
            setOpenNavigation(true);
            disablePageScroll();
        }
    };

    const handleClick = () => {
        if (!openNavigation) return;

        enablePageScroll();
        setOpenNavigation(false);
    };

  return (
    <div className={`w-full fixed top-0 z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? 'bg-n-8': 'bg-n-8/90 backdrop-blur-sm'}`}>
        <div className="flex items-center px-5 lg:px-7.5 xl:px-1 max-lg:py-1">
            <div className='block w-[12rem] xl'>
                <Link to="/"><img src={kcs_logo} width={80} alt='kcs_logo' /></Link>
            </div>
            <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
                <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                    {navigation.map((item) => (
                        <Link to={item.url} onClick={handleClick} key={item.id} className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-n-1 ${item.onlyMobile ? "lg:hidden" : ""} px-6 py-6 md:py-8 lg:mx-1 lg:text-xs lg:font-semibold xl:-mx-6 2xl:mx-0 ${item.url === pathname.hash ? 'z-2 lg:text-n-1' : 'lg:text-n-1/50'} lg:leading-5 lg:hover:text-n-1 xl:px-20`}>
                            {item.title}
                        </Link>
                ))}
                </div>
                <HamburgerMenu />
            </nav>
            <div className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block">
                <Link to="/contact">Kapcsolat</Link>
            </div>
            <Button className="hidden lg:flex">
                <Link to="/newsletter">Hírlevél</Link>
            </Button>
            <Button onClick={toggleNavigation} className="ml-auto lg:hidden" px="px-3">
                <MenuSvg openNavigation={openNavigation} />
            </Button>
        </div> 

    </div>
)
}

export default Header;
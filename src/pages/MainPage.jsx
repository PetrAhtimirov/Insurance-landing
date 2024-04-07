import {useEffect} from "react";

import AppHeader from "../components/AppHeader";
import Banner from "../components/Banner";
import Bonus from "../components/Bonus";
import GeneralStat from "../components/GeneralStat";
import Need from "../components/Need";
import Subscription from "../components/Subscription";
import Questions from "../components/Questions";
import AppFooter from "../components/AppFooter";
import Chat from "../components/Сhat";

import {smoothScroll} from "../services/utilities";

const MainPage = () => {
    useEffect(() => {
        smoothScroll();
    }, []);

    return (
        <>
            <AppHeader/>
            <Banner/>
            <Bonus />
            <GeneralStat />
            <Need />
            <Subscription />
            <Questions />
            <AppFooter />
            <Chat />
        </>
    )
}

export default MainPage;
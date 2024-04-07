import AppHeader from "../components/AppHeader";
import Banner from "../components/Banner";
import Bonus from "../components/Bonus";
import GeneralStat from "../components/GeneralStat";
import Need from "../components/Need";
import Subscription from "../components/Subscription";
import Questions from "../components/Questions";
import AppFooter from "../components/AppFooter";

const MainPage = () => {
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
        </>
    )
}

export default MainPage;
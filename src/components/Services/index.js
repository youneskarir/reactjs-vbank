import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from "./ServicesElements";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import GIcon1 from '../../images/Green-svg-1.svg';
import GIcon2 from '../../images/Green-svg-2.svg';
import GIcon3 from '../../images/Green-svg-3.svg';

import OIcon1 from '../../images/Orange-svg-1.svg';
import OIcon2 from '../../images/Orange-svg-2.svg';
import OIcon3 from '../../images/Orange-svg-3.svg';




const Services = () => {
    const theme= useContext(ThemeContext);


    return (
        <ServicesContainer id="services">
            <ServicesH1>
                Our Services
            </ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={theme.current.id ==='O' ? OIcon1 : GIcon1} />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>we help reduce your fess and increase your overall revenue.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={theme.current.id ==='O' ? OIcon2 : GIcon2} />
                    <ServicesH2>Virtual offices</ServicesH2>
                    <ServicesP>you can access our platform online anywhere in the world.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={theme.current.id ==='O' ? OIcon3 : GIcon3} />
                    <ServicesH2>Premium Benefits</ServicesH2>
                    <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>

    )
}

export default Services;

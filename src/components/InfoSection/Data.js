// the first section 
import GreenOne from '../../images/Green-svg-1.svg';
import OrangeOne from '../../images/Orange-svg-1.svg';
// the second section 
import GreenTwo from '../../images/Green-svg-2.svg';
import OrangeTwo from '../../images/Orange-svg-2.svg';
// the third section 
import GreenThree from '../../images/Green-svg-3.svg';
import OrangeThree from '../../images/Orange-svg-3.svg';


export const homeObjOne = {
    id:'about',
    lightBg:false,
    lightText:true,
    lightTextDesc:true,
    topLine:'Premium Bank',
    headLine:'Unlimited Transactions with zero fees',
    description:'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
    buttonLabel: 'Get started',
    imgStart:true,
    imgG:GreenOne,
    imgO:OrangeOne,
    alt:'Car',
    dark:true,
    primary:true,
    darkText:false,
    HoverBtn:true,
}


export const homeObjTwo = {
    id:'discover',
    lightBg:true, 
    lightText:false,
    lightTextDesc:false,
    topLine:'Unlimited Access',
    headLine:'Login to your account any time',
    description:'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
    buttonLabel: 'Learn more',
    imgStart:false,
    imgG:GreenTwo,
    imgO:OrangeTwo,
    alt:'piggy bank',
    dark:false,
    primary:false,
    darkText:true,
    HoverBtn:false,
}


export const homeObjThree = {
    id:'signup',
    lightBg:true,
    lightText:false,
    lightTextDesc:false,
    topLine:'Join our Team',
    headLine:'Creating an account is extremely easy',
    description:'Get everything set up and ready in under 10 minutes. All you need to do is add your informations and you are ready to go.',
    buttonLabel: 'Start Now',
    imgStart:true,
    imgG:GreenThree,
    imgO:OrangeThree,
    alt:'sign up',
    dark:false,
    primary:false,
    darkText:true,
    HoverBtn:false,
}





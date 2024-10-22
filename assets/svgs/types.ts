import {StyleProp, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

import security from "./icons/security.svg";
import eyeClosed from "./icons/eye-close.svg";
import eyeOpen from "./icons/visible.svg";
import fingerPrint from "./icons/finger-print.svg";
import path from "./icons/path.svg";
import mail from "./icons/mail.svg";
import nigerianFlag from "./icons/nigerian-flag.svg";
import fund from "./icons/fund.svg";
import add from "./icons/add.svg";
import cardLines from "./icons/card-lines.svg";
import checkmarkFilled from "./icons/checkmark-filled.svg";
import close from "./icons/close-filled.svg";
import creditCard from "./icons/credit-card.svg";
import dialer from "./icons/dialer.svg";
import wallet from "./icons/wallet.svg";
import request from "./icons/request.svg";
import profile from "./icons/profile.svg";
import transactionSuccessful from "./icons/transaction-successful.svg";
import mastercard from "./icons/mastercard.svg";
import home from "./icons/home.svg";
import pieChart from "./icons/pie-chart.svg";
import services from "./icons/services.svg";
import temple from "./icons/temple.svg";
import share from "./icons/share.svg";
import mobilePhone from "./icons/mobile-phone.svg";
import notificationBell from "./icons/notification-bell.svg";
import prunnyLogo3 from "./icons/prunny-logo-3.svg";
import addNewWallet from "./icons/add-new-wallet.svg";
import visible from "./icons/visible-1.svg";
import hidden from "./icons/hidden-1.svg";
import nairaSign from "./icons/naira-sign.svg";
import airtel from "./icons/airtel.svg";
import mtn from "./icons/mtn.svg";
import glo from "./icons/globacom.svg";
import nineMobile from "./icons/9mobile.svg";
import faceScan from "./icons/face-scan.svg";
import camera from "./icons/camera.svg";

export const ICONS = {
    security,
    "eye-closed": eyeClosed,
    "eye-open": eyeOpen,
    "finger-print": fingerPrint,
    path,
    mail,
    "nigerian-flag": nigerianFlag,
    fund, 
    "card-lines": cardLines,
    "checkmark": checkmarkFilled,
    close,
    "credit-card": creditCard,
    dialer,
    wallet,
    request,
    profile,
    "transaction-successful": transactionSuccessful,
    mastercard,
    home,
    "pie-chart": pieChart,
    services,
    temple,
    share,
    "mobile": mobilePhone,
    "notification-bell": notificationBell,
    "prunny-logo-3": prunnyLogo3,
    add,
    "add-new-wallet": addNewWallet,
    visible,
    hidden,
    "naira-sign": nairaSign,
    airtel,
    mtn,
    glo,
    "9-mobile": nineMobile,
    "face-scan": faceScan,
    camera,
};

export type IconName = keyof typeof ICONS;

export interface IconProps extends SvgProps {
    name: IconName;
    size?: number;
    style?: StyleProp<ViewStyle>;
    iconColor?: string;
    stroke?: string;
    iconOpacity?: number;
    strokeWidth?: number;
    focused?: boolean;
}
  
export type Props = IconProps;
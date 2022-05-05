import React, { useContext } from 'react'

import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";
import { DeviceContext } from '../../DeviceContext'; 

export default function oldFooter() {
    const device = useContext(DeviceContext)

    React.useEffect(() => {
        document.body.classList.add('landing-page')
        window.scrollTo(0,0)
        document.body.scrollTop = 0 
        return function cleanup() {
            document.body.classList.remove('landing-page')
        }
    })

    return <> {device === "mobile" ? <MobileFooter /> : <DesktopFooter />}</>;

}
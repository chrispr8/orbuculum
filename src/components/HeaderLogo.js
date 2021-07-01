
import { useEffect, useState } from "react"
import {
    useSpring,
    animated as a
} from "react-spring"
import {
    EuiHeaderLogo,
    EuiButton,
    PropertySortType
} from "@elastic/eui"

import { useConfig } from "../stores/Config.store"


const AnimatedEuiHeaderLogo = a(EuiHeaderLogo)

const Logo = (props) => {
    const [rotation, set] = useState(false)
    const config = useConfig()
    const spin = useSpring({
        transform: rotation ? "rotate(0deg)" : "rotate(360deg)",
        config: { mass: 5, tension: 500, friction: 80 }
    })

    const spin_logo = () => {
        set((rotation) => !rotation)
        config.toggleFlyout()
        console.log(config.isFlyout)
    }

    return (
        <a.svg
            onClick={spin_logo}
            style={
                spin
            }
            width="32"
            height="32"
            viewBox="-0.5 -0.5 172 172"
        >
            <g fill="transparent" stroke="#000" strokeWidth="6" pointerEvents="none">
                <ellipse cx="85.5" cy="85.5" rx="82.5" ry="82.5"></ellipse>
                <ellipse cx="85.5" cy="44.5" rx="40" ry="40"></ellipse>
                <ellipse cx="120.5" cy="104.5" rx="40" ry="40"></ellipse>
                <ellipse cx="50.5" cy="104.5" rx="40" ry="40"></ellipse>
                <ellipse cx="85.5" cy="84.5" rx="40" ry="40"></ellipse>
            </g>
        </a.svg>
    )
}


const HeaderLogo = (props) => {
    return (
        <EuiHeaderLogo
            iconType={Logo}
            onClick={console.log(" click")}
        />
    )
}

export default HeaderLogo
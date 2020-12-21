import {
    EuiCard
} from "@elastic/eui"
import Logo from "./Logo"

// TODO: Fix background-color CSS!

const CanvasCard = ({ title, description }) => {
    return (
        <EuiCard
            textAlign="left"
            image={
                <Logo />
            }
            title={title}
            description={description}
        />
    )
}

export default CanvasCard
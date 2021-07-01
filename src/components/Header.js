import { useState } from "react"
import {
    EuiAvatar,
    EuiHeader,
    EuiHeaderLinks,
    EuiHeaderLink,
    EuiHeaderSectionItemButton,
    EuiSpacer
} from "@elastic/eui"

import Login from "./Login"
import HeaderLogo from "./HeaderLogo"


const Header = () => {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)

    const closeModal = () => setShowModal(false)

    return (
        <div>
            <EuiHeader
                position="static"
                style={{ zIndex: 3600 }}
                sections={[
                    {
                        items: [
                            <HeaderLogo />,
                            <EuiSpacer size="l" />,
                            <EuiHeaderLinks>
                                <EuiHeaderLink>
                                    Dashboard
                                </EuiHeaderLink>
                                <EuiHeaderLink>
                                    Graph
                                </EuiHeaderLink>
                            </EuiHeaderLinks>,
                        ],
                        borders: "right",
                    },
                    {
                        items: [
                            <EuiHeaderSectionItemButton
                                notification={"2"}
                                onClick={openModal}
                            >
                                <EuiAvatar
                                    name="David Davidson"
                                    size="s"
                                />
                            </EuiHeaderSectionItemButton>
                        ]
                    }
                ]}
            />
            {showModal && <Login closeModal={closeModal} />}
        </div>
    )
}

export default Header
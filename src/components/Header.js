import { useState } from "react"
import {
    EuiAvatar,
    EuiBadge,
    EuiHeader,
    EuiHeaderLogo,
    EuiHeaderLinks,
    EuiHeaderLink,
    EuiHeaderSectionItemButton,
    EuiIcon
} from "@elastic/eui"

import Login from "./Login"


const Header = ({ theme }) => {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => setShowModal(true)

    const closeModal = () => setShowModal(false)

    return (
        <div>
            <EuiHeader
                theme="light"
                sections={[
                    {
                        items: [
                            <EuiHeaderLogo>Orbuculum</EuiHeaderLogo>,
                            <EuiHeaderLinks>
                                <EuiHeaderLink isActive>
                                    <EuiIcon type="dashboardApp" size="l" />
                                    Dashboard
                            </EuiHeaderLink>
                                <EuiHeaderLink>
                                    <EuiIcon type="graphApp" size="l" />
                                    Graph
                            </EuiHeaderLink>
                            </EuiHeaderLinks>,
                        ],
                        borders: "right",
                    },
                    {
                        items: [
                            <EuiBadge
                                color={"white"}
                                iconType="arrowDown"
                                iconSide="right"
                            >
                                Logs
                            </EuiBadge>,
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
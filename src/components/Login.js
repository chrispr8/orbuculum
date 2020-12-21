import { useEffect, useRef, useState, } from "react"
import {
    EuiModal,
    EuiModalBody,
    EuiModalFooter,
    EuiModalHeader,
    EuiOverlayMask,
    EuiButton,
    EuiTabs,
    EuiTab,
    EuiForm,
    EuiFormRow,
    EuiFieldText,
    EuiFieldPassword,
} from "@elastic/eui"

import validateEmail from "../utils/validator"

const Login = ({ closeModal }) => {
    const [selectedTab, setSelectedTab] = useState("login")

    const userInputRef = useRef(null)

    const handleClick = () => {
        userInputRef.current.focus()
    }

    return (
        <EuiOverlayMask
            onClick={closeModal}
        >
            <EuiModal onClose={closeModal} initialFocus="[name=email]">
                <EuiModalHeader>
                    <EuiTabs>
                        <EuiTab
                            onClick={() => {
                                setSelectedTab("login")
                            }}
                            isSelected={"login" === selectedTab}
                            disabled={false}
                            key={"login"}
                        >
                            Login
                        </EuiTab>
                        <EuiTab
                            onClick={() => {
                                setSelectedTab("register")
                            }}
                            isSelected={"register" === selectedTab}
                            disabled={false}
                            key={"register"}
                        >
                            Register
                        </EuiTab>
                    </EuiTabs>
                </EuiModalHeader>
                <EuiModalBody>
                    {selectedTab === "login" &&
                        <EuiForm>
                            <EuiFormRow name="username">
                                <EuiFieldText
                                    placeholder="username"
                                    name="popfirst"
                                />
                            </EuiFormRow>
                            <EuiFormRow>
                                <EuiFieldPassword
                                    placeholder="password"
                                />
                            </EuiFormRow>
                        </EuiForm>
                    }
                    {selectedTab === "register" &&
                        <EuiForm>
                            <EuiFormRow name="username">
                                <EuiFieldText
                                    placeholder="username"
                                    name="popfirst"
                                />
                            </EuiFormRow>
                            <EuiFormRow name="email">
                                <EuiFieldText
                                    placeholder="email"
                                    name="popfirst"
                                />
                            </EuiFormRow>
                            <EuiFormRow>
                                <EuiFieldPassword
                                    placeholder="password"
                                />
                            </EuiFormRow>
                        </EuiForm>
                    }
                </EuiModalBody>
                <EuiModalFooter>
                    {selectedTab === "login" &&
                        <EuiButton
                            onClick={closeModal}
                        >
                            Login
                        </EuiButton>
                    }
                    {selectedTab === "register" &&
                        <EuiButton
                            onClick={closeModal}
                        >
                            Register
                    </EuiButton>
                    }
                </EuiModalFooter>
            </EuiModal>
        </EuiOverlayMask>
    )
}

export default Login

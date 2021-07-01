import { useState } from "react"
import {
    EuiRange,
    EuiFlyout,
    EuiFlyoutBody,
    EuiText,
} from "@elastic/eui"
import { observer } from "mobx-react-lite"

import { useConfig } from "../stores/Config.store"


const Panel = () => {
    const config = useConfig()

    const onChange = (e) => {
        config.setGravity(Number(e.target.value))
    }

    return (
        <>
            {
                config.isFlyout ?
                    (<EuiFlyout
                        type="push"
                        size="s"
                        style={{
                            backgroundColor: "yellow",
                            width: "20vw",
                            height: "100vh",
                            top: "46px",
                            position: "fixed"
                        }}
                    >
                        <EuiFlyoutBody>
                            <EuiText
                                style={{
                                    backgroundColor: "red",
                                    textAlign: "center"
                                }}
                            >
                                Gravity
                            </EuiText>
                            <EuiRange 
                                onChange={onChange}
                                value={config.getGravity}
                                showInput
                                min={0}
                                max={1}
                                step={0.01}
                                showLabels
                            />
                        </EuiFlyoutBody>
                    </EuiFlyout>
                    ) : null
            }
        </>
    )
}

export default observer(Panel)
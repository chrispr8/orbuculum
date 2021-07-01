import {
    EuiFlyout,
    EuiFlyoutBody,
} from "@elastic/eui"
import { observer } from "mobx-react-lite"

import { useConfig } from "../stores/Config.store"
import Graph from "./Graph"

const Body = () => {
    const config = useConfig()

    return (
        <div>
            {
                config.isFlyout ?
                    (<EuiFlyout
                        type="push"
                        size="s"
                    >
                        <EuiFlyoutBody>

                        </EuiFlyoutBody>
                    </EuiFlyout>
                    ) : null
            }
            < Graph />
        </div>
    )
}

export default observer(Body)
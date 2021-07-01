import { createContext, useContext } from "react"
import Config from "../models/Config.model"

const defaultConfig = Config.create({
    body_flyout: false,
})

export const ConfigStore = defaultConfig

const ConfigContext = createContext()

export const ConfigProvider = ConfigContext.Provider

export function useConfig() {
    const store = useContext(ConfigContext);
    if (store === null) {
        throw new Error("ConfigStore malfunctioned!")
    }
    if (store === undefined) {
        throw new Error("ConfigStore is undefined!")
    }
    return store
}
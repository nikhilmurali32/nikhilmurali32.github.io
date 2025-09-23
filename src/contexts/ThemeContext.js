import React, { createContext, useState } from 'react'

import { themeData } from '../data/themeData'
import { 
    greenThemeLight, greenThemeDark, bwThemeLight, bwThemeDark, 
    blueThemeLight, blueThemeDark, redThemeLight, redThemeDark, 
    orangeThemeLight, orangeThemeDark, purpleThemeLight, purpleThemeDark, 
    pinkThemeLight, pinkThemeDark, yellowThemeLight, yellowThemeDark
} from '../theme/theme'

export const ThemeContext = createContext()

function ThemeContextProvider(props) {
    // eslint-disable-next-line
    const [theme, setTheme] = useState(themeData.theme)
    const [drawerOpen, setDrawerOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(themeData.theme.type === 'dark')

    const setHandleDrawer = () => {
        setDrawerOpen(!drawerOpen)
    }

    // Map themes to their light/dark counterparts
    const themeMap = {
        // Light themes
        [JSON.stringify(greenThemeLight)]: { light: greenThemeLight, dark: greenThemeDark },
        [JSON.stringify(bwThemeLight)]: { light: bwThemeLight, dark: bwThemeDark },
        [JSON.stringify(blueThemeLight)]: { light: blueThemeLight, dark: blueThemeDark },
        [JSON.stringify(redThemeLight)]: { light: redThemeLight, dark: redThemeDark },
        [JSON.stringify(orangeThemeLight)]: { light: orangeThemeLight, dark: orangeThemeDark },
        [JSON.stringify(purpleThemeLight)]: { light: purpleThemeLight, dark: purpleThemeDark },
        [JSON.stringify(pinkThemeLight)]: { light: pinkThemeLight, dark: pinkThemeDark },
        [JSON.stringify(yellowThemeLight)]: { light: yellowThemeLight, dark: yellowThemeDark },
        // Dark themes
        [JSON.stringify(greenThemeDark)]: { light: greenThemeLight, dark: greenThemeDark },
        [JSON.stringify(bwThemeDark)]: { light: bwThemeLight, dark: bwThemeDark },
        [JSON.stringify(blueThemeDark)]: { light: blueThemeLight, dark: blueThemeDark },
        [JSON.stringify(redThemeDark)]: { light: redThemeLight, dark: redThemeDark },
        [JSON.stringify(orangeThemeDark)]: { light: orangeThemeLight, dark: orangeThemeDark },
        [JSON.stringify(purpleThemeDark)]: { light: purpleThemeLight, dark: purpleThemeDark },
        [JSON.stringify(pinkThemeDark)]: { light: pinkThemeLight, dark: pinkThemeDark },
        [JSON.stringify(yellowThemeDark)]: { light: yellowThemeLight, dark: yellowThemeDark },
    }

    const toggleDarkMode = () => {
        const currentThemeKey = JSON.stringify(theme)
        const themeVariants = themeMap[currentThemeKey]
        
        if (themeVariants) {
            const newTheme = isDarkMode ? themeVariants.light : themeVariants.dark
            setTheme(newTheme)
            setIsDarkMode(!isDarkMode)
        }
    }

    const value = { theme, drawerOpen, setHandleDrawer, isDarkMode, toggleDarkMode }
    return (
        <ThemeContext.Provider value={value}>
            {props.children}
        </ThemeContext.Provider>
    )
}


export default ThemeContextProvider
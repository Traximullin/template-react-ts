import React, {createContext, useCallback, useContext, useState} from "react";

interface Theme {
    color: string
    background: string
}

type AvailableThemes = 'light' | 'dark'

const themes: Record<AvailableThemes, Theme> = {
    light: {
        color: '#000000',
        background: '#eeeeee'
    },
    dark: {
        color: '#ffffff',
        background: '#222222'
    }
}

const ThemeContext = createContext({
    theme: themes.dark,
    toggle: () => {}
})

const ThemeProvider: React.FC = ({children}) => {
    const [currentTheme, setCurrentTheme] = useState<AvailableThemes>('dark')

    const toggle = useCallback<() => void>(() => {
        setCurrentTheme(currentTheme === 'dark' ? 'light' : 'dark')
    },[currentTheme])

    const setTheme = useCallback<(theme: AvailableThemes) => void>((theme) => {
        setCurrentTheme(theme)
    },[])

    return(
        <ThemeContext.Provider value={{
            toggle,
            theme: themes[currentTheme]
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

const Context = () => {

    const {theme, toggle } = useContext(ThemeContext)

    return(
        <ThemeProvider>
            <button
                onClick={toggle}
                style={{
                    background: theme.background,
                    color: theme.color
                }}
            >
                some button
            </button>
        </ThemeProvider>
    )
}

export default Context
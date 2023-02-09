import { useState, useEffect } from "react"
import { Dimensions } from "react-native"

export const UseOrientation = () => {
    const [screenInfo, setScreenInfo]
        = useState(Dimensions.get('screen'));

    useEffect(() => {
        const onChange = (result) => {
            setScreenInfo(result.screen);
        }

        const add = Dimensions.addEventListener('change', onChange);

        return () => add.remove('change', onChange);

    }, []);

    return {
        ...screenInfo,
        isPortrait: screenInfo.height > screenInfo.width
    }
}
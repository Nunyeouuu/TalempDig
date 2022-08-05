import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import MMscreen from "./screen/MMscreen";

const App = () => {
    return(
        <PaperProvider>
            <MMscreen/>
        </PaperProvider>
    )
}

export default App;
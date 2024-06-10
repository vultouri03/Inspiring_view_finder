import { StyleSheet, Text, View, Button } from 'react-native';

import Save from './Save';

const Home = () => {
    const save = new Save
    
    const coordinates = {
        "longitude": 100,
        "latitude": 100
    }

    const saveData = () => {
        save.storeData({
            "favorites": 
                [
                    {"favorite": "cool place here"},
                    {"favorite": "cool place here"},
                    {"favorite": "cool place here"},
                    {"favorite": "cool place here"},
                ]
            
        })
    }

    
 return(
    <>
    <Text>hello world</Text>
    <Button
        onPress={save.getData}
        title="load data"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
    />
    <Button
        onPress={saveData}
        title="Save data"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
    />
    
</>
 )
}



export default Home;
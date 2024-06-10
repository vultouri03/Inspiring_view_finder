import AsyncStorage from '@react-native-async-storage/async-storage';

//class to easily reuse the save functionality
class Save {
    //sets the value to the initial given value
    constructor(value) {
        this.value
    }

    //stringifies an array and saves it in the async storage
    storeData = async (value, key) => {
        value = JSON.stringify(value)
        if(key === null){
            key === 'my-key'
        }
        try {
           await AsyncStorage.setItem('key', value);
         } catch (e) {
            // saving error
            console.log(e)
         }
     };

     //checks if the save data exists and then loads it in
     getData = async (key) => {
        if(key === null){
            key === 'my-key'
        }
        try {
          const value = await AsyncStorage.getItem('my-key');
          if (value !== null) {
            JSON.parse(value)
            console.log(value)
          }
        } catch (e) {
          // error reading value
          console.log(e)
        }
      };

    removeData = async (key) => {
        if(key === null){
            key === 'my-key'
        }
        try {
            await AsyncStorage.removeItem(key)
        } catch(e) {
            //error removing data
            console.log(e)
        }
    }

    //get all existing keys
    getkeys = async () => {
        let keys = []
        try{
            keys = await AsyncStorage.getAllKeys()
            console.log(keys)
            return keys
        } catch(e) {
            //error reading keys
            console.log(e)
        }
    }
    
}

export default Save
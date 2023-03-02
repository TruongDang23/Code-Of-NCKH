import {
    View,
    ImageBackground,
    ScrollView,
} from 'react-native'
import {icons, images} from '../../constant'
import {
    UIIcon,
    TextBox,
} from '../../components'
import FindItem from './FindItem'
import { useState } from 'react'
import DataHuman from '../../Main/DataHuman'

function Find({navigation,route})
{
    let key=route.params.key

    const [humans,setHumans]=useState(DataHuman)
    const [suitableHumans,setSuitableHumans]=useState([
        {
            name:'',
            age:0,
            address:'',
            id:0,
        }
    ])
    const [text,setText] = useState('')
    
    return (
        <View style={{flex:1}}>
            <ImageBackground
                source={images.background}
                blurRadius={5}
                resizeMode='cover'
                style={{flex:1}}>
                    <View style={{
                        flex:10,
                        flexDirection:'row',
                        justifyContent:'space-around',
                        marginTop:50,
                    }}>
                        <UIIcon 
                        thisIcon={icons.home}
                        onPress={()=>{
                            navigation.navigate('Home')
                        }}
                        />

                        <TextBox 
                        onChangeText={(text) => setText(text)}
                        value={text}
                        placeholder="ID: 0000"/>

                        <UIIcon 
                        thisIcon={icons.find}
                        onPress={() => {
                            if(text=='')
                                alert('Please type the ID')
                            else
                            {
                                let human=humans.map(eachHuman => {
                                    if(eachHuman.id==text)
                                        return{...eachHuman}
                                    else
                                        return {eachHuman,id:0}
                                })
                                setSuitableHumans(human)
                            }
                        }}
                        />
                    </View>

                    <View style={{
                        flex:90,
                    }}>
                        <ScrollView>
                            {
                                suitableHumans.map(eachSuitable => {
                                    if (eachSuitable.id != 0)
                                        return <FindItem human={eachSuitable} key={eachSuitable.id} keyUser={key}/>
                                })
                            }
                        </ScrollView>
                    </View>
            </ImageBackground>
        </View>
    )
}
export default Find
import {
    View,
    ImageBackground,
    ScrollView,
    Text,
} from 'react-native'
import {icons, images} from '../../constant'
import {
    UIIcon,
    TextBox,
} from '../../components'
import HumanItem from './HumanItem'
import {ref,onValue} from 'firebase/database'
import database from '../../firebase'
import dataHuman from '../../Main/DataHuman'

function Home({navigation,route})
{
    let key=route.params.key

    let id=[]
    let db=database
    let dbRef=ref(db,'users/'+key+'/theoDoi')
    onValue(dbRef,(snapshot)=>{
        snapshot.forEach((childSnapshot)=>{
            let childData=childSnapshot.val()
            id.push(childData.id)
        })
    })

    let humans=[]
    id.forEach((eachId)=>{
        dataHuman.forEach((eachHuman)=>{
            if(eachId==eachHuman.id)
                humans.push(eachHuman)
        })
    })

    return (
        <View style={{flex:1}}>
            <ImageBackground
                source={images.background}
                blurRadius={5}
                resizeMode='cover'
                style={{flex:1}}>
                    <View style={{
                        flex:15,
                        flexDirection:'row',
                        justifyContent:'space-around',
                        marginTop:50,
                    }}>
                        <UIIcon 
                        thisIcon={icons.home} 
                        onPress={()=>{
                            navigation.navigate('Home')
                        }}/>
                        <Text style={{ 
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>DANH SÁCH NGƯỜI THÂN</Text>
                        <UIIcon 
                        thisIcon={icons.logout}
                        onPress={()=>{
                            navigation.navigate('Welcome')
                        }}
                        />
                    </View>

                    <View style={{
                        flex:90,
                    }}>
                        <ScrollView>
                            {humans.map(eachHuman => <HumanItem 
                                                        human={eachHuman}
                                                        key={eachHuman.id}
                                                        onPress={()=>{
                                                            navigation.navigate('Estimate',{name:eachHuman.name,id:eachHuman.id}),
                                                            navigation.navigate('Mornitor',{name:eachHuman.name,id:eachHuman.id})
                                                        }}
                                                      />)}
                        </ScrollView>
                    </View>
            </ImageBackground>
        </View>
    )
}
export default Home
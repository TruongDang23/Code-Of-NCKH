import {
    View,
    Text,
    ImageBackground,
    ScrollView,
} from 'react-native'
import {icons, images} from '../../constant'
import {UIIcon} from '../../components'
import { useState,useEffect } from 'react'
import EstimateItem from './EstimateItem'
import {ref,onValue} from 'firebase/database'
import database from '../../firebase'

function Estimate({navigation,route})
{
    let name=route.params.name
    let id=route.params.id

    let db=database

    const[data,setDatas]=useState([
        {
            time:"7h50",
            avg:24,
            timMach:7,
            dotQuy:9,
            nhoiMau:14,
        },
    ])

    useEffect(()=>{
        let dbRef=ref(db,'patient/'+id.toString()+'/estimate')
        onValue(dbRef,(snapshot)=>{
            let data=snapshot.val()
            setDatas([{
                time:"6h30",
                avg:data.avg,
                timMach:data.timMach,
                dotQuy:data.dotQuy,
                nhoiMau:data.nhoiMau
            }])
        })
    },[])

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={images.background}
                blurRadius={5}
                resizeMode='cover'
                style={{ flex: 1 }}>
                <View style={{
                    flex: 10,
                    marginHorizontal: 30,
                    marginTop: 50,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}>
                        <UIIcon 
                        thisIcon={icons.home} 
                        onPress={()=>{
                            navigation.navigate('Home')
                        }}/>
                        <View style={{
                            alignItems: 'center',
                            flex: 1,
                        }}>
                            <Text style={{
                                fontSize: 20,
                                fontWeight: 'bold',
                            }}>{name}</Text>
                        </View>
                        <UIIcon 
                        thisIcon={icons.estimate}
                        onPress={()=>{
                            navigation.navigate('Estimate',{name:name,id:id})
                        }} />
                    </View>
                </View>

                <View style={{
                    flex: 90,
                }}>
                    <ScrollView>
                        {data.map(eachEstimate => <EstimateItem estimate={eachEstimate} key={eachEstimate.time}/>)}
                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    )
}
export default Estimate
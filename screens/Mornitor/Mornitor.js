import {
    View,
    Text,
    ImageBackground,
} from 'react-native'
import {icons, images} from '../../constant'
import {UIIcon} from '../../components'
import Chart from './Chart'
import {useState,useEffect} from 'react'
import {ref,onValue} from 'firebase/database'
import database from '../../firebase'

var grip=[]
var heartRate=[]
var oxi=[]

function Mornitor({navigation,route})
{   
    let db=database
    let id=route.params.id
    let name=route.params.name

    const[dataset,setDatas]=useState({
        grip:0,
        heartRate:0,
        oxi:0,
    })

    useEffect(()=>{
        let dbRef=ref(db,'patient/'+id.toString()+'/mornitor')
        onValue(dbRef,(snapshot)=>{
            let data=snapshot.val()
            grip.push(data.grip)
            heartRate.push(data.heartRate)
            oxi.push(data.oxi)
            setDatas({
                    grip:data.grip,
                    heartRate:data.heartRate,
                    oxi:data.oxi,
            })
        })
    },[])

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={images.background}
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
                        thisIcon={icons.mornitor} 
                        onPress={()=>{
                            navigation.navigate('Mornitor',{name:name})
                        }}/>
                    </View>
                </View>

                <View style={{flex: 30}}>
                    <View style={{
                        flex:4,
                        marginHorizontal:10,
                        flexDirection: 'row',
                        alignItems:'center',
                    }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        <Text style={{paddingHorizontal:10,}}>Heart Rate</Text>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    </View>
                    <View style={{flex:26}}>
                        <Chart data={heartRate}/>
                    </View>
                </View>

                <View style={{flex: 30}}>
                    <View style={{
                        flex:4,
                        marginHorizontal:10,
                        flexDirection: 'row',
                        alignItems:'center',
                    }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        <Text style={{paddingHorizontal:10,}}>Oxigen</Text>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    </View>
                    <View style={{flex:26}}>
                        <Chart data={oxi}/>
                    </View>
                </View>

                <View style={{flex: 30}}>
                    <View style={{
                        flex:4,
                        marginHorizontal:10,
                        flexDirection: 'row',
                        alignItems:'center',
                    }}>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                        <Text style={{paddingHorizontal:10,}}>Grip Strength</Text>
                        <View style={{ flex: 1, height: 1, backgroundColor: 'black' }} />
                    </View>
                    <View style={{flex:26}}>
                        <Chart data={grip}/>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}
export default Mornitor
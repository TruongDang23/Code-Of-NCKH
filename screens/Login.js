import {
    View,
    ImageBackground,
    Image,
    Text,
} from 'react-native'
import {UIButton,TextBox} from '../components'
import {images,colors} from '../constant'
import {ref,onValue} from 'firebase/database'
import database from '../firebase'
import {useState} from 'react'

function Login(props)
{
    //navigation
    const { navigation, route } = props
    //function of navigate to/back
    const { navigate, goBack } = navigation
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')

    return (
        <View style={{flex:1}}>
            <ImageBackground 
             source={images.background}
             blurRadius={5}
             resizeMode='cover'
             style={{flex:1}}>
                <View style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center',
                    marginTop:50,
                }}>
                    <Image 
                        source={images.logo}
                        style={{
                            width:150,//width/height ~= 31/40
                            height:194
                        }}
                    />
                </View>
                <View style={{
                    flex:1,
                }}>
                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                    }}>
                        <TextBox
                            onChangeText={typeEmail=>setEmail(typeEmail)}
                            value={email}
                            placeholder="EMAIL"
                            color={'#155DAD'}
                        />
                    </View>

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                    }}>
                        <TextBox
                            onChangeText={typePass=>setPass(typePass)}
                            value={pass}
                            secure={true}
                            placeholder="PASSWORD"
                            color={'#155DAD'}
                        />
                    </View>

                    <UIButton
                        onPress={()=>{
                            let check=CheckUser(email,pass)
                            if(check[0]==true)
                                navigate('TabBar',{key:check[1]})
                            else
                                alert("User not available!")
                        }}
                        title='LOGIN'
                        letterColor='#155DAD'
                        color='#155DAD'
                    />
                </View>
            </ImageBackground>
        </View>
    )
}
export default Login
function CheckUser(email,pass)
{
    const db=database
    const dbRef=ref(db,'users')
    let result=false
    let key="null"
    onValue(dbRef,(snapshot)=>{
        snapshot.forEach((childSnapshot)=>{
            const childData=childSnapshot.val()
            if(childData.email==email&&childData.pass==pass)
            {
                key=childSnapshot.key
                result=true
            }
        })
    })
    return [result,key]
}
import {
    View,
    ImageBackground,
    Image,
    Text,
} from 'react-native'
import {UIButton,TextBox} from '../components'
import {images,colors} from '../constant'
import database from '../firebase'
import {push,set,ref} from 'firebase/database'
import {useState} from 'react'
function Register(props)
{
    //navigation
    const { navigation, route } = props
    //function of navigate to/back
    const { navigate, goBack } = navigation
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [pass,setPass] = useState('')
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
                            onChangeText={typeName=>setName(typeName)}
                            value={name}
                            color={'#155DAD'}
                            placeholder="NAME"
                        />
                    </View>

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                    }}>
                        <TextBox
                            onChangeText={typeEmail=>setEmail(typeEmail)}
                            value={email}
                            color={'#155DAD'}
                            placeholder="EMAIL"
                        />
                    </View>

                    <View style={{
                        alignSelf:'center',
                        flexDirection:'row',
                    }}>
                        <TextBox
                            onChangeText={typePass=>setPass(typePass)}
                            value={pass}
                            color={'#155DAD'}
                            secure={true}
                            placeholder="PASSWORD"
                        />
                    </View>

                    <UIButton
                        onPress={()=>{
                            CreateNew(name,email,pass)
                            alert("Create Successfully")
                            navigate('Welcome')
                        }}
                        title='CREATE NEW'
                        letterColor={colors.main}
                        bgColor='white'
                    />
                </View>
            </ImageBackground>
        </View>
    )
}
export default Register
function CreateNew(name,email,pass)
{
    const db=database
    const postList=ref(db,'users')
    const newPost=push(postList)
    set(newPost,{
      name:name,
      email:email,
      pass:pass,
    })
}
import {
    View,
    ImageBackground,
    Image,
} from 'react-native'
import {UIButton} from '../components'
import {colors, images} from '../constant'
function Welcome(props)
{
    //navigation
    const {navigation,route}=props
    //function of navigate to/back
    const {navigate,goBack}=navigation
    return (
        <View style={{flex:1}}>
            <ImageBackground 
             source={images.background}
             resizeMode='cover'
             style={{flex:1}}>
                <View style={{
                    flex:1,
                    marginTop:50,
                    justifyContent:'center',
                    alignItems:'center',
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
                    <UIButton 
                    onPress={()=>{
                        navigate('Login')
                    }}
                    title='LOGIN'
                    letterColor='#155DAD'
                    color='#155DAD'
                    />

                    <UIButton 
                    onPress={()=>{
                        navigate('Register')
                    }}
                    bgColor={colors.main}
                    color={colors.main}
                    title='SIGN UP'
                    letterColor={'white'}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}
export default Welcome
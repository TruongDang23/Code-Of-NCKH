import {
    View,
    Text,
} from 'react-native'
import {icons} from '../../constant'
import {
    UIIcon,
} from '../../components'
import database from '../../firebase'
import {push,set,ref} from 'firebase/database'

function FindItem(props)
{
    let {name,age,address,id}=props.human
    let user=props.keyUser

    return (
        <View>
            <View style={{
                width: 400,
                height: 100,
                alignSelf: 'center',
                flexDirection: 'row',
                marginBottom: 10,
            }}>
                <View style={{ flex: 1 }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold',
                    }}>{name}</Text>
                    <Text style={{ fontSize: 20 }}>Age: {age}</Text>
                    <Text style={{ fontSize: 20 }}>Address: {address}</Text>
                    <Text style={{ fontSize: 20 }}>ID: {id}</Text>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <UIIcon 
                    thisIcon={icons.add} 
                    onPress={()=>{ 
                        Add(user,id)
                        alert("SuccessFully") 
                    }}/>
                </View>
            </View>
            <View style={{
                backgroundColor:'black',
                height:1,
                marginVertical:10,
            }}>
            </View>
        </View>
    )
}
export default FindItem
function Add(userID,id)
{
    const db=database
    const postList=ref(db,'users/'+userID+'/theoDoi')
    const newPost=push(postList)
    set(newPost,{
      id:id,
    })
}
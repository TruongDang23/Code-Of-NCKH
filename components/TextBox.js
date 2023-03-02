import {TextInput} from 'react-native'
function TextBox(props)
{
    let thisColor=props.color
    return (
        <TextInput style={{
            borderBottomColor:thisColor,
            borderBottomWidth:2,
            color:thisColor,
            width:275,
            height:30,
            marginBottom:5,
            paddingHorizontal:5,
        }}
        cursorColor={'black'}
        secureTextEntry={props.secure}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        value={props.value}/>
    )
}
export default TextBox
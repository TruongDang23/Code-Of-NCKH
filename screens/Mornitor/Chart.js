import { LineChart } from 'react-native-chart-kit'
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

function Chart(props) {
    let dataset=[]
    let newData=props.data
    let label=["Test","Ok","Hehe","Haha"]
    newData.map((eachData) => dataset.push(eachData))
    return (
        <LineChart
            data={{
                labels: label,
                datasets: [
                    {
                        data:dataset
                    }
                ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={200}
            withDots={false}
            withShadow={false}
            withVerticalLines={false}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
                backgroundColor: "white",//"#000",
                backgroundGradientFrom: "white",//"#000"
                backgroundGradientTo: "white",//"#fff"
                decimalPlaces: 2, // optional, defaults to 2dp
                color:() => `rgba(52, 98, 156, 0.8)`,
                labelColor: () => 'black',//`rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
            }}
            bezier
            style={{
                marginVertical: 6,
                borderRadius: 5
            }}
        />
    )
}
export default Chart
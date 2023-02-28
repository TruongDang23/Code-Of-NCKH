import { LineChart } from 'react-native-chart-kit'
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;

function Chart(props) {
    let dataset=[]
    let newData=props.data
    newData.map((eachData) => dataset.push(eachData))
    return (
        <LineChart
            data={{
                labels: ["Time",],
                datasets: [
                    {
                        data:dataset
                    }
                ]
            }}
            width={Dimensions.get("window").width} // from react-native
            height={200}
            yAxisLabel=""
            yAxisSuffix=""
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={{
                backgroundColor: "#000",
                backgroundGradientFrom: "#000",
                backgroundGradientTo: "#fff",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 10) => `rgba(2, 293, 25, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "6",
                    strokeWidth: "5",
                    stroke: "#fff"
                }
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
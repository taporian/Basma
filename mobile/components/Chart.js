import React from 'react'
import { LineChart } from 'react-native-chart-kit';
import {Dimensions} from 'react-native';

function Chart({countData}) {

   
    const line = {
        labels: ['24H', '1W', '1M', '3M', '1Y'],
        datasets: [
          {
            data: [countData?.countData?.Past_24_hours, countData?.countData?.Last_week, countData?.countData?.last_month, countData?.countData?.last_3_month, countData?.countData?.last_year],
            strokeWidth: 2, // optional
          },
        ],
      };
  
    return (
       <>
        {countData &&
            <LineChart
              data={line}
              width={Dimensions.get('window').width} 
              height={320}
             
              chartConfig={{
                backgroundColor: '#5550BD',
                backgroundGradientFrom: '#5550BD',
                backgroundGradientTo: '#6200ee',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                  borderRadius: 16
                  
                }
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 16
              }}
            />
          }
          </>
    );
}

export default Chart

import React, { useEffect,useState } from 'react'
import { Text,View,Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from '../styles/globalStyles';

import {
    LineChart,
   
  } from 'react-native-chart-kit'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserCount } from '../redux/action-creators';
import Chart from '../components/Chart';



function analytics() {

    const dispatch = useDispatch();
    const [data,setData] =useState([]);
    const { countData } = useSelector((state) => state.fetchUserCountReducer);
    useEffect(() => 
    {
        try{
            dispatch(fetchUserCount())
                
           }  
    
           catch(error){
               console.log(error)
           }
        
 
       
    }
    
    ,[]);
   

    useEffect(async() => 
    {
        if(countData){
            setData(countData);
        }
      
       
    }
    
    ,[countData]);


    return (
        <LinearGradient colors={['#5550BD' ,'#5550BD']} style={styles.container}>
        {console.log('data',countData)}
        {console.log('data',data)}
       <View style={styles.analytics}>
  <Text style={{width:150,paddingBottom:10,textAlign:'center',alignSelf:'center',fontSize:18,color:'white',fontWeight:'bold'}}>
    Users Registered
  </Text>
  { countData && countData.countData && countData.countData.Last_week &&
  <Chart countData={countData} />
}
</View>
</LinearGradient>
    )
}

export default analytics

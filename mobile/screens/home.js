import React,{useEffect, useState} from 'react'
import {  SafeAreaView, Text, View, FlatList, Image,  ScrollView,Button, TouchableOpacity} from 'react-native';

import userImage from '../assets/user.png'
import { useDispatch, useSelector } from 'react-redux';
import {styles} from "../styles/globalStyles";
import { fetchUsers } from '../redux/action-creators';

import { SearchBar } from 'react-native-elements';


// const getData = async (key) => {
//     // get Data from Storage
//     try {
//       const data = await AsyncStorage.getItem(key);
//       if (data !== null) {
       
//         return data;
//       }
//     } catch (error) {
     
//     }
//   };

export default function home() {
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(1);
  
    const [user, setUserData] = useState([]);
    const dispatch = useDispatch();
    const [search,setSearch] = useState("")
    // const value =  AsyncStorage.getItem('ADMIN-TOKEN');

    const { userData } = useSelector((state) => state.fetchUsersReducer);
   
    useEffect( () => {
        if(search===""){
            try{
                
                dispatch(fetchUsers(offset,""));
                setOffset(offset + 1);     
               }  
        
               catch(error){
                   console.log(error)
               }
        }
        else{
            console.log('HELLO')
            try{
             const  result={
                    filter:search
                }
                setUserData("");
                setOffset(0);
                dispatch(fetchUsers(offset,result));  
               }  
        
               catch(error){
                   console.log(error)
               }

        }
     
       
     }, [search]);
     
     
     
     useEffect(async() => 
     {
         if(search===""){
            setUserData([...user,...userData?.userData?.data]);
         }  
        
     }
     
     ,[userData]);
     

    

    
     
      const Item=( props )=> {
     

      
        return (
            <View style={styles.listItemGenerateReport}>
                 {console.log('user',user)}
                <Image source={userImage}  style={{width:60, height:60,borderRadius:30}} />
                <View style={{alignItems:"center",flex:1}}>
                    <Text style={{fontWeight:"bold"}}>{props.item.name}</Text>
                    <Text style={{fontWeight:"bold"}}>{props.item.last_name}</Text>
                    <Text>Email {props.item.email}</Text>
             

            
                </View>

              
           
            </View>
            
        );
    }

    return (



<>

    <SafeAreaView style={styles.containerGenerateReport} >
   

     
<SearchBar
    containerStyle={{backgroundColor: '#6200ee'}}
    inputStyle={{backgroundColor: 'transparent'}}
    platform={Platform.OS}
    
      round
      searchIcon={{ size: 24 }}
      onChangeText={(text) => setSearch(text)}
      onClear={(text) => setSearch('')}
      placeholder="Type Here..."
      value={search}
    />
 
     
     {search ==="" && user ?
        <FlatList
            style={{flex:1}}
            data={user}
            renderItem={({ item }) => <Item item={item}/>}
            keyExtractor={(item, index) => String(index)}
        /> :
        <FlatList
        style={{flex:1}}
        data={userData.userData.data}
        renderItem={({ item }) => <Item item={item}/>}
        keyExtractor={(item, index) => String(index)}
    />
     }



    </SafeAreaView>
    {userData &&  userData.userData  && userData?.userData?.data && userData.userData.next_page_url != null &&
    <View style={styles.loadMore }   >

  
   
               <TouchableOpacity  style={styles.button}
                    style={{ marginHorizontal: 5 }}
                    onPress={()=>{
                        setSearch("");
                        dispatch(fetchUsers(offset));
                        // setUserData([...user,...userData?.userData?.data])
                        setOffset(offset + 1);
                    }}
                > 
               <Text style={styles.buttonText}>Load More
                </Text>
                    </TouchableOpacity>
              
                
                  </View>
                  
}

 
</>

//             </SafeAreaView>
// </ScrollView>
    )
}

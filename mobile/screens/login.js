import React,{useEffect,useState} from 'react'
import { View, Text ,TouchableOpacity, TouchableWithoutFeedback, StatusBar} from 'react-native';
import {Input,NativeBaseProvider,Icon} from 'native-base';
import {FontAwesome5,FontAwesome} from  '@expo/vector-icons';
import {styles} from "../styles/globalStyles";
import { LinearGradient } from 'expo-linear-gradient';
import { signinAdmin } from '../redux/action-creators';


import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

function login(){
    const  {  error } = useSelector((state) =>  state.authenticationReducer);
    const disptach = useDispatch()
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [showLoginPassword, setShowLoginPassword] = useState(false);
 const navigation = useNavigation()
    const submit = () =>{
       const body={
            "email":email,
            "password":password 
        }
       
      
        disptach(signinAdmin(body,navigation))
    }

    useEffect(function () {
        StatusBar.setBarStyle('light-content', true);
        
    }, []);

    return (
        <NativeBaseProvider >
             <TouchableWithoutFeedback >

           
        <LinearGradient colors={['#6200ee' ,'#5550BD']} style={styles.container}>
       
         
         
           <View style={styles.buttonStyle}>
               <View style={styles.emailInput}>
                   <Input style={styles.input}
                    onChangeText={setEmail}
                    value={email}
                   InputLeftElement={
                       <Icon as ={<FontAwesome name="envelope" size={24}  />}
                       size="sm"
                       m={2}
                       _light={{
                           color:'white',
                       }}
                        _dark={{
                            color:'gray.300',
                        }}
                       />
                   }
              
                   variant='outline'
                   placeholder='Email'
                   _light={{
                    placeholderTextColor:'blueGray.300',
                }}
                 _dark={{
                    placeholderTextColor:'blueGray.50',
                 }} />
             

               </View>
           </View>

           <View style={styles.buttonStyleX}>
               <View style={styles.emailInput}>
                   <Input style={styles.input}
                     onChangeText={setPassword}
                     value={password}
                 
                     textContentType='password'
                     returnKeyType='done'
                   InputLeftElement={
                    
                       <Icon as ={<FontAwesome5 name="key"/>}
                       size="sm"
                       m={2}
                       _light={{
                           color:'white',
                       }}
                        _dark={{
                            color:'gray.300',
                        }}
                       />
                   
                   }
                   InputRightElement={
                       
                    <TouchableOpacity
                    style={{ marginHorizontal: 5 }}
                    onPress={() => {
                        setShowLoginPassword(!showLoginPassword);
                    }}
                >
                    <FontAwesome
                          style={{ marginHorizontal: 5 }}
                        name='eye'
                        type='font-awesome'
                        color='#fff'
                        size={22}
                    />
                </TouchableOpacity>
                }
                


                   secureTextEntry={!showLoginPassword}
                   variant='outline'
                   placeholder='Password'
                   _light={{
                    placeholderTextColor:'blueGray.300',
                }}
                 _dark={{
                    placeholderTextColor:'blueGray.50',
                 }} />
           
             
               </View>
           </View>
          {error &&   <View style={{marginHorizontal:100,marginTop:10}}><Text style={{fontWeight:'bold',color:'red'}}>{error.error}</Text></View> }
           <TouchableOpacity onPress={()=> 
            
            
            submit()
            // navigation.navigate('home')
            }  style={styles.button}>
                    <Text style={styles.buttonText}
                    >Login</Text>
                     </TouchableOpacity>
                  
           <View style={styles.lineStyle}>
                <View style={{flex:1,height:1,backgroundColor:'black'}} />
                <View>
                    <Text  style={{width:50,textAlign:'center'}}>Or</Text>
                </View>
                <View style={{flex:1,height:1,backgroundColor:'black'}} />

           </View>
           <View style={styles.socialLoginView}>
                    <TouchableOpacity style={styles.socialLoginTouchable}>
                    <FontAwesome5 name="google" size={24} color="#2F0470FF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialLoginTouchable}>
                    <FontAwesome5 name="facebook" size={24} color="#2F0470FF" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialLoginTouchable}>
                        <FontAwesome5 name="apple" size={24} color="#2F0470FF" />
                    </TouchableOpacity>
                    </View>
     
 
        </LinearGradient>
        </TouchableWithoutFeedback>
        </NativeBaseProvider>
    

    )
}



export default login;


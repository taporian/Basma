import React, {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Analytics from '../screens/analytics';
import Home from "../screens/home";
// import GenerateReports from "../pages/GenerateReports";




const HomeRoute = () => <Home/>;

const AnalyticsRoute = () => <Analytics/>;

// const AttendanceRoute = () => <Attendance/>;



// const generateReportsRouute = () => <GenerateReports />


const BottomTabs = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'home', title: 'Users', color: '#2962ff',icon:'account'},
        { key: 'analytics',color: 'green', title: 'Analytics',icon:'elevation-rise' },
        // { key: 'generateReports', title: 'Reports',icon:'chart-areaspline' },


    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeRoute,
        analytics: AnalyticsRoute,
        // generateReports:generateReportsRouute,

    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={index => setIndex(index)}
            renderScene={renderScene}
            sceneAnimationEnabled={true}
        />
    );
};

export default BottomTabs;
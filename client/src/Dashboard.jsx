import React, {useState} from 'react';
import Header from './Header';
import Metrics from './Metrics';
import Charts from './Charts';
import Controls from './Controls';
import axios from 'axios';
import { BASE_URL } from "./config"

const Dashboard = () => {
  const [runningModel, setRunningModel] = useState(false);
  const [configModel, setConfigModel] = useState({option1: false,option2: true});
  const handleStart = async () => {
    setRunningModel(true);
    
    try {
      const response = await axios.get(`${BASE_URL}/api/metrices`); 
      
      console.log('Start API response:', response.data);
    } catch (error) {
      console.error('Error starting process:', error);
    }
  };

  const handleStop = async () => {
    setRunningModel(false);
    try {
      const response = await axios.get(`${BASE_URL}/api/predictions`, {
      
        headers: {
            "Content-type": "application/json"
        }
      }); 
      
      console.log('Stop API response:', response.data);
    } catch (error) {
      console.error('Error stopping process:', error);
    }
  };

  const handleConfigure = (newConfig) => {
    setConfigModel(newConfig);
    console.log('Configure button clicked');
  };

  const metricsData = {
    accuracy: 0.85,
    precision: 0.78,
    recall: 0.92,
  };

  return (
    <div>
      <Header />
      <div className="flex">
        <div className="w-1/4">
          <Metrics {...metricsData} />
          <Controls onStart={handleStart} onStop={handleStop} onConfigure={handleConfigure} />
        </div>
        <div className="w-3/4">
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

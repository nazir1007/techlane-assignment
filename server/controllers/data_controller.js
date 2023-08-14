const path = require('path');
const { spawn } = require('child_process');

module.exports.metrices = function (req,res){ 
    const mockMetrics = {
      accuracy: 0.85,
      precision: 0.78,
      recall: 0.92,
    };
    res.json(mockMetrics);
  };
  
  module.exports.predictions = function (req, res) {
    const pythonScript = path.join(__dirname, 'python_script.py');
    const pythonProcess = spawn('python3', [pythonScript]);
  
     let rawData = '';
       
    pythonProcess.stdout.on('data', (chunk) => {
      rawData += chunk; 
    });
  
    pythonProcess.on('close', (code) => {
      if (code === 0) {
        try {
          const parsedData = JSON.parse(rawData); 
          res.json(parsedData.predictions)
        } catch (error) {
          console.error(`Error parsing JSON: ${error.message}`);
          res.status(500).json({ error: 'An error occurred while parsing JSON data' });
        }
      } else {
        console.error(`Python script exited with code ${code}`);
        res.status(500).json({ error: 'An error occurred' });
      }
    });
  };
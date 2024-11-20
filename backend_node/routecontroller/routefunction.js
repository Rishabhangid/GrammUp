
// Routes function used in route
exports.testingRoute = async (req,res) =>{
    res.send("Testing Route");
}

// npm install node-fetch
exports.testText =async (req,res) =>{
    const {userinput} = req.body
    console.log(userinput)
    const ress = await fetch("http://localhost:5001/toflask",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body : JSON.stringify({userinput})
    })
    if (!ress.ok) {
        throw new Error('Failed to communicate with Flask',res.Error);
      }
  
      const flaskData = await ress.json();
      console.log(flaskData.corrected_text);
      res.status(200).json({corrected : flaskData.corrected_text})
    // res.json("hy")
}
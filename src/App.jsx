
import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  // create state to store data


  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const[principleAmtValid,setPrincipleAmtValid]=useState(true)
  const[rateValid,setRateValid]=useState(true)
  const[yearValid,setYearValid]=useState(true)

 
  const handleReset = () => {
    console.log("inside handle reset function ");
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setPrincipleAmtValid(true)
    setRateValid(true)
    setYearValid(true)
  }

  const handleValidation = (e) => {
    console.log("inside handleVAlidation");
    const { value, name } = e
    console.log(value, name);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));


    if (!!value.match(/^\d*\.?\d*$/)) {
      //valid
      if (name == "principle") {
        setPrinciple(value)
        setPrincipleAmtValid(true)
      } else if (name == "rate") {
        setRate(value)
        setRateValid(true)
      } else {
        setYear(value)
        setYearValid(true)
      }

    } else {
      //invalid
      if (name == "principle") {
        setPrinciple(value)
        setPrincipleAmtValid(false)
      } else if (name == "rate") {
        setRate(value)
        setRateValid(false)
      } else {
        setYear(value)
        setYearValid(false)
      }
    }
  }

  const handleCalculate=()=>{
    if(principle && rate && year){
      setInterest(principle*rate*year/100)
    }else{
      alert("Please fill the form completely!!!")
    }
  }


  return (
    <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{ width: '600px' }} className='bg-light p-5 shadow rounded'>
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple interest easily</p>
        <div className='d-flex justify-content-center align-items-center bg-warning rounded shadow flex-column p-3 text-white'>
          <h1>₹{interest}</h1>
          <p className='fw-bolder'>Total simple interest</p>
        </div>

        <form className="mt-5">
          {/* principal */}
          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic-principle" label="₹ Principle Amount" variant="outlined" value={principle || ""} onChange={(e) => handleValidation(e.target)} name='principle' />
            {!principleAmtValid && <div className="text-danger mb-3">*Invalid Principle Amount </div>}

          </div>
          {/* rate */}
          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic-rate" label="% Rate of Interest (p.a) " variant="outlined" value={rate || ""} onChange={(e) => handleValidation(e.target)} name='rate' />
            {!rateValid && <div className="text-danger mb-3">*Invalid Rate of interest </div>}

          </div>
          {/* year*/}
          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic-time" label=" Time Period (Year)" variant="outlined" value={year || ""} onChange={(e) => handleValidation(e.target)} name='year' />
            {!yearValid && <div className="text-danger mb-3">*Invalid Period </div>}
           

          </div>
          {/* btn collection */}
          <Stack direction="row" spacing={2}>
            <Button onClick={handleCalculate} disabled={!principleAmtValid || !rateValid || !yearValid} style={{ width: '50%', height: '50px' }} variant="contained">CALCULATE</Button>
            <Button onClick={handleReset} style={{ width: '50%', height: '50px' }} variant="outlined">RESET</Button>

          </Stack>
        </form>
      </div>
    </div>
  )
}

export default App

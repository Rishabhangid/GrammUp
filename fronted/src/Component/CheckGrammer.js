import React, { useState } from 'react'
import PASTE from "../img/paste.png"

// sm-h-[400px] means  h will be 400px abouve sm

export default function CheckGrammer() {
    const [showtxt,setShowtxt] = useState("")
    const [userinput, setUserinput] = useState("");
    const handleChange =(e)=>{
        setUserinput(e.target.value)
        // console.log(userinput)
    }
    const handleSubmit =async(e)=>{
        e.preventDefault();
        if(userinput == ""){
            alert("Enter Some Content")
        }
        console.log(userinput)
        try{
            const res = await fetch("http://localhost:5000/checktext",{
                method: "POST",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                body: JSON.stringify( {userinput} )
            })
            if(!res.ok){
                alert("res not aoky")
                console.log(res.status)
            }
            const data = await res.json();
            console.log(data)
            // setShowtxt(data)
            // response is in this form : {"corrected":"Hy bro ?"} so 
            setShowtxt(data.corrected)

        }
        catch(error){
            alert("error in catch")
            console.log(error)
        }
    }

    const handleCopy = () => {
        if (showtxt) {
            navigator.clipboard.writeText(showtxt)
                .then(() => {
                    alert("Text copied to clipboard!")
                })
                .catch((err) => {
                    alert("Failed to copy text: ", err)
                })
        }
        else{
            alert("No data to copy.")
        }
    }
    return (


        <div className=" p-6">
            <div className="w-full max-w-[1400px]  mx-auto">
                <div >
                    <form className="flex flex-col gap-4 items-center " onSubmit={handleSubmit} method='POST'>
                        <textarea
                            placeholder="Enter text to analysis" onChange={handleChange} value={userinput}
                            className="text-gray-500 text-[20px] outline-none border-2 border-gray-500 p-4 h-[300px] sm:h-[400px] rounded-lg w-full max-w-[800px]" name="txt_from_frnt"
                        ></textarea>
                        {/* <button className="bg-orange-500 text-white px-6 py-2 text-[20px] rounded-lg"> */}
                        <input type='submit' className=" px-6 py-2  hover:bg-white hover:text-orange-500 border-2 hover:border-orange-500  bg-orange-400 rounded-xl text-white mt-6 text-[20px]" />
                    </form>
                    

                </div>

                <div className=" mt-10 flex flex-col items-center justify-center">
                    <p className="font-semibold text-[30px]">Output</p>
                    <div className="flex flex-col bg-gray-200 w-full max-w-[900px] p-4 rounded-lg">
                        <p className="text-justify text-[20px] break-words">
                            {showtxt}
                        </p>
                        {/* <p className="text-justify text-[20px] break-words">
                            At Grammup, we believe in the power of flawless communication. Our platform is designed to help you identify and correct grammatical errors in your text effortlessly. Powered by smart AI technology, Grammup ensures your writing is clear, precise, and professional.
                        </p> */}
                        <img
                            src={PASTE}
                            onClick={handleCopy}
                            alt="gg"
                            className="w-[30px] self-end mb-4 mr-4"
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}




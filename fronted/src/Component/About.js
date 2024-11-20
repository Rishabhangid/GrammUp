import React from 'react'
// import I1 from "../img/Html.jpg"
import SHOW1 from "../img/show1.png"

export default function About() {
    return (
        <div className='mt-10 '>
            <div className='max-w-[1300px] m-auto flex flex-col gap-16 p-6'>


                {/* About Us */}
                <div className='grid grid-cols-1 md:grid-cols-[20%_80%] gap-4 items-start'>
                    <p className='font-bold text-[25px] text-center'>AboutUs</p>
                    <div className='font-light text-[22px]'>
                        <p className='text-justify'>At Grammup, we believe in the power of flawless communication. Our platform is designed to help you identify and correct grammatical errors in your text effortlessly. Powered by smart AI technology, Grammup ensures your writing is clear, precise, and professional.</p>
                        <p className='text-justify'>Whether you're crafting an email, writing a story, or polishing an essay, Grammup is here to make your words shine. Write with confidence, because every word matters!</p>
                    </div>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-[20%_80%] gap-4'>
                    <div className=' font-bold text-[25px] text-center'>Contact Us</div>
                    <div className='font-light text-[22px]'>
                        <p className='text-justify'>We’d love to hear from you! Whether you have questions, feedback, or need assistance, feel free to get in touch with us.</p>
                        <p className='text-justify'><span className='text-orange-500 font-bold'>Email: </span> support@grammup.com</p>
                        <p className='text-justify'><span className='text-orange-500 font-bold'>Website: </span> www.grammup.com</p>
                        <p className='text-justify'><span className='text-orange-500 font-bold'>Address: </span> 123 Writing Lane, Grammar City, Wordland</p>
                        <p className='text-justify'>
                            Got a suggestion or want to report an issue? <span className='text-orange-500 font-bold'>Drop us a message</span> — we’re here to help!</p>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-[20%_80%] gap-4'>
                    <div className='font-bold text-[25px] text-center'>More Services</div>
                    <div className='font-light text-[22px] flex justify-around flex-wrap gap-10 mt-6 md:mt-0'>
                        {/* <div></div> */}
                        <div className='flex flex-col justify-center items-center'>
                            <img src={SHOW1} alt="ifg" className='w-[60px]' />
                            <p className='font-semibold'>Html Converter</p>
                            <p className='font-light'>Convert Text into Html</p>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={SHOW1} alt="ifg" className='w-[60px]' />
                            <p className='font-semibold'>Html Converter</p>
                            <p className='font-light'>Convert Text into Html</p>

                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={SHOW1} alt="ifg" className='w-[60px]' />
                            <p className='font-semibold'>Html Converter</p>
                            <p className='font-light'>Convert Text into Html</p>

                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={SHOW1} alt="ifg" className='w-[60px]' />
                            <p className='font-semibold'>Html Converter</p>
                            <p className='font-light'>Convert Text into Html</p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

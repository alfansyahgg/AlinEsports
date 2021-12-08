import React from 'react'
import TransNavbar from '../TransNavbar'

const Contact = () => {
    return (
        <>
            <TransNavbar />
            <div style={{ height: '90vh',top: '10vh' }} className="wrapper w-full relative flex justify-center items-center animate__animated animate__fadeIn">
                <div className="contact-form w-96 h-auto rounded-lg bg-white pb-5 px-3 animate__animated animate__bounceInLeft">
                    <h3 className="font-teko p-5 text-center text-3xl">
                        Send your message to us.
                    </h3>
                    <form className="w-full h-full p-5">
                        <div className="flex flex-col justify-between">
                            <div className="flex flex-col justify-center-center">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    E-Mail
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="example@example.com"/>
                            </div>
                            <div className="fle x flex-col justify-center-center">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Nama
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-nama" type="text" placeholder="Enter Name..."/>
                            </div>
                            <div className="flex flex-col justify-center-center">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    Pesan
                                </label>
                                <textarea
                                className="form-textarea appearance-none block w-full text-gray-700 text-xs font-bold mb-2 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                rows="5"
                                placeholder="Enter Message..."
                                >

                                </textarea>
                                </div>
                        </div>

                        <button className="font-teko font-semibold bg-red-800 text-white text-2xl px-7 py-5 w-full">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact

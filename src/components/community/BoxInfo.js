import React from 'react'

const BoxInfo = () => {
    return (
        <div className="boxinfo py-5 px-10">
            <div className="bg-white w-full h-full p-5">
                <div className="flex justify-between">
                    <div className="w-1/2 h-full">
                        <form className="form1">
                            <div className="flex flex-col justify-center">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
                                    E-Mail
                                </label>
                                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-email" type="email" placeholder="example@example.com"/>

                            </div>
                        </form>
                    </div>

                    <div className="w-1/2 h-full">
                        <form className="form2">

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxInfo

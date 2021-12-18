import React from 'react'
import TransNavbar from '../TransNavbar'
import Title from './Title'
import BoxInfo from './BoxInfo'

const Community = () => {
    return (
        <>
            <TransNavbar isCommunity={true} />
            <div style={{ top: '10vh' }} className="relative h-full">
                <Title />
                <BoxInfo />
            </div>
        </>
    )
}

export default Community

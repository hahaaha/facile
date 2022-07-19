import React from 'react'
import './index.scss'

export default function Nav(props:any) {
    const { navData } = props
    return (
        <div className="f-nav">
            {navData.map((data: any, index: number) => {
                return <div key={data.key ? data.key : index}>{data.text}</div>
            })}
        </div>
    )
}
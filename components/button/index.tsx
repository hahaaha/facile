import React from "react"
import './index.scss'

interface ButtonProps {
    type?: String;
    children?: React.ReactNode
}

const Button:React.FC<ButtonProps> = (props) => {
    const { type, children } = props
    return (<button className={`fc-button fc-button-normal fc-button-${type}`}>{children}</button>)
}

export default Button
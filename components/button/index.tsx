import React from "react"
import classnames from 'classnames'
import './index.scss'

interface ButtonProps {
    type?: 'default' | 'primary' | 'danger' | 'success' | 'warning'
    children?: React.ReactNode
    size?: 'full' | 'normal' | 'small' | 'mini'
    className?: string
}

const Button:React.FC<ButtonProps> = (props) => {
    const { type, size, children, className } = props
    const classNames = classnames(
        'fc-button',
        {
            [`fc-button-${type ? type : 'default'}`]: true,
            [`fc-button-${size ? size : 'normal'}`]: true,
            [`${className? className: ''}`]: true
        })
    return (<button className={classNames}>{children}</button>)
}

export default Button
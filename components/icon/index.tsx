import React from "react"
import classnames from "classnames"

interface IconProps {
    type: string
    className?: string
    size?: string | number
}

const Icon: React.FC<IconProps> = (props) => {
    const { type, className } = props
    const classNames = classnames(
        'iconfont',
        className,
        type
        )
    return <i className={classNames}></i>
}

export default Icon 
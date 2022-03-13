import React from 'react'

interface Props {
    id?: number
}

const HeadLine: React.FC<Props> = ({
    children,
    id
                            }) => {
    return(
        <h1>{children}</h1>
    )
}

export default HeadLine
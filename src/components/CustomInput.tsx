import React, {useState} from 'react'

const CustomInput  = (props: React.HTMLProps<HTMLInputElement>) => {
    const [value,setValue] = useState<string>('')


    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const onClick: React.ReactEventHandler = (e) => {
        console.log(e)
    }

    console.log('val =>',value)

    return (
        <input
            value={value}
            onChange={onChange}
            placeholder='Custom input'
            className='test'
            {...props}
        />
    )
}

export default CustomInput
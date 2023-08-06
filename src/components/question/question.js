import React from "react"
// const options = [
//     {
//         label: 'Yes',
//         value: 'yes'
//     },
//     {
//         label: '1',
//         value: 1
//     }
// ]

// false == '' // true
// false === '' // false

export const Question = function(props) {
    const { title, value, options, onChange, disabled } = props

    // const handleChange = (_value) => onChange(_value)

    return (
        <div>
        <br/>
            <h1 className="title-font sm:text-base text-base mb-4 font-medium text-white">{title}</h1>
            {
                options.map((option) => (
                    <label className="mr-2 text-white">
                        <input
                            type="checkbox"
                            checked={option.value === value}
                            onChange={() => onChange(option.value)}
                            disabled={disabled}
                        />
                        &nbsp;&nbsp;{option.label}
                    </label>
                ))
            }
        </div>
    )
}

// function add(value1, value2) {
//     return value1 + value2
// }

// const add = (value1, value2) => value1 + value2

// const index = 1
// const parentOnChange = (value) => {
//     return handleQuestionsChange(String(index), value)
// }

// const parentOnChange = () => {

// }
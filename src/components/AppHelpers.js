export const TextInputField = () => {
    return (
            <input type="text" className="w-full border border-black p-2 focus:outline-none focus:border-4" />
    )
}

export const CheckBoxField = () => {
    return(
        <input type="checkbox"  />
    )
}

export const NumberField = () => {
    return(
        <input type="number" className="w-full border border-black p-2 focus:outline-none focus:border-4" />
    )
}

export const TextAreaField = () => {
    return(
        <textarea cols="30" rows="5" className="w-full border border-black p-2 focus:outline-none focus:border-4" />
    )
}
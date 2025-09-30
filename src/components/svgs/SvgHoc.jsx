import React from 'react'

export const SvgHoc = (OriginalComponent)=>{
    const NewComponent = props=>{
        const newProps = {
            width : '25px',
            heighy : '25px',
            color : 'white' ,
            ...props
        }
        return <>
        <OriginalComponent {...newProps}/>
        </>
    }
    return (NewComponent )
}
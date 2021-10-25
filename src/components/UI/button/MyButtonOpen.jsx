import React from 'react'
import classes from './MyButton.module.css'

const MyButtonOpen = ({children, ...props}) => {
    return (
        <button {...props} className={classes.btn__open}>
            {children}
        </button>
    )
}

export default MyButtonOpen

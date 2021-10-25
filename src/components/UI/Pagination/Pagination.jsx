import React from 'react'
import { getPagesArray } from '../../utils/pages'
import style from './Pagination.module.css'

const Pagination = ({ totalPages, page, changePage }) => {
    let pagesArray = getPagesArray(totalPages)
    return (
        <div className={style.page__wrapper}>
            {pagesArray.map((p) => (
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={
                        page === p ? [style.page, style.page__active].join(' ') : [style.page, style.page__normal].join(' ')
                    }
                >
                    {p}
                </span>
            ))}
        </div>
    )
}

export default Pagination

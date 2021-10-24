import React from "react"
import classes from "./MyPagination.module.css"
import { getPagesArray } from "../../utils/pages"
export const MyPagination = ({ totalPages, page, changePage }) => {
  const pagesArray = getPagesArray(totalPages)

  return (
    <div className={classes.myPagination}>
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? classes.page_current : classes.page}
        >
          {p}
        </span>
      ))}
    </div>
  )
}

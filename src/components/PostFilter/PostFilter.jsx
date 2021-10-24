import React from "react"
import { MyInput } from "../../UI/input/MyInput"
import { MySelect } from "../../UI/select/MySelect"

export const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        placeholder="Search..."
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sorted By..."
        options={[
          { value: "title", name: "Title" },
          { value: "body", name: "Content" },
        ]}
      />
    </div>
  )
}

import React from "react"
import GridBlockFive from "./GridBlockFive"
import GridBlockThree from "./GridBlockThree"

export default function GridBlocks({ s, left }) {

  if (s._modelApiKey === "grid_block_three") {
    return <GridBlockThree s={s} left={left} />
  }

  if (s._modelApiKey === "grid_block_five") {
    return <GridBlockFive s={s} left={left} />
  }

  return null
}

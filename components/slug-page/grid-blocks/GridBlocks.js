import React from "react"
import GridBlockFive from "./GridBlockFive"
import GridBlockThree from "./GridBlockThree"

export default function GridBlocks({ s }) {
  if (s._modelApiKey === "grid_block_three") {
    return <GridBlockThree s={s} />
  }

  if (s._modelApiKey === "grid_block_five") {
    return <GridBlockFive s={s} />
  }

  return null
}

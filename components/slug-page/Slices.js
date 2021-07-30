import styled from "styled-components"
import ColourHoverBlock from "./ColourHoverBlock"
import GridBlocks from "./grid-blocks/GridBlocks"
import HeroBlock from "./HeroBlock"
import ImageBuildBlock from "./ImageBuildBlock"
import TextEditorBlock from "./TextEditorBlock"

const SliceWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 40px;
  }
`

export default function Slices({ data, title }) {
  const sliced = data.map((s, i) => {
    switch (s._modelApiKey) {
      case "hero_section":
        return <HeroBlock key={i} s={s} title={title} />
      case "building_image_text_section":
        return <ImageBuildBlock key={i} s={s} />
      case "text_editor_phrase":
        return <TextEditorBlock key={i} s={s} />
      case "colour_hover_section":
        return <ColourHoverBlock key={i} s={s} />
      case "grid_block":
        return <GridBlocks key={i} s={s?.gridBlock} />
      default:
        return null
    }
  })

  return <SliceWrapper>{sliced}</SliceWrapper>
}

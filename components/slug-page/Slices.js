import styled from "styled-components"
import ColourHierachyBlock from "./ColourHierachyBlock"
import ColourHoverBlock from "./ColourHoverBlock"
import CopyBlock from "./CopyBlock"
import GridBlocks from "./grid-blocks/GridBlocks"
import HeroBlock from "./HeroBlock"
import ImageBuildBlock from "./ImageBuildBlock"
import StickerClickBlock from "./StickerClickBlock"
import TextEditorBlock from "./TextEditorBlock"
import { Image } from "react-datocms"
import SlidingTextBlock from "./SlidingTextBlock"
import VocabConvoBlock from "./VocabConvoBlock"
import LogoColourScrollBlock from "./LogoColourScrollBlock"
import ColourLogoClickBlock from "./ColourLogoClickBlock"
import InterviewBlock from "./InterviewBlock"
import TypographyGridBlock from "./TypographyGridBlock"
import StickerGridBlock from "./StickerGridBlock"
import HomepageHeroBlock from "./HomepageHeroBlock"

const SliceWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 40px;
  }
  @media (max-width: 375px) {
    padding: 0;
  }
`

export default function Slices({ data, title, loader }) {
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
      case "colour_hierarchy_section":
        return <ColourHierachyBlock key={i} s={s} />
      case "grid_block":
        return (
          <GridBlocks key={i} s={s?.gridBlock} left={s?.bigImageOnTheLeft} />
        )
      case "sticker_click_section":
        return <StickerClickBlock key={i} s={s} />
      case "copy":
        return <CopyBlock key={i} s={s} />
      case "sliding_text_section":
        return <SlidingTextBlock key={i} i={i} s={s} />
      case "vocabulary_conversation":
        return <VocabConvoBlock key={i} s={s} />
      case "logo_colour_scroll":
        return <LogoColourScrollBlock key={i} s={s} />
      case "colour_logo_click_section":
        return <ColourLogoClickBlock key={i} s={s} />
      case "interview_section":
        return <InterviewBlock key={i} s={s} />
      case "typography_grid_section":
        return <TypographyGridBlock key={i} s={s} />
      case "sticker_grid_section":
        return <StickerGridBlock key={i} s={s} />
      case "hompage_hero":
        return <HomepageHeroBlock key={i} i={i} s={s} loader={loader} />
      case "full_bleed_image":
        return (
          <Image key={i} data={s.image.responsiveImage} fadeInDuration={0} />
        )
      default:
        return null
    }
  })

  return <SliceWrapper className="badoo-purple">{sliced}</SliceWrapper>
}

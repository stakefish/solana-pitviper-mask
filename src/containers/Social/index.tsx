import React from "react"

import { IconTwitter, IconTelegram, IconInstagram, IconGithub } from "../../icons"

import * as S from "./styled"

const Social: React.FC = () => {
  return (
    <S.Wrapper>
      <S.List>
        <S.SocialLink href="https://t.me/stakefish" target="_blank" rel="noreferrer">
          <IconTelegram />
        </S.SocialLink>
        <S.SocialLink href="https://instagram.com/stakedotfish" target="_blank" rel="noreferrer">
          <IconInstagram />
        </S.SocialLink>
        <S.SocialLink href="https://twitter.com/stakefish" target="_blank" rel="noreferrer">
          <IconTwitter />
        </S.SocialLink>
        <S.SocialLink href="https://github.com/stakefish/solana-pitviper-mask" target="_blank" rel="noreferrer">
          <IconGithub />
        </S.SocialLink>
      </S.List>
    </S.Wrapper>
  )
}

export default Social

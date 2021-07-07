import React from "react"

import { APP_DESCRIPTION, APP_LINKS, APP_SUBTITLE } from "../../helpers/const"

import * as S from "./styled"

const Info = () => {
  return (
    <S.Wrapper>
      <S.Title>Solana Pitviper&nbsp;Mask</S.Title>
      <S.Lead>
        <p>
          {APP_SUBTITLE} {APP_DESCRIPTION}
        </p>
      </S.Lead>
      <S.Links>
        {APP_LINKS.map((item, i) => (
          <a href={item.href} target="_blank" rel="noreferrer" key={i}>
            {item.icon}
            <span>{item.title}</span>
          </a>
        ))}
      </S.Links>
    </S.Wrapper>
  )
}

export default Info

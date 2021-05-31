import React from "react"
import { useDropzone } from "react-dropzone"

import { useController } from "../../helpers/hooks"

import * as S from "./styled"

interface Props {
  hideHint?: boolean
  children?: React.ReactNode | JSX.Element | JSX.Element[]
}

const Upload: React.FC<Props> = ({ hideHint = false, children }: Props) => {
  const { drop } = useController()
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ accept: "image/*", onDrop: drop })

  return (
    <div {...getRootProps()}>
      {children}

      <input {...getInputProps()} />

      {!hideHint ? (
        <S.Hint>
          {isDragActive ? "Drop the files here ..." : "Drag 'n' drop some files here, or click to select files"}
        </S.Hint>
      ) : null}
    </div>
  )
}

export default Upload

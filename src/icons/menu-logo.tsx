import Image from 'next/image'
import React from 'react'

type MenuLogoProps = {
  onClick(): void
}

export const MenuLogo = ({ onClick }: MenuLogoProps) => {
  return (
    <div
      onClick={onClick}
    >
      <Image  src="/dotassist-icon.svg" alt="logo" width={30} height={30} />
    </div>
  )
}

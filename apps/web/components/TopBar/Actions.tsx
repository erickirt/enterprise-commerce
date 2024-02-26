"use client"

import { Button } from "components/Button"
import { useModalStore } from "stores/modalStore"

export default function Actions() {
  const openModal = useModalStore((s) => s.openModal)

  return (
    <div className="flex items-center space-x-4">
      <Button onClick={() => openModal("login")}>Log In</Button>
      <Button className="hover:text-white" variant="secondary" isAnimated={false} onClick={() => openModal("signup")}>
        Sign In
      </Button>
    </div>
  )
}
"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import contact from "@/datas/contact.json"

export default function WhatsAppButton() {
  return (
    <a
      href={contact.phone}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        className="h-16 w-16 rounded-full bg-green-500 hover:bg-green-600 shadow-lg cursor-pointer"
      >
        <MessageCircle className="text-white" />
      </Button>
    </a>
  )
}


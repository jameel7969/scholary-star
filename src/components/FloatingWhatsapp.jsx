import React from 'react'

const FloatingWhatsapp = ({ phone = '923186514150', message = "Hello Scholary Star Science Academy! I'd like to know more about your subjects and mentoring." }) => {
  const text = encodeURIComponent(message)
  const href = `https://wa.me/${phone}?text=${text}`
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 shadow-xl transition hover:bg-emerald-400 focus:outline-none focus:ring-4 focus:ring-emerald-300"
    >
      <svg viewBox="0 0 32 32" width="40" height="40" fill="currentColor" className="text-white">
        <path d="M19.11 17.12c-.27-.13-1.56-.77-1.8-.86-.24-.09-.41-.13-.58.13-.17.26-.67.86-.82 1.04-.15.17-.3.2-.56.07-.27-.13-1.13-.41-2.15-1.31-.79-.7-1.32-1.56-1.48-1.82-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.58-1.4-.8-1.92-.21-.5-.42-.43-.58-.44-.15-.01-.32-.01-.49-.01-.17 0-.45.06-.69.32-.24.26-.91.9-.91 2.2s.93 2.55 1.06 2.73c.13.17 1.83 2.8 4.43 3.92.62.27 1.11.43 1.5.55.63.2 1.2.17 1.65.1.5-.08 1.56-.64 1.78-1.26.22-.62.22-1.16.15-1.26-.06-.1-.24-.16-.5-.29z"/>
        <path d="M26.6 5.4C23.9 2.7 20.3 1.2 16.5 1.2 8.6 1.2 2.2 7.6 2.2 15.5c0 2.5.7 4.9 2 7L2 30l7.7-2c2 1.1 4.3 1.7 6.8 1.7 7.9 0 14.3-6.4 14.3-14.3 0-3.8-1.5-7.4-4.2-10.1zM16.5 27.4c-2.2 0-4.4-.6-6.2-1.7l-.4-.2-4.6 1.2 1.2-4.5-.3-.5c-1.2-1.9-1.8-4.1-1.8-6.2 0-6.7 5.5-12.2 12.2-12.2 3.3 0 6.3 1.3 8.6 3.5 2.3 2.3 3.5 5.3 3.5 8.6-.1 6.7-5.6 12.2-12.6 12.2z"/>
      </svg>
    </a>
  )
}

export default FloatingWhatsapp

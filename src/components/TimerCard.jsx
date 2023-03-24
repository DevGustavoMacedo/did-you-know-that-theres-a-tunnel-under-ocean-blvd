import { useEffect, useState } from "react"

export default function TimerCard() {
  // const remainingTime = (1679626800000 - Date.now()) / 1000

  const [timer, setTimer] = useState(10)

  const formatDate = (tempo) => {
    const hours = tempo / 3600
    const minutes = (tempo / 60) % 60
    const seconds = tempo % 60

    const date = [hours, minutes, seconds].map((n) => 
      ('00' + Math.trunc(n)).slice(-2)).join(':')

    return date
  }

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => setTimer((prevState) => prevState - 1), 1000)
    }
  }, [timer])

  return (
    <main className="xl:absolute flex flex-col gap-3 items-center backdrop-blur bg-brand-gray bg-opacity-100 p-4 rounded-lg text-center w-[90%]
    xl:w-auto xl:bottom-10 xl:bg-opacity-50 xl:gap-6
    ">
      <h1 className="text-brand-yellow font-bold font-primary text-3xl tracking-wider [text-shadow:_2px_2px_2px_gray] xl:text-5xl">
        New Album Release:
      </h1>
      {timer <= 0 ? (
        <a
          href="https://open.spotify.com/album/5HOHne1wzItQlIYmLXLYfZ"
          target="_blank"
        >
          <h2
            className="animate-shake text-brand-yellow  font-primary text-lg xl:text-2xl tracking-wider
      [text-shadow:_2px_2px_2px_gray]"
          >
            Listen Right Now ⏯️🥳🎉
          </h2>
        </a>
      ) : (
        <h2
          className="text-brand-yellow  font-primary text-lg xl:text-2xl tracking-wider
    [text-shadow:_2px_2px_2px_gray]"
        >
          {formatDate(timer)}
        </h2>
      )}
    </main>
  )
}

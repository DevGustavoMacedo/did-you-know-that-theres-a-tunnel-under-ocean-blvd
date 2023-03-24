export default function AudioList() {
  const toggleAudio = (music) => {
    const audio = document.getElementById(music)
    const button = audio.nextSibling

    audio.paused ? audio.play() : audio.pause()
    button.classList.toggle('animate-pulse')
  }

  return (
    <nav
      className="xl:absolute w-[90%] p-6 bg-brand-gray rounded-xl
    xl:left-4 xl:w-56 xl:p-4
    "
    >
      <ul className="flex flex-col gap-4 xl:gap-8">
        <li
          className="text-brand-yellow font-primary text-md xl:text-lg tracking-wider
            [text-shadow:_2px_2px_2px_black]"
        >
          The Grants <audio id="grants" src="/grants.mp3" preload="auto" />
          <span className="cursor-pointer text-lg" onClick={() => toggleAudio('grants')}>
            ⏯️
          </span>
        </li>
        <li
          className="text-brand-yellow font-primary text-md xl:text-lg tracking-wider
          [text-shadow:_2px_2px_2px_black]"
        >
          A&W <audio id="aw" src="/aw.mp3" preload="auto" />
          <span className="cursor-pointer text-lg" onClick={() => toggleAudio('aw')}>
            ⏯️
          </span>
        </li>
        <li
          className="text-brand-yellow font-primary text-md xl:text-lg tracking-wider
          [text-shadow:_2px_2px_2px_black]"
        >
          Did you know that there's a tunnel under Ocean Blvd{' '}
          <audio id="blvd" src="/blvd.mp3" preload="auto" />
          <span className="cursor-pointer text-lg" onClick={() => toggleAudio('blvd')}>
            ⏯️
          </span>
        </li>
      </ul>
    </nav>
  )
}

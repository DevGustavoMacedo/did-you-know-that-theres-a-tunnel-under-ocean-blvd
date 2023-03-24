import AudioCard from './components/AudioCard'
import TimerCard from './components/TimerCard'

export default function App() {
  return (
    <div className="xl:h-screen flex items-center flex-col-reverse justify-end gap-4 xl:gap-0 xl:flex-col xl:justify-center">
      <AudioCard />
      <img src="/lana.png" alt="Lana" className="xl:self-end" />
      <TimerCard />
    </div>
  )
}

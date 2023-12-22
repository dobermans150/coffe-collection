import Image from 'next/image'

// eslint-disable-next-line no-use-before-define
import { Header } from "@coffe-collection/components"

export default function Home() {
  return (
    <div className="App">
      <Header text="Hello World from coffe collection" />
    </div>
  )
}

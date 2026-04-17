import { useRef } from "react"

function App() {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const handleInput = () => {
    const el = textareaRef.current
    if (el) {
      el.style.height = "auto"
      el.style.height = Math.min(el.scrollHeight) + "px"
    }
  }



  return (
    <div className="flex h-screen bg-zinc-950 text-white">

      <aside className="w-64 border-r border-zinc-800 bg-zinc-900 p-4">
        Sidebar
      </aside>

      <main className="flex flex-1 flex-col">
        <div className="flex-1 p-6 overflow-y-auto">
          Chat Area
        </div>

      <div className="p-5">
        <div className="mx-auto max-w-3xl rounded-2xl bg-zinc-800">
          <div className="px-2 pt-1">
            <textarea
              ref={textareaRef}
              onInput={handleInput}
              rows={1}
              placeholder="Ask anything..."
              className="block w-full resize-none rounded-t-2xl bg-transparent px-6 pt-4 text-white outline-none max-h-80 overflow-y-auto leading-6"
            />
          </div>
          <div className="flex items-center justify-end px-3 pb-3 pt-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl text-black cursor-pointer">
              ↑
            </button>
          </div>
        </div>
      </div>
      </main>
    </div>
  )

}

export default App

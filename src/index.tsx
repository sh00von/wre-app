import { root } from "@lynx-js/react"
import { MemoryRouter, Routes, Route } from "react-router"

import { App } from "./App.js"
import { LevelTermPage } from "./LevelTermPage.js"
import { SubjectNotesPage } from "./SubjectNotesPage.js"

root.render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {/* Dynamic Route for Level & Term Pages */}
      <Route path="/level/:level/term/:term" element={<LevelTermPage />} />
      {/* New Route for Subject Notes */}
      <Route path="/level/:level/term/:term/subject/:subject" element={<SubjectNotesPage />} />
    </Routes>
  </MemoryRouter>,
)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}


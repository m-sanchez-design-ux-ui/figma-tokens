import CustomCard from './components/CustomCard'
import CustomCarTwo from './components/CustomCarTwo'
//import './tokens/design-tokens'
import { Builder } from "@builder.io/react";

Builder.register("editor.settings", {
  styleStrictMode: true, // optional
  designTokens: {
    fontFamily: [
      { name: "TokenFontFamily", value: "var(--typeDefault, Montserrat)"},
    ],
    colors: [
      { name: "TokenPrimary", value: "var(--token-primary-color, #12c54e)" },
      { name: "TokenSecondary", value: "var(--token-secondary-color, #006ce7)" },
    ],
    spacing: [
      { name: "TokenSpacingSmall", value: "var(--token-spacing-small, 4px)" },
      { name: "TokenSpacingMedium", value: "var(--token-spacing-medium , 8px)" },
      { name: "TokenSpacingLarge", value: "var(--token-spacing-large, 12px)" },
    ],
    // Otros tokens...
  },
});


function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-token-spacing-large bg-token-primary">
      <h1 className="text-white text-4xl font-bold">
        Tailwind 3.4.14 Edited 4✅
      </h1>
      <CustomCard />
      <CustomCarTwo />
    </div>
  )
}
export default App

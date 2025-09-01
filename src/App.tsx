import CustomCard from './components/CustomCard'
import CustomCarTwo from './components/CustomCarTwo'
//import './tokens/design-tokens'
import { Builder } from "@builder.io/react";

Builder.register("editor.settings", {
  styleStrictMode: true, // optional
  designTokens: {
    fontFamily: [
      { name: "TokenFontFamily", value: "var(--typeDefault)"},
    ],
    colors: [
      { name: "TokenPrimary", value: "var(--token-primary-color)" },
      { name: "TokenSecondary", value: "var(--token-secondary-color)" },
    ],
    spacing: [
      { name: "TokenSpacingSmall", value: "var(--token-spacing-small)" },
      { name: "TokenSpacingMedium", value: "var(--token-spacing-medium)" },
      { name: "TokenSpacingLarge", value: "var(--token-spacing-large)" },
    ],
    // Otros tokens...
  },
});


function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-token-spacing-medium bg-token-primary">
      <h1 className="text-white text-4xl font-bold">
        Tailwind 3.4.14 Edited 4✅
      </h1>
      <CustomCard />
      <CustomCarTwo />
    </div>
  )
}
export default App

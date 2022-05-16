import { CssModules } from "./components/CssModules";
import { InlineStyly } from "./components/InlineStyle";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyly />
      <CssModules />
      <StyledJsx />
    </div>
  );
}

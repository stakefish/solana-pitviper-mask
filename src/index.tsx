import ReactDOM from "react-dom"
import { GlobalFonts } from "./core/GlobalFonts"
import Helmet from "react-helmet"
import App from "./core/App"

ReactDOM.render(
  <>
    <Helmet>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap" rel="stylesheet" />
      <style>{GlobalFonts}</style>
    </Helmet>
    <App />
  </>,
  document.getElementById("root")
)

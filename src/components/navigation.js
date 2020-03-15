import React from "react"
import { Link } from "gatsby"
import LocalizedLink from "./localizedLink"
import useTranslations from "./useTranslations"

const Navigation = () => {
  const { backToHome } = useTranslations()

  return (
    <nav>
      <LocalizedLink to="/" aria-label={backToHome}>
        Homepage
      </LocalizedLink>
      <div>
        <Link to="/" hrefLang="de">
          Deutsch
        </Link>
        {` `}/{` `}
        <Link to="/fr" hrefLang="fr">
          Français
        </Link>
        {` `}/{` `}
        <Link to="/it" hrefLang="it">
          Italiano
        </Link>
        {` `}/{` `}
        <Link to="/en" hrefLang="en">
          English
        </Link>
      </div>
    </nav>
  )
}

export default Navigation

import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";

function LanguageSwitcher() {
  const { locale, locales, defaultLocale, asPath } = useRouter();

  return (
    <div className="languageSwitchWrap">
      <Link href={asPath} locale="hr">
        HR
      </Link>
      <Link href={asPath} locale="en">
        EN
      </Link>
      {/* <Link href={asPath} locale="it">
        IT
      </Link> */}
    </div>
  );
}

export default LanguageSwitcher;

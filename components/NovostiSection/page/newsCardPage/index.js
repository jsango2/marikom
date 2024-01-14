import {
  WrapAll,
  Container,
  Title,
  Text,
  Datum,
  ViseInfo,
  BlueLine,
  Photo,
  DataContainer,
  LinkInfo,
} from "./style.js";
import ArrowRight from "../../../../svg/arrowRight.svg";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image.js";
import slugify from "slugify";
import en from "../../../../locales/en.json";
import hr from "../../../../locales/hr.json";

function NewsCard({ datum, naslov, text, link, isFeatured, photo }) {
  const { locale, locales, defaultLocale, asPath } = useRouter();
  const t = locale === "en" ? en : hr;
  return (
    <Link
      href={locale === "hr" ? `/novosti/${slugify(link)}` : `/novosti/${link}`}
    >
      <WrapAll isFeatured={isFeatured}>
        {!isFeatured && (
          <Photo>
            <div className="newsCardPhoto">
              <Image src={photo} layout="fill" objectFit="cover"></Image>
            </div>
          </Photo>
        )}
        <DataContainer>
          <BlueLine isFeatured={isFeatured} />
          <Datum>{datum}</Datum>
          <Title isFeatured={isFeatured}>{naslov}</Title>
          <Text
            dangerouslySetInnerHTML={{
              __html: [text.slice(0, 100) + "..."],
            }}
          />
          {/* <ViseInfo
          href={
            locale === "hr" ? `novosti/${slugify(link)}` : `novosti/${link}`
          }
        >
          {t.MoreInfo.MoreInfo} <ArrowRight />
        </ViseInfo> */}
          <ViseInfo>
            <LinkInfo>{t.MoreInfo.MoreInfo}</LinkInfo>
            <ArrowRight className="newsArrow" />
          </ViseInfo>
        </DataContainer>
      </WrapAll>
    </Link>
  );
}

export default NewsCard;

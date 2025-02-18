import { useTranslations } from "next-intl";

interface Config {
  websiteName: string;
  websiteUrl: string;
  contactEmail: string;
}

const config: Config = {
  websiteName: "Sand Tetris",
  websiteUrl: "sand-tetris.online",
  contactEmail: "lzb129239@gmail.com",
};

export default function TermsOfService() {
  const t = useTranslations("terms");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold">{t("title")}</h1>

      <section className="mb-8">
        <p className="mb-4 text-gray-600">
          {t("introduction", { websiteName: config.websiteName })}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">
          {t("userAgreement.title")}
        </h2>
        <div className="space-y-4 text-gray-600">
          <p>
            {t("userAgreement.description", {
              websiteName: config.websiteName,
            })}
          </p>
          <ul className="list-inside list-disc space-y-2 pl-4">
            {(t.raw("userAgreement.rules") as string[]).map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">
          {t("intellectualProperty.title")}
        </h2>
        <div className="space-y-4 text-gray-600">
          <p>
            {t("intellectualProperty.description", {
              websiteName: config.websiteName,
            })}
          </p>
          <ul className="list-inside list-disc space-y-2 pl-4">
            {(t.raw("intellectualProperty.restrictions") as string[]).map(
              (restriction, index) => (
                <li key={index}>{restriction}</li>
              ),
            )}
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">{t("gameRules.title")}</h2>
        <p className="text-gray-600">{t("gameRules.description")}</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">
          {t("availability.title")}
        </h2>
        <p className="text-gray-600">{t("availability.description")}</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">{t("userContent.title")}</h2>
        <p className="text-gray-600">{t("userContent.description")}</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">{t("disclaimer.title")}</h2>
        <p className="text-gray-600">
          {t("disclaimer.description", { websiteName: config.websiteName })}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">
          {t("modifications.title")}
        </h2>
        <p className="text-gray-600">{t("modifications.description")}</p>
      </section>

      <footer className="mt-12 text-sm text-gray-500">
        <p className="mt-2">
          {t("footer.contact", { email: config.contactEmail })}
        </p>
      </footer>
    </div>
  );
}

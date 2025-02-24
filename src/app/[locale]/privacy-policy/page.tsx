import { useTranslations } from "next-intl";

interface PrivacyConfig {
  websiteName: string;
  websiteUrl: string;
  contactEmail: string;
}

const config: PrivacyConfig = {
  websiteName: "Sand Tetris",
  websiteUrl: "sand-tetris.online",
  contactEmail: "lzb129239@gmail.com",
};

export default function PrivacyPolicy() {
  const t = useTranslations("privacy");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold">{t("title")}</h1>

      <section className="mb-8">
        <p className="mb-4 text-gray-600">
          {t("introduction", {
            websiteName: config.websiteName,
            websiteUrl: config.websiteUrl,
          })}
        </p>
        <p className="mb-4 text-gray-600">
          {t("contact", { email: config.contactEmail })}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">{t("information.title")}</h2>
        <div className="space-y-4 text-gray-600">
          <h3 className="font-medium">{t("information.logFiles.title")}</h3>
          <p>
            {t("information.logFiles.description", {
              websiteName: config.websiteName,
            })}
          </p>
          <ul className="list-inside list-disc space-y-2 pl-4">
            {(t.raw("information.logFiles.items") as string[]).map(
              (item, index) => (
                <li key={index}>{item}</li>
              ),
            )}
          </ul>
          <p>{t("information.logFiles.usage")}</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">{t("cookies.title")}</h2>
        <p className="mb-4 text-gray-600">
          {t("cookies.description", { websiteName: config.websiteName })}
        </p>
        <ul className="list-inside list-disc space-y-2 pl-4 text-gray-600">
          {(t.raw("cookies.purposes") as string[]).map((purpose, index) => (
            <li key={index}>{purpose}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">{t("thirdParty.title")}</h2>
        <p className="text-gray-600">
          {t("thirdParty.description", { websiteName: config.websiteName })}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">{t("children.title")}</h2>
        <p className="text-gray-600">
          {t("children.description", { websiteName: config.websiteName })}
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">{t("updates.title")}</h2>
        <p className="text-gray-600">{t("updates.description")}</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">{t("consent.title")}</h2>
        <p className="text-gray-600">{t("consent.description")}</p>
      </section>

      <footer className="mt-12 text-sm text-gray-500">
        <p className="mt-2">
          {t("footer.contact", { email: config.contactEmail })}
        </p>
      </footer>
      <span id="ezoic-privacy-policy-embed"></span>
    </div>
  );
}

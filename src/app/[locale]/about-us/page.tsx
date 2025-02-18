import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold">{t("title")}</h1>

      <section className="mb-8">
        <p className="mb-4 text-gray-600">{t("introduction")}</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">{t("whatWeOffer.title")}</h2>
        <div className="space-y-4 text-gray-600">
          <p>{t("whatWeOffer.description")}</p>
          <ul className="list-inside list-disc space-y-2 pl-4">
            {(t.raw("whatWeOffer.features") as string[]).map(
              (feature, index) => (
                <li key={index}>{feature}</li>
              ),
            )}
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">{t("mission.title")}</h2>
        <p className="text-gray-600">{t("mission.description")}</p>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">{t("futurePlans.title")}</h2>
        <p className="text-gray-600">{t("futurePlans.description")}</p>
        <ul className="mt-4 list-inside list-disc space-y-2 pl-4 text-gray-600">
          {(t.raw("futurePlans.features") as string[]).map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">{t("contact.title")}</h2>
        <p className="text-gray-600">{t("contact.description")}</p>
        <p className="mt-4 text-gray-600">
          {t("contact.emailText")}{" "}
          <a
            href="mailto:lzb129239@gmail.com"
            className="text-blue-600 hover:text-blue-800"
          >
            {t("contact.emailAddress")}
          </a>
        </p>
        <p className="mt-4 text-gray-600">{t("contact.response")}</p>
      </section>
    </div>
  );
}

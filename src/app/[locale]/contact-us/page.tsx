import { useTranslations } from "next-intl";

export default function ContactUs() {
  const t = useTranslations("contact");

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold">{t("title")}</h1>

      <section className="mb-8">
        <p className="mb-6 text-gray-600">{t("introduction")}</p>
      </section>

      <section className="mb-8">
        <p className="text-lg text-gray-600">
          {t("emailText")}{" "}
          <a
            href="mailto:lzb129239@gmail.com"
            className="text-blue-600 hover:text-blue-800"
          >
            {t("emailAddress")}
          </a>
        </p>
      </section>

      <section className="mb-8">
        <p className="text-gray-600">{t("response")}</p>
      </section>
    </div>
  );
}

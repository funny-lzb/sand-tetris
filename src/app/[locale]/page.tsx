import { useTranslations } from "next-intl";
import Link from "next/link";
// import { games } from "~/config/games";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Comment from "../_components/Comment";
import FullScreen from "../_components/FullScreen";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: "metadata",
  });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Home() {
  const t = useTranslations("home");
  // const currentGame = games.find((game) => game.path === "/");
  // const otherGames = games.filter((game) => game.path !== "/");

  return (
    <main className="flex min-h-screen flex-col items-center bg-white text-gray-900">
      {/* Game Section */}
      {/* <div className="mx-auto w-full max-w-4xl px-4 py-4">
        <div className="aspect-[4/3] max-h-[75vh] w-full overflow-hidden rounded-lg bg-black shadow-xl">
          <iframe
            src="https://www.crazygames.com/embed/sandtrix"
            className="h-full w-full"
            frameBorder="0"
            allow="gamepad *;"
            allowFullScreen
          />
        </div>
      </div> */}
      <FullScreen />

      {/* Content Section */}
      <div className="w-full max-w-4xl px-4 pb-12">
        {/* Main Title */}
        <h1 className="mb-8 mt-12 text-4xl font-bold text-gray-900">
          {t("title")}
        </h1>
        <Comment />

        {/* How to Play Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            {t("subtitle")}
          </h2>

          <p className="mb-8 text-lg text-gray-700">{t("introduction")}</p>

          {/* Getting Started Steps */}
          <div className="mb-8 rounded-lg bg-gray-100 p-6">
            <h3 className="mb-4 text-lg font-medium text-gray-900">
              {t("gettingStarted.title")}
            </h3>
            <div className="space-y-4">
              {(["1", "2", "3"] as const).map((step) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                    {step}
                  </span>
                  <p className="text-gray-700">
                    {t(`gettingStarted.step_${step}.text`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Game Rules */}
          <div className="rounded-lg bg-amber-50 p-6">
            <h3 className="mb-4 text-lg font-medium text-gray-900">
              {t("gameRules.title")}
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>{t("gameRules.intro")}</p>
              <ul className="list-disc space-y-2 pl-5">
                {(t.raw("gameRules.rules") as string[]).map(
                  (rule: string, index: number) => (
                    <li key={index}>{rule}</li>
                  ),
                )}
              </ul>
            </div>
          </div>

          {/* Game Modes */}
          <div className="mt-8 grid gap-8">
            <section>
              <h3 className="mb-3 text-xl font-medium text-gray-800">
                {t("gameModes.title")}
              </h3>
              <div className="rounded-lg bg-gray-100 p-6">
                <ul className="space-y-3">
                  {["classic", "timeChallenge", "clear40"].map(
                    (mode, index) => (
                      <li key={mode} className="flex items-start gap-3">
                        <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                          {index + 1}
                        </span>
                        <div>
                          <strong className="text-gray-900">
                            {t(`gameModes.${mode}.title`)}:
                          </strong>
                          <p className="text-gray-600">
                            {t(`gameModes.${mode}.description`)}
                          </p>
                        </div>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </section>

            {/* Controls Section */}
            <section>
              <h3 className="mb-3 text-xl font-medium text-gray-800">
                {t("controls.title")}
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-gray-100 p-6">
                  <p className="mb-3 font-medium text-gray-900">
                    {t("controls.desktop.title")}:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <kbd className="rounded bg-white px-2 py-1 text-sm shadow">
                        ↑
                      </kbd>
                      <span>or</span>
                      <kbd className="rounded bg-white px-2 py-1 text-sm shadow">
                        W
                      </kbd>
                      <span>{t("controls.desktop.rotate")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <kbd className="rounded bg-white px-2 py-1 text-sm shadow">
                        ←
                      </kbd>
                      <kbd className="rounded bg-white px-2 py-1 text-sm shadow">
                        →
                      </kbd>
                      <span>or</span>
                      <kbd className="rounded bg-white px-2 py-1 text-sm shadow">
                        A
                      </kbd>
                      <kbd className="rounded bg-white px-2 py-1 text-sm shadow">
                        D
                      </kbd>
                      <span>{t("controls.desktop.move")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <kbd className="rounded bg-white px-2 py-1 text-sm shadow">
                        ↓
                      </kbd>
                      <span>or</span>
                      <kbd className="rounded bg-white px-2 py-1 text-sm shadow">
                        S
                      </kbd>
                      <span>{t("controls.desktop.drop")}</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg bg-gray-100 p-6">
                  <p className="mb-3 font-medium text-gray-900">
                    {t("controls.mobile.title")}:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>{t("controls.mobile.tap")}</li>
                    <li>{t("controls.mobile.swipe")}</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Pro Tips Section */}
            <section className="rounded-lg bg-amber-50 p-6">
              <h3 className="mb-3 text-xl font-medium text-gray-800">
                {t("proTips.title")}
              </h3>
              <ul className="space-y-2 text-gray-700">
                {(t.raw("proTips.tips") as string[]).map((tip, index) => (
                  <li key={index}>• {tip}</li>
                ))}
              </ul>
            </section>
          </div>
        </section>

        {/* YouTube Video */}
        <div className="mb-12 overflow-hidden rounded-lg shadow-lg">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/J59rsotSqb4?si=NBhob6ibUGnnaEwb"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* SEO Content Sections */}
        <div className="mt-12 space-y-8">
          {/* Core Game Introduction */}
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              {t("seoContent.mainTitle")}
            </h2>
            <p className="mb-4 text-gray-700">
              {t("seoContent.mainDescription")}
            </p>
          </section>

          {/* Game Variants */}
          <section>
            <h3 className="mb-3 text-xl font-medium text-gray-800">
              {t("seoContent.variations.title")}
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-gray-100 p-6">
                <h4 className="mb-2 font-medium text-gray-900">
                  {t("seoContent.variations.classic.title")}
                </h4>
                <p className="text-gray-600">
                  {t("seoContent.variations.classic.description")}
                </p>
              </div>
              <div className="rounded-lg bg-gray-100 p-6">
                <h4 className="mb-2 font-medium text-gray-900">
                  {t("seoContent.variations.unblocked.title")}
                </h4>
                <p className="text-gray-600">
                  {t("seoContent.variations.unblocked.description")}
                </p>
              </div>
            </div>
          </section>

          {/* Records and Achievements */}
          <section className="rounded-lg bg-amber-50 p-6">
            <h3 className="mb-3 text-xl font-medium text-gray-800">
              {t("seoContent.records.title")}
            </h3>
            <div className="space-y-4">
              <p className="text-gray-700">{t("seoContent.records.intro")}</p>
              <ul className="list-disc space-y-2 pl-5 text-gray-700">
                {(t.raw("seoContent.records.challenges") as string[]).map(
                  (challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ),
                )}
              </ul>
            </div>
          </section>

          {/* Mobile Gaming */}
          <section>
            <h3 className="mb-3 text-xl font-medium text-gray-800">
              {t("seoContent.mobile.title")}
            </h3>
            <p className="text-gray-700">
              {t("seoContent.mobile.description")}
            </p>
          </section>
        </div>

        {/* Game Information */}
        <div className="space-y-8">
          {/* Bottom Section */}
          <div className="mt-12 space-y-6 border-t border-gray-200 pt-8">
            {/* Bookmark Tip */}
            <div className="rounded-lg bg-blue-50 p-4 text-center">
              <p className="flex items-center justify-center gap-2 text-blue-800">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                  />
                </svg>
                <span>
                  {t("bookmark.text")}
                  <kbd className="mx-1 rounded bg-white px-2 py-0.5 text-sm shadow">
                    {t("bookmark.key1")}
                  </kbd>
                  +
                  <kbd className="mx-1 rounded bg-white px-2 py-0.5 text-sm shadow">
                    {t("bookmark.key2")}
                  </kbd>
                  {t("bookmark.suffix")}
                </span>
              </p>
            </div>

            {/* Friendly Links Section */}
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-xl font-semibold">Friendly links</h3>
              <div className="flex items-center gap-6">
                <Link
                  href="https://basketballbros.net/"
                  target="_blank"
                  className="text-blue-600 transition-colors hover:text-blue-800"
                >
                  Basketball bros
                </Link>
                <Link
                  href="https://football-bros.net/"
                  target="_blank"
                  className="text-blue-600 transition-colors hover:text-blue-800"
                >
                  Football bros
                </Link>
                <Link
                  href="https://narrow-one.net/"
                  target="_blank"
                  className="text-blue-600 transition-colors hover:text-blue-800"
                >
                  Narrow one
                </Link>
                <Link
                  href="https://link.zhihu.com/?target=https%3A%2F%2Fsand-tetris.online"
                  target="_blank"
                  className="text-blue-600 transition-colors hover:text-blue-800"
                >
                  zhihu
                </Link>
                <Link
                  href="https://weibo.cn/sinaurl?u=https%3A%2F%2Fsand-tetris.online"
                  target="_blank"
                  className="text-blue-600 transition-colors hover:text-blue-800"
                >
                  weibo
                </Link>
                <Link
                  href="https://ghiblimage.net"
                  target="_blank"
                  className="text-blue-600 transition-colors hover:text-blue-800"
                >
                  Ghibli Image
                </Link>
                <Link
                  href="https://doodle-baseball.io/"
                  target="_blank"
                  className="text-blue-600 transition-colors hover:text-blue-800"
                >
                  Doodle baseball
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

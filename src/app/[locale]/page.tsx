import { useTranslations } from "next-intl";
import { games } from "~/config/games";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "metadata",
  });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function Home() {
  const t = useTranslations("home");
  const currentGame = games.find((game) => game.path === "/");
  const otherGames = games.filter((game) => game.path !== "/");

  return (
    <main className="flex min-h-screen flex-col items-center bg-white text-gray-900">
      {/* Game Section */}
      <div className="mx-auto w-full max-w-4xl px-4 py-4">
        <div className="aspect-[4/3] max-h-[75vh] w-full overflow-hidden rounded-lg bg-black shadow-xl">
          <iframe
            src="https://www.crazygames.com/embed/sandtrix"
            className="h-full w-full"
            frameBorder="0"
            allow="gamepad *;"
            allowFullScreen
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-4xl px-4 pb-12">
        {/* Main Title */}
        <h1 className="mb-8 mt-12 text-4xl font-bold text-gray-900">
          {t("title")}
        </h1>

        {/* How to Play Section */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            {t("subtitle")}
          </h2>

          <p className="mb-8 text-lg text-gray-700">{t("introduction")}</p>

          {/* Game Modes */}
          <div className="grid gap-8">
            <section>
              <h3 className="mb-3 text-xl font-medium text-gray-800">
                {t("gameModes.title")}
              </h3>
              <div className="rounded-lg bg-gray-100 p-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                      1
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        {t("gameModes.classic.title")}:
                      </strong>
                      <p className="text-gray-600">
                        {t("gameModes.classic.description")}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                      2
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        {t("gameModes.timeChallenge.title")}:
                      </strong>
                      <p className="text-gray-600">
                        {t("gameModes.timeChallenge.description")}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 text-amber-800">
                      3
                    </span>
                    <div>
                      <strong className="text-gray-900">
                        {t("gameModes.clear40.title")}:
                      </strong>
                      <p className="text-gray-600">
                        {t("gameModes.clear40.description")}
                      </p>
                    </div>
                  </li>
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
                <li>• {t("proTips.tip1")}</li>
                <li>• {t("proTips.tip2")}</li>
                <li>• {t("proTips.tip3")}</li>
                <li>• {t("proTips.tip4")}</li>
              </ul>
            </section>
          </div>
        </section>

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
      </div>
    </main>
  );
}

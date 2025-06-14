function App() {
  return (
    <div className="font-sans bg-pink-50 text-rose-800 min-h-screen">
      {/* ヘッダー・ロゴ */}
      <header className="py-10 text-center bg-yellow-300">
        <img src="/logo.jpg" alt="なごみロゴ" className="w-32 mx-auto rounded-md shadow-md" />
        <h1 className="text-3xl font-bold mt-4">ケアステーション なごみん</h1>
        <p className="text-sm text-gray-700">あなたの笑顔と安心を支える介護サービス</p>
      </header>

      {/* 代表メッセージ */}
      <section className="max-w-screen-md mx-auto p-6 my-6 bg-white rounded-xl shadow-md flex flex-col md:flex-row items-center gap-6">
        <img src="/ceo.jpg" alt="代表写真" className="w-36 h-36 object-cover rounded-full" />
        <div>
          <h2 className="text-xl font-bold mb-2">代表からのメッセージ</h2>
          <p>
            地域の皆様に寄り添い、心をこめた介護サービスを提供しています。
            なごやかな毎日のお手伝いを、スタッフ一同大切にしています。
          </p>
        </div>
      </section>

      {/* お客様へ */}
      <section className="max-w-screen-md mx-auto p-6 my-6 bg-white rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-2 text-center">ご利用者様へ</h2>
        <p className="text-center">
          「安心してお願いできる」そんな声に応えるため、丁寧で思いやりのある介護を大切にしています。
        </p>
      </section>

      {/* 求職者へ */}
      <section className="max-w-screen-md mx-auto p-6 my-6 bg-white rounded-xl shadow-md">
        <h2 className="text-xl font-bold mb-2 text-center">求職者様へ</h2>
        <p className="text-center">
          私たちと一緒に働きませんか？明るく前向きな仲間を募集しています。
        </p>
        <div className="text-center mt-4">
          <a
            href="mailto:nagomi@example.com"
            className="inline-block bg-rose-500 text-white py-2 px-6 rounded-full shadow hover:bg-rose-600 transition"
          >
            採用についてお問い合わせ
          </a>
        </div>
      </section>

      {/* 基本情報 */}
      <section className="max-w-screen-md mx-auto p-6 my-6 bg-white rounded-xl shadow-md text-sm">
        <h2 className="text-lg font-bold mb-2">基本情報</h2>
        <p>〒651-0064 兵庫県神戸市中央区大日通2-4-9</p>
        <p>TEL・FAX：078-891-8333</p>
      </section>

      {/* 事業情報 */}
      <section className="max-w-screen-md mx-auto p-6 my-6 bg-white rounded-xl shadow-md text-sm">
        <h2 className="text-lg font-bold mb-2">事業情報</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>介護サービス - 訪問介護</li>
          <li>障害福祉サービス - 喀痰吸引、胃ろう、腸ろう、経鼻経管栄養、居宅介護、重度訪問介護</li>
          <li>自費サービス - 通院・院内介助</li>
        </ul>
        <p className="mt-2">介護事業所番号：2875104529</p>
        <p>障害福祉サービス事業所番号：2815102534</p>
        <p>登録喀痰吸引事業所番号：282600001B</p>
      </section>

      {/* フッター */}
      <footer className="text-center py-6 text-xs text-gray-500">
        © 2025 ケアステーションなごみん | なごやかな暮らしのお手伝い
      </footer>
    </div>
  );
}

export default App;

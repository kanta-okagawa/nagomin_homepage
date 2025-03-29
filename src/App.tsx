function App() {
  return (
    <div className="font-sans text-gray-800 bg-white min-h-screen">
      <header className="text-center py-10">
        <img src="/logo.png" alt="施設のロゴ" className="mx-auto w-32" />
        <h1 className="text-3xl font-bold mt-4">なごみ介護ホーム</h1>
      </header>

      <section className="text-center px-4 py-10">
        <img src="/ceo.jpg" alt="代表の顔写真" className="w-40 h-40 rounded-full mx-auto object-cover" />
        <p className="mt-4 font-semibold text-xl">代表からのメッセージ</p>
        <p className="mt-2 text-gray-600 max-w-md mx-auto">
          地域の皆さまに寄り添った、安心と信頼の介護サービスを提供しています。
        </p>
      </section>

      <section className="bg-gray-100 px-4 py-10">
        <h2 className="text-2xl font-bold mb-4 text-center">お客様へのメッセージ</h2>
        <p className="text-gray-700 max-w-xl mx-auto text-center">
          ご利用者さまの笑顔と安心を第一に考えた、心のこもった介護をお届けしています。
        </p>
      </section>

      <section className="px-4 py-10">
        <h2 className="text-2xl font-bold mb-4 text-center">求職者様へ</h2>
        <p className="text-gray-700 max-w-xl mx-auto text-center">
          一緒に働きましょう！あたたかい職場で、あなたの力を活かしてください。
        </p>
      </section>

      <section className="bg-gray-100 px-4 py-10">
        <h2 className="text-xl font-bold mb-2">基本情報</h2>
        <p>〒651-0064 兵庫県神戸市中央区大日通2-4-9</p>
        <p>TEL・FAX：078-891-8333</p>
      </section>

      <section className="px-4 py-10">
        <h2 className="text-xl font-bold mb-2">事業情報</h2>
        <p>事業内容</p>
        <ul className="list-disc list-inside">
          <li>介護サービス - 訪問介護</li>
          <li>障害福祉サービス - 口腔内､鼻腔内､気管カニューレ内部の喀痰吸引、胃ろう・腸ろうによる経管栄養、経鼻経管栄養、居宅介護、重度訪問介護</li>
          <li>自費サービス - 通院介助・院内介助</li>
        </ul>
        <p className="mt-2">介護事業所番号：2875104529</p>
        <p>障害福祉サービス事業所番号：2815102534</p>
        <p>登録喀痰吸引事業所番号：282600001B</p>
      </section>

      <footer className="text-center py-6 text-sm text-gray-500">
        © 2025 なごみ介護ホーム
      </footer>
    </div>
  );
}

export default App;

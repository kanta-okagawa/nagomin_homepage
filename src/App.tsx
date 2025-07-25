function App() {
  return (
    <div className="font-comic-sans bg-yellow-50 bg-opacity-80 text-gray-800 min-h-screen">
      {/* ヘッダー・ロゴ */}
      <header className="py-12 text-center bg-yellow-200 bg-opacity-60">
        <img src="/images/company-photo.jpg" alt="なごみロゴ" className="w-40 mx-auto rounded-lg shadow-lg mb-6" />
        <h1 className="text-4xl font-bold mt-6 text-gray-900">ケアステーション なごみん</h1>
        <p className="text-xl text-gray-700 mt-4 px-6">あなたの笑顔と安心を支える<br />訪問介護サービス</p>
      </header>

      {/* 代表メッセージ */}
      <section className="max-w-screen-md mx-auto p-8 my-8 bg-white bg-opacity-90 rounded-xl shadow-lg text-center">
        <img src="/images/ceo-photo.jpg" alt="代表写真" className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-md" />
        <h2 className="text-3xl font-bold mb-6 text-gray-900">代表からのメッセージ</h2>
        <div className="text-lg leading-relaxed mb-6 px-4 space-y-4">
          <p>このたびは、当事業所のホームページをご覧いただき、誠にありがとうございます。</p>
          <p>私たちは、「住み慣れたご自宅で安心して、自分らしく暮らし続けられるように」を理念とし、訪問介護サービスを通じて地域の皆様の暮らしを支えてまいります。</p>
          <p>当事業所では、身体介護や生活援助に加え、医療的ケアにも対応できる体制を整えております。たとえば、たんの吸引や経管栄養といった特定行為が必要なご利用者様にも、看護師や研修修了スタッフが連携して、安心してご利用いただけるサービスを提供いたします。</p>
          <p>何かお困りごとがございましたら、どうぞお気軽にご相談ください。</p>
        </div>
        <p className="text-xl font-semibold text-gray-800">代表 岡川 善恵</p>
      </section>

      {/* お客様へ */}
      <section className="max-w-screen-md mx-auto p-8 my-8 bg-white bg-opacity-90 rounded-xl shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">ご利用者様へ</h2>
        <p className="text-lg leading-relaxed px-6">
          ご利用者様とご家族の思いに寄り添いながら、「ここにお願いしてよかった」と感じていただけるよう、スタッフ一同誠実に努めてまいります。
        </p>
      </section>

      {/* 求職者へ */}
      <section className="max-w-screen-md mx-auto p-8 my-8 bg-white bg-opacity-90 rounded-xl shadow-lg text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">求職者様へ</h2>
        <div className="text-lg leading-relaxed mb-6 px-6 space-y-2">
          <p>私たちと一緒に働きませんか？</p>
          <p>訪問介護への想いを共有できる、明るく前向きな仲間を募集しています。</p>
        </div>
        <div className="text-center mb-6">
          <a
            href="mailto:nagomin0424@gmail.com"
            className="inline-block bg-yellow-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition text-lg font-semibold"
          >
            採用についてお問い合わせ
          </a>
        </div>
        <div className="mt-6">
          <img src="/images/beauty_20250614125415.jpg" alt="社員の雰囲気" className="w-64 mx-auto rounded-lg shadow-md" />
        </div>
      </section>

      {/* 基本情報 */}
      <section className="max-w-screen-md mx-auto p-8 my-8 bg-white bg-opacity-90 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">基本情報</h2>
        <div className="space-y-3 text-lg">
          <p>〒651-0064 兵庫県神戸市中央区大日通2-4-9</p>
          <p>TEL・FAX：078-891-8333</p>
        </div>
      </section>

      {/* 事業情報 */}
      <section className="max-w-screen-md mx-auto p-8 my-8 bg-white bg-opacity-90 rounded-xl shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">事業情報</h2>
        <ul className="text-left inline-block space-y-2 text-lg">
          <li>• 介護サービス - 訪問介護</li>
          <li>• 障害福祉サービス - 喀痰吸引、胃ろう、腸ろう、経鼻経管栄養、居宅介護、重度訪問介護</li>
          <li>• 自費サービス - 通院・院内介助</li>
        </ul>
        <div className="mt-6 space-y-2 text-lg text-gray-700">
          <p>介護事業所番号：2875104529</p>
          <p>障害福祉サービス事業所番号：2815102534</p>
          <p>登録特定行為事業者登録番号：282600014A</p>
        </div>
      </section>

      {/* フッター */}
      <footer className="text-center py-8 text-base text-gray-600">
        © 2025 ケアステーションなごみん | なごやかな暮らしのお手伝い
      </footer>
    </div>
  );
}

export default App;

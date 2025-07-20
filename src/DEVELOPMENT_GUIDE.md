# ケアステーションなごみん ホームページ 開発ガイド

## 概要

このドキュメントは、ケアステーションなごみんのホームページをフルスクラッチで再現するための完全な開発ガイドです。エンジニア2年目の方を対象に、要件定義から実装完了まで段階的に説明します。

---

## 1. プロジェクト要件定義

### 1.1 ビジネス要件

**事業概要**
- 事業名: ケアステーション なごみん
- 業種: 訪問介護サービス
- 所在地: 兵庫県神戸市中央区大日通2-4-9
- 連絡先: TEL・FAX 078-891-8333

**ターゲットユーザー**
1. **ご利用者様・ご家族** - サービス内容の理解、信頼性の確認
2. **求職者** - 採用情報の確認、応募への導線
3. **関係者** - 事業所情報の確認

**サイトの目的**
- サービスの信頼性と温かさを伝える
- 採用につながる問い合わせを促進
- 事業所の基本情報を正確に伝達

### 1.2 機能要件

**必須機能**
1. **ヘッダー・ロゴ表示**
   - 会社写真の表示
   - サービス名とキャッチフレーズ

2. **代表メッセージセクション**
   - 代表者写真の表示
   - メッセージ本文（4段落構成）
   - 代表者名の表示

3. **ご利用者様向けメッセージ**
   - 簡潔なサービス紹介文

4. **求職者向けセクション**
   - 採用メッセージ
   - 採用問い合わせボタン（メール連携）

5. **基本情報セクション**
   - 住所、電話番号の表示

6. **事業情報セクション**
   - サービス一覧（箇条書き）
   - 各種事業所番号

7. **フッター**
   - コピーライト表示

### 1.3 非機能要件

**デザイン要件**
- 親しみやすく温かみのあるデザイン
- 高齢者にも見やすい文字サイズとコントラスト
- 黄色系の配色で安心感を演出

**パフォーマンス要件**
- 初回読み込み時間: 3秒以内
- レスポンシブ対応（モバイル・タブレット・デスクトップ）

**アクセシビリティ要件**
- WCAG 2.1 AA レベル準拠
- スクリーンリーダー対応

---

## 2. 技術仕様

### 2.1 技術スタック

```
フロントエンド:
├── React 18.x (UI ライブラリ)
├── TypeScript 5.x (型安全性)
├── Vite 5.x (ビルドツール・開発サーバー)
└── Tailwind CSS 3.x (CSSフレームワーク)

開発ツール:
├── ESLint (コード品質)
├── PostCSS (CSS処理)
└── Git (バージョン管理)
```

### 2.2 ディレクトリ構造

```
project-root/
├── public/
│   ├── vite.svg
│   └── images/
│       ├── ceo-photo.jpg          # 代表者写真
│       └── company-photo.jpg      # 会社写真
├── src/
│   ├── App.tsx                    # メインコンポーネント
│   ├── App.css                    # アプリケーション固有CSS
│   ├── index.css                  # グローバルCSS・Tailwind
│   ├── main.tsx                   # エントリーポイント
│   ├── vite-env.d.ts             # Vite型定義
│   ├── assets/                    # 静的アセット
│   └── images/                    # 画像ファイル（バックアップ）
├── index.html                     # HTMLテンプレート
├── package.json                   # 依存関係定義
├── vite.config.ts                # Vite設定
├── tailwind.config.js            # Tailwind設定
├── tsconfig.json                  # TypeScript設定
└── eslint.config.js              # ESLint設定
```

### 2.3 デザイン仕様

**カラーパレット**
```css
主要色:
- 背景ベース: bg-yellow-50 (#fefce8)
- ヘッダー背景: bg-yellow-200 (#fef3c7)
- ボタン: bg-yellow-500 (#eab308)
- ボタンホバー: bg-yellow-600 (#ca8a04)
- テキスト: text-gray-800 (#1f2937)
- テキスト薄: text-gray-700 (#374151)
- テキスト最薄: text-gray-600 (#4b5563)
- カードBackground: bg-white (#ffffff)
```

**タイポグラフィ**
```css
フォント:
- メインフォント: font-comic-sans (Comic Sans MS)
- ヘッダー: text-4xl font-bold
- セクションタイトル: text-3xl font-bold / text-2xl font-bold
- 本文: text-lg / text-xl
- 代表者名: text-xl font-semibold
```

**レイアウト**
```css
コンテナ:
- 最大幅: max-w-screen-md
- センタリング: mx-auto
- パディング: p-8
- マージン: my-8

カード:
- 背景: bg-white bg-opacity-90
- 角丸: rounded-xl
- シャドウ: shadow-lg
```

---

## 3. 環境構築手順

### 3.1 前提条件

```bash
# 必要なソフトウェア
Node.js: v18.0.0以上
npm: v8.0.0以上
Git: v2.30.0以上

# バージョン確認コマンド
node --version
npm --version
git --version
```

### 3.2 プロジェクト初期化

```bash
# 1. Vite + React + TypeScript プロジェクト作成
npm create vite@latest nagomin-homepage -- --template react-ts
cd nagomin-homepage

# 2. 依存関係インストール
npm install

# 3. Tailwind CSS セットアップ
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 4. 開発サーバー起動確認
npm run dev
```

### 3.3 Tailwind CSS 設定

**tailwind.config.js**
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'comic-sans': ['Comic Sans MS', 'cursive'],
      },
    },
  },
  plugins: [],
}
```

**src/index.css**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 4. 実装手順

### 4.1 ステップ1: プロジェクトセットアップ

**作業内容**
1. 初期ファイルのクリーンアップ
2. 必要なディレクトリ作成
3. 画像ファイルの準備

**実装コード**

```bash
# ディレクトリ作成
mkdir -p public/images src/images

# 不要ファイル削除（オプション）
rm src/App.css の既存スタイル（残す場合は後で上書き）
```

### 4.2 ステップ2: メインコンポーネント構造の作成

**App.tsx の基本構造**
```typescript
function App() {
  return (
    <div className="font-comic-sans bg-yellow-50 bg-opacity-80 text-gray-800 min-h-screen">
      {/* ヘッダー・ロゴ */}
      <header>
        {/* 実装内容をここに */}
      </header>

      {/* 代表メッセージ */}
      <section>
        {/* 実装内容をここに */}
      </section>

      {/* その他のセクション */}
      
      {/* フッター */}
      <footer>
        {/* 実装内容をここに */}
      </footer>
    </div>
  );
}

export default App;
```

### 4.3 ステップ3: ヘッダーセクションの実装

**実装目標**
- 会社写真の表示
- サービス名の表示
- キャッチフレーズの表示

**実装コード**
```typescript
<header className="py-12 text-center bg-yellow-200 bg-opacity-60">
  <img 
    src="/images/company-photo.jpg" 
    alt="なごみロゴ" 
    className="w-40 mx-auto rounded-lg shadow-lg mb-6" 
  />
  <h1 className="text-4xl font-bold mt-6 text-gray-900">
    ケアステーション なごみん
  </h1>
  <p className="text-xl text-gray-700 mt-4 px-6">
    あなたの笑顔と安心を支える<br />
    訪問介護サービス
  </p>
</header>
```

**重要ポイント**
- `py-12`: 上下パディング（3rem）
- `text-center`: テキスト中央揃え
- `bg-yellow-200 bg-opacity-60`: 黄色背景 + 透明度
- `w-40`: 画像幅（10rem = 160px）
- `mx-auto`: 水平方向中央揃え
- `rounded-lg`: 角丸
- `shadow-lg`: 大きめのシャドウ

### 4.4 ステップ4: 代表メッセージセクションの実装

**実装目標**
- カード形式のレイアウト
- 代表者写真の円形表示
- メッセージ本文の段落分け
- 代表者名の表示

**実装コード**
```typescript
<section className="max-w-screen-md mx-auto p-8 my-8 bg-white bg-opacity-90 rounded-xl shadow-lg text-center">
  <img 
    src="/images/ceo-photo.jpg" 
    alt="代表写真" 
    className="w-40 h-40 object-cover rounded-full mx-auto mb-6 shadow-md" 
  />
  <h2 className="text-3xl font-bold mb-6 text-gray-900">
    代表からのメッセージ
  </h2>
  <div className="text-lg leading-relaxed mb-6 px-4 space-y-4">
    <p>このたびは、当事業所のホームページをご覧いただき、誠にありがとうございます。</p>
    <p>私たちは、「住み慣れたご自宅で安心して、自分らしく暮らし続けられるように」を理念とし、訪問介護サービスを通じて地域の皆様の暮らしを支えてまいります。</p>
    <p>当事業所では、身体介護や生活援助に加え、医療的ケアにも対応できる体制を整えております。たとえば、たんの吸引や経管栄養といった特定行為が必要なご利用者様にも、看護師や研修修了スタッフが連携して、安心してご利用いただけるサービスを提供いたします。</p>
    <p>何かお困りごとがございましたら、どうぞお気軽にご相談ください。</p>
  </div>
  <p className="text-xl font-semibold text-gray-800">代表 岡川 善恵</p>
</section>
```

**重要ポイント**
- `max-w-screen-md`: 最大幅制限（768px）
- `mx-auto`: 水平中央揃え
- `p-8`: パディング（2rem）
- `my-8`: 上下マージン（2rem）
- `bg-white bg-opacity-90`: 白背景 + 透明度
- `rounded-xl`: 大きな角丸
- `w-40 h-40`: 正方形サイズ
- `object-cover`: 画像の縦横比保持
- `rounded-full`: 完全な円形
- `space-y-4`: 子要素間の縦方向スペース

### 4.5 ステップ5: ご利用者様向けセクションの実装

**実装コード**
```typescript
<section className="max-w-screen-md mx-auto p-8 my-8 bg-white bg-opacity-90 rounded-xl shadow-lg text-center">
  <h2 className="text-3xl font-bold mb-6 text-gray-900">ご利用者様へ</h2>
  <p className="text-lg leading-relaxed px-6">
    ご利用者様とご家族の思いに寄り添いながら、「ここにお願いしてよかった」と感じていただけるよう、スタッフ一同誠実に努めてまいります。
  </p>
</section>
```

### 4.6 ステップ6: 求職者向けセクションの実装

**実装目標**
- 採用メッセージの表示
- メール問い合わせボタンの実装
- ホバー効果の追加

**実装コード**
```typescript
<section className="max-w-screen-md mx-auto p-8 my-8 bg-white bg-opacity-90 rounded-xl shadow-lg text-center">
  <h2 className="text-3xl font-bold mb-6 text-gray-900">求職者様へ</h2>
  <div className="text-lg leading-relaxed mb-6 px-6 space-y-2">
    <p>私たちと一緒に働きませんか？</p>
    <p>訪問介護への想いを共有できる、明るく前向きな仲間を募集しています。</p>
  </div>
  <div className="text-center">
    <a
      href="mailto:nagomin0424@gmail.com"
      className="inline-block bg-yellow-500 text-white py-3 px-8 rounded-full shadow-lg hover:bg-yellow-600 transition text-lg font-semibold"
    >
      採用についてお問い合わせ
    </a>
  </div>
</section>
```

**重要ポイント**
- `href="mailto:..."`: メールクライアント起動
- `inline-block`: インラインブロック要素
- `py-3 px-8`: パディング（縦0.75rem、横2rem）
- `rounded-full`: 完全な角丸（ピル形状）
- `hover:bg-yellow-600`: ホバー時の背景色変更
- `transition`: CSS トランジション効果

### 4.7 ステップ7: 基本情報セクションの実装

**実装コード**
```typescript
<section className="max-w-screen-md mx-auto p-8 my-8 bg-white bg-opacity-90 rounded-xl shadow-lg text-center">
  <h2 className="text-2xl font-bold mb-6 text-gray-900">基本情報</h2>
  <div className="space-y-3 text-lg">
    <p>〒651-0064 兵庫県神戸市中央区大日通2-4-9</p>
    <p>TEL・FAX：078-891-8333</p>
  </div>
</section>
```

### 4.8 ステップ8: 事業情報セクションの実装

**実装目標**
- サービス一覧の箇条書き表示
- 事業所番号の表示
- 左揃えリストの中央配置

**実装コード**
```typescript
<section className="max-w-screen-md mx-auto p-8 my-8 bg-white bg-opacity-90 rounded-xl shadow-lg text-center">
  <h2 className="text-2xl font-bold mb-6 text-gray-900">事業情報</h2>
  <ul className="text-left inline-block space-y-2 text-lg">
    <li>• 介護サービス - 訪問介護</li>
    <li>• 障害福祉サービス - 喀痰吸引、胃ろう、腸ろう、経鼻経管栄養、居宅介護、重度訪問介護</li>
    <li>• 自費サービス - 通院・院内介助</li>
  </ul>
  <div className="mt-6 space-y-2 text-base text-gray-700">
    <p>介護事業所番号：2875104529</p>
    <p>障害福祉サービス事業所番号：2815102534</p>
    <p>登録特定行為事業者登録番号：282600014A</p>
  </div>
</section>
```

**重要ポイント**
- `text-left`: 左揃え
- `inline-block`: インラインブロック（中央配置可能）
- `text-base`: 基本フォントサイズ（1rem）

### 4.9 ステップ9: フッターの実装

**実装コード**
```typescript
<footer className="text-center py-8 text-base text-gray-600">
  © 2025 ケアステーションなごみん | なごやかな暮らしのお手伝い
</footer>
```

---

## 5. テストと品質管理

### 5.1 動作確認項目

**基本動作確認**
- [ ] 開発サーバーが正常に起動する
- [ ] 全てのセクションが表示される
- [ ] 画像が正しく表示される
- [ ] メール問い合わせボタンが動作する

**レスポンシブ確認**
- [ ] デスクトップ（1200px以上）
- [ ] タブレット（768px-1199px）
- [ ] スマートフォン（767px以下）

**ブラウザ確認**
- [ ] Chrome（最新版）
- [ ] Firefox（最新版）
- [ ] Safari（最新版）
- [ ] Edge（最新版）

### 5.2 パフォーマンス最適化

**画像最適化**
```bash
# 画像サイズ確認
ls -la public/images/

# 推奨仕様
ceo-photo.jpg: 400x400px以下、100KB以下
company-photo.jpg: 640x480px以下、150KB以下
```

**バンドルサイズ確認**
```bash
# ビルドサイズ確認
npm run build
ls -la dist/assets/
```

---

## 6. デプロイメント

### 6.1 本番ビルド

```bash
# 本番用ビルド
npm run build

# ビルド結果確認
npm run preview
```

### 6.2 静的ホスティング例

**Vercel デプロイ**
```bash
# Vercel CLI インストール
npm i -g vercel

# デプロイ
vercel --prod
```

**Netlify デプロイ**
```bash
# Netlify CLI インストール
npm i -g netlify-cli

# デプロイ
netlify deploy --prod --dir=dist
```

---

## 7. よくある課題と解決方法

### 7.1 開発時の課題

**問題**: Comic Sansフォントが適用されない
**解決**: システムにフォントがインストールされているか確認、代替フォントの設定

**問題**: 画像が表示されない
**解決**: パスの確認（/images/ から始まる絶対パス）、ファイル存在確認

**問題**: Tailwind CSSが効かない
**解決**: postcss.config.js、tailwind.config.js の設定確認

### 7.2 スタイリングの課題

**問題**: レスポンシブ対応
**解決**: Tailwind CSSのブレークポイント活用（sm:, md:, lg:, xl:）

**問題**: 色の調整
**解決**: Tailwind CSSのカラーパレット確認、カスタムカラーの定義

---

## 8. 発展課題

### 8.1 機能拡張

1. **フォーム機能追加**
   - お問い合わせフォーム
   - バリデーション機能

2. **アニメーション追加**
   - スクロール連動アニメーション
   - ホバーエフェクト強化

3. **SEO対応**
   - メタタグ設定
   - 構造化データ実装

### 8.2 技術的改善

1. **コンポーネント分割**
   - セクション毎のコンポーネント化
   - 再利用可能な部品作成

2. **状態管理導入**
   - React Context API
   - 外部ライブラリ（Zustand等）

3. **テスト導入**
   - ユニットテスト（Vitest）
   - E2Eテスト（Playwright）

---

## 9. 参考資料

### 9.1 公式ドキュメント

- [React 公式ドキュメント](https://react.dev/)
- [TypeScript 公式ドキュメント](https://www.typescriptlang.org/docs/)
- [Vite 公式ドキュメント](https://vitejs.dev/)
- [Tailwind CSS 公式ドキュメント](https://tailwindcss.com/docs)

### 9.2 学習リソース

- [React Tutorial](https://react.dev/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Tailwind CSS Components](https://tailwindui.com/components)

---

## 10. チェックリスト

### 10.1 実装完了チェック

- [ ] プロジェクト初期化完了
- [ ] 依存関係インストール完了
- [ ] Tailwind CSS設定完了
- [ ] ヘッダーセクション実装完了
- [ ] 代表メッセージセクション実装完了
- [ ] ご利用者様セクション実装完了
- [ ] 求職者セクション実装完了
- [ ] 基本情報セクション実装完了
- [ ] 事業情報セクション実装完了
- [ ] フッター実装完了
- [ ] 画像ファイル配置完了
- [ ] レスポンシブ対応確認完了
- [ ] ブラウザ動作確認完了
- [ ] 本番ビルド確認完了

### 10.2 品質チェック

- [ ] コードフォーマット統一
- [ ] TypeScript エラー解消
- [ ] ESLint エラー解消
- [ ] パフォーマンス最適化
- [ ] アクセシビリティ確認

このガイドを参考に、段階的に実装を進めることで、完全に同じホームページを再現できます。各ステップで動作確認を行い、問題があれば前のステップに戻って確認してください。

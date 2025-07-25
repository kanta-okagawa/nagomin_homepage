# ケアステーションなごみん ホームページ

兵庫県神戸市を拠点とする訪問介護サービス「ケアステーションなごみん」の公式ホームページです。

## 概要

このプロジェクトは、ケアステーション なごみんの訪問介護サービスを紹介するWebサイトです。ご利用者様とご家族、そして求職者の方々に向けた情報を提供しています。

## 主な機能

- **代表メッセージ**: 代表からのご挨拶とサービス理念
- **サービス紹介**: 訪問介護、障害福祉サービス、自費サービスの詳細
- **採用情報**: 求職者向けの採用お問い合わせ
- **基本情報**: 事業所の所在地、連絡先、事業所番号

## 技術スタック

- **フロントエンド**: React 18 + TypeScript
- **ビルドツール**: Vite
- **スタイリング**: Tailwind CSS
- **フォント**: Comic Sans（親しみやすさを重視）
- **配色**: 黄色系（温かみのある印象）

## 開発環境のセットアップ

### 必要な環境

- Node.js (推奨: v18以上)
- npm または yarn

### インストールと起動

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview
```

## プロジェクト構造

```
src/
├── App.tsx           # メインコンポーネント
├── App.css          # アプリケーション共通スタイル
├── index.css        # グローバルスタイル（Tailwind CSS）
├── main.tsx         # エントリーポイント
├── assets/          # 静的アセット
├── images/          # 画像ファイル
└── temp_images/     # 一時的な画像ファイル

public/
└── images/          # 公開画像ファイル
    ├── ceo-photo.jpg      # 代表写真
    └── company-photo.jpg  # 会社写真
```

## 連絡先

**ケアステーション なごみん**
- 住所: 〒651-0064 兵庫県神戸市中央区大日通2-4-9
- TEL・FAX: 078-891-8333
- Email: nagomin0424@gmail.com

## ライセンス

© 2025 ケアステーションなごみん | なごやかな暮らしのお手伝い

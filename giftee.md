# 株式会社giftee(正社員: 2018/04/11 ~ )
## SaaSシステム開発
- 時期: 2018/04 ~ 
- 体制: 6人
- 役割: サーバーサイド・フロントエンド
- 技術
  - 言語
    - Ruby on Rails
    - AngularJS（勘弁してほしい）
    - CoffeeScript (^ω^ ;)
  - ミドルウェア: 
    - MySQL
    - Redis
    - nginx
    - [Sidekiq](https://github.com/mperham/sidekiq)
  - テストツール
    - gatling
      - [slide](https://speakerdeck.com/mochisuna/load-test-with-gatling)
    - selenium
  - ライブラリ等
    - unicorn
    - slim-rails
    - whenever
    - gon
    - faraday
    - annotate
    - rack-dev-mark
    - letter_opener_web
  - CI/CD
    - capistrano
    - CircleCI
  - インスタンス構成
    - ansible
- 担当箇所、凝った箇所、悩んだ箇所など
  - GitHub運用改善
    - ブランチ運用が非効率だったので運用改善
      - issue / PRのテンプレート作成
      - マージの承認フロー改善
      - ブランチ運用提案
      - [社内外で記事にしました](https://qiita.com/mochisuna/items/8cdab33f2f903817cc92)
  - 作成したチケットのQAをseleniumで自動化
    - なんで手作業してたんだろ枠
  - チケット・ストア管理画面（CMS）の改善
    - [いくつかのストア](https://31ice.e-gift.co)の販売画面が改善されました
  - 新規協力会社連携
    - 特殊チケット生成
    - POS・API連携
    - 集計自動化
  - CI/CD効率化
    - CircleCI導入
    - なんで手作業してたんだろ枠
  - 負荷試験
    - シナリオ作成
    - ドキュメントまとめ
    - [社外勉強会で登壇](https://speakerdeck.com/mochisuna/giftee-load-test-night-01-maruta)

## 個人開発

### gifteeリアクションアワード
会社内で一番話題になった投稿を集計しました
[github](https://github.com/mochisuna/slack-reaction-award)
[slide](https://speakerdeck.com/mochisuna/techbash-slack-reaction-award)

### 自動化・定期実行
  - GASによる課題一覧取得とslackへの通知
    - [github（デモ用）](https://github.com/mochisuna/clasp-test)
    - [speakerdeck](https://speakerdeck.com/mochisuna/techbash-clasp)
  
  - trelloスケジュールbot
    - trelloで管理している特殊対応・キャンペーン環境について、キャンペーン開始時にslackに通知するBotを作成しました。
    - [github](https://github.com/mochisuna/trello-schedule-checker)
    - [slide](https://speakerdeck.com/mochisuna/serverlessframework-trello)
## インターンメンター
- インターン世に対するメンターを8回引き受けました
- すごい先輩アピールとして同じ条件でLINEBot開発をしました
  - [slide1](https://speakerdeck.com/mochisuna/surprise-lt-for-intern-vol-1)
  - [slide2](https://speakerdeck.com/mochisuna/surprise-lt-for-intern-vol-2)

## 登壇
- 社内LT会
  - 負荷試験
  - clasp
  - slackAPI
  - serverlessFramework
  - Docker
  - Vue.js
- 社外イベント
  - [負荷対策 Night #1](https://giftee.connpass.com/event/116841/)
  - [Vue.js Night](https://giftee.connpass.com/event/150145/)
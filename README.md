# 職務経歴書

<img src="./img/kappa.png" width="100">

主にサーバーサイドの開発をしています。

|Content||
|---|-----|
|Name|丸田拓和 / もちすな|
|GitHub|[mochisuna \(Maruta Hirokazu\)](https://github.com/mochisuna)|
|Qiita|[mochisuna \(Maruta Hirokazu\) \- Qiita](https://qiita.com/mochisuna)|
|Twitter|[@mochi_suna](https://twitter.com/mochi_suna)|
|mail|hirokazu.maruta@gmail.com|

## 職務経歴

### 株式会社DMM.comラボ(正社員: 2015/04/01 ~ 2018/04/10)
#### ユーザー系API開発
- 時期: 2015/07 ~ 2016/05
- 役割: サーバーサイドエンジニア
- 体制: 9 ~ 11人
- 技術
  - 言語
    - Java（フレームワークは[Spring](http://spring.io/)）
    - PHP（テスト用。記憶がだいぶ曖昧だけどPHPUnitだったはず）
  - ミドルウェア: MySQL、Couchbase、RabbitMQ
  - ライブラリ等
    - [SLF4J](https://www.slf4j.org/)
    - [Log4j](https://logging.apache.org/log4j/2.x/)
    - [Mockito](http://site.mockito.org/)
    - [Junit](https://junit.org/junit5/)
    - [Tomcat](http://tomcat.apache.org/)
    - [Jackson](http://jackson.codehaus.org/)
  - CI/CD
    - Jenkins
- 担当箇所、凝った箇所、悩んだ箇所など
  - ユーザー情報系API（登録/削除/更新）
    - 人勢初のチーム開発（しかも大人数）なのでとても緊張した記憶
    - 会員情報はクリティカルに重要な部分なのでチームの人に相談しながら作った
    - API開発の知識がなさすぎてとても苦戦した記憶
  - Jenkins
    - 職人芸・・・
  - テスト
    - ひたすら品質保証
    - 型のない言語が苦手になった遠因
#### 通知配信システム開発（非クラウド範囲）
- 時期: 2016/05 ~ 20187/09
- 体制: 4 ~ 8人（必要に応じて増えたり減ったり）
- 役割
  - サーバーサイドエンジニア
  - インフラエンジニア
  - 一部フロントエンジニア
- 技術
  - 言語
    - Java（[Spring](http://spring.io/)）
    - Go（[echo](https://echo.labstack.com/)）
    - Node.js（[React](https://reactjs.org/)）
  - ミドルウェア
    - MySQL
    - [Cassandra](http://cassandra.apache.org/)
    - [ZooKeeper](https://zookeeper.apache.org/)
    - [Kafka](https://kafka.apache.org/)
  - CI/CD
    - CircleCI
    - [Capistrano](https://capistranorb.com/)
    - [supervisor](http://supervisord.org/)
  - ライブラリ等
    - java
      - [SLF4J](https://www.slf4j.org/)
      - [Log4j](https://logging.apache.org/log4j/2.x/)
      - [Mockito](http://site.mockito.org/)
      - [Junit](https://junit.org/junit5/)
      - [Tomcat](http://tomcat.apache.org/)
      - [Jackson](http://jackson.codehaus.org/)
    - go
      - [xid](https://www.npmjs.com/package/uuid)
      - [toml](https://github.com/BurntSushi/toml)
    - node
      - [mocha](https://mochajs.org/)
      - [mocha](https://mochajs.org/)
      - [chai](http://chaijs.com/)
      - [sinon](http://sinonjs.org/)
- 担当箇所、凝った箇所、悩んだ箇所など
  - とにかく知らない技術に沢山触れることができた
    - 先生とも呼べるリーダーの下でトライアルアンドエラーを繰り返すことができた
  - Reactのライフサイクルに乗らない処理を書いてしまい自分の首を絞めまくった
  - 部分的にjava製システム、ミドルウェア経由でgo製システムに渡すというトライができた
  - DBで`なんでも入れられるカラム`を作ると障害発生時に追跡するのがとても大変だという知見を得られた
  - goで開発する場合、interfaceありきで作るよりも必要な機能を包含するinterfaceを用意するという形の方がやりやすいという知見を得られた
#### 通知配信システム開発（クラウド範囲）
- 時期: 2017/09 ~ 2018/04
- 体制: 5 ~ 7人（必要に応じて増えたり減ったり）
- 役割
  - サーバーサイドエンジニア
  - クラウドインフラエンジニア
- 技術
  - 言語
    - Go（[gorillatoolkit](http://www.gorillatoolkit.org/)）
    - Node.js（[co](https://github.com/tj/co)）
  - ライブラリ等
    - go
      - [aws-sdk-go](https://github.com/aws/aws-sdk-go)
      - [toml](https://github.com/BurntSushi/toml)
      - [xid](https://github.com/rs/xid)
      - [negroni](https://github.com/urfave/negroni)
      - [godo](https://gopkg.in/godo.v2)
      - [gorp](https://gopkg.in/gorp.v2)
      - [ozzo-validation](github.com/go-ozzo/ozzo-validation)
      - [minio](https://www.minio.io/)
    - node
      - [yarn](https://yarnpkg.com/ja/)
      - [node-fetch](https://www.npmjs.com/package/node-fetch)
      - [log4js](https://www.npmjs.com/package/log4js)
      - [knex](https://knexjs.org/)
      - [isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)
      - [co-fs](https://www.npmjs.com/package/co-fs)
  - AWS
    - CloudFormation
    - VPC
    - EC2（ElasticBeanstalk）
    - ECS（Fargate）
    - ElastiCache
    - ElasticSearch
    - CloudWatch Event
    - Lambda
    - DynamoDB
    - S3
    - RDS
    - CloudFront
    - SQS
  - 担当箇所、凝った箇所、悩んだ箇所など
    - AWSクッッッッッッッッッッッソ便利
      - 最初EC2インスタンスで立てていたものをコンテナに切り替えるのがものすごく楽だった
      - Lambdaが便利すぎる
      - 暖気申請をしないで負荷試験をしてエラーになりまくったのは良い思い出
		- Node.jsが難しかった
      - Lambdaの対応状況に依存しco routineを採用
      - promiseよりは見やすいが、慣れが必要だった
    - 初めてRESTfulなAPIを作っているという実感が持てた
    - goの標準ライブラリが強力だと感じた
      - httpパッケージとか
      - 階層型のパッケージ分離をしていた
        - 当時は「これはやりやすい！」と思っていたが、もう少し切り方があったと反省
        - negroniでミドルウェアをリレーする方針はかなり良いと思った
    - デプロイが割とゴリ押しだった
      - CircleCIでかなり複雑なやり方をしてしまった
#### メンター(2016/05 ~ 2018/04)
- 後輩のメンター業務（2年連続）

## 学生時代の研究経歴
おまけ

### 東京工業高等専門学校（2006 ~ 2011）
- [エージェントの行動獲得過程を効果的に提示するデモシステムの開発とその評価](https://jglobal.jst.go.jp/detail?from=API&JGLOBAL_ID=201102290803504502)
  - 成人直前の若者時代に初めて書いた論文です。
  - 今考えると出来が色々とアレすぎて、もう振り返れないなぁ・・・

### 明治大学（2011 ~ 2013）
- [TSCMにおける計算量2^{O(k log k )}・n^O(1)アルゴリズムの補題の証明](http://www.th.cs.meiji.ac.jp/assets/researches/2012/maruta/research.pdf)
  - [A linear edge kernel for two-layer crossing minimization](http://link.springer.com/chapter/10.1007%2F978-3-642-38768-5_41)の論文にて、アルゴリズムの実現をするにあたり必要な補題がいくつか出てきたので、その補題を証明する論文を書きました

### 明治大学大学院（2013 ~ 2015）
[グラフの交差数最小2層描画問題に対する分枝限定アルゴリズム](http://www.th.cs.meiji.ac.jp/assets/researches/2014/maruta/thesis.pdf)
- グラフレイアウトの分野で分枝限定法を使って様々なグラフへの速度などを計測しました。
- 同じ研究室の人たちと議論しながら進めたのは楽しかった。
- でも、もう少し頑張れたなぁと反省

## 活動

### 言語・プラットフォーム経験
- サーバーサイド
	- java
	- シェルスクリプト
  - go
  - AWS
- ウェブフロント
	- React
- ミドルウェア
  - Couchbase
  - Cassandra
  - Redis
  - RabbitMQ
  - MySQL
  - ZooKeeper
  - Kafka
  - PostgreSQL
- モニタリング
  - Zabbix
  - Kibana
- その他
  - CircleCI
  - Supervisor
  - digdag
  - Terraform

### 登壇
- [Talk Live in Summer 2015 at DMM.com Labo
](https://techplay.jp/event/565755)
  - DMM会場枠
  - [「DMM.com Laboに入社してみた 〜学生時代に”学んで良かったこと”と”学んでおけば良かったこと”〜」](https://www.slideshare.net/DMMlabo/dmm-52281664)
- [#ssmjp 2016/04](https://ssm.pkan.org/ssmjp%E3%81%BE%E3%81%A8%E3%82%81/2016%E5%B9%B404%E6%9C%88%E3%81%AEssmjp%E3%81%BE%E3%81%A8%E3%82%81/)
  - DMM会場枠
  - 「botに業務記録から日報を書かせた話」
- 社内外LT会
  - AWSの方を招いてのLT会
  - 「通知配信プラットフォームについて」
- 社内発表
  - 「アサーティブ・コミュニケーション」
### 受賞
- 明治大学プログラミングコンテスト - [特別賞](http://www.cs.meiji.ac.jp/news/news-j-2011.html)
- 若手エンジニアのプレゼン力を磨け！DMM.comラボ×さくらが合同研修 - [優勝](http://ascii.jp/elem/000/001/437/1437601/)

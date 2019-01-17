# Hello Express

## Express の入門

- `/todo` で`router/todo.js`に定義した連想配列を json で返す

## 実行

```bash
$ git clone https://github.com/JM8KRG/hello-express.git
$ cd hello-express
$ cp .env.example .env
$ vi .env (set your db)
$ npm install
$ npm start
```

## ディレクトリ構造

```
.
├── 〜〜〜 省略 〜〜〜
├── routes
│   ├── index.js
│   ├── todo.js
│   └── users.js
└── views
　　 ├── error.ejs
　　 └── index.ejs
```

const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

// 静的ファイルを提供するディレクトリを指定
app.use(express.static("public"));

// ルートパスにアクセスした際の処理
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// APIエンドポイント
app.get("/api/test", async (req, res) => {
    try {
        const apiResponse = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await apiResponse.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: "外部APIとの接続に失敗しました" });
    }
});

// サーバー起動
app.listen(port, () => {
    console.log(`アプリが http://localhost:${port} で起動しました`);
});

document.getElementById("fetchData").addEventListener("click", function() {
    fetch("/api/test")  // サーバーのAPIエンドポイント
        .then(response => response.json())
        .then(data => {
            document.getElementById("responseData").innerText = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            document.getElementById("responseData").innerText = "エラーが発生しました: " + error;
        });
});
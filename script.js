function generateTemplate() {
    const name = document.getElementById('onamae').value;
    const planning = document.getElementById('planning').value;
    const forum = document.getElementById('forum').value;
    const time = document.getElementById('time').value;
    const version = document.getElementById('version').value;
    const isCheckNormal = document.getElementById('normal').checked;
    const isCheckFlat = document.getElementById('flat').checked;
    const isCheckAmplified = document.getElementById('amplified').checked;
    const isCheckVoid = document.getElementById('void').checked;
    const isCheckOther = document.getElementById('etc').checked;
    const other = document.getElementById('other').value;
    const isOp = document.getElementById('op').checked;
    const op = document.getElementById('opuser').value;
    const isWhitelist = document.getElementById('whitelist').checked;
    const whitelist = document.getElementById('whitelistuser').value;
    const isPanel = document.getElementById('panel').checked;
    const panel = document.getElementById('paneluser').value;
    const plugin = document.getElementById('plugin').value;
    const comment = document.getElementById('comment').value;

    let error = false;
    let errorMessage = "";

    if (name.length == 0) {
        errorMessage += "ユーザー名は必須項目です．";
        error = true;
    }

    if (planning.length == 0) {
        if (errorMessage.length != 0) {
            errorMessage += "\n";
        }
        errorMessage += "企画名は必須項目です．";
        error = true;
    }

    if (version.length == 0) {
        if (errorMessage.length != 0) {
            errorMessage += "\n";
        }
        errorMessage += "サーバーバージョンは必須項目です．";
        error = true;
    }

    if (!isCheckNormal && !isCheckFlat && !isCheckAmplified && !isCheckVoid && !isCheckOther) {
        if (errorMessage.length != 0) {
            errorMessage += "\n";
        }
        errorMessage += "ワールドタイプを選択してください．";
        error = true;
    }else if (isCheckOther && other.length == 0){
        if (errorMessage.length != 0) {
            errorMessage += "\n";
        }
        errorMessage += "配布ワールドの種類またはURLを入力してください．";
        error = true;
    }

    if (isOp && op.length == 0) {
        if (errorMessage.length != 0) {
            errorMessage += "\n";
        }
        errorMessage += 'OPのユーザー名を入力してください．';
        error = true;
    }

    if (isWhitelist && whitelist.length == 0) {
        if (errorMessage.length != 0) {
            errorMessage += "\n";
        }
        errorMessage += 'ホワイトリストのユーザー名を入力してください．';
        error = true;
    }

    if (isPanel && panel.length == 0) {
        if (errorMessage.length != 0) {
            errorMessage += "\n";
        }
        errorMessage += 'パネルに追加するユーザーを入力してください．';
        error = true;
    }

    if (error) {
        alert(errorMessage);
        return;
    }

    let forumlink = "";
    if (forum.length > 0) {
        forumlink += forum;
    }else {
        forumlink += "なし";
    }

    let worldType = "";
    if (isCheckNormal) {
        worldType += "ノーマル";
    }

    if (isCheckFlat) {
        worldType += "フラット";
    }

    if (isCheckAmplified) {
        worldType += "アンプリファイド";
    }

    if (isCheckVoid) {
        worldType += "ボイド";
    }

    if (isCheckOther) {
        worldType += `配布ワールド`
    }

    const output = `### 単発鯖貸し出し申請書
    
申請者： [${name}]
    
1. 企画名：
    - [${planning}]
    
2. 企画発足フォーラムへのリンク：
    - [${forum}]
    
3. 申請期間：
    - [${time.replace("T", " ")}]
    
4. サーバーバージョン：
    - [${version}]
    
5. ワールドタイプ
    - [${worldType}]
    - [${other.length > 0 ? other : "指定なし"}]
    
6. OP
    - [${isOp ? "使用する" : "使用しない"}]
    - [${isOp ? op : "指定なし"}]
    
7. ホワイトリスト
    - [${isWhitelist ? "使用する" : "使用しない"}]
    - [${isWhitelist ? whitelist : "指定なし"}]
    
8. パネル
    - [${isPanel ? "使用する" : "使用しない"}]
    - [${isPanel ? panel : "指定なし"}]
    
9. プラグイン
    - [${plugin.length > 0 ? plugin : "指定なし"}]
    
10. コメントや質問
    - [${comment.length > 0 ? comment : "なし"}]`

    document.getElementById('output').value = output;
}

function copyToClipboard() {
    const outputTextarea = document.getElementById('output');
    outputTextarea.select();
    document.execCommand('copy');
}

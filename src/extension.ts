import * as vscode from "vscode";

/**
 * 拡張が有効化されたときに一度だけ実行される関数
 */
export function activate(context: vscode.ExtensionContext) {
  // TODO: 拡張機能名に各自で書き換える。
  console.log("拡張機能 [helloworld] が有効化されました。");

  // TODO: ここにコマンドを登録する。
  // コマンドは package.json の contributes.commands に記載されているものを指定する。
  context.subscriptions.push(
    vscode.commands.registerCommand("helloworld.helloworld", () => {
      vscode.window.showInformationMessage("Hello VS Code Extension!");
    }),
  );
}

export function deactivate() {}

import * as path from "path";
import { runTests } from "@vscode/test-electron";

async function main() {
  try {
    // 拡張のマニフェスト (package.json) があるディレクトリ。
    const extensionDevelopmentPath = path.resolve(__dirname, "../../");

    // テストスイートがあるディレクトリ。
    const extensionTestsPath = path.resolve(__dirname, "./suite/index");

    // VS Code をダウンロード＆起動して integration test を実行する。
    await runTests({
      extensionDevelopmentPath,
      extensionTestsPath,
    });
  } catch (err) {
    console.error("Failed to run tests", err);
    process.exit(1);
  }
}

main();

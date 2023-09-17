import * as path from "path";
import * as glob from "glob";
import * as Mocha from "mocha";

export function run(): Promise<void> {
  const mocha = new Mocha({
    ui: "tdd",
    color: true,
  });

  const testsRoot = path.resolve(__dirname, "..");

  return new Promise((resolve, reject) => {
    const testFileStream = new glob.Glob("**/**.test.js", { cwd: testsRoot }).stream();

    // テストファイルを全て読み込む。
    testFileStream.on("data", (file) => {
      mocha.addFile(path.resolve(testsRoot, file));
    });

    // 読み込みに失敗したら reject する。
    testFileStream.on("error", (err) => {
      reject(err);
    });

    // 読み込み終わったらテストを実行する。
    testFileStream.on("end", () => {
      try {
        mocha.run((failures) => {
          failures > 0 ? reject(new Error(`${failures} tests failed.`)) : resolve();
        });
      } catch (err) {
        console.error(err);
        reject(err);
      }
    });
  });
}

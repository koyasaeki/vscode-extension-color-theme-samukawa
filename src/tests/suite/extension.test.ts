import * as assert from "assert";
import { after, before } from "mocha";
import * as vscode from "vscode";
// import * as helloworld from '../../extension';

suite("Extension Test Suite", () => {
  before(() => {
    vscode.window.showInformationMessage("テストを開始します。");
  });

  after(() => {
    vscode.window.showInformationMessage("テストが完了しました。");
  });

  test("テストをここに書く。", () => {
    assert.equal(1 + 1, 2);
  });
});

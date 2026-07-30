const vscode = require('vscode');

function activate(context) {
    // 1. Command: Exclude Current Folder
    let excludeCmd = vscode.commands.registerCommand('clean-workspace.excludeCurrentFolder', async function () {
        const folder = getActiveFolderPath();
        if (!folder) {
            vscode.window.showWarningMessage('[Clean Workspace] No active folder or workspace found.');
            return;
        }
        const config = vscode.workspace.getConfiguration('clean-workspace');
        let list = config.get('excludedFolders') || [];
        if (!list.includes(folder)) {
            list.push(folder);
            await config.update('excludedFolders', list, vscode.ConfigurationTarget.Global);
            vscode.window.showInformationMessage(`[Clean Workspace] Added "${folder}" to Exclude list.`);
        } else {
            vscode.window.showInformationMessage(`[Clean Workspace] "${folder}" is already in Exclude list.`);
        }
    });

    // 2. Command: Include Current Folder
    let includeCmd = vscode.commands.registerCommand('clean-workspace.includeCurrentFolder', async function () {
        const folder = getActiveFolderPath();
        if (!folder) {
            vscode.window.showWarningMessage('[Clean Workspace] No active folder or workspace found.');
            return;
        }
        const config = vscode.workspace.getConfiguration('clean-workspace');
        let list = config.get('includedFolders') || [];
        if (!list.includes(folder)) {
            list.push(folder);
            await config.update('includedFolders', list, vscode.ConfigurationTarget.Global);
            vscode.window.showInformationMessage(`[Clean Workspace] Added "${folder}" to Include list.`);
        } else {
            vscode.window.showInformationMessage(`[Clean Workspace] "${folder}" is already in Include list.`);
        }
    });

    // 3. Command: Toggle Mode (Exclude <-> Include)
    let toggleCmd = vscode.commands.registerCommand('clean-workspace.toggleMode', async function () {
        const config = vscode.workspace.getConfiguration('clean-workspace');
        const currentMode = config.get('mode') || 'exclude';
        const newMode = currentMode === 'exclude' ? 'include' : 'exclude';
        await config.update('mode', newMode, vscode.ConfigurationTarget.Global);
        vscode.window.showInformationMessage(`[Clean Workspace] Switched mode to: ${newMode.toUpperCase()}`);
    });

    context.subscriptions.push(excludeCmd, includeCmd, toggleCmd);
}

function getActiveFolderPath() {
    const editor = vscode.window.activeTextEditor;
    if (editor && editor.document) {
        const workspaceFolder = vscode.workspace.getWorkspaceFolder(editor.document.uri);
        if (workspaceFolder) {
            return workspaceFolder.uri.fsPath;
        }
        return require('path').dirname(editor.document.uri.fsPath);
    }
    if (vscode.workspace.workspaceFolder && vscode.workspace.workspaceFolder.length > 0) {
        return vscode.workspace.workspaceFolder[0].uri.fsPath;
    }
    return null;
}

function deactivate() {}

module.exports = {
    activate,
    deactivate
};

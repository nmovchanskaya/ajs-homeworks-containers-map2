export default class Settings {
  constructor() {
    this._settings = new Map();
    this._settings.set('settings', { theme: 'dark', music: 'trance', difficulty: 'easy' });
  }

  get settings() {
    const resSettings = new Map();
    resSettings.set('result', this._settings.get('settings'));
    return resSettings;
  }

  set settings(settingValue) {
    const settings = this._settings.get('settings');
    const key = Object.keys(settingValue)[0];
    const value = Object.values(settingValue)[0];
    const themes = ['dark', 'light', 'gray'];
    const music = ['trance', 'pop', 'rock', 'chillout', 'off'];
    const difficulties = ['easy', 'normal', 'hard', 'nightmare'];

    if (key === 'theme' && themes.indexOf(value) !== -1) {
      settings[key] = value;
    }
    if (key === 'music' && music.indexOf(value) !== -1) {
      settings[key] = value;
    }
    if (key === 'difficulty' && difficulties.indexOf(value) !== -1) {
      settings[key] = value;
    }
    this._settings.set('settings', settings);
  }
}

const sets = new Settings();
const res = sets.settings;
console.log(res);

sets.settings = { theme: 'gray' };
console.log(res);

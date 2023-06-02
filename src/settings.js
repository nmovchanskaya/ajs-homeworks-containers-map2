export default class Settings {
  constructor() {
    this._settings = new Map();
    this._settings.set('default', { theme: 'dark', music: 'trance', difficulty: 'easy' });
    this._settings.set('user', { music: 'rock' });
  }

  get settings() {
    const userSettings = this._settings.get('user');
    const defaultSettings = this._settings.get('default');

    for (const prop in defaultSettings) {
      if (!(prop in userSettings)) {
        userSettings[prop] = defaultSettings[prop];
      }
    }

    const resSettings = new Map();
    resSettings.set('result', userSettings);
    return resSettings;
  }

  set settings(settingValue) {
    const userSettings = this._settings.get('user');
    const key = Object.keys(settingValue)[0];
    const value = Object.values(settingValue)[0];
    const themes = ['dark', 'light', 'gray'];
    const music = ['trance', 'pop', 'rock', 'chillout', 'off'];
    const difficulties = ['easy', 'normal', 'hard', 'nightmare'];

    if (key === 'theme' && themes.indexOf(value) !== -1) {
      userSettings[key] = value;
    }
    if (key === 'music' && music.indexOf(value) !== -1) {
      userSettings[key] = value;
    }
    if (key === 'difficulty' && difficulties.indexOf(value) !== -1) {
      userSettings[key] = value;
    }
    this._settings.set('user', userSettings);
    // this._settings.set(value);
  }
}

const sets = new Settings();
const res = sets.settings;
console.log(res);

sets.settings = { theme: 'gray' };
console.log(res);

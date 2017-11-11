class LocalStorage {
  constructor() {
    this.store = chrome.storage.local;
  }

  get(keys) {
    return new Promise((res, rej) => {
      this.store.get(keys, (items) => {
        res(items);
      });
    });
  }

  set(items) {
    return new Promise((res, rej) => {
      this.store.set(items, () => {
        res();
      });
    });
  }

  remove(keys) {
    return new Promise((res, rej) => {
      this.store.remove(keys, () => {
        res();
      });
    });
  }

  clear() {
    return new Promise((res, rej) => {
      this.store.clear(() => {
        res();
      });
    });
  }

  listen(onChange) {
    chrome.storage.onChanged.addListener((changes, areaName) => {
      if(areaName === 'local') {
        onChange(changes);
      }
    });
  }
}

export default new LocalStorage;

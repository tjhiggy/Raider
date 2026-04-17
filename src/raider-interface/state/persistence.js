export function createPersistenceLayer(storageKey) {
  return {
    storageKey,
    read() {
      try {
        const raw = window.localStorage.getItem(storageKey);
        return raw ? JSON.parse(raw) : null;
      } catch (_error) {
        return null;
      }
    },
    write(nextValue) {
      try {
        window.localStorage.setItem(storageKey, JSON.stringify(nextValue));
      } catch (_error) {
        return false;
      }

      return true;
    }
  };
}

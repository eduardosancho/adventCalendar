class NaiveHashMap {
  constructor(initialCapacity = 2) {
    this.buckets = new Array(initialCapacity);
  }

  set(key, value) {
    const index = this.getIndex(key);
    this.buckets[index] = value;
  }

  get(key) {
    const index = this.getIndex(key);
    return this.buckets[index];
  }

  hash(key) {
    return key.toString().length;
  }

  getIndex(key) {
    const indexHash = this.hash(key);
    const index = indexHash % this.buckets.length;
    return index;
  }
}

export { NaiveHashMap };

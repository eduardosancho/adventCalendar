class SimpleHashMap {
  constructor(initialCapacity = 2) {
    this.buckets = new Array(initialCapacity);
  }

  set(key, value) {
    const bucketIndex = this.getIndex(key);
    if (this.buckets[bucketIndex]) {
      this.buckets[bucketIndex].push({ key, value });
    } else {
      this.buckets[bucketIndex] = [{ key, value }];
    }
    return this;
  }

  get(key) {
    const bucketIndex = this.getIndex(key);
    for (let arrayIndex = 0; arrayIndex < this.buckets[bucketIndex].length; arrayIndex++) {
      const entry = this.buckets[bucketIndex][arrayIndex];
      if (entry.key === key) {
        return entry.value;
      }
    }
  }

  hash(key) {
    let hashValue = 0;
    const stringTypeKey = `${key}${typeof key}`;
    for (let index = 0; index < stringTypeKey.length; index++) {
      const charCode = stringTypeKey.charCodeAt(index);
      hashValue += charCode << (index * 8);
    }
    return hashValue;
  }

  getIndex(key) {
    const indexHash = this.hash(key);
    const index = indexHash % this.buckets.length;
    return index;
  }
}

export { SimpleHashMap };
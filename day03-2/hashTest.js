// import _ from 'lodash';

import { DecentHashMap } from "./hashmap.js";
import assert from "assert";

const hashMap = new DecentHashMap();

hashMap.set('cat', 2);
hashMap.set('rat', 7);
hashMap.set('dog', 1);
hashMap.set('art', 8);

console.log('collisions: ', hashMap.collisions);
console.log(hashMap.buckets);

console.log('cat: ', hashMap.get('cat'));
console.log('rat: ', hashMap.get('rat'));
console.log('dog: ', hashMap.get('dog'));
console.log('art: ', hashMap.get('art'));

assert.equal(hashMap.get('art'), 8);
assert.equal(hashMap.get('cat'), 2);
assert.equal(hashMap.get('rat'), 7);
assert.equal(hashMap.get('dog'), 1);
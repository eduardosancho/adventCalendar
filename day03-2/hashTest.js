// import _ from 'lodash';

import { NaiveHashMap } from "./hashmap.js";
// const assert = require('assert');

const hashMap = new NaiveHashMap();

hashMap.set('cat', 2);
hashMap.set('rat', 7);
hashMap.set('dog', 1);
hashMap.set('art', 8);

console.log(hashMap.buckets);
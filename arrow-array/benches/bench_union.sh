#!/bin/bash

for feature in "+avx" "+sse4.2" "+sse4.1" "+ssse3" "+sse3" "+sse2" ; do
  echo "Running command with features: $feature"
  RUSTFLAGS="-C target-feature="$feature"" cargo bench --quiet --bench union_array -- --save-baseline=$feature
done
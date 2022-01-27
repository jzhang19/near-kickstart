#!/bin/bash
TARGET="${CARGO_TARGET_DIR:-target}"
set -e
cd "`dirname $0`"

RUSTFLAGS='-C link-arg=-s' 
cd contract/
cargo build --target wasm32-unknown-unknown --release
cp $TARGET/wasm32-unknown-unknown/release/kickstart.wasm ./res/


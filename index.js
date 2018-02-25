'use strict';

var florincore = module.exports;

// module information
florincore.version = 'v' + require('./package.json').version;
florincore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of florincore-lib found. ' +
      'Please make sure to require florincore-lib and check that submodules do' +
      ' not also include their own florincore-lib dependency.';
    throw new Error(message);
  }
};
florincore.versionGuard(global._florincore);
global._florincore = florincore.version;

// crypto
florincore.crypto = {};
florincore.crypto.BN = require('./lib/crypto/bn');
florincore.crypto.ECDSA = require('./lib/crypto/ecdsa');
florincore.crypto.Hash = require('./lib/crypto/hash');
florincore.crypto.Random = require('./lib/crypto/random');
florincore.crypto.Point = require('./lib/crypto/point');
florincore.crypto.Signature = require('./lib/crypto/signature');

// encoding
florincore.encoding = {};
florincore.encoding.Base58 = require('./lib/encoding/base58');
florincore.encoding.Base58Check = require('./lib/encoding/base58check');
florincore.encoding.BufferReader = require('./lib/encoding/bufferreader');
florincore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
florincore.encoding.Varint = require('./lib/encoding/varint');

// utilities
florincore.util = {};
florincore.util.buffer = require('./lib/util/buffer');
florincore.util.js = require('./lib/util/js');
florincore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
florincore.errors = require('./lib/errors');

// main bitcoin library
florincore.Address = require('./lib/address');
florincore.Block = require('./lib/block');
florincore.MerkleBlock = require('./lib/block/merkleblock');
florincore.BlockHeader = require('./lib/block/blockheader');
florincore.HDPrivateKey = require('./lib/hdprivatekey.js');
florincore.HDPublicKey = require('./lib/hdpublickey.js');
florincore.Networks = require('./lib/networks');
florincore.Opcode = require('./lib/opcode');
florincore.PrivateKey = require('./lib/privatekey');
florincore.PublicKey = require('./lib/publickey');
florincore.Script = require('./lib/script');
florincore.Transaction = require('./lib/transaction');
florincore.URI = require('./lib/uri');
florincore.Unit = require('./lib/unit');

// dependencies, subject to change
florincore.deps = {};
florincore.deps.bnjs = require('bn.js');
florincore.deps.bs58 = require('bs58');
florincore.deps.Buffer = Buffer;
florincore.deps.elliptic = require('elliptic');
florincore.deps.scryptsy = require('scryptsy');
florincore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
florincore._HDKeyCache = require('./lib/hdkeycache');
florincore.Transaction.sighash = require('./lib/transaction/sighash');

'use strict';

var bibecore = module.exports;

// module information
bibecore.version = 'v' + require('./package.json').version;
bibecore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of bibecore-lib found. ' +
      'Please make sure to require bibecore-lib and check that submodules do' +
      ' not also include their own bibecore-lib dependency.';
    throw new Error(message);
  }
};
bibecore.versionGuard(global._bibecore);
global._bibecore = bibecore.version;

// crypto
bibecore.crypto = {};
bibecore.crypto.BN = require('./lib/crypto/bn');
bibecore.crypto.ECDSA = require('./lib/crypto/ecdsa');
bibecore.crypto.Hash = require('./lib/crypto/hash');
bibecore.crypto.Random = require('./lib/crypto/random');
bibecore.crypto.Point = require('./lib/crypto/point');
bibecore.crypto.Signature = require('./lib/crypto/signature');

// encoding
bibecore.encoding = {};
bibecore.encoding.Base58 = require('./lib/encoding/base58');
bibecore.encoding.Base58Check = require('./lib/encoding/base58check');
bibecore.encoding.BufferReader = require('./lib/encoding/bufferreader');
bibecore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
bibecore.encoding.Varint = require('./lib/encoding/varint');

// utilities
bibecore.util = {};
bibecore.util.buffer = require('./lib/util/buffer');
bibecore.util.js = require('./lib/util/js');
bibecore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
bibecore.errors = require('./lib/errors');

// main bitcoin library
bibecore.Address = require('./lib/address');
bibecore.Block = require('./lib/block');
bibecore.MerkleBlock = require('./lib/block/merkleblock');
bibecore.BlockHeader = require('./lib/block/blockheader');
bibecore.HDPrivateKey = require('./lib/hdprivatekey.js');
bibecore.HDPublicKey = require('./lib/hdpublickey.js');
bibecore.Networks = require('./lib/networks');
bibecore.Opcode = require('./lib/opcode');
bibecore.PrivateKey = require('./lib/privatekey');
bibecore.PublicKey = require('./lib/publickey');
bibecore.Script = require('./lib/script');
bibecore.Transaction = require('./lib/transaction');
bibecore.URI = require('./lib/uri');
bibecore.Unit = require('./lib/unit');

// dependencies, subject to change
bibecore.deps = {};
bibecore.deps.bnjs = require('bn.js');
bibecore.deps.bs58 = require('bs58');
bibecore.deps.Buffer = Buffer;
bibecore.deps.elliptic = require('elliptic');
bibecore.deps.scryptsy = require('scryptsy');
bibecore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
bibecore.Transaction.sighash = require('./lib/transaction/sighash');

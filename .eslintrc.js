/*
 * Copyright 2019 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  'env': {
    'node': true,
    'es6': true
  },
  // this is the root project for all sub modules. stop searching for any
  // eslintrc files in parent directories.
  'root': true,
  'parserOptions': {
    'sourceType': 'script',
    'ecmaVersion': 10,
  },
  'plugins': [
    'header', 'jsdoc'
  ],
  'extends': 'airbnb',
  'rules': {
    'strict': 0,

    "jsdoc/check-examples": 0,
    "jsdoc/check-param-names": 1,
    "jsdoc/check-tag-names": 1,
    "jsdoc/check-types": 1,
    "jsdoc/newline-after-description": 1,
    "jsdoc/no-undefined-types": 1,
    "jsdoc/require-description": 0,
    "jsdoc/require-description-complete-sentence": 1,
    "jsdoc/require-example": 0,
    "jsdoc/require-hyphen-before-param-description": 1,
    "jsdoc/require-param": 1,
    "jsdoc/require-param-description": 1,
    "jsdoc/require-param-name": 1,
    "jsdoc/require-param-type": 1,
    "jsdoc/require-returns": 1,
    "jsdoc/require-returns-description": 1,
    "jsdoc/require-returns-type": 1,
    "jsdoc/valid-types": 1,

    // allow dangling underscores for 'fields'
    'no-underscore-dangle': ['error', {'allowAfterThis': true}],

    // do not enforce license header as most of the code is forked
    // 'header/header': [2, 'block', ['',
    //   ' * Copyright 2018 Adobe. All rights reserved.',
    //   ' * This file is licensed to you under the Apache License, Version 2.0 (the "License");',
    //   ' * you may not use this file except in compliance with the License. You may obtain a copy',
    //   ' * of the License at http://www.apache.org/licenses/LICENSE-2.0',
    //   ' *',
    //   ' * Unless required by applicable law or agreed to in writing, software distributed under',
    //   ' * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS',
    //   ' * OF ANY KIND, either express or implied. See the License for the specific language',
    //   ' * governing permissions and limitations under the License.',
    //   ' ',
    // ]]
  },
  "settings": {
    "jsdoc": {
        "additionalTagNames": {
            "customTags": ["fulfil", "reject"]
        }
    }
}
};

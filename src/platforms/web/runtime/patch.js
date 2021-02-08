/* @flow */

import * as nodeOps from 'web/runtime/node-ops'
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)

/**
 * [sun-210105]
 * 不同平台 weex web 的 `nodeOps` `modules` 不同
 * 通过 `createPatchFunction` 实现函数柯里化固化差异化的参数（`nodeOps` `modules`）避免每次调用时传 `nodeOps` `modules`
 * 
 */
export const patch: Function = createPatchFunction({ nodeOps, modules })

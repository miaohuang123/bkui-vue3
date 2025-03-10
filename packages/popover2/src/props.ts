/*
 * Tencent is pleased to support the open source community by making
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 *
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) is licensed under the MIT License.
 *
 * License for 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition):
 *
 * ---------------------------------------------------
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of
 * the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

import { ExtractPropTypes } from 'vue';

import { PropTypes } from '@bkui-vue/shared';
const placements = ['auto', 'auto-start', 'auto-end', 'top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'right', 'right-start', 'right-end', 'left', 'left-start', 'left-end'];
const EventProps = {
  onAfterHidden: Function,
  onAfterShow: Function,
};
export const PopoverProps = {
  isShow: PropTypes.bool.def(false),
  always: PropTypes.bool.def(false),
  disabled: PropTypes.bool.def(false),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).def('auto'),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).def('auto'),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).def(''),

  /**
   * 组件显示位置
   */
  placement: PropTypes.placement(placements).def('top'),

  // 'dark', 'light'
  theme: PropTypes.string.def('dark'),

  /**
   * 触发方式
   * 支持 click hover manual
   * manual： 通过isShow控制显示、隐藏
   */
  trigger: PropTypes.string.def('hover'),

  // 是否显示箭头
  arrow: PropTypes.bool.def(true),

  padding: PropTypes.number.def(5),

  offset: PropTypes.number.def(6),

  /**
   * 弹出内容绑定元素
   */
  boundary: PropTypes.oneOfType([PropTypes.string.def('parent'), PropTypes.instanceOf(HTMLElement)]),

  zIndex: PropTypes.number.def(undefined),

  disableTeleport: PropTypes.bool.def(false),

  /**
   *  chooses the placement that has the most space available automatically
   */
  autoPlacement: PropTypes.bool.def(false),

  /**
   * 当有滚动条，滚动出可是范围时自动隐藏pop
   */
  autoVisibility: PropTypes.bool.def(true),

  /**
   * 是否禁用clickoutside
   */
  disableOutsideClick: PropTypes.bool.def(false),

  /**
   * 是否禁用样式的transform更新位移
   */
  disableTransform: PropTypes.bool.def(false),

  /**
   * 自定义 reference
   */
  reference: PropTypes.any.def(null),

  ...EventProps,
};

export type PopoverPropTypes = Readonly<ExtractPropTypes<typeof PopoverProps>>;


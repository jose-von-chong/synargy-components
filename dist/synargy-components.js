'use strict';

require('prelude-ls');
var onChange = require('on-change');
var Mustache = require('mustache');
require('assert-plus');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var onChange__default = /*#__PURE__*/_interopDefaultLegacy(onChange);
var Mustache__default = /*#__PURE__*/_interopDefaultLegacy(Mustache);

class SynargyComponent extends HTMLElement {
  constructor() {
    super();
    this.data = {};
    this.$binded_elems = [];
    this.$events_list = [
      //mouse
      {
        name: "s-onclick",
        match: "onclick",
      },
      {
        name: "s-ondblclick",
        match: "ondblclick",
      },
      {
        name: "s-onmouseout",
        match: "onmouseout",
      },
      {
        name: "s-onmousemove",
        match: "onmousemove",
      },
      {
        name: "s-onmouseup",
        match: "onmouseup",
      },
      {
        name: "s-onmousewheel",
        match: "onmousewheel",
      },
      {
        name: "s-onwheel",
        match: "onwheel",
      },
      //keyboard
      {
        name: "s-onkeydown",
        match: "onkeydown",
      },
      {
        name: "s-onkeyup",
        match: "onkeyup",
      },
      {
        name: "s-onkeypress",
        match: "onkeypress",
      },
    ];
  }

  update_DOM_binds(path, value, prev_val, name) {
    this.$binded_elems.forEach((elem) => {
      if (elem.getAttribute("s-bind") === path) {
        elem.innerText = value;
      }
    });
  }
  _parse_events() {
    this.$events_list.forEach((event) => {
      let elem = document.querySelectorAll(`[${event.name}]`);
      if (elem.length !== 0) {
        elem.forEach((el) => {
          el[event.match] = (e) => {
            if (this[el.getAttribute(event.name)]) {
              this[el.getAttribute(event.name)](e);
            } else {
              console.log(undefined);
            }
          };
        });
      }
    });
  }
  _set_observed_props() {
    this.$data = onChange__default['default'](this.data, (path, value, previousValue, name) => {
      this.update_DOM_binds(path, value, previousValue, name);
    });
  }
  _get_binds() {
    Array.from(document.querySelectorAll("[s-bind]")).forEach((elem) => {
      this.$binded_elems.push(elem);
    });
  }
  render(template) {
    this._set_observed_props();
    this.innerHTML = Mustache__default['default'].render(template(this), this);
    this._parse_events();
    this._get_binds();
  }
}

module.exports = SynargyComponent;

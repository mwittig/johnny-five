Object.defineProperty(Array.prototype, 'includes', {
  value: function(entry) {
    return this.indexOf(entry) !== -1;
  },
  enumerable: false,
  configurable: true,
  writable: false
});

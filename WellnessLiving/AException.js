/**
 * A default base class for all exceptions.
 *
 * @augments Error
 * @param {string} s_code Error code.
 * @param {string} s_message Error message.
 * @param {{}|null} [a_data] Data object.
 * @constructor
 */
function WlSdk_AException (s_code, s_message, a_data)
{
  /**
   * Data object.
   *
   * @type {{}|null}
   */
  this.a_data = a_data ? a_data : null;

  /**
   * Call stack.
   *
   * @type {Array}
   * @see {@link debug_stack()} For structure of this array.
   */
  this.a_stack = debug_stack ? debug_stack() : [];

  /**
   * Error code.
   *
   * @type {string}
   */
  this.s_code = s_code;

  /**
   * Error message.
   *
   * @type {string}
   */
  this.s_message = s_message || a_data && a_data['s_message'] || a_data && a_data['text_message'] || '';

  // Initialize inherited fields.
  this.message = this.s_message;
  this.name = this.constructor.name;
}

WlSdk_AException.prototype = Object.create(Error);
WlSdk_AException.prototype.constructor = WlSdk_AException;

/**
 * Extends a child class.
 *
 * @param {WlSdk_AException} o_child A subclass to extend.
 */
WlSdk_AException.extend = function (o_child)
{
  o_child.prototype = Object.create(WlSdk_AException.prototype);
  o_child.prototype.constructor = o_child;
};

/**
 * Returns class name of the exception object.
 *
 * @returns {string} Class name of the exception object.
 */
WlSdk_AException.prototype.getClass = function ()
{
  return this.constructor.name;
};

/**
 * Converts exception object to representation supported by Selenium tests.
 *
 * @returns {{}} Object representable by Selenium tests.
 */
WlSdk_AException.prototype.toSelenium = function ()
{
  return {
    'a_data': this.a_data,
    'a_stack': this.a_stack,
    'exception-type': 'exception',
    's_class': this.getClass(),
    's_code': this.s_code,
    's_message': this.s_message
  };
};

/**
 * @inheritDoc
 */
WlSdk_AException.prototype.toString = function ()
{
  var s_result = '';

  s_result += 'Exception of class ' + this.getClass();
  if (this.s_code)
    s_result += ' [' + this.s_code + ']';
  if (this.s_message)
    s_result += ' ' + this.s_message;
  if (this.a_data)
    s_result += "\r\n" + debug(this.a_data) + "\r\n";
  if (this.a_stack)
  {
    if (!this.a_data)
      s_result += "\r\n";
    s_result += debug(this.a_stack) + "\r\n";
  }
  return s_result;
};
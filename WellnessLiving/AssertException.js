/**
 * Exception that is thrown in a case of assertion failure.
 *
 * Objects of an exception class are created in methods of this class.
 * But it may be objects of different classes.
 * (Depends on the {@link WlSdk_Config_MixinAbstract.ASSERT_EXCEPTION} constant.)
 *
 * Therefore, all this classes must have the same call of constructor.
 *
 * The exception class with constructor call <tt>(text_message,a_data)</tt>
 * is configured for the main Wellnessliving project.
 *
 * Hence, this class must have the same constructor call.
 *
 * @augments Error
 * @constructor
 * @param {string} [text_message=''] Exception message.
 * @param {{}} [a_data={}] Additional data to include in exception.
 */
function WlSdk_AssertException(text_message,a_data)
{
  /**
   * Any additional data to add to assertion exception.
   *
   * @type {{}}
   */
  this.a_data = a_data?a_data:{};

  /**
   * Error message.
   *
   * @type {string}
   */
  this.message = a_data['text_message']?a_data['text_message']:'Assertion without message is thrown.';

  /**
   * Class name.
   *
   * @type {string}
   */
  this.name = this.constructor.name;
}

WlSdk_AssertException.prototype = Object.create(Error);
WlSdk_AssertException.prototype.constructor = WlSdk_AssertException;

/**
 * Asserts that given value is <tt>true</tt>.
 *
 * @param {*} is_value Value to validate.
 * @param {{}} [a_data={}] Any additional data to add to assertion exception in a case of assertion failure.
 */
WlSdk_AssertException.assertTrue = function(is_value,a_data)
{
  if(is_value!==true)
    throw new WlSdk_Config_Mixin.ASSERT_EXCEPTION('',a_data);
};

/**
 * Always throws assertion failure.
 *
 * @param {string} s_message Assertion message.
 * @param {{}} [a_data={}] Any additional data to add to assertion exception in a case of assertion failure.
 * @throws {WlSdk_AssertException} Always.
 */
WlSdk_AssertException.fail = function(s_message,a_data)
{
  WlSdk_Config_Mixin.configTestLog('***** Assertion: '+s_message);
  if(a_data)
    WlSdk_Config_Mixin.configTestLog(a_data);

  throw new WlSdk_Config_Mixin.ASSERT_EXCEPTION(s_message,a_data);
};

/**
 * Asserts that given value is not empty.
 *
 * @param {*} x_value Value to validate.
 * @param {{}} [a_data={}] Any additional data to add to assertion exception in a case of assertion failure.
 * @throws {Core_Assert_Exception} In a case of assertion failure.
 */
WlSdk_AssertException.notEmpty = function(x_value,a_data)
{
  a_data = a_data||{};

  if(empty(x_value))
    throw new WlSdk_Config_Mixin.ASSERT_EXCEPTION('',a_data);
};
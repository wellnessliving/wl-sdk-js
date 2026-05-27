/**
 * Class which processed exceptions to the {@link WlSdk_Core_Tool_UrlEncode_UrlEncode}.
 *
 * Should be included in all templates because it is a part of the core and this functionality may be necessary in any place.
 *
 * <b>Attention.</b> You will, must change the template of the {@link WlSdk_Core_Tool_UrlEncode_UrlEncodeException} if you change template of this class.
 *
 * @param {string} s_code Exception code.
 * @param {string} text_message Exception message.
 * @constructor
 */
function WlSdk_Core_Tool_UrlEncode_UrlEncodeException (s_code, text_message)
{
  /**
   * Exception message.
   *
   * @type {string}
   */
  this.message = text_message;

  /**
   * Exception code.
   *
   * @type {string}
   */
  this.name = s_code;
}

WlSdk_Core_Tool_UrlEncode_UrlEncodeException.prototype = Object.create(WlSdk_AException.prototype);
/**
 * Saves new translation of a translated message.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Locale_Message_InlineEditor_SaveModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Core_Locale_Message_InlineEditor_SaveModel_a_translate
   * @property {{}} a_translate Translations to save. Key is language ID (one of {@link \Core\Locale\Language\LocaleLanguageSid} constants),
   *   value is either translation, or <tt>null</tt> to remove translation.
   * @property {*} is_js Whether this message is originated from JavaScript code.
   * 
   *   Setting this flag leads to that this source and all translations are added to
   *   {@link \Core\Locale\Message\InlineEditor\InlineSql}.
   * 
   *   This flag is only considered if {@link \Core\Locale\Message\InlineEditor\SaveApi::FORWARD_GLOBAL} is set to
   *   <tt>true</tt>.
   * @property {string} text_source Source of translated message.
   */

  /**
   * A list of translations to save.
   *
   * Each element of this array contains:<dl>
   *   <dt>array <var>a_translate</var></dt>
   *   <dd>
   *   Translations to save. Key is language ID (one of {@link \Core\Locale\Language\LocaleLanguageSid} constants),
   *   value is either translation, or <tt>null</tt> to remove translation.
   *   </dd>
   *   <dt>bool [<var>is_js</var>=<tt>false</tt>]</dt>
   *   <dd>
   *   Whether this message is originated from JavaScript code.
   *
   *   Setting this flag leads to that this source and all translations are added to
   *   {@link \Core\Locale\Message\InlineEditor\InlineSql}.
   *
   *   This flag is only considered if {@link \Core\Locale\Message\InlineEditor\SaveApi::FORWARD_GLOBAL} is set to
   *   <tt>true</tt>.
   *   </dd>
   *   <dt>string <var>text_source</var></dt>
   *   <dd>Source of translated message.</dd>
   * </dl>
   *
   * @put post
   * @type {Core_Locale_Message_InlineEditor_SaveModel_a_translate[]}
   */
  this.a_translate = [];

  /**
   * Name of the instance.
   *
   * @put post
   * @type {string}
   */
  this.text_instance = undefined;

  /**
   * Login of the user.
   *
   * @put post
   * @type {?string}
   */
  this.text_login = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Locale_Message_InlineEditor_SaveModel);

/**
 * @inheritDoc
 */
Core_Locale_Message_InlineEditor_SaveModel.prototype.config=function()
{
  return {"a_field": {"a_translate": {"put": {"post": true}},"text_instance": {"put": {"post": true}},"text_login": {"put": {"post": true}}}};
};
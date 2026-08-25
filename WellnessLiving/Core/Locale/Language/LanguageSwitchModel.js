/**
 * Switches the language.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Locale_Language_LanguageSwitchModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Language to switch to.
   *
   * @post post
   * @see Core_Locale_Language_LocaleLanguageSid
   * @type {number}
   */
  this.id_language = 0;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Locale_Language_LanguageSwitchModel);

/**
 * @inheritDoc
 */
Core_Locale_Language_LanguageSwitchModel.prototype.config=function()
{
  return {"a_field":{"id_language":{"post":{"post":true}}}};
};

/**
 * Switches the language.
 *
 * @function
 * @name Core_Locale_Language_LanguageSwitchModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

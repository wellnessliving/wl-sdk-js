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
 * Remembers the requested language for the user who makes this request, within the context this user is currently
 * in, and stores it in the session and in the cookie so that the very next request is served in this language too.
 * The language must be active in this installation, otherwise the request is rejected and nothing is stored.
 *
 * @function
 * @name Core_Locale_Language_LanguageSwitchModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

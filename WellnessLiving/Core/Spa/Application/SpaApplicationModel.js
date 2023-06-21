/**
 * Information of application.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Core_Spa_Application_SpaApplicationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "s_application";

  /**
   * `true` - enable for this application sign in with Apple; `false` - disable.
   *
   * @get result
   * @type {boolean}
   */
  this.is_apple = undefined;

  /**
   * `true` - enable for this application sign in with Facebook; `false` - disable.
   *
   * @get result
   * @type {boolean}
   */
  this.is_facebook = undefined;

  /**
   * `true` - enable for this application sign in with Google; `false` - disable.
   *
   * @get result
   * @type {boolean}
   */
  this.is_google = undefined;

  /**
   * `true` - enable for this application sign in with Microsoft; `false` - disable.
   *
   * @get result
   * @type {boolean}
   */
  this.is_microsoft = undefined;

  /**
   * `true` - registration of new user is denied in application; `false` - registration of new user is allowed.
   *
   * @get result
   * @type {boolean}
   */
  this.is_register_deny = undefined;

  /**
   * `true` if sign in via social networks is allowed; `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_social = undefined;

  /**
   * `true` if sign in via TJX Azure is allowed; `false` otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_tjx = undefined;

  /**
   * Unique ID of application.
   *
   * @get get
   * @type {string}
   */
  this.s_application = "";

  /**
   * Tjx button name.
   *
   * @get result
   * @type {string}
   */
  this.text_tjx_button_name = "TJX Single Sign on";

  /**
   * Facebook authorization link.
   *
   * @get result
   * @type {string}
   */
  this.url_facebook = undefined;

  /**
   * Tjx link.
   *
   * @get result
   * @type {string}
   */
  this.url_tjx = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Spa_Application_SpaApplicationModel);

/**
 * @inheritDoc
 */
Core_Spa_Application_SpaApplicationModel.prototype.config=function()
{
  return {"a_field": {"is_apple": {"get": {"result": true}},"is_facebook": {"get": {"result": true}},"is_google": {"get": {"result": true}},"is_microsoft": {"get": {"result": true}},"is_register_deny": {"get": {"result": true}},"is_social": {"get": {"result": true}},"is_tjx": {"get": {"result": true}},"s_application": {"get": {"get": true}},"text_tjx_button_name": {"get": {"result": true}},"url_facebook": {"get": {"result": true}},"url_tjx": {"get": {"result": true}}}};
};

/**
 * @function
 * @name Core_Spa_Application_SpaApplicationModel.instanceGet
 * @param {string} s_application Unique ID of application.
 * @returns {Core_Spa_Application_SpaApplicationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */
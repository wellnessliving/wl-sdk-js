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
   * <tt>true</tt> - enable for this application sign in with Apple; <tt>false</tt> - disable.
   *
   * @get result
   * @type {boolean}
   */
  this.is_apple = undefined;

  /**
   * <tt>true</tt> - enable for this application sign in with Facebook; <tt>false</tt> - disable.
   *
   * @get result
   * @type {boolean}
   */
  this.is_facebook = undefined;

  /**
   * <tt>true</tt> - enable for this application sign in with Google; <tt>false</tt> - disable.
   *
   * @get result
   * @type {boolean}
   */
  this.is_google = undefined;

  /**
   * <tt>true</tt> - registration of new user is denied in application; <tt>false</tt> - registration of new user is allowed.
   *
   * @get result
   * @type {boolean}
   */
  this.is_register_deny = undefined;

  /**
   * <tt>true</tt> if sign in via social networks is allowed; <tt>false</tt> otherwise.
   *
   * @get result
   * @type {boolean}
   */
  this.is_social = undefined;

  /**
   * Unique ID of application.
   *
   * @get get
   * @type {string}
   */
  this.s_application = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Core_Spa_Application_SpaApplicationModel);

/**
 * @inheritDoc
 */
Core_Spa_Application_SpaApplicationModel.prototype.config=function()
{
  return {"a_field": {"is_apple": {"get": {"result": true}},"is_facebook": {"get": {"result": true}},"is_google": {"get": {"result": true}},"is_register_deny": {"get": {"result": true}},"is_social": {"get": {"result": true}},"s_application": {"get": {"get": true}}}};
};

/**
 * @function
 * @name Core_Spa_Application_SpaApplicationModel.instanceGet
 * @param {string} s_application Unique ID of application.
 * @returns {Core_Spa_Application_SpaApplicationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */
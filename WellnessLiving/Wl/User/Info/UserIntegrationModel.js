/**
 * Retrieves information about the user belongs to certain integrations.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_User_Info_UserIntegrationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * @typedef {{}} Wl_User_Info_UserIntegrationModel_a_integration
   * @property {boolean} is_classpass `true` if user use the Classpass integration, `false` - otherwise.
   * @property {boolean} is_gympass `true` if user use the Gympass integration, `false` - otherwise.
   * @property {boolean} is_reserve_with_google `true` if user use the Reserve With Google integration, `false` - otherwise.
   */

  /**
   * Information about the integrations the user is connected to. The information returned has the following structure:
   *
   * `null` if the user does not belong to any integration.
   *
   * @get result
   * @type {?Wl_User_Info_UserIntegrationModel_a_integration}
   */
  this.a_integration = null;

  /**
   * The key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Key of the user.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_User_Info_UserIntegrationModel);

/**
 * @inheritDoc
 */
Wl_User_Info_UserIntegrationModel.prototype.config=function()
{
  return {"a_field":{"a_integration":{"get":{"result":true}},"k_business":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * @function
 * @name Wl_User_Info_UserIntegrationModel.instanceGet
 * @param {string} uid Key of the user.
 * @param {string} k_business The key of the business.
 * @returns {Wl_User_Info_UserIntegrationModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Retrieves information about the user belongs to certain integrations.
 *
 * Returns which third-party booking integrations (Classpass, Gympass, Reserve With Google)
 * the user is currently connected to within the given business context. Returns `null`
 * when the user has no active integration memberships.
 *
 * @function
 * @name Wl_User_Info_UserIntegrationModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

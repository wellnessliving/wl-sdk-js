/**
 * Upgrades business account to application customisation.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Account_Application_ApplicationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * Application package ID. One of {@link \Wl\Business\Account\ApplicationSid}.
   *
   * @post get
   * @type {number}
   */
  this.id_application = undefined;

  /**
   * Business key. Primary key from the {@link \RsBusinessSql} table.
   *
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Account_Application_ApplicationModel);

/**
 * @inheritDoc
 */
Wl_Business_Account_Application_ApplicationModel.prototype.config=function()
{
  return {"a_field": {"id_application": {"post": {"get": true}},"k_business": {"post": {"get": true}}}};
};
/**
 * An endpoint that upgrades a business account to application customization.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Account_Application_ApplicationModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The application package ID. One of the {@link Wl_Business_Account_ApplicationSid} constants.
   *
   * @post get
   * @type {number}
   */
  this.id_application = undefined;

  /**
   * The business key.
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
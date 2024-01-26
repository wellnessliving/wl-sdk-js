/**
 * An endpoint that saves data of accounts for application distribution.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Application_Account_AccountModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The distribution provider ID (directly related to the operating system) to save data for.
   * One of the {@link Core_Spa_OsSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_os = 0;

  /**
   * The ID of the business to save data for.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "0";

  /**
   * The account login to be saved.
   *
   * @post post
   * @type {string}
   */
  this.s_login = "";

  /**
   * The account password to be saved.
   *
   * @post post
   * @type {string}
   */
  this.s_password = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Business_Application_Account_AccountModel);

/**
 * @inheritDoc
 */
Wl_Business_Application_Account_AccountModel.prototype.config=function()
{
  return {"a_field": {"id_os": {"post": {"post": true}},"k_business": {"post": {"post": true}},"s_login": {"post": {"post": true}},"s_password": {"post": {"post": true}}}};
};
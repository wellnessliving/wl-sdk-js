/**
 * Point to save data of accounts for application distribution.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Business_Application_Account_AccountModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * ID of distribution provider (is directly related to operation system) to save data for.
   * One of {@link \Core\Spa\OsSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_os = 0;

  /**
   * ID of business to save data for. Primary key in {@link \RsBusinessSql} table.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Account login to be saved.
   *
   * @post post
   * @type {string}
   */
  this.s_login = "";

  /**
   * Account password to be saved.
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
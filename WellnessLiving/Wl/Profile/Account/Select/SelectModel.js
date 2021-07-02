/**
 * Retrieves information about current user and his relationship with sub accounts.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Account_Select_SelectModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * Array with information about current user and his relationship with sub accounts.
   *
   * @get result
   * @type {{}}
   */
  this.a_user = undefined;

  /**
   * Business to retrieve relationship information.
   *
   * Primary key in {@link \RsBusinessSql}.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * UID to retrieve relationship information.
   *
   * Primary key in {@link \PassportLoginSql}.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = "";

  /**
   * ID of relative to sign in.
   *
   * Primary key in {@link \PassportLoginSql}.
   *
   * @post post
   * @type {string}
   */
  this.uid_in = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Account_Select_SelectModel);

/**
 * @inheritDoc
 */
Wl_Profile_Account_Select_SelectModel.prototype.config=function()
{
  return {"a_field": {"a_user": {"get": {"result": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}},"uid_in": {"post": {"post": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Account_Select_SelectModel.instanceGet
 * @param {string} uid UID to retrieve relationship information. Primary key in {@link \PassportLoginSql}.
 * @param {string} k_business Business to retrieve relationship information. Primary key in {@link \RsBusinessSql}.
 * @returns {Wl_Profile_Account_Select_SelectModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */
/**
 * Entry point to get and set data about "who pays for who".
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Family_Pay_PayModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "uid,k_business";

  /**
   * ID of business to get information for. Primary key in {@link \RsBusinessAr} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * ID of user to get information for. Primary key in {@link \PassportLoginAr} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.uid = undefined;

  /**
   * ID of user who will pay for user {@link \Wl\Family\Pay\PayApi::$uid}.
   * Primary key in {@link \PassportLoginAr} table.
   * Empty if {@link \Wl\Family\Pay\PayApi::$uid} will pay for self.
   *
   * @get result
   * @post post
   * @type {string}
   */
  this.uid_payer = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Family_Pay_PayModel);

/**
 * @inheritDoc
 */
Wl_Family_Pay_PayModel.prototype.config=function()
{
  return {"a_field": {"k_business": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}},"uid_payer": {"get": {"result": true},"post": {"post": true}}}};
};

/**
 * @function
 * @name Wl_Family_Pay_PayModel.instanceGet
 * @param {string} uid ID of user to get information for. Primary key in {@link \PassportLoginAr} table.
 * @param {string} k_business ID of business to get information for. Primary key in {@link \RsBusinessAr} table.
 * @returns {Wl_Family_Pay_PayModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */
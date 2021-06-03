/**
 * Model to send user's receipt by email.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Purchase_MailModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_purchase,uid";

  /**
   * Purchase ID. Primary key in {@link RsPurchaseSql} table.
   *
   * @post get
   * @type {string}
   */
  this.k_purchase = undefined;

  /**
   * ID of user for who receipt should be sent. Primary key in {@link PassportLoginSql} table.
   *
   * @post get
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Purchase_MailModel);

/**
 * @inheritDoc
 */
Wl_Profile_Purchase_MailModel.prototype.config=function()
{
  return {"a_field": {"k_purchase": {"post": {"get": true}},"uid": {"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Profile_Purchase_MailModel.instanceGet
 * @param {string} k_purchase Purchase ID. Primary key in {@link RsPurchaseSql} table.
 * @param {string} uid ID of user for who receipt should be sent. Primary key in {@link PassportLoginSql} table.
 * @returns {Wl_Profile_Purchase_MailModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */
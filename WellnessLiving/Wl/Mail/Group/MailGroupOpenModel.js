/**
 * Mail group API.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Mail_Group_MailGroupOpenModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

  /**
   * Mail group ID. One of {@link \RsMailGroupSid} constants.
   *
   * @post post
   * @type {number}
   */
  this.id_mail_group = undefined;

  /**
   * <tt>true</tt> If mail group is hide, <tt>false</tt> - otherwise.
   *
   * @post post
   * @type {boolean}
   */
  this.is_remove = undefined;

  /**
   * Business key. Primary key in the {@link \RsBusinessSql} table.
   *
   * @post post
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * User key. Primary key in the {@link \PassportLoginSql} table.
   *
   * @post post
   * @type {string}
   */
  this.uid = undefined;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Mail_Group_MailGroupOpenModel);

/**
 * @inheritDoc
 */
Wl_Mail_Group_MailGroupOpenModel.prototype.config=function()
{
  return {"a_field": {"id_mail_group": {"post": {"post": true}},"is_remove": {"post": {"post": true}},"k_business": {"post": {"post": true}},"uid": {"post": {"post": true}}}};
};

/**
 * @function
 * @name Wl_Mail_Group_MailGroupOpenModel.instanceGet
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @param {string} uid User key. Primary key in the {@link \PassportLoginSql} table.
 * @returns {Wl_Mail_Group_MailGroupOpenModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */
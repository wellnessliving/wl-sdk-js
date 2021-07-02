/**
 * Allows to multiple merge of clients.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Profile_Merge_ProfileMergeModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of fields to save.
   *
   * Keys are keys of fields. Primary key in the {@link \RsFieldSql} table.
   * Values are keys of users from whose profile field value is needed save. Primary key in the {@link \PassportLoginSql} table.
   *
   * @post get
   * @type {{}}
   */
  this.a_field_save = [];

  /**
   * List of user keys to merge. One element is primary key in {@link PassportLoginSql}.
   *
   * @post get
   * @type {string[]}
   */
  this.a_uid = [];

  /**
   * Key of current business. Primary key in {@link RsBusinessSql} table.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "0";

  /**
   * Key of main user. Primary key in {@link PassportLoginSql} table.
   * <tt>null</tt> if not set yet.
   *
   * @post result
   * @type {?string}
   */
  this.uid_main = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Profile_Merge_ProfileMergeModel);

/**
 * @inheritDoc
 */
Wl_Profile_Merge_ProfileMergeModel.prototype.config=function()
{
  return {"a_field": {"a_field_save": {"post": {"get": true}},"a_uid": {"post": {"get": true}},"k_business": {"post": {"get": true}},"uid_main": {"post": {"result": true}}}};
};
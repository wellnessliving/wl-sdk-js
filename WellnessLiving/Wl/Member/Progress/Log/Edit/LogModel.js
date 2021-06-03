/**
 * Progress log api.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Member_Progress_Log_Edit_LogModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "dt_date,k_business,uid";

  /**
   * Field log data. Structure of this array corresponds structure of result of {@link \Wl\Member\Progress\Log\Field\FieldList::getData()}.
   *
   * @get result
   * @post result
   * @type {{}[]}
   */
  this.a_field_list = undefined;

  /**
   * List of fields.
   *
   * Keys are field IDs ({@link \Wl\Member\Progress\Field\ProgressFieldSid} constants).
   * Values are new field values.
   * Structure of value completely defined by individual fields.
   *
   * @post post
   * @type {{}[]}
   */
  this.a_field_log = undefined;

  /**
   * Progress log date.
   *
   * If <tt>null</tt> use the current date.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date = undefined;

  /**
   * Last date when the user entered progress values. <tt>null</tt> if the user had not entered progress data before the {@link \Wl\Member\Progress\Log\Edit\LogApi::$dt_date} date.
   *
   * @get result
   * @type {?string}
   */
  this.dt_last = null;

  /**
   * How we want to see this page. As a staff or as a user.
   *
   * @get result
   * @type {boolean}
   */
  this.is_staff = undefined;

  /**
   * Whether field is only weight should be updated.
   *
   * @post post
   * @type {boolean}
   */
  this.is_weight_only = false;

  /**
   * Business key.
   *
   * Primary key in the {@link \RsBusinessSql} table.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = undefined;

  /**
   * User key.
   *
   * Primary key in the {@link \PassportLoginSql} table.
   *
   * @get get
   * @post get
   * @type {?string}
   */
  this.uid = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Member_Progress_Log_Edit_LogModel);

/**
 * @inheritDoc
 */
Wl_Member_Progress_Log_Edit_LogModel.prototype.config=function()
{
  return {"a_field": {"a_field_list": {"get": {"result": true},"post": {"result": true}},"a_field_log": {"post": {"post": true}},"dt_date": {"get": {"get": true},"post": {"get": true}},"dt_last": {"get": {"result": true}},"is_staff": {"get": {"result": true}},"is_weight_only": {"post": {"post": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Member_Progress_Log_Edit_LogModel.instanceGet
 * @param {string} dt_date Progress log date. If <tt>null</tt> use the current date.
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @param {?string} uid User key. Primary key in the {@link \PassportLoginSql} table.
 * @returns {Wl_Member_Progress_Log_Edit_LogModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */
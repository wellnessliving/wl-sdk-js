/**
 * Progress goal api.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Member_Progress_Goal_Edit_GoalModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,uid";

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
  this.a_field_goal = undefined;

  /**
   * Field log data. Structure of this array corresponds structure of result of {@link \Wl\Member\Progress\Log\Field\FieldList::getData()}.
   *
   * @get result
   * @post result
   * @type {{}[]}
   */
  this.a_field_list = undefined;

  /**
   * How we want to see this page. As a staff or as a user.
   *
   * @get result
   * @type {boolean}
   */
  this.is_staff = undefined;

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

WlSdk_ModelAbstract.extend(Wl_Member_Progress_Goal_Edit_GoalModel);

/**
 * @inheritDoc
 */
Wl_Member_Progress_Goal_Edit_GoalModel.prototype.config=function()
{
  return {"a_field": {"a_field_goal": {"post": {"post": true}},"a_field_list": {"get": {"result": true},"post": {"result": true}},"is_staff": {"get": {"result": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"uid": {"get": {"get": true},"post": {"get": true}}}};
};

/**
 * @function
 * @name Wl_Member_Progress_Goal_Edit_GoalModel.instanceGet
 * @param {string} k_business Business key. Primary key in the {@link \RsBusinessSql} table.
 * @param {?string} uid User key. Primary key in the {@link \PassportLoginSql} table.
 * @returns {Wl_Member_Progress_Goal_Edit_GoalModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */
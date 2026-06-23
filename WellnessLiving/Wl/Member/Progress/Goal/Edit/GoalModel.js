/**
 * Returns progress goal log data.
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
   * Keys are field IDs ({@link Wl_Member_Progress_Field_ProgressFieldSid} constants).
   * Values are new field values.
   * Structure of value completely defined by individual fields.
   *
   * @post post
   * @type {number[]}
   */
  this.a_field_goal = undefined;

  /**
   * @typedef {{}} Wl_Member_Progress_Goal_Edit_GoalModel_a_field_list
   * @property {number} id_field List of progress log fields.
   * @property {number} id_measurement_unit Possible measurement units of the progress fields values.
   * @property {number} id_type Possible types of the progress fields values.
   * @property {string} k_field Field key.
   * @property {string} text_name Translated field name.
   * @property {string} x_value Progress field log value.
   */

  /**
   * Field log data.
   *
   * @get result
   * @post result
   * @type {Wl_Member_Progress_Goal_Edit_GoalModel_a_field_list[]}
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
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * User key.
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
  return {"a_field":{"a_field_goal":{"post":{"post":true}},"a_field_list":{"get":{"result":true},"post":{"result":true}},"is_staff":{"get":{"result":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Member_Progress_Goal_Edit_GoalModel.instanceGet
 * @param {string} k_business Business key.
 * @param {?string} uid User key.
 * @returns {Wl_Member_Progress_Goal_Edit_GoalModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns progress goal log data.
 *
 * Loads the current goal values for all configured progress fields for the specified user and business,
 * and also returns whether the current viewer is a staff member.
 *
 * @function
 * @name Wl_Member_Progress_Goal_Edit_GoalModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves progress goal fields log.
 *
 * Validates and persists the goal values provided in `$a_field_goal` for the specified user and business,
 * then returns the updated field list in `$a_field_list`.
 *
 * @function
 * @name Wl_Member_Progress_Goal_Edit_GoalModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

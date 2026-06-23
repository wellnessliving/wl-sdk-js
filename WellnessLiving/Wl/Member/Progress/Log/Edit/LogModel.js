/**
 * Returns progress log data.
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
   * @typedef {{}} Wl_Member_Progress_Log_Edit_LogModel_a_field_list
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
   * @type {Wl_Member_Progress_Log_Edit_LogModel_a_field_list[]}
   */
  this.a_field_list = undefined;

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
  this.a_field_log = undefined;

  /**
   * Progress log local date.
   *
   * If `null` use the current date.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_date = "";

  /**
   * Last local date when the user entered progress values. `null` if the user had not entered progress data before the `dt_date` date.
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

WlSdk_ModelAbstract.extend(Wl_Member_Progress_Log_Edit_LogModel);

/**
 * @inheritDoc
 */
Wl_Member_Progress_Log_Edit_LogModel.prototype.config=function()
{
  return {"a_field":{"a_field_list":{"get":{"result":true},"post":{"result":true}},"a_field_log":{"post":{"post":true}},"dt_date":{"get":{"get":true},"post":{"get":true}},"dt_last":{"get":{"result":true}},"is_staff":{"get":{"result":true}},"is_weight_only":{"post":{"post":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"uid":{"get":{"get":true},"post":{"get":true}}}};
};

/**
 * @function
 * @name Wl_Member_Progress_Log_Edit_LogModel.instanceGet
 * @param {string} dt_date Progress log local date. If `null` use the current date.
 * @param {string} k_business Business key.
 * @param {?string} uid User key.
 * @returns {Wl_Member_Progress_Log_Edit_LogModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Returns progress log data.
 *
 * Loads field values recorded for the specified user on the given date (defaulting to the business's current
 * local date), and also returns the last date the user entered progress data and whether the viewer is staff.
 *
 * @function
 * @name Wl_Member_Progress_Log_Edit_LogModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Saves progress fields log.
 *
 * Validates and persists the field values for the specified user and date, enforcing access
 * rules (clients cannot edit verified entries), and logs the change when data is modified.
 *
 * @function
 * @name Wl_Member_Progress_Log_Edit_LogModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

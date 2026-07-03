/**
 * Gets data for step in wizard.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Classes_Period_Modify_ModifyModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business";

  /**
   * Step information, depending on the steps.
   *
   * @get result
   * @type {*[]}
   */
  this.a_get = undefined;

  /**
   * @typedef {{}} Wl_Classes_Period_Modify_ModifyModel_a_set_a_staff
   * @property {string} k_staff @deprecated Staff key.
   * @property {string} k_staff_pay Staff pay rate ID.
   * @property {string} uid_staff Staff user key.  Optional.
   */

  /**
   * @typedef {{}} Wl_Classes_Period_Modify_ModifyModel_a_set
   * @property {string[]} a_edit Edited fields flags. Used in {@link RsClassModifyStepSid}. Keys are field names (e.g. `a_staff`, `dt_time`); each value is `'1'` to indicate the field was changed.
   * @property {string[]} a_period Selected session keys (). Used in {@link RsClassModifyStepSid}.
   * @property {Wl_Classes_Period_Modify_ModifyModel_a_set_a_staff} a_staff Selected instructors. Used in {@link RsClassModifyStepSid}:
   * @property {boolean} is_cancel_resource Cancel resources for modified classes. Used in {@link RsClassModifyStepSid}.
   * @property {boolean} is_forward Modify all future sessions. Used in {@link RsClassModifyStepSid}.
   * @property {boolean} is_inform_mail Send email notification to clients. Used in {@link RsClassModifyStepSid}.
   * @property {boolean} is_inform_mail_staff Send email notification to staff. Used in {@link RsClassModifyStepSid}.
   * @property {boolean} is_inform_sms Send SMS notification to clients. Used in {@link RsClassModifyStepSid}.
   * @property {boolean} is_inform_sms_staff Send SMS notification to staff. Used in {@link RsClassModifyStepSid}.
   * @property {boolean} show_canceled_class Show canceled classes in the result list. Used in {@link RsClassModifyStepSid}.
   */

  /**
   * The list of data to save.
   *
   * Data depends on current {@link Wl_Classes_Period_Modify_ModifyModel}:
   *
   * @post post
   * @type {Wl_Classes_Period_Modify_ModifyModel_a_set}
   */
  this.a_set = undefined;

  /**
   * The end date, returned in MySQL format and the local time.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_end = "";

  /**
   * The start date, returned in MySQL format and the local time.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_start = "";

  /**
   * The class modify step type. One of the {@link RsClassModifyActionSid} constants.
   *
   * @get get
   * @post get
   * @see RsClassModifyActionSid
   * @type {number}
   */
  this.id_class_modify_action = 0;

  /**
   * The modify mode type. One of the {@link RsClassModifyModeSid} constants.
   *
   * @get get
   * @post get
   * @see RsClassModifyModeSid
   * @type {number}
   */
  this.id_class_modify_mode = 0;

  /**
   * The mode type. One of the {@link Wl_Mode_ModeSid} constants.
   *
   * @post get
   * @see Wl_Mode_ModeSid
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * The class modify action type. One of the {@link RsClassModifyModeSid} constants.
   *
   * @get get
   * @post get,result
   * @see RsClassModifyModeSid
   * @type {number}
   */
  this.id_step = 0;

  /**
   * The step direction.
   *
   * `true` - step forward.
   *
   * `false` - step back.
   *
   * After each step, this variable sets to the default position.
   * By default, the step direction is forward.
   *
   * @get get
   * @post get,result
   * @type {?boolean}
   */
  this.is_back = null;

  /**
   * The business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The class ID.
   *
   * @post result
   * @type {?string}
   */
  this.k_class = null;

  /**
   * The class period key.
   *
   * This will be empty if not set yet.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * The unique hash string.
   *
   * @get get
   * @post get,result
   * @type {string}
   */
  this.s_id = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Classes_Period_Modify_ModifyModel);

/**
 * @inheritDoc
 */
Wl_Classes_Period_Modify_ModifyModel.prototype.config=function()
{
  return {"a_field":{"a_get":{"get":{"result":true}},"a_set":{"post":{"post":true}},"dt_end":{"get":{"get":true},"post":{"get":true}},"dt_start":{"get":{"get":true},"post":{"get":true}},"id_class_modify_action":{"get":{"get":true},"post":{"get":true}},"id_class_modify_mode":{"get":{"get":true},"post":{"get":true}},"id_mode":{"post":{"get":true}},"id_step":{"get":{"get":true},"post":{"get":true,"result":true}},"is_back":{"get":{"get":true},"post":{"get":true,"result":true}},"k_business":{"get":{"get":true},"post":{"get":true}},"k_class":{"post":{"result":true}},"k_class_period":{"get":{"get":true},"post":{"get":true}},"s_id":{"get":{"get":true},"post":{"get":true,"result":true}}}};
};

/**
 * @function
 * @name Wl_Classes_Period_Modify_ModifyModel.instanceGet
 * @param {string} k_business The business key.
 * @returns {Wl_Classes_Period_Modify_ModifyModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Gets data for step in wizard.
 *
 * Used by the class modification wizard (edit, cancel, reschedule) to load the data for a specific
 * wizard step. Each step has a different data shape driven by `id_step`; the response feeds directly
 * into the step's form.
 *
 * @function
 * @name Wl_Classes_Period_Modify_ModifyModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Makes step in wizard.
 *
 * Used by the class modification wizard to submit a completed step and advance to the next. The wizard
 * tracks state server-side; this call validates the step input, persists it, and returns the next step
 * the UI should render.
 *
 * @function
 * @name Wl_Classes_Period_Modify_ModifyModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

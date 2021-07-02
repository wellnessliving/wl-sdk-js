/**
 * Modify master model.
 *
 * This model is generated automatically based on API.
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
   * Returns step information, depending on steps.
   *
   * @get result
   * @type {{}}
   */
  this.a_get = undefined;

  /**
   * List of data to save.
   *
   * @post post
   * @type {{}}
   */
  this.a_set = [];

  /**
   * End date in MySQL format in local time.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_end = "";

  /**
   * Start date in MySQL format in local time.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.dt_start = "";

  /**
   * Class modify step type, one of {@link \RsClassModifyActionSid}.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_class_modify_action = 0;

  /**
   * Modify mode type, one of {@link \RsClassModifyModeSid}.
   *
   * @get get
   * @post get
   * @type {number}
   */
  this.id_class_modify_mode = 0;

  /**
   * Class modify action type, one of {@link \RsClassModifyStepSid}.
   *
   * @get get
   * @post get,result
   * @type {number}
   */
  this.id_step = 0;

  /**
   * Step direction.
   *
   * <tt>true</tt> step forward.
   * <tt>false</tt> step back.
   *
   * After each step this variable sets to default position.
   * By default makes step forward.
   *
   * @get get
   * @post get,result
   * @type {boolean}
   */
  this.is_back = false;

  /**
   * Business key.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Class ID.
   *
   * @post result
   * @type {?string}
   */
  this.k_class = null;

  /**
   * Class period key.
   *
   * Empty value means not set.
   *
   * @get get
   * @post get
   * @type {string}
   */
  this.k_class_period = "";

  /**
   * Unique hash string.
   *
   * This hash string is a hash of the {@link RsClassModify} object.
   * It need to work with the same {@link RsClassModify} object on each step.
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
  return {"a_field": {"a_get": {"get": {"result": true}},"a_set": {"post": {"post": true}},"dt_end": {"get": {"get": true},"post": {"get": true}},"dt_start": {"get": {"get": true},"post": {"get": true}},"id_class_modify_action": {"get": {"get": true},"post": {"get": true}},"id_class_modify_mode": {"get": {"get": true},"post": {"get": true}},"id_step": {"get": {"get": true},"post": {"get": true,"result": true}},"is_back": {"get": {"get": true},"post": {"get": true,"result": true}},"k_business": {"get": {"get": true},"post": {"get": true}},"k_class": {"post": {"result": true}},"k_class_period": {"get": {"get": true},"post": {"get": true}},"s_id": {"get": {"get": true},"post": {"get": true,"result": true}}}};
};

/**
 * @function
 * @name Wl_Classes_Period_Modify_ModifyModel.instanceGet
 * @param {string} k_business Business key.
 * @returns {Wl_Classes_Period_Modify_ModifyModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */
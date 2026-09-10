/**
 * Saves new time interval.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Resource_Schedule_Add_AddModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * List of working days, constants from {@link ADateWeekSid}.
   *
   * @post post
   * @type {number[]}
   */
  this.a_day = undefined;

  /**
   * Resource period key.
   * Primary key from the `rs_resource_period` table.
   *
   * @post result
   * @type {string[]}
   */
  this.a_resource_period = undefined;

  /**
   * End date of working period.
   *
   * @post post
   * @type {string}
   */
  this.dt_end_date = "";

  /**
   * End time.
   *
   * @post post
   * @type {string}
   */
  this.dt_end_time = "";

  /**
   * Start date of working period.
   *
   * @post post
   * @type {string}
   */
  this.dt_start_date = "";

  /**
   * Start time.
   *
   * @post post
   * @type {string}
   */
  this.dt_start_time = "";

  /**
   * Count of the periods which specified in {@link Wl_Staff_Schedule_Add_AddModel.id_repeat}.
   *
   * If this field is absent default value  is used.
   *
   * @post post
   * @type {number}
   */
  this.i_repeat = 0;

  /**
   * Measuring unit of {@link Wl_Staff_Schedule_Add_AddModel.i_repeat}. One of {@link ADurationSid} constants.
   *
   * If this field is absent default value  is used.
   *
   * @post post
   * @see ADurationSid
   * @type {number}
   */
  this.id_repeat = 0;

  /**
   * Whether model works with available working time.
   *
   * `false` means available working time.
   * `true` means unavailable working time.
   *
   * @post post
   * @type {boolean}
   */
  this.is_break = false;

  /**
   * Whether period is eternal.
   *
   * `true` means on going.
   * `false` means end date will be used.
   *
   * @post post
   * @type {boolean}
   */
  this.is_eternal = false;

  /**
   * Business key.
   *
   * @post get
   * @type {string}
   */
  this.k_business = "";

  /**
   * Location key.
   *
   * @post post
   * @type {string}
   */
  this.k_location = "";

  /**
   * Resource key. Primary key in the `rs_resource` table.
   *
   * @post post
   * @type {string}
   */
  this.k_resource = "";

  /**
   * Note to working interval.
   *
   * @post post
   * @type {string}
   */
  this.text_note = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Resource_Schedule_Add_AddModel);

/**
 * @inheritDoc
 */
Wl_Resource_Schedule_Add_AddModel.prototype.config=function()
{
  return {"a_field":{"a_day":{"post":{"post":true}},"a_resource_period":{"post":{"result":true}},"dt_end_date":{"post":{"post":true}},"dt_end_time":{"post":{"post":true}},"dt_start_date":{"post":{"post":true}},"dt_start_time":{"post":{"post":true}},"i_repeat":{"post":{"post":true}},"id_repeat":{"post":{"post":true}},"is_break":{"post":{"post":true}},"is_eternal":{"post":{"post":true}},"k_business":{"post":{"get":true}},"k_location":{"post":{"post":true}},"k_resource":{"post":{"post":true}},"text_note":{"post":{"post":true}}}};
};

/**
 * Saves new time interval.
 *
 * Validates the business, location, and resource, checks that the resource is active,
 * belongs to the given location, and that the current login has edit access, then creates
 * the working or non-working schedule for each selected day and returns the created
 * resource period keys.
 *
 * @function
 * @name Wl_Resource_Schedule_Add_AddModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

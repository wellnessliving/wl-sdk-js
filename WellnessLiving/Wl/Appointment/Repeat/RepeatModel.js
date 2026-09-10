/**
 * Change recurring appointment booking settings.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Appointment_Repeat_RepeatModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @inheritDoc
   */
  this._s_key = "k_business,k_visit,uid";

  /**
   * Whether future appointments should be booked unpaid even if client have applicable purchase option.
   *
   * @post post
   * @type {boolean}
   */
  this.is_repeat_unpaid = false;

  /**
   * Business key.
   *
   * @post post
   * @type {string}
   */
  this.k_business = "";

  /**
   * Visit key.
   *
   * @post post
   * @type {string}
   */
  this.k_visit = "";

  /**
   * User key.
   *
   * @post post
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Appointment_Repeat_RepeatModel);

/**
 * @inheritDoc
 */
Wl_Appointment_Repeat_RepeatModel.prototype.config=function()
{
  return {"a_field":{"is_repeat_unpaid":{"post":{"post":true}},"k_business":{"post":{"post":true}},"k_visit":{"post":{"post":true}},"uid":{"post":{"post":true}}}};
};

/**
 * @function
 * @name Wl_Appointment_Repeat_RepeatModel.instanceGet
 * @param {string} k_business Business key.
 * @param {string} k_visit Visit key.
 * @param {string} uid User key.
 * @returns {Wl_Appointment_Repeat_RepeatModel}
 * @see WlSdk_ModelAbstract.instanceGet()
 */

/**
 * Change recurring appointment booking settings.
 *
 * Loads the repeat configuration attached to the appointment behind the given visit, updates
 * its `is_repeat_unpaid` flag, and saves the configuration back. Requires the current user to
 * either own the visit or have permission to schedule future appointments for the business.
 *
 * @function
 * @name Wl_Appointment_Repeat_RepeatModel.post
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.post()
 */

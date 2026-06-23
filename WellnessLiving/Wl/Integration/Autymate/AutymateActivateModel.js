/**
 * Returns or changes the Autymate enrollment status for the specified business.
 * Autymate specifically requested this method be a get.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Integration_Autymate_AutymateActivateModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * The mode of the request.
   *
   * One of {@link Wl_Integration_Autymate_AutymateAccessModeSid} constants.
   *
   * @get get
   * @see Wl_Integration_Autymate_AutymateAccessModeSid
   * @type {number}
   */
  this.id_mode = 0;

  /**
   * The new status of the enrollment. If `0`, the current status is returned.
   *
   * One of {@link Wl_Integration_Autymate_AutymateStatusSid} constants.
   *
   * @get get,result
   * @see Wl_Integration_Autymate_AutymateStatusSid
   * @type {number}
   */
  this.id_status = 0;

  /**
   * The key of the business.
   *
   * @get get
   * @type {string}
   */
  this.k_business = "";

  /**
   * The randomly generated 32 character string used to authenticate Autymate requests for the business.
   *
   * @get get
   * @type {string}
   */
  this.s_guid = "";

  /**
   * The user key.
   *
   * @get get
   * @type {string}
   */
  this.uid = "";

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Integration_Autymate_AutymateActivateModel);

/**
 * @inheritDoc
 */
Wl_Integration_Autymate_AutymateActivateModel.prototype.config=function()
{
  return {"a_field":{"id_mode":{"get":{"get":true}},"id_status":{"get":{"get":true,"result":true}},"k_business":{"get":{"get":true}},"s_guid":{"get":{"get":true}},"uid":{"get":{"get":true}}}};
};

/**
 * Returns or changes the Autymate enrollment status for the specified business.
Autymate specifically requested this method be a get.
 *
 * Authenticates the request using the business GUID, then either reads or updates the enrollment status
 * depending on the mode and the supplied `id_status` value. When activating enrollment, also provisions a
 * Professional subscription for the business if one is not already active.
 *
 * @function
 * @name Wl_Integration_Autymate_AutymateActivateModel.get
 * @returns {WlSdk_Deferred_Promise}
 * @see WlSdk_ModelAbstract.get()
 */

/**
 * Allows to Check Payer Authentication Enrollment request.
 *
 * This model is generated automatically based on API.
 *
 * @augments WlSdk_ModelAbstract
 * @constructor
 */
function Wl_Pay_Processor_CyberSource_CsPaEnrollmentModel()
{
  WlSdk_ModelAbstract.apply(this);

  /**
   * @typedef {{}} Wl_Pay_Processor_CyberSource_CsPaEnrollmentModel_a_device_info
   * @property {number} i_browser_screen_height User browser screen height.
   * @property {number} i_browser_screen_width User browser screen width.
   */

  /**
   * User device info: <dl>
   *   <dt>int <var>i_browser_screen_height</var></dt>
   *   <dd>User browser screen height.</dd>
   *   <dt>int <var>i_browser_screen_width</var></dt>
   *   <dd>User browser screen width.</dd>
   * </dl>
   *
   * @post post
   * @type {Wl_Pay_Processor_CyberSource_CsPaEnrollmentModel_a_device_info}
   */
  this.a_device_info = [];

  /**
   * Key of payment transaction that was previously created with {@link Wl_Pay_Processor_CyberSource_CsPaSetupModel}.
   *
   * @post post
   * @type {string}
   */
  this.k_pay_transaction = undefined;

  /**
   * JSON Web Token to include into the request to the second frame.
   *
   * @post result
   * @type {?string}
   */
  this.s_jwt = null;

  /**
   * URL for frontend interaction.
   * This normally means that payer needs to make further steps for the authentication.
   *
   * `null` if no interaction required, and we should proceed with the withdrawal.
   * This normally means that payer is authenticated.
   *
   * If payer is not authenticated, or there is an error occurred during check of the enrollment,
   * this API returns an exception.
   *
   * @post result
   * @type {?string}
   */
  this.url_interact = null;

  this.changeInit();
}

WlSdk_ModelAbstract.extend(Wl_Pay_Processor_CyberSource_CsPaEnrollmentModel);

/**
 * @inheritDoc
 */
Wl_Pay_Processor_CyberSource_CsPaEnrollmentModel.prototype.config=function()
{
  return {"a_field": {"a_device_info": {"post": {"post": true}},"k_pay_transaction": {"post": {"post": true}},"s_jwt": {"post": {"result": true}},"url_interact": {"post": {"result": true}}}};
};